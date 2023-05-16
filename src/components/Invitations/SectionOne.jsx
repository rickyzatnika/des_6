import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Man from "../../assets/images/man.png";
import Girls from "../../assets/images/girl.png";
import Bismillah from "../../assets/images/bismilah.png";

const SectionOne = () => {
  return (
    <>
      <div className="w-full h-full relative  overflow-hidden ">
        <div className="w-full relative z-50 text-center bg-[url('../assets/3.png')] bg-left-bottom md:bg-right-top bg-fixed py-14 overflow-hidden">
          <div className="w-full -z-10 backdrop-blur-[1px] md:backdrop-blur-[2px] h-full bg-gradient-to-t from-white via-white/80 to-white absolute bottom-0 left-0 right-0" />
          <div className="w-full flex flex-col items-center justify-center">
            <motion.img
              initial={{ y: -50 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src={Bismillah}
              alt=""
              className="w-3/6 mx-auto mb-3 sm:w-1/6 object-contain"
            />

            <motion.p
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[#727251] text-sm sm:text-md px-2"
            >
              Assalamu'alaikum Warahmatullahi Wabarakatuh <br />
              Dengan memohon Ridho serta Rahmat Allah SWT, kami bermaksud
              menyelenggarakan resepsi pernikahan putra-putri kami
            </motion.p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center pt-20 lg:pt-32 gap-10 lg:gap-0 px-10">
            <div className="col-span-1 lg:col-span-4 ">
              <div className="w-full flex flex-col items-center justify-center">
                <motion.img
                  initial={{ x: 80, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  src={Man}
                  alt=""
                  className=" w-4/6 lg:w-[250px] rounded-t-full mb-5 shadow-black/40 shadow-xl border-2 p-3 mx-auto"
                />
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.2 }}
                  className="w-full flex flex-col items-center gap-2 pt-2"
                >
                  <h3 className="text-2xl font-medium text-[#bfa95b]">
                    M.Fauzan Hafidzin
                  </h3>
                  <Link to="https://instagram.com">
                    <IoLogoInstagram size={28} className="text-pink-800/60" />
                  </Link>
                  <div className="text-[#727251] leading-relaxed">
                    <p className="font-semibold text-[#444337]">Putra dari :</p>
                    <p>Bpk Drs. Kurnia Saputra</p> <span>&</span>{" "}
                    <p>Ibu Susi Maryanti</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="col-span-1 lg:col-span-4 text-[#b69c63] font-[parisienne] text-7xl">
              &
            </div>
            <div className="col-span-1 lg:col-span-4">
              <div className="flex flex-col">
                <motion.img
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  src={Girls}
                  alt=""
                  className=" w-4/6 lg:w-[250px] rounded-t-full mb-5 shadow-black/40 shadow-xl border-2 p-3 mx-auto object-cover"
                />
                <motion.div
                  initial={{ y: 30 }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="w-full flex flex-col items-center gap-2 pt-2"
                >
                  <h3 className="text-2xl font-medium  text-[#bfa95b]">
                    Amanda Nurramadhan
                  </h3>
                  <Link to="https://instagram.com">
                    <IoLogoInstagram size={28} className="text-pink-800/60" />
                  </Link>
                  <div className="text-[#727251] leading-relaxed">
                    <p className="font-semibold text-[#444337]">Putri dari :</p>
                    <p>Bpk Deden Sunandar</p> <span>&</span>
                    <p>Ibu Nisa Angraeni</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionOne;
