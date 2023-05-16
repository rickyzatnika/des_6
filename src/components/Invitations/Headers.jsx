import { motion } from "framer-motion";

import Bg_Header from "../../assets/images/header.png";
import { Parallax } from "react-scroll-parallax";
import Canvas from "../Canvas/Canvas";

const Header = () => {
  return (
    <>
      <Canvas />
      <motion.div
        initial={{ scale: 1.3, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 3, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
        }}
        className="fixed w-full h-full -z-50 top-0 left-0 right-0"
      >
        <img
          src={Bg_Header}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </motion.div>
      <Parallax speed={-20}>
        <div className="w-full min-h-screen overflow-hidden flex flex-col items-center justify-around relative">
          <div className="w-full min-h-screen absolute top-0 left-0 -z-40 bg-gradient-to-b from-black/80 via-black/40 to-black/80 mix-blend-overlay" />
          <h1 className="text-[#444337] relative  rounded-full bg-zinc-200 py-1 px-5  w-fit text-center text-md sm:text-xl">
            The{" "}
            <span className="text-md sm:text-xl tracking-wide">wedding</span> Of
          </h1>
          <motion.div
            initial={{ scale: 4, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 3, opacity: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.3,
            }}
            className="w-fit relative bg-black/10 p-4 rounded-t-full text-center flex flex-col gap-3 items-center"
          >
            <div className="relative -left-5">
              <h3 className="text-3xl sm:text-3xl text-[#cfb760] ">M.Fauzan</h3>
            </div>
            <span className=" text-6xl font-[parisienne] text-[#bfa95b]  lg:text-5xl ">
              &
            </span>
            <div className="relative left-5">
              <h2 className="text-3xl sm:text-3xl text-[#cfb760]">Amanda</h2>
            </div>
          </motion.div>
          <span className="text-zinc-300/80 tracking-wide text-md sm:text-xl">
            Rabu, 23 Agustus 2023
          </span>
          <div className="flex flex-col relative z-50 items-center gap-1 justify-center">
            <div className="mouse"></div>
            <span className="text-zinc-300/80">scroll down</span>
          </div>
        </div>
      </Parallax>
    </>
  );
};

export default Header;
