import React from "react";
import AffirmationH2 from "../Animations/AffirmationH2";

const Affirmation = () => {
  return (
    <section className="my-60 flex items-center justify-center px-4">
      <div className="max-w-6xl md:space-y-5">
        <AffirmationH2 />
        <p className="text-xl md:text-4xl max-w-xl lg:text-5xl lg:max-w-full text-center text-neutral-400 mx-auto">
          Creativity, to capture the emotions, energy, and uniqueness of every
          moment. Precision, to edit and craft content that feels polished,
          purposeful, and timeless.
        </p>
      </div>
    </section>
  );
};

export default Affirmation;
