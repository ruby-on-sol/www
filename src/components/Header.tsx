import React from "react";

const Header = async () => {
  let price = 0;
  let marketCap = 0;
  try {
    const response = await fetch(
      "https://api.dexscreener.com/latest/dex/pairs/solana/9Mrese4fVPUFgVnG5EL55vDgWtY69jUVeQTz1Lw9kv5w",
      {
        next: {
          revalidate: 60,
        },
      }
    );
    const data = await response.json();
    price = data.pair.priceUsd;
    marketCap = data.pair.fdv;
  } catch (error) {
    console.error("Error fetching price data:", error);
  }
  return (
    <header>
      {/* Top Section */}
      <div className="align-middle bg-white hidden md:flex min-h-[120px] py-2">
        <div className="flex lg:text-2xl container justify-between text-sub uppercase">
          <div className="flex items-center flex-start font-black gap-16 leading-6 lg:gap-24 max-w-[800px] w-full">
            <div>
              <span className="font-normal block text-base text-main">
                SUPPLY
              </span>
              1 BILLION
            </div>
            <div>
              <span className="font-normal block text-base text-main">
                MARKET CAP
              </span>
              <div data-market>${marketCap.toLocaleString()}</div>
            </div>
            <div>
              <span className="font-normal block text-base text-main">
                PRICE USD
              </span>
              <div data-price>${price}</div>
            </div>
          </div>
          <a
            href="https://jup.ag/swap/SOL-CJwWeD84RLW7tVRa4XvSJhuccWmfyM82mgaZL7KuZ8ep"
            target="_blank"
            rel="noreferrer"
            title="Buy now"
            className="button"
          >
            Buy now
          </a>
        </div>
      </div>

      <div className="bg-sub py-3">
        <div className="scrolling-container">
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
          <span className="scrolling-text mr-1">
            <span className="text-main">$RUBY</span> ON SOL
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
