"use client";
import React from "react";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return (
    <DotLottiePlayer
      alt="Meditating Hovering-in-mid-air Sloth"
      src="/animation_log2dafd.lottie"
      autoplay
      loop
    />
  );
};

export default LottieAnimation;
