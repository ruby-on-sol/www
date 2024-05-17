import React from "react";
import NextImage from "next/image";

const ImageSection: React.FC = () => {
  return (
    <div className="flex justify-center w-full md:ml-auto md:py-0 md:w-2/5 pt-16 xl:w-1/3">
      <NextImage
        alt="$RUBY"
        decoding="async"
        height={814}
        width={800}
        loading="lazy"
        src="/images/dog1.png"
        className="w-full curved object-cover ruby sm:w-auto"
      />
    </div>
  );
};

export default ImageSection;
