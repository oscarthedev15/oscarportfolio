import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ItemDetails from "./ItemDetails";
import { Item } from "../types/Item";
import SocialLinksCard from "./SocialLinksCard";
const items: Item[] = [
  {
    src: "/portfolio-images/nameless.png",
    title: "Nameless Youth Club",
    tagline: "Collectibles, games and rewards that keep fans engaged after the event ends.",
    liveLinks: [{ name: "Website", url: "https://nameless.nyc/" }],
    githubLink: "https://github.com/NAMELESS-NYC",
    description: [
      "An event platform that links in-person and online experiences through digital collectibles, gamification and loyalty rewards.",
      "Built for music festivals, sporting events and brand activations, so audiences stay engaged long after the event ends.",
      "2nd place at the 2025 Aptos Code Collision Hackathon (AVAX Codebase).",
    ],
  },
  {
    src: "/portfolio-images/botstars.png",
    title: "MCP Cybersecurity Suite",
    tagline: "Open-source MCP servers that give AI assistants security tooling.",
    liveLinks: [],
    githubLink: "https://github.com/oscarthedev15/mcp-cybersecurity-suite",
    description: [
      "Open-source Model Context Protocol (MCP) servers built for security work.",
      "Covers IP threat intel, WHOIS and DNS, NVD CVE search, Shodan recon, MITRE ATT&CK and CISA KEV exploit data.",
      "Works with Claude, Cursor and other streamable-HTTP clients. Credentials are passed per request, so it's safe to share across teams behind nginx.",
      "Hardened by default: non-root, read-only containers, dropped Linux capabilities and locked-down Kubernetes network policies.",
      "Runs locally with Docker Compose or in production on Kubernetes.",
    ],
  },
  {
    src: "/portfolio-images/telegram-logo.png",
    title: "Schwab Portfolio Telegram Bot",
    tagline: "Check your Schwab portfolio and get AI market research from Telegram.",
    liveLinks: [],
    githubLink: "https://github.com/oscarthedev15/schwab-tg-bot",
    description: [
      "A Telegram bot for tracking a Schwab portfolio, with AI-powered market research.",
      "Commands: /portfolio, /marketupdate, /top3holdingupdate, /top3stocksupdate and /research [ticker].",
      "Paginated holdings, a privacy toggle to hide balances, and research with cited sources.",
      "Built on the Schwab Trader API (OAuth) and OpenAI web search, with clean separation between bot, API and business logic.",
    ],
  },
  {
    src: "/portfolio-images/stonk.png",
    title: "Stonk Market",
    tagline: "A token launchpad where trading follows NYSE market hours.",
    liveLinks: [
      { name: "stonk.market", url: "https://www.stonk.market/" },
    ],
    githubLink: "https://github.com/stonk-exchange",
    description: [
      "A token launchpad where tokens are timelocked to NYSE trading hours: they trade when the stock market is open and pause when it closes.",
    ],
  },
  {
    // shortcut: hotlinked X banner, breaks if the banner changes; copy into public/ to pin it
    src: "https://pbs.twimg.com/profile_banners/1976291072423702528/1794589029/1500x500",
    title: "Hood Intelligence",
    tagline: "Wallet tracking for Robinhood Chain, so you don't have to.",
    liveLinks: [
      { name: "@robindothood on X", url: "https://x.com/robindothood" },
      { name: "Telegram", url: "https://t.me/hoodintelpublic" },
    ],
    githubLink: null,
    description: [
      "Every dump on Robinhood Chain leaves wallets behind. Hood Intelligence follows them so you don't have to.",
      "Alerts are posted on X and in a public Telegram channel.",
    ],
  },
  {
    src: "https://i.imgur.com/uMoBVbS.png",
    title: "TeaLink",
    tagline: "Peer-to-peer betting on news headlines, settled by Chainlink.",
    liveLinks: [{ name: "Live demo", url: "https://tealink.vercel.app/" }],
    githubLink: "https://github.com/oscarthedev15/CLhackathon2022",
    description: [
      "An early prediction market built for the 2022 Chainlink hackathon.",
      "Anyone can create a bet on a future news event. Chainlink Functions checks NewsAPI.org headlines for keywords to settle the outcome.",
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
              <div className="aspect-[4/3] w-full rounded-xl bg-neutral-100 flex items-center justify-center overflow-hidden">
                <img
                  src={item.src}
                  alt=""
                  className="max-h-[80%] max-w-[80%] object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <h3 className="font-bold text-lg leading-tight text-neutral-900">{item.title}</h3>
              <p className="text-sm leading-relaxed text-neutral-700">{item.tagline}</p>
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
