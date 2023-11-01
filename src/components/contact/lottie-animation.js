"use client";
import React from "react";
import { DotLottiePlayer, Controls } from "@dotlottie/react-player";
import "@dotlottie/react-player/dist/index.css";

const LottieAnimation = () => {
  return <DotLottiePlayer src="/animation_log2dafd.lottie" autoplay loop />;
};

export default LottieAnimation;
