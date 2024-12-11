import React from "react";
import LampImage from "../assets/lamp-image.png";

const ContactSection: React.FC = () => {
  return (
    <section className="px-20 bg-[#286F6C]">
      <div className="grid grid-cols-2">
        <img src={LampImage} alt="feature" className="w-full" />
        <div className="space-y-6 my-auto">
          <h1 className="text-6xl text-white font-bold">
            Get more discount<br/> Off your order
          </h1>
          <p className="text-xl text-white">Lets our mailing list</p>
          <form className="flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 rounded-md"
            />
            <button className="bg-black text-white font-semibold p-4 w-40 rounded-md">
              Shop Now
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
