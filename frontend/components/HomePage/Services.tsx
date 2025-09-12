import { services } from "@/static-data/services";
import React from "react";

const Services = () => {
  return (
    <section className="min-h-screen px-4 space-y-4 md:space-y-8">
      <div className="flex justify-between items-center gap-5 md:gap-10">
        <h2 className="text-6xl lg:text-8xl xl:text-9xl">Services</h2>
        <div className="w-full h-1 bg-white"></div>
        <p className="max-w-xl lg:text-xl text-neutral-400 hidden md:block">
          From event highlights to brand videos, from short reels to cinematic
          shots, our goal is simple — to make your moments unforgettable and
          your message impossible to ignore.
        </p>
      </div>

      <div className="space-y-20">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`${index % 2 ? "flex md:flex-row" : "flex md:flex-row-reverse"} flex-col gap-4 md:gap-0 md:h-[50dvh] xl:h-[80dvh]`}
          >
            <div className="w-full h-[50dvh] md:h-full flex items-center">
              <video
                src={service.videos[0]}
                autoPlay
                muted
                loop
                className="w-full h-full object-cover"
              ></video>
            </div>
            <div className="flex items-center w-full">
              <div className="md:w-4/5 mx-auto space-y-2">
                <h3 className="text-4xl lg:text-5xl xl:text-6xl text-balance">
                  {service.name}
                </h3>
                <p className="text-xl md:text-base lg:text-xl xl:text-2xl text-neutral-400">
                  {service.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
