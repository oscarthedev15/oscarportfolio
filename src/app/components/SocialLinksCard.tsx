import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaTelegram, FaTwitter } from "react-icons/fa";

const socialLinks = [
  {
    name: "Discord",
    url: "discordapp.com/users/plnkerxd",
    icon: <FaDiscord />,
  },
  { name: "Telegram", url: "https://t.me/camp0_15", icon: <FaTelegram /> },
  { name: "Twitter", url: "https://twitter.com", icon: <FaTwitter /> },
];

const SocialLinksCard = () => {
  return (
    <motion.div
      className="flex flex-col items-center p-4 border-2 cursor-pointer font-mplus w-64" // Responsive width and height
      style={{
        backgroundColor: "#f0f0f0",
        borderColor: "#ccc",
        color: "#333",
      }}
      initial="hidden"
      animate="visible"
      whileHover={{ scale: 1.05 }} // Add pulsing effect on hover
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-4 text-center w-full">Contact</h2>
      <div className="flex items-center">
        <img
          src="/profile-image/profile.svg" // Replace with your image path
          alt="Social Links"
          className="w-16 h-16 md:w-24 md:h-24 object-contain mr-4" // Ensure the image fits within the container
        />
        <div className="flex flex-col space-y-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500"
            >
              {link.icon}
              <span className="ml-2">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialLinksCard;
