import React from "react";
import { FaDiscord, FaTelegram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const socialLinks = [
  { name: "Discord", url: "https://discordapp.com/users/plnkerxd", icon: FaDiscord },
  { name: "Telegram", url: "https://t.me/camp0_15", icon: FaTelegram },
  { name: "X / Twitter", url: "https://x.com/oscarthedev15", icon: FaXTwitter },
];

const SocialLinksCard = () => (
  <div className="glass rounded-2xl px-5 py-4 flex items-center gap-4">
    <img
      src="/profile-image/profile.png"
      alt="oscar the dev"
      className="w-14 h-14 rounded-full bg-white/80 object-contain"
    />
    <div>
      <h2 className="font-bold text-neutral-900">Get in touch</h2>
      <div className="flex gap-2 mt-1">
        {socialLinks.map(({ name, url, icon: Icon }) => (
          <a
            key={name}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={name}
            className="rounded-full p-2 text-xl text-neutral-800 hover:bg-white/70 hover:text-blue-600 transition-colors"
          >
            <Icon />
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default SocialLinksCard;
