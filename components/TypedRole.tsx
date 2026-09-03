"use client";

import { useEffect, useState } from "react";

const ROLES = ["Full-Stack Developer", "Computer Science Student", "Frontend & Backend Engineer", "Problem Solver"];

export default function TypedRole() {
  const [text, setText] = useState("");

  useEffect(() => {
    let roleIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timeout: ReturnType<typeof setTimeout>;

    function tick() {
      const current = ROLES[roleIndex];
      if (!deleting) {
        charIndex++;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timeout = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIndex--;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          roleIndex = (roleIndex + 1) % ROLES.length;
        }
      }
      timeout = setTimeout(tick, deleting ? 40 : 75);
    }

    tick();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {text}
      <span className="animate-blink text-cherry">|</span>
    </>
  );
}
