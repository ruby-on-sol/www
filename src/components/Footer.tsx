import React from "react";
import NextImage from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="w-full">
      <div className="flex flex-col container justify-between md:flex-row gap-4 items-center md:h-24 md:py-0 py-10 text-sub px-2 md:px-2 lg:px-4">
        <span>NO RIGHTS RESERVED</span>
        <nav className="flex items-center gap-3 justify-center md:justify-start sm:gap-6">
          <SocialLink
            href="https://twitter.com/Ruby_On_Sol"
            title="@Ruby_On_Sol"
            imgSrc="/images/twitter.png"
          />
          <SocialLink
            href="https://t.me/RubyOnSolPortal"
            title="Telegram"
            imgSrc="/images/telegram.png"
          />
          <SocialLink
            href="https://www.dextools.io/app/en/solana/pair-explorer/9Mrese4fVPUFgVnG5EL55vDgWtY69jUVeQTz1Lw9kv5w"
            title="DexTools"
            imgSrc="/images/dextools.png"
          />
          <SocialLink
            href="https://dexscreener.com/solana/9mrese4fvpufgvng5el55vdgwty69juveqtz1lw9kv5w"
            title="DexScreener"
            imgSrc="/images/dexscreener.png"
          />
          <SocialLink
            href="https://solscan.io/token/CJwWeD84RLW7tVRa4XvSJhuccWmfyM82mgaZL7KuZ8ep"
            title="Solscan"
            imgSrc="/images/solscan.png"
          />
          <SocialLink
            href="https://photon-sol.tinyastro.io/en/lp/9Mrese4fVPUFgVnG5EL55vDgWtY69jUVeQTz1Lw9kv5w"
            title="Photon"
            imgSrc="/images/photon.png"
          />
        </nav>
      </div>
    </footer>
  );
};

const SocialLink: React.FC<{ href: string; title: string; imgSrc: string }> = ({
  href,
  title,
  imgSrc,
}) => {
  return (
    <a href={href} target="_blank" rel="noreferrer" title={title}>
      <NextImage
        alt={title}
        decoding="async"
        height={30}
        width={30}
        loading="lazy"
        src={imgSrc}
      />
    </a>
  );
};

export default Footer;
