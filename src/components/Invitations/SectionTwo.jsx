/* eslint-disable jsx-a11y/iframe-has-title */
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SectionTwo = () => {
  return (
    <>
      <div className="w-full  min-h-screen pt-4 pb-14 lg:py-10 lg:h-full bg-gradient-to-tl from-[#F0EABE] via-[#F0EABE]/70 to-[#F0EABE] relative ">
        <div className="absolute -top-1 left-0 right-0 w-full z-20">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,256L40,245.3C80,235,160,213,240,186.7C320,160,400,128,480,117.3C560,107,640,117,720,133.3C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="absolute top-1 left-0 right-0 w-full z-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#e0dbb1"
              fillOpacity="1"
              d="M0,256L40,245.3C80,235,160,213,240,186.7C320,160,400,128,480,117.3C560,107,640,117,720,133.3C800,149,880,171,960,186.7C1040,203,1120,213,1200,208C1280,203,1360,181,1400,170.7L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-40 overflow-hidden flex items-center justify-between w-5/6 lg:w-4/6 mx-auto pt-12 lg:pt-10">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-3"
          >
            <h3 className=" text-2xl sm:text-3xl text-[#bfa95b]">Wedding</h3>
            <span className="text-3xl sm:text-4xl text-[#444337]">Event</span>
          </motion.div>
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="w-28 lg:w-40  h-[2px] lg:h-[4px] bg-[#bfa95b] "
          />
        </div>
        <motion.p
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="w-full relative z-40 lg:w-3/6 mx-auto px-4 text-center text-sm sm:text-md text-[#727251]  py-4 leading-relaxed"
        >
          Dengan segala kerendahan hati kami bermaksud ingin mengundang
          Bapak/Ibu/Saudara/i sekalian guna hadir didalam acara pernikahan kami
          yang akan diselenggarakan pada :
        </motion.p>
        <div className="w-full h-full pt-2 lg:pt-20 flex flex-col  items-center justify-evenly">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full  py-4 flex flex-col text-center items-center justify-center gap-5 lg:justify-around pt-8"
          >
            <div className="w-fit p-6 border-b-0 rounded-3xl border-2 border-[#968548]  flex gap-4 flex-col items-center justify-center">
              <h3 className="text-xl sm:text-2xl text-[#444337] ">
                Akad <span>Nikah</span>
              </h3>
              <div className="text-[#727251] text-sm text-center ">
                <h3>Rabu</h3>
                <span className="alex text-4xl">23</span> <h3>Agustus</h3>
              </div>
              <p className="text-sm sm:text-md text-[#444337] ">
                Pukul 09.00 - selesai
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-fit  p-6 border-t-0 rounded-3xl border-2 border-[#968548]  mx-auto flex flex-col gap-4 mb-12 items-center justify-center "
        >
          <h3 className="text-xl sm:text-2xl text-[#444337]">Resepsi</h3>
          <div className="text-[#727251] text-sm text-center">
            <h3>Rabu</h3>
            <span className="alex text-4xl">23</span> <h3>Agustus</h3>
          </div>
          <p className="text-sm sm:text-md text-[#444337] ">
            Pukul 11.00 - selesai
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center px-2 flex gap-3 flex-col items-center justify-center leading-relaxed"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.323300674875!2d107.6265714756531!3d-6.851795067033146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e72eebb13375%3A0x18614b0729df90d3!2sVilla%20Putih%20Lembang!5e0!3m2!1sen!2sid!4v1684267652198!5m2!1sen!2sid"
            width="300"
            height="200"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="text-sm py-4 sm:text-md font-semibold text-[#5e5e43]">
            <p>Tempat,</p>
            <p>Villa Putih Lembang, Jawa-barat 40391</p>
          </div>

          <a
            href="https://goo.gl/maps/oM78AtTjbiKLHBqz8"
            target="_blank"
            className="py-2 px-5 bg-[#9c8450] text-sm sm:text-md hover:bg-[#927b4a] text-zinc-200 hover:text-zinc-200/80  rounded"
            rel="noreferrer"
          >
            Open Maps
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default SectionTwo;
