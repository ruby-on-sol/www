import React from "react";
import NextImage from "next/image";

const TokenBurnSection: React.FC = () => {
  return (
    <div className="uppercase bg-sub text-main px-2 md:px-2 lg:px-4">
      <div className="flex flex-col container justify-between md:flex-row overflow-x-hidden">
        <div className="flex flex-col md:w-2/3 gap-16 lg:py-20 py-16">
          <h2 className="text-white">Token Burn</h2>
          <div className="flex flex-col gap-8">
            <p className="md:w-2/3">We burn $RUBY on the hour. Every Hour.</p>
            <a
              href="https://www.rubyonsol.com/token-burn"
              title="Buy now"
              className="button lg:mr-auto text-sub"
            >
              Find out more
            </a>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/3 py-16">
          <NextImage
            alt="$RUBY"
            decoding="async"
            height={602}
            width={531}
            loading="lazy"
            src="/images/chart.png"
            className="ruby"
          />
        </div>
      </div>
    </div>
  );
};

export default TokenBurnSection;
