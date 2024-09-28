import React from "react";
import { motion } from "framer-motion";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  {
    name: "Discord",
    url: "https://discord.com",
    icon: <FaDiscord className="text-2xl" />,
  }, // Increase icon size
  {
    name: "Telegram",
    url: "https://t.me/camp0_15",
    icon: <FaTelegram className="text-2xl" />,
  }, // Increase icon size
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: <FaXTwitter className="text-2xl" />,
  }, // Increase icon size
];

const SocialLinksCard = () => {
  return (
    <motion.div
      className="flex flex-col items-center  border-2 cursor-pointer font-mplus w-64" // Responsive width and height
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
      <h2 className="text-xl font-bold mb-4 text-center w-full">Contact</h2>{" "}
      {/* Add Contact title */}
      <div className="flex items-center">
        <img
          src="/profile-image/profile.png" // Replace with your image path
          alt="Social Links"
          className="w-16 h-16 md:w-24 md:h-24 object-contain mr-4" // Ensure the image fits within the container
        />
        <div className="flex flex-row space-x-4">
          {" "}
          {/* Increase spacing between icons */}
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-500"
            >
              {link.icon}
              {/* <span className="ml-2 hidden md:inline">{link.name}</span>{" "} */}
              {/* Hide text on smaller screens */}
            </a>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default SocialLinksCard;
