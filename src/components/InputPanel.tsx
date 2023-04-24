"use client";

import { useState } from "react";
import UserInputs from "./UserInputs";
import ImagePreview from "./ImagePreview";
import FileSaver from "file-saver";
import { useRouter } from "next/navigation";

const InputPanel = () => {
  const router = useRouter();
  const [userInputs, setUserInputs] = useState({
    title: "",
    tag: "",
    description: "",
  });
  const [userInputCache, setUserInputCache] = useState({
    title: "",
    tag: "",
    description: "",
  });
  const [imageUrl, setImageUrl] = useState("" /* placeholder image url */); // [1
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      userInputs.title === "" ||
      userInputs.description === "" ||
      userInputs.tag === ""
    )
      return alert("Please fill all the fields");

    setIsLoading(true);

    const { description } = userInputs;
    console.log(description);

    try {
      const data: any = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/openai`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ description }),
        }
      );

      const res = await data.json();
      console.log("res", res);
      console.log("res.imageUrl", res.imageUrl);

      setImageUrl(res.imageUrl);
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      alert(message);
    } finally {
      setIsLoading(false);
    }
    setUserInputCache({ ...userInputs });
    setUserInputs({
      title: "",
      tag: "",
      description: "",
    });
  };

  const handleShareImage = async () => {
    setIsLoading(true);
    const { title, tag } = userInputCache;
    console.log("USERINPUT CANCEHL TITLE", title);
    console.log("USERINPUT DES", tag);
    console.log("IMAGE URL", imageUrl);

    try {
      const data: any = await fetch(
        `${process.env.NEXT_PUBLIC_URL}/api/sharepost`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, tag, imageUrl }),
        }
      );
    } catch (error) {
      let message = "Unknown Error";
      if (error instanceof Error) message = error.message;
      alert(message);
    } finally {
      setIsLoading(false);
    }
    router.push("./share");
  };

  const handleDownloadImage = () => {
    FileSaver.saveAs(imageUrl, imageUrl);
  };

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
