import React from "react";
import NextImage from "next/image";

const TokenomicsSection: React.FC = () => {
  return (
    <div className="flex flex-col container justify-between gap-16 lg:py-20 py-16 px-2 md:px-2 lg:px-4">
      <h2>TOKENOMICS</h2>
      <ul className="uppercase text-sub content-start font-black gap-4 grid grid-cols-tokens md:grid-cols-tokenslg sm:grid-cols-tokensmd text-left">
        <TokenomicItem
          imgAlt="TOKEN SUPPLY 1 BILLION"
          imgSrc="/images/token-supply.svg"
          title="Token Supply"
          value="1 Billion"
        />
        <TokenomicItem
          imgAlt="Tax Zero %"
          imgSrc="/images/tax.svg"
          title="Tax"
          value="Zero %"
        />
        <TokenomicItem
          imgAlt="Contract Ownership Renounced"
          imgSrc="images/contract.svg"
          title="Contract"
          value="Renounced"
        />
        <TokenomicItem
          imgAlt="LP Burned 100%"
          imgSrc="/images/lp-burned.svg"
          title="LP Burned"
          value="100%"
        />
        <TokenomicItem
          imgAlt="Dev Supply Zero %"
          imgSrc="/images/dev-supply.svg"
          title="Dev Supply"
          value="Zero %"
        />
      </ul>
    </div>
  );
};

const TokenomicItem: React.FC<{
  imgAlt: string;
  imgSrc: string;
  title: string;
  value: string;
}> = ({ imgAlt, imgSrc, title, value }) => {
  return (
    <li className="flex items-center gap-4">
      <NextImage
        alt={imgAlt}
        decoding="async"
        height={69}
        width={69}
        loading="lazy"
        src={imgSrc}
      />
      <div className="flex flex-col">
        <span className="text-white font-normal">{title}</span>
        {value}
      </div>
    </li>
  );
};

export default TokenomicsSection;
