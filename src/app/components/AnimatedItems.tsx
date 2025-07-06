import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ItemDetails from "./ItemDetails";
import { Item } from "../types/Item";
import SocialLinksCard from "./SocialLinksCard";
const items: Item[] = [
  {
    src: "/portfolio-images/nameless.png",
    title: "Nameless Youth Club",
    liveLinks: [
      { name: "Nameless Landing Page", url: "https://nameless.nyc/" },
    ],
    githubLink: "https://github.com/NAMELESS-NYC",
    description: [
      "Nameless is an event platform that enhances physical and digital experiences through digital collectibles, gamification, and loyalty programs.",
      "Focused on music festivals, sporting events, and brand activations, it helps keep audiences engaged long after events end.",
      "AVAX Codebase second place winner of the 2025 Aptos Code Collision Hackathon.",
    ],
  },
  // {
  //   src: "/portfolio-images/finder_logo.png",
  //   title: "Finder Goblin Charts",
  //   liveLinks: [
  //     { name: "Finder Goblin Charts", url: "https://finder-flax.vercel.app/" },
  //   ],
  //   githubLink: null,
  //   description:
  //     "Goblin Charts is a website that provides a TikTok-like experience for viewing spl tokens. It also allows users to search and bookmark tokens.  It also provides users with a unique feed of promising tokens and allows for setting custom parameters to personalize the experience.",
  // },
  {
    src: "/portfolio-images/botstars.png",
    title: "Botstars.fun",
    liveLinks: [{ name: "Botstars.fun", url: "https://botstars.fun/" }],
    githubLink: null,
    description: [
      "Botstars.fun is a website that allows users to create characters and allow them to post and interact with other characters like a social media platform.",
      "It uses the dolfin ai model for post generation and character reactions.",
      "It's native token will be launched soon on Solana.",
    ],
  },

  // {
  //   src: "/portfolio-images/aptos-logo.png",
  //   title: "Aptos Code Collision Hackathon",
  //   liveLinks: [],
  //   githubLink: "https://github.com/NAMELESS-NYC/GeoMint",
  //   description:
  //     "This project is a proof of concept that allows users to create 'geo fences' or areas where users can claim tokens on the Aptos blockchain. It is designed to be used at events, providing a unique way to engage participants.",
  // },
  {
    src: "/portfolio-images/telegram-logo.png",
    title: "Telegram Bots",
    liveLinks: [
      { name: "Finder Buy Bot", url: "https://t.me/finderbuybot" },
      { name: "Scanner Bot", url: "https://t.me/finder_scanner_bot" },
      {
        name: ".ai Domain Checker Bot",
        url: "https://t.me/domain_finder_ai_bot",
      },
    ],
    githubLink: null,
    description: [
      "Finder buy bot is a buybot that can be used in any chat to provide real-time buy notifications for spl tokens. It is pumpfun compatible and allows for user customization.",
      "Scanner bot offers basic details on any SPL token given the token address or symbol.",
      ".ai Domain Checker bot is a bot that checks if a domain is available for purchase on the .ai domain given a theme. It uses OpenAI to generate a list of domains based on the theme and then checks if they are available using WHOIS API.",
    ],
  },
  {
    src: "/portfolio-images/stonk.png",
    title: "Stonk Terminal",
    liveLinks: [
      {
        name: "Stonk Terminal",
        url: "https://stonk-terminal-alpha-view.vercel.app/",
      },
    ],
    githubLink: "https://github.com/stonk-exchange",
    description: [
      "Token launchpad with timelocked tokens to NYSE hours.  At the moment on Ethereum Sepolia and looking to launch on Base mainnet Summer 2025.",
    ],
  },
  {
    src: "/portfolio-images/drip_check.png",
    title: "Drip Check",
    liveLinks: [
      {
        name: "Drip Check",
        url: "https://preview--style-circle-vibes.lovable.app/",
      },
    ],
    githubLink: null,
    description: [
      "Lovable built app for sharing fashion wishlists in groups or publicly.",
    ],
  },
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
  const containerRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: Item) => {
    setSelectedItem(item);
  };

  const handleClose = () => {
    setSelectedItem(null);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center justify-center space-y-4 md:space-y-0 md:space-x-4"
    >
      <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
        {items.map((item, index) => {
          const bgColor = getRandomColor();
          const textColor = getTextColor(bgColor);
          return (
            <motion.div
              key={index}
              className="flex flex-col md:flex-col items-center p-4 border-2 cursor-pointer font-mplus w-64 h-32 md:w-64 md:h-64"
              style={{
                backgroundColor: bgColor,
                borderColor: getRandomColor(),
                color: textColor,
              }}
              initial="hidden"
              animate="visible"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              variants={itemVariants}
              onClick={() => handleItemClick(item)}
            >
              <div className="flex flex-row md:flex-col items-center justify-center h-full w-full">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-24 h-24 md:w-full md:h-48 object-contain"
                />
                <p className="mt-2 md:mt-0 md:ml-0 ml-2">{item.title}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
      <div className="w-full flex justify-center mt-8 pt-8">
        <SocialLinksCard />
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
