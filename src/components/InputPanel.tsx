"use client";

import { useState } from "react";
import UserInputs from "./UserInputs";
import ImagePreview from "./ImagePreview";
const InputPanel = () => {
  const [userInputs, setUserInputs] = useState({
    title: "",
    tag: "",
    description: "",
  });
  const [imageUrl, setImageUrl] = useState(
    "https://cdn.toucharcade.com/wp-content/uploads/2010/02/Icon-512x512.jpg" /* placeholder image url */
  ); // [1
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: any) => {};

  const handleShareImage = () => {};
  const handleDownloadImage = () => {};

  return (
    <div className="mt-40">
      {/* User Inputs */}
      <UserInputs
        handleSubmit={handleSubmit}
        userInputs={userInputs}
        setUserInputs={setUserInputs}
        isLoading={isLoading}
      />

      {/* Image Preview */}
      <ImagePreview imageUrl={imageUrl} isLoading={isLoading} />

      {/* Buttons sharing and download*/}
      {imageUrl != "" && (
        <div className="flex gap-2 mt-2">
          <button
            disabled={imageUrl === ""}
            className="btn flex-1 disabled:cursor-not-allowed"
            onClick={handleShareImage}
          >
            {" "}
            {isLoading ? "Sharing.." : "Share"}{" "}
          </button>
          <button
            disabled={imageUrl === ""}
            className="btn flex-1 disabled:cursor-not-allowed"
            onClick={handleDownloadImage}
          >
            {" "}
            Download
          </button>
        </div>
      )}
    </div>
  );
};

export default InputPanel;
