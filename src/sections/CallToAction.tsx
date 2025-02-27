"use client";

import ArrowIcon from "@/assets/arrow-right.svg";
import starImage from "@/assets/star.png";
import springImage from "@/assets/spring.png";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const CallToAction = () => {

  const sectioRef = useRef(null);

  const {scrollYProgress} = useScroll({
    target: sectioRef,
    offset: ['start end','end start']
  })


  const translateY = useTransform(scrollYProgress,[0,1],[150,-150])

  return (
    <section ref={sectioRef} className="bg bg-gradient-to-b from-white to-[#D2DCFF] py-24 overflow-x-clip">
      <div className="px-5 md:px-10">
        <div className="relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-para mt-5 section-heading">
            celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>
          <motion.img
            src={starImage.src}
            alt="star image"
            width={360}
            className="absolute -left-[350px] md:-left-[230px] lg:-left-[50px] -top-[137px]"
            style={{
              translateY
            }}
          />
          <motion.img
            src={springImage.src}
            alt="spring Image"
            width={360}
            className="absolute -right-[331px] md:-right-[200px]  lg:-right-[31px] -top-[19px]"
            style={{
              translateY
            }}
          />
        </div>
        <div className="flex gap-2 mt-10 justify-center">
          <button className="btn btn-primary">Get for free</button>
          <button className="btn btn-text">
            <span>Learn More</span>
            <ArrowIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};
