import React from "react";
import ItemsContainer from "./itemscontainer";
import SocialIcons from "./socialicons";
import { Icons } from "./menu";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <ItemsContainer />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
       text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 DJ. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
