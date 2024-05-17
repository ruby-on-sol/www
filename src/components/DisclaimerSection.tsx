import React from "react";

const DisclaimerSection: React.FC = () => {
  return (
    <div className="container uppercase text-sub lg:py-20 py-16 px-2 md:px-2 lg:px-4">
      <div className="flex justify-center items mb-8">
        <a
          href="https://jup.ag/swap/SOL-CJwWeD84RLW7tVRa4XvSJhuccWmfyM82mgaZL7KuZ8ep"
          target="_blank"
          rel="noreferrer"
          title="Buy now"
          className="button button--alt"
        >
          Buy now
        </a>
      </div>
      DISCLAIMER:
      <br />
      $RUBY IS A CRYPTO COIN WITH NO INTRINSIC VALUE OR EXPECTATION OF FINANCIAL
      RETURN.
    </div>
  );
};

export default DisclaimerSection;
