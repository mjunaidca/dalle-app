import Image from "next/image";
import React from "react";
import logo from "../../public/logo.png";
import Link from "next/link";

const Header = () => {
  return (
    <header className="absolute top-0 w-full bg-openAI_Primary p-8 text-white">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <div className="flex items-center space-x-2">
            <Image
              src={logo}
              alt="logo"
              className="object-contain reounded-full h-16 w-16"
            />
            <h1 className="font-bold text-2xl">DALL-E</h1>
          </div>
        </Link>
        {/* tag line */}
        <p className="text-gray-500 text-md hidden xl:block mt-2">
          the drawing is only thing that you may not be good at - let AI take
          care of all the hardwork
        </p>
        <Link className="btn" href="share">
          Gallery
        </Link>
      </div>
    </header>
  );
};

export default Header;
