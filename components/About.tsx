"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is Akash Kumar, and I hold a Bachelor&apos;s degree in Computer
        Science and Engineering from Lovely Professional University. I&apos;m a{" "}
        <span className="font-medium">Frontend developer</span> who is
        passionate about creating engaging user experiences through clean and
        intuitive designs.{" "}
        <span className="italic">My favorite part of developement</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React.js, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with Express.js and Typescript. I am always looking
        to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I&apos;m not coding</span>, I enjoy
        watching movies, animes, and playing football. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about <span className="font-medium">GraphQl.</span>
      </p>
    </motion.section>
  );
};

export default About;
