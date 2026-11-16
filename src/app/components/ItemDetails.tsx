import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink, FaTimes } from "react-icons/fa";
import { Item } from "../types/Item";

interface ItemDetailsProps {
  item: Item;
  onClose: () => void;
}

const linkClass =
  "inline-flex items-center gap-2 rounded-full bg-neutral-900 text-white px-4 py-2 text-sm hover:bg-neutral-700 transition-colors";

const ItemDetails: React.FC<ItemDetailsProps> = ({ item, onClose }) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Skip the GitHub button when it duplicates a live link.
  const showGithub = item.githubLink && !item.liveLinks.some((l) => l.url === item.githubLink);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={item.title}
        className="glass relative w-full max-w-2xl max-h-[90dvh] overflow-y-auto rounded-3xl p-6 md:p-8"
        initial={{ opacity: 0, scale: 0.95, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 12 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 rounded-full bg-white/80 p-2 text-neutral-700 hover:text-neutral-950"
          aria-label="Close"
        >
          <FaTimes />
        </button>
        <div className="flex items-center gap-4 mb-6 pr-10">
          <img
            src={item.src}
            alt=""
            className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/80 object-contain p-2 shrink-0"
          />
          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900">{item.title}</h2>
        </div>
        <ul className="space-y-3 mb-6 text-neutral-800 leading-relaxed">
          {item.description.map((desc, index) => (
            <li key={index} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-neutral-500 shrink-0" />
              {desc}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-2">
          {item.liveLinks.map((link) => (
            <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className={linkClass}>
              {link.url.includes("github.com") ? <FaGithub /> : <FaLink />} {link.name}
            </a>
          ))}
          {showGithub && (
            <a href={item.githubLink!} target="_blank" rel="noopener noreferrer" className={linkClass}>
              <FaGithub /> GitHub
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ItemDetails;
