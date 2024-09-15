"use client";

import productImage from "@/assets/product-image.png";
import pyramidImage from "@/assets/pyramid.png";
import tubeImage from "@/assets/tube.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


export const ProductShowcase = () => {
  const sectionRef = useRef(null);
  const {scrollYProgress} = useScroll({
    target: sectionRef,
    offset:["start end", "end start"] 
  })

  const translateY = useTransform(scrollYProgress,[0,1],[150,-150])
  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="px-5 md:px10">
        <div className="section-heading">
          <div className="flex justify-center">
            <div className="tag">Boost your productivity</div>
          </div>
          <h2 className="section-title mt-5">
            A more effevtive way to track progress
          </h2>
          <p className="section-para mt-5">
            Effortlessly turn your ideas into a fully functional, responsive,
            Saas website in just minuteswith this template.
          </p>
        </div>
        <div className="relative">
          <Image src={productImage} alt="Product Image" className="mt-10" />
          <motion.img
            src={pyramidImage.src}
            alt="pyramid Image"
            height={262}
            width={262}
            className="absolute hidden md:block md:-right-36 md:-top-32 lg:-right-[75px]"
            style={{
              translateY,
            }}
          />
          <motion.img
            src={tubeImage.src}
            alt="tube Image"
            height={248}
            width={248}
            className="absolute hidden md:block bottom-24 md:-left-36 lg:-left-20"
            style={{
              translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
};
