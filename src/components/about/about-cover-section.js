import Image from "next/image";
import React from "react";
import profileCharacter from "@/public/character.png";

const AboutCoverSection = () => {
  return (
    <section
      className="w-full h-[75vh] border-b-2 border-solid border-dark
        flex flex-row items-center justify-center text-dark"
    >
      <div className="w-1/2 h-full border-r-2 border-solid border-dark flex justify-center">
        <Image
          src={profileCharacter}
          atl="CodeBucksCharacterName"
          className="w-full h-full object-contain object-center"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1180px) 50vw, 50vw"
        />
      </div>
      <div className="w-1/2 flex flex-col text-left items-start justify-center px-16">
        <h2 className="font-bold capitalize text-6xl">
          Dream Big, Work Hard, Achieve More!
        </h2>
        <p className="font-medium capitalize mt-4 text-base">
          This Mantra Drives My Work As A Passionate Freelancer. I Blend
          Innovative Technology With Timeless Design For Captivating Digital
          Experiences. Inspired By Nature And Literature, I'm A Perpetual
          Learner Embracing Challenges. With Each Project, I Aim To Leave A
          Lasting Impact—One Pixel At A Time.
        </p>
      </div>
    </section>
  );
};

export default AboutCoverSection;
