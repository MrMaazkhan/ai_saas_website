"use client";

import acmeLogo from "@/assets/logo-acme.png";
import quamtumLogo from "@/assets/logo-quantum.png";
import echoLogo from "@/assets/logo-echo.png";
import celestialLogo from "@/assets/logo-celestial.png";
import pulseLogo from "@/assets/logo-pulse.png";
import apexLogo from "@/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="px-5 md:px-10">
        <div
          className="flex overflow-hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black, transparent)",
          }}
        >
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 15,
              repeat:Infinity,
              ease: "linear",
              repeatType:"loop",
            }}
          >
            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quamtumLogo}
              alt="quamtumLogo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="echoLogo "
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestialLogo "
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apexLogo"
              className="logo-ticker-image"
            />

            {/* second set of duplicate images for animation */}

            <Image
              src={acmeLogo}
              alt="Acme Logo"
              className="logo-ticker-image"
            />
            <Image
              src={quamtumLogo}
              alt="quamtumLogo"
              className="logo-ticker-image"
            />
            <Image
              src={echoLogo}
              alt="echoLogo "
              className="logo-ticker-image"
            />
            <Image
              src={celestialLogo}
              alt="celestialLogo "
              className="logo-ticker-image"
            />
            <Image
              src={pulseLogo}
              alt="pulseLogo"
              className="logo-ticker-image"
            />
            <Image
              src={apexLogo}
              alt="apexLogo"
              className="logo-ticker-image"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
