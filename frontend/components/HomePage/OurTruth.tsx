import React from "react";

const OurTruth = () => {
  return (
    <section className="md:h-[50dvh] xl:h-[80dvh]">
      <div className="h-full flex flex-col md:flex-row gap-4 w-full">
        <div className="md:w-3/5 flex items-center">
          <p className="text-3xl md:text-base lg:text-xl xl:text-3xl px-4 text-neutral-400">
            At the heart of{" "}
            <span className="font-bold text-white">CodedInMotion</span> is the
            belief that every code has a motion.
          </p>
        </div>
        <div className="w-full h-full flex items-center">
          <video
            src={"/HeroVid7.mp4"}
            autoPlay
            muted
            loop
            className="h-[50dvh] w-full md:h-full object-cover"
          ></video>
        </div>
        <div className="md:w-3/5 flex items-center">
          <p className="text-3xl md:text-base lg:text-xl xl:text-3xl px-4 text-neutral-400">
            Whether it&apos;s a brand looking to{" "}
            <span className="font-bold text-white">connect</span> with an
            audience, or a memory you want to{" "}
            <span className="font-bold text-white">relive</span> forever, we
            translate your vision into{" "}
            <span className="font-bold text-white">visuals</span> that move
            people.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurTruth;
