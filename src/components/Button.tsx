"use client";

import FileSaver from "file-saver";

const Button = ({ imageUrl }: { imageUrl: string }) => {
  return <div className="btn mt-2" onClick={() => FileSaver.saveAs(imageUrl, imageUrl)}>Download Now</div>;
};

export default Button;
