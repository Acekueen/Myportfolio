import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Career Transformation Mentor",
          "Delivery Excellence Champion",
          "DevSeCops Coach",
          "Leadership Advocacy Ambassador",
          "Diversity & Inclusion Advocate"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 20,
      }}
    />
  );
}

export default Type;
