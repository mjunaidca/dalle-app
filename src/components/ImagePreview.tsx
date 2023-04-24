import React, { FC } from "react";
import Image from "next/image";
import holder from "../../public/defImage.png";
import Loader from "./Loader";

const ImagePreview: FC<ImagePreviewProps> = ({ imageUrl, isLoading }) => {
  return (
    <div className="mt-4">
      <div className="relative w-full flex items-center justify-center">
        {imageUrl === "" ? (
          <div className="relative h-[512px] w-[512px]">
            <Image src={holder} alt="" fill className="object-contain" />
          </div>
        ) : (
          <div className="relative h-[512px] w-[512px]">
            <Image src={imageUrl} alt="" fill className="object-contain" />
          </div>
        )}
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/30">
            <Loader />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImagePreview;
