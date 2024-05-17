import React from "react";
import NextImage from "next/image";

const AboutSection: React.FC = () => {
  return (
    <div className="uppercase bg-sub text-main">
      <div className="flex flex-col container justify-between md:flex-row overflow-x-hidden">
        <div className="flex flex-col justify-between gap-16 lg:py-20 py-16 md:w-2/3 px-2 md:px-2 lg:px-4">
          <h2 className="text-white">WHAT IS RUBY???</h2>
          <p className="md:w-2/3">
            $RUBY WAS LAUNCHED ON PUMP FUN AND IS NOW TAKEN OVER BY THE
            COMMUNITY. RUBY IS A GOOD DOG HERE FOR FUN ONLY. DO GOOD, LIKE A
            GOOD DOG WOULD.
          </p>
          <div>
            <div className="live">
              <span className="text-white">LIVE</span> ON SOLANA
            </div>
            <a
              href="https://jup.ag/swap/SOL-CJwWeD84RLW7tVRa4XvSJhuccWmfyM82mgaZL7KuZ8ep"
              target="_blank"
              className="text-white inline-block lg:text-xl md:text-base sm:text-sm text-xs truncate underline underline-offset-8"
            >
              CJwWeD84RLW7tVRa4XvSJhuccWmfyM82mgaZL7KuZ8ep
            </a>
          </div>
        </div>
        <div className="flex justify-center w-full md:w-1/3 md:pb-0 pb-16">
          <NextImage
            alt="$RUBY"
            decoding="async"
            height={494}
            width={457}
            loading="lazy"
            src="/images/ruby.svg"
            className="ruby"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
