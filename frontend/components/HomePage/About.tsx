import React from "react";

const About = () => {
  return (
    <section className="mt-52 mb-60 flex items-center justify-center px-4">
      <div className="max-w-6xl">
        <h2 className="text-6xl md:text-8xl lg:text-9xl text-center">About</h2>
        <p className="text-xl md:text-3xl max-w-3xl lg:text-4xl xl:text-5xl lg:max-w-full text-center text-balance text-neutral-400">
          At <span className="font-bold text-white">CodedInMotion</span>, we
          believe every story is a code waiting to be translated into motion. We
          specialize in mobile videography and editing, proving that powerful
          visuals don&apos;t always need heavy equipment — just the right eye,
          the right frame, and the right story.
        </p>
      </div>
    </section>
  );
};

export default About;
