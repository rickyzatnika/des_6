import { useState } from "react";
import { AiOutlineCopy } from "react-icons/ai";
import { MdOutlineWhatsapp } from "react-icons/md";
import { HiOutlineDocumentCheck } from "react-icons/hi2";
import { motion } from "framer-motion";
import BCA from "../../assets/images/bca.png";

const Gift = () => {
  const [copyText, setCopyText] = useState(true);

  const bcaClick = () => {
    setCopyText(false);

    setTimeout(() => {
      setCopyText(true);
    }, 2000);
    navigator.clipboard.writeText("12345678");
    return () => clearTimeout();
  };

  return (
    <div className="w-full h-full bg-white py-10 ">
      <div className=" w-[96%] mx-auto py-8 rounded-[50px] h-full lg:w-5/6 px-4 lg:px-12 shadow-xl bg-zinc-100 my-10 shadow-[#796741]/40 flex flex-col items-center justify-center">
        <div className="flex flex-col gap-3 items-center justify-center">
          <motion.h3
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-2xl sm:text-3xl text-[#444337] "
          >
            Share{" "}
            <span className="text-3xl sm:text-4xl text-[#bfa95b]">Love</span>
          </motion.h3>
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center text-sm sm:text-md text-[#444337] leading-relaxed"
          >
            Doa dan restu Anda pada pernikahan kami sudah cukup sebagai hadiah,
            tetapi jika Anda ingin memberikan lebih, kami senang menerimanya dan
            itu akan melengkapi kebahagiaan kami bahkan lebih.
          </motion.p>
        </div>
        <div className="flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col items-center justify-center">
            <motion.img
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src={BCA}
              alt=""
              className="w-2/6 sm:3/6 mx-auto"
            />
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="text-[#444337] text-lg sm:text-xl  tracking-wider"
            >
              BANK BCA
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="text-[#444337] text-lg sm:text-xl my-3 tracking-wider"
            >
              M.Fauzan Hafidzin
            </motion.p>
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[#444337] text-lg sm:text-xl  tracking-wider"
            >
              12345678
            </motion.p>
            {copyText === true ? (
              <motion.button
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={bcaClick}
                className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]"
              >
                <AiOutlineCopy size={20} />
                <span className="text-md tracking-wide text-sm sm:text-md">
                  Salin
                </span>
              </motion.button>
            ) : (
              <motion.button
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                onClick={bcaClick}
                className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#6bc45f]"
              >
                <HiOutlineDocumentCheck size={20} />
                <span className="text-md tracking-wide text-sm sm:text-md">
                  Disalin
                </span>
              </motion.button>
            )}
            <motion.a
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              href="https://wasap.at"
            >
              <button className="flex items-center rounded gap-1 mt-5 py-2 text-zinc-100 px-6 bg-[#bfa95b]">
                <MdOutlineWhatsapp size={20} />
                <span className="text-md tracking-wide text-sm sm:text-md">
                  Konfirm
                </span>
              </button>
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gift;
