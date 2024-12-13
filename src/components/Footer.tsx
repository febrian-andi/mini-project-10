import React from "react";
import { ShareSocial } from "react-share-social";

const Footer: React.FC = () => {
  const style = {
    root: {
      background: "transparent",
    },
    copyContainer: {
      display: "none"
    }
  };

  return (
    <footer className="bg-[#15171CFF] text-white px-6 md:px-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 border-b-2 py-12 border-gray-500">
        <h1 className="text-3xl font-bold text-left">FurniShop</h1>
        <ShareSocial
          url="https://mini-project-10-fan.vercel.app/"
          socialTypes={["email", "facebook", "telegram", "whatsapp", "linkedin"]}
          style={style}
        />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 gap-x-6 py-12">
        <div className="flex flex-col text-start gap-2">
          <h2 className="text-xl">Our Products</h2>
          <a href="#" className="py-2 text-sm">The Support Suite</a>
          <a href="#" className="py-2 text-sm">The Sales Suite</a>
          <a href="#" className="py-2 text-sm">Support</a>
          <a href="#" className="py-2 text-sm">Guide</a>
        </div>
        <div className="flex flex-col text-start gap-2">
          <h2 className="text-xl">Top Features</h2>
          <a href="#" className="py-2 text-sm">Ticketing System</a>
          <a href="#" className="py-2 text-sm">Knowledge Base</a>
          <a href="#" className="py-2 text-sm">Community Forums</a>
          <a href="#" className="py-2 text-sm">Help Desk Software</a>
        </div>
        <div className="flex flex-col text-start gap-2">
          <h2 className="text-xl">Resources</h2>
          <a href="#" className="py-2 text-sm">Product Support</a>
          <a href="#" className="py-2 text-sm">Request Demo</a>
          <a href="#" className="py-2 text-sm">Library</a>
          <a href="#" className="py-2 text-sm">Peoplepower Blog</a>
        </div>
        <div className="flex flex-col text-start gap-2">
          <h2 className="text-xl">Company</h2>
          <a href="#" className="py-2 text-sm">About Us</a>
          <a href="#" className="py-2 text-sm">Press</a>
          <a href="#" className="py-2 text-sm">Investors</a>
          <a href="#" className="py-2 text-sm">Events</a>
        </div>
        <div className="flex flex-col justify-end text-start gap-2">
          <h2 className="text-xl">Favourite Things</h2>
          <a href="#" className="py-2 text-sm">For Enterprise</a>
          <a href="#" className="py-2 text-sm">For Startups</a>
          <a href="#" className="py-2 text-sm">For Benchmark</a>
          <a href="#" className="py-2 text-sm">For Small Business</a>
        </div>
      </div>
      <p className="py-4 text-center">&copy;FurniShop 2024. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
