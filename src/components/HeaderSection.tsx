import React from "react";
import NextImage from "next/image";

const HeaderSection: React.FC = () => {
  return (
    <div className="flex flex-col md:items-start items-center md:mr-8 md:text-left md:w-2/4 text-center uppercase">
      <NextImage
        alt="$RUBY"
        decoding="async"
        height={84}
        width={329}
        loading="lazy"
        src="/images/logo.svg"
        className="mb-6"
      />
      <h1>CAN&apos;T KEEP A GOOD DOG DOWN</h1>
      <div className="container flex gap-4 md:h-24 my-8 py-0">
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
    </div>
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
        height={60}
        width={60}
        loading="lazy"
        src={imgSrc}
      />
    </a>
  );
};

export default HeaderSection;
