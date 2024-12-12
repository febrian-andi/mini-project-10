import React, { useState } from "react";
import LampImage from "../assets/lamp-image.png";
import LampImage2 from "../assets/lamp-image-2.png";
import { usePostData } from "../hooks/usePostData";
import { toast } from "react-toastify";
import DOMPurify from "dompurify";

const ContactSection: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const { postData, loading } = usePostData("/subscribe");

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    postData(
      { email },
      () => {
        toast.success("Subscribed successfully", {
          position: "top-center",
          autoClose: 1500,
        });
        setEmail("");
      },
      (error) => {
        if (error && typeof error === "string") {
          toast.error(error, {
            position: "top-center",
          });
        } else {
          toast.error("Something went wrong", {
            position: "top-center",
          });
        }
      }
    );
  };

  return (
    <section className="md:pr-20 lg:px-20 pb-20 bg-[#286F6C]">
      <div className="relative md:flex text-center md:text-left">
        <img
          src={LampImage}
          alt="feature"
          className="hidden md:block w-auto md:w-1/2 h-[400px] md:h-full lg:h-auto"
        />
        <img
          src={LampImage2}
          alt="feature"
          className="block md:hidden absolute md:relative left-0 w-auto md:w-1/2 h-[230px] sm:h-[260px] md:h-full lg:h-auto"
        />
        <div className="space-y-6 my-auto py-10 px-6">
          <h1 className="text-3xl sm:text-5xl md:text-6xl text-white font-bold">
            Get more discount
            <br /> Off your order
          </h1>
          <p className="text-lg sm:text-xl text-white">Join our mailing list</p>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-row gap-4"
          >
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(DOMPurify.sanitize(e.target.value))}
              placeholder="Enter your email"
              className="w-full p-1 lg:p-3 rounded-md"
              required
            />
            <button
              type="submit"
              className="bg-black text-white font-semibold p-4 w-56 lg:w-40 rounded-md"
            >
              {loading ? (
                <div className="mx-auto w-5 h-5 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Shop Now"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
