import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ItemDetails from "./ItemDetails";
import { Item } from "../types/Item";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";
import SocialLinksCard from "./SocialLinksCard";
const items: Item[] = [
  {
    src: "/portfolio-images/nameless.png",
    title: "Nameless Youth Club",
    liveLinks: [
      { name: "Nameless Homepage", url: "https://nameless.nyc/" },
      {
        name: "Nameless About",
        url: "https://be.nameless.nyc/",
      },
    ],
    githubLink: null,
    description:
      "Nameless is an event platform that enhances physical and digital experiences through digital collectibles, gamification, and loyalty programs. Focused on music festivals, sporting events, and brand activations, it helps keep audiences engaged long after events end. Built on the Aptos blockchain, Nameless bridges the gap between real-world events and Web3.",
  },
  {
    src: "/portfolio-images/finder_logo.png",
    title: "Finder Goblin Charts",
    liveLinks: [
      { name: "Finder Goblin Charts", url: "https://example.com/finder" },
    ],
    githubLink: null,
    description:
      "Goblin Charts is a website that provides a TikTok-like experience for viewing SPL tokens. It also allows users to search and bookmark tokens.",
  },
  {
    src: "/portfolio-images/aptos-logo.png",
    title: "Aptos Code Collision Hackathon",
    liveLinks: [{ name: "Live Link", url: "" }],
    githubLink: "https://github.com/austinhatch/on-chain-geo",
    description:
      "This project is a proof of concept that allows users to create 'geo fences' or areas where users can claim tokens on the Aptos blockchain. It is designed to be used at events, providing a unique way to engage participants.",
  },
  {
    src: "/portfolio-images/telegram-logo.png",
    title: "Telegram Bots",
    liveLinks: [
      { name: "Finder Buy Bot", url: "https://t.me/finderbuybot" },
      { name: "Scanner Bot", url: "https://t.me/scanner_oscar_bot" },
    ],
    githubLink: null,
    description:
      "Finder buy bot is a buybot that can be used in any chat to provide real-time buy notifications. It is pumpfun compatible and allows for user customization. Scanner bot is a Telegram bot that will offer basic details on any SPL token given the token address or symbol.",
  },
];

const socialLinks = [
  { name: "Discord", url: "https://discord.com", icon: <FaDiscord /> },
  { name: "Telegram", url: "https://telegram.org", icon: <FaTelegram /> },
  { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
];

const itemVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0 },
};

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

const AnimatedItems = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {items.map((item, index) => {
          const bgColor = getRandomColor();
          const textColor = getTextColor(bgColor);
          return (
            <motion.div
              key={index}
              className="flex flex-col md:flex-col items-center p-4 border-2 cursor-pointer font-mplus w-64 h-32 md:w-64 md:h-64" // Responsive width and height
              style={{
                backgroundColor: bgColor,
                borderColor: getRandomColor(),
                color: textColor,
              }}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }} // Add pulsing effect on hover
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={itemVariants}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex flex-row md:flex-col items-center justify-center h-full w-full">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-24 h-24 md:w-full md:h-48 object-contain" // Ensure the image fits within the container
                />
                <p className="mt-2 md:mt-0 md:ml-0 ml-2">{item.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="w-full flex justify-center mt-8 pt-8">
        <SocialLinksCard /> {/* Add the SocialLinksCard component here */}
      </div>
      <AnimatePresence>
        {selectedItem && (
          <ItemDetails item={selectedItem} onClose={handleClose} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedItems;
