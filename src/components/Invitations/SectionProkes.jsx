import React from "react";
import { motion } from "framer-motion";
import Prokes1 from "../../assets/images/prokes_1.png";
import Prokes2 from "../../assets/images/prokes_2.png";
import Prokes3 from "../../assets/images/prokes_3.png";
import Prokes4 from "../../assets/images/prokes_4.png";

const SectionProkes = () => {
  return (
    <div className="relative overflow-hidden bg-[#DAD8C0] shadow-xl shadow-[#796741]/40 w-full rounded-b-xl  h-full flex flex-col items-center justify-center py-12">
      <div className="flex md:w-4/6  mx-auto items-center justify-between  px-4 w-full  py-6  ">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <h1 className="font-[Hattori] text-2xl sm:text-3xl text-[#bfa95b]  ">
            PROTOKOL
          </h1>
          <span className="text-3xl sm:text-4xl text-[#444337]">kesehatan</span>
        </motion.div>
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="w-24 h-[2px] bg-[#bfa95b]"
        />
      </div>
      <motion.p
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="text-[#444337] text-sm sm:text-md text-center px-2"
      >
        Tanpa mengurangi rasa hormat, acara ini menerapkan Protokol Kesehatan,
        sesuai dengan peraturan & rekomendasi pemerintah.
      </motion.p>
      <div className="w-full lg:w-[50%] h-full mt-8">
        <div className="grid grid-cols-4 p-2 gap-2 items-center justify-center ">
          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src={Prokes1}
            alt=""
            className="w-[120px] lg:w-[150px] object-cover mx-auto"
          />

          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            src={Prokes2}
            alt=""
            className="w-[120px] lg:w-[150px] object-cover mx-auto"
          />

          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            src={Prokes3}
            alt=""
            className="w-[120px] lg:w-[150px] object-cover mx-auto"
          />

          <motion.img
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            src={Prokes4}
            alt=""
            className="w-[120px] lg:w-[150px] object-cover mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default SectionProkes;
