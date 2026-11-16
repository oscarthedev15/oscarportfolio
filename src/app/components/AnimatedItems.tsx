import React, { useState } from "react";
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
    title: "MCP Cybersecurity Suite",
    liveLinks: [
      {
        name: "GitHub Repository",
        url: "https://github.com/oscarthedev15/mcp-cybersecurity-suite",
      },
    ],
    githubLink: "https://github.com/oscarthedev15/mcp-cybersecurity-suite",
    description: [
      "Open-source suite of Model Context Protocol (MCP) servers purpose-built for cybersecurity operations.",
      "Includes domain-specific servers for IP threat intelligence, WHOIS and DNS, NVD CVE search, Shodan reconnaissance, MITRE ATT&CK, and KEV exploit intelligence.",
      "Designed for streamable-http clients like Claude and Cursor, with stateless per-request credentials and multi-tenant-safe routing behind nginx.",
      "Security-focused deployment: non-root containers, read-only root filesystems, dropped Linux capabilities, and Kubernetes network policy restrictions.",
      "Supports local development and production deployments via Docker Compose and Kubernetes with hardened defaults.",
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
    title: "Schwab Portfolio Telegram Bot",
    liveLinks: [
      {
        name: "GitHub Repository",
        url: "https://github.com/oscarthedev15/schwab-tg-bot",
      },
    ],
    githubLink: "https://github.com/oscarthedev15/schwab-tg-bot",
    description: [
      "Clean, modular Telegram bot for managing and analyzing Schwab portfolios with AI-powered market insights.",
      "Architecture separates Telegram routing, API clients, and service-layer business logic for maintainability and testability.",
      "Core commands include /portfolio, /marketupdate, /top3holdingupdate, /top3stocksupdate, and /research [ticker].",
      "Features include holdings pagination, balance privacy toggles, source-cited analysis, and message splitting to handle long Telegram responses.",
      "Integrates Schwab Trader APIs and OpenAI web search with OAuth token workflows and environment-based configuration.",
    ],
  },
  {
    src: "/portfolio-images/stonk.png",
    title: "Stonk Market",
    liveLinks: [
      { name: "Stonk Market", url: "https://www.stonk.market/" },
      { name: "Hood Intelligence on X", url: "https://x.com/robindothood" },
    ],
    githubLink: "https://github.com/stonk-exchange",
    description: [
      "Token launchpad with timelocked tokens to NYSE hours.  At the moment on Ethereum Sepolia and looking to launch on Base mainnet Autumn 2025.",
    ],
  },
  {
    src: "https://i.imgur.com/uMoBVbS.png",
    title: "TeaLink",
    liveLinks: [
      {
        name: "TeaLink",
        url: "https://tealink.vercel.app/",
      },
    ],
    githubLink: "https://github.com/oscarthedev15/CLhackathon2022",
    description: [
      "Chainlink hackathon submission - an early prediction market project using Chainlink oracles and Chainlink functions.",
      "First open-ended peer-to-peer news betting protocol on Ethereum. Create custom bets on events using NewsAPI.org to verify outcomes by searching for keywords in headlines.",
    ],
  },
];

const AnimatedItems = () => {
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-10">
      <ul className="grid w-full gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <motion.li
            key={item.title}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06, ease: "easeOut" }}
          >
            <button
              type="button"
              onClick={() => setSelectedItem(item)}
              className="glass group w-full h-full text-left rounded-2xl p-4 flex flex-col gap-3 transition-transform duration-200 hover:-translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <div className="aspect-[4/3] w-full rounded-xl bg-white/70 flex items-center justify-center overflow-hidden">
                <img
                  src={item.src}
                  alt=""
                  className="max-h-[80%] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-lg leading-tight text-neutral-900">{item.title}</h3>
              <p className="text-sm text-neutral-700 line-clamp-2">{item.description[0]}</p>
            </button>
          </motion.li>
        ))}
      </ul>
      <SocialLinksCard />
      <AnimatePresence>
        {selectedItem && (
          <ItemDetails item={selectedItem} onClose={() => setSelectedItem(null)} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedItems;
