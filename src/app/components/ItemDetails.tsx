import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa"; // Import icons
import { Item } from "../types/Item"; // Import the Item type

interface ItemDetailsProps {
  item: Item;
  onClose: () => void;
}

const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getTextColor = (bgColor: string) => {
  const color = bgColor.substring(1); // Remove the '#'
  const rgb = parseInt(color, 16); // Convert to integer
  const r = (rgb >> 16) & 0xff; // Extract red
  const g = (rgb >> 8) & 0xff; // Extract green
  const b = (rgb >> 0) & 0xff; // Extract blue

  const brightness = 0.299 * r + 0.587 * g + 0.114 * b;
  return brightness > 186 ? "black" : "white";
};

const ItemDetails: React.FC<ItemDetailsProps> = ({ item, onClose }) => {
  const bgColor = getRandomColor();
  const textColor = getTextColor(bgColor);

  return (
    <motion.div
      className="fixed inset-0 p-8 z-50 flex items-center justify-center"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div
        className="w-11/12 md:w-3/5 p-8 rounded-lg shadow-lg flex flex-col items-center overflow-y-auto max-h-full"
        style={{ backgroundColor: bgColor, color: textColor }}
      >
        <img
          src={item.src}
          alt={item.description}
          className="w-full h-48 object-contain mb-4"
        />
        <div className="w-full flex flex-col space-y-2 mb-4">
          {item.liveLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 flex items-center p-2 bg-gray-200 rounded"
            >
              <FaLink className="mr-2" /> {link.name}
            </a>
          ))}
          {item.githubLink && (
            <a
              href={item.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 flex items-center p-2 bg-gray-200 rounded"
            >
              <FaGithub className="mr-2" /> GitHub Link
            </a>
          )}
        </div>
        <p className="mb-4">{item.description}</p>
        <button
          onClick={onClose}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Back
        </button>
      </div>
    </motion.div>
  );
};

export default ItemDetails;
