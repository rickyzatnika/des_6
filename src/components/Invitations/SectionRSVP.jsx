/* eslint-disable jsx-a11y/role-has-required-aria-props */
import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { motion } from "framer-motion";

const SectionRSVP = ({ guest }) => {
  const { register, handleSubmit, reset } = useForm();
  const [selectedValue, setSelectedValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { uuid } = useParams();

  // Show Popup
  const sectionRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [displayed, setDisplayed] = useState(false);

  // Show Qr-Code
  // const [qrCode, setQrCode] = useState([]);
  // const [modal, setModal] = useState(false);

  // Update Status
  const attendForm = async ({ status, present }) => {
    try {
      const userId = guest?.userId;
      await axios.patch(
        `${process.env.REACT_APP_URI}/invitation/status/${uuid}?userId=${userId}`,
        {
          present: present,
          status: selectedValue,
        }
      );

      if (!status && selectedValue === "not Going") {
        Swal.fire({
          text: "Terima kasih atas partisipasinya..",
          confirmButtonColor: "#bfa95b",
        });
      } else if (!status && !selectedValue) {
        Swal.fire({
          icon: "error",
          text: "Anda belum memilih Hadir / Tidak Hadir",
          confirmButtonColor: "#bfa95b",
          confirmButtonText: "close",
        });
      } else {
        setTimeout(() => {
          Swal.fire({
            text: "Terima kasih atas partisipasinya..",
            confirmButtonColor: "#bfa95b",
          });
          setLoading(false);
          setShowModal(false);
          reset();
        }, 3000);

        setLoading(true);

        return () => clearTimeout(setTimeout);
      }
      reset();
      setShowModal(false);
    } catch (error) {
      console.log(error);
    }
  };
  const handleClick = (value) => {
    setSelectedValue(value);
  };

  // Show Pop up window 1x
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !displayed) {
          setShowModal(true);
          setDisplayed(true);
        }
      });
    });
    observer.observe(sectionRef.current);

    return () => {
      observer.disconnect();
    };
  }, [displayed]);

  // Get QrCode
  // useEffect(() => {
  //   const fetchQRCode = async () => {
  //     try {
  //       const { data } = await axios.get(
  //         `${process.env.REACT_APP_URI}/invitation/validate/${guest?.unique_Code}`
  //       );

  //       setQrCode(data.qrCode);
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchQRCode();
  // });

  // const close = () => {
  //   setModal(false);
  //   setLoading(false);
  // };

  return (
    <>
      {/* {modal && (
        <div className="w-full mx-auto lg:w-4/6 min-h-screen bg-white z-[999999999] fixed top-0 left-0 right-0 flex flex-col justify-center items-center ">
          <div className="w-full h-full absolute z-20 top-0 left-0 right-0 ">
            <img
              src="/images/bg-qr-code.webp"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="antialiased w-full relative z-40 h-full gap-12 flex flex-col items-center justify-between ">
            <div className="w-full relative h-full flex flex-col items-center justify-evenly leading-loose text-center">
              <div className="pb-5 py-10 flex w-full flex-col  gap-2 items-center">
                <p className="font-[Hattori] text-zinc-700 tracking-widest">
                  The Wedding Of
                </p>
                <p className="font-[parisienne] text-4xl font-semibold text-emerald-800">
                  Reni & Abdul
                </p>
                <span>Minggu, 23 Juli 2023</span>
                <div className="w-full text-center">
                  <img
                    src={qrCode}
                    alt="qr-code"
                    className="w-3/6 lg:w-2/6 mx-auto"
                  />

                  <div className="flex flex-col items-center pt-3">
                    <p className="text-zinc-900/80 antialiased text-lg font-[Hattori] ">
                      SHERATON BANDUNG HOTEL & TOWERS
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="text-md underline tracking-wider"
              onClick={() => close()}
            >
              CLOSE
            </button>
          </div>
        </div>
      )} */}
      <div className="m-0 p-0" ref={sectionRef}></div>
      {guest?.status === "Opened" ? (
        <>
          {showModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full items-center py-0 lg:py-20 justify-center  min-h-screen bg-black/70 top-0 bottom-0 left-0 right-0 z-50 fixed overflow-hidden"
            >
              <motion.div
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8 }}
                className="py-10 rounded-t-[35px] px-2 bg-zinc-100 relative top-20 shadow-xl shadow-[#727251]/60  w-[90%] md:w-[50%] mx-auto "
              >
                <div className="pt-2 lg:pt-14 w-full  mx-auto px-2">
                  <div className="w-full lg:w-5/6 mx-auto   pb-6">
                    <h3 className="text-2xl lg:text-3xl text-[#444337]">
                      Konfirmasi
                    </h3>{" "}
                    <span className="alex text-4xl text-[#bfa95b]">
                      kehadiran
                    </span>
                    <div className="w-24 h-[2px] absolute top-20 right-8 bg-[#bfa95b] " />
                  </div>
                  <form
                    onSubmit={handleSubmit(attendForm)}
                    className="w-full rounded z-50 h-auto px-2 lg:px-20 flex flex-col items-start justify-between gap-3"
                  >
                    <div className="w-full leading-relaxed mb-3 px-3">
                      <div className="flex flex-col flex-nowrap gap-2">
                        <div className="flex flex-nowrap gap-1">
                          <input
                            type="radio"
                            value="going"
                            {...register("status", { required: true })}
                            checked={selectedValue === "going"}
                            onChange={() => handleClick("going")}
                          />
                          <label
                            className="text-[#444337] text-lg lg:text-xl"
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick("going");
                            }}
                          >
                            Ya, saya akan hadir
                          </label>
                        </div>
                        <div className="flex flex-nowrap gap-1">
                          <input
                            type="radio"
                            value="not Going"
                            {...register("status", { required: true })}
                            checked={selectedValue === "not Going"}
                            onChange={() => handleClick("not Going")}
                          />
                          <label
                            onClick={(e) => {
                              e.preventDefault();
                              handleClick("not Going");
                            }}
                            className="text-[#444337] text-lg lg:text-xl"
                          >
                            Maaf, tidak bisa hadir
                          </label>
                        </div>
                      </div>
                    </div>
                    {!selectedValue && (
                      <div className="mb-3 w-full">
                        <h3 className="mb-2 text-md text-[#444337]">
                          Berapa orang yang akan hadir :
                        </h3>
                        <select
                          className="w-full text-[#444337] py-3 px-2 border-none outline-none rounded focus:outline-[#9c8450]"
                          {...register("present", { required: true })}
                        >
                          <option value="1">1 Orang</option>
                          <option value="2">2 Orang</option>
                          <option value="3">3 Orang</option>
                        </select>
                      </div>
                    )}

                    {selectedValue === "going" && (
                      <div className="mb-3 w-full">
                        <h3 className="mb-2 text-md text-[#444337]">
                          Berapa orang yang akan hadir :
                        </h3>
                        <select
                          className="w-full text-[#444337] py-3 px-2 border-none outline-none rounded focus:outline-[#9c8450]"
                          {...register("present", { required: true })}
                        >
                          <option value="1">1 Orang</option>
                          <option value="2">2 Orang</option>
                          <option value="3">3 Orang</option>
                        </select>
                      </div>
                    )}
                    {!selectedValue && (
                      <button
                        className="py-3 px-7 w-full text-zinc-100 bg-[#9c8450]  hover:bg-[#867041] shadow-lg rounded shadow-black/20 hover:text-zinc-100   "
                        type="submit"
                      >
                        {loading ? (
                          <span>tunggu sebentar...</span>
                        ) : (
                          <span>Kirim</span>
                        )}
                      </button>
                    )}

                    {selectedValue && (
                      <button
                        className="py-3 px-7 w-full text-zinc-100 bg-[#9c8450]  hover:bg-[#867041] shadow-lg rounded shadow-black/20 hover:text-zinc-100   "
                        type="submit"
                      >
                        {loading ? (
                          <span>tunggu sebentar...</span>
                        ) : (
                          <span>Kirim</span>
                        )}
                      </button>
                    )}
                  </form>
                </div>
              </motion.div>
            </motion.div>
          )}
        </>
      ) : (
        <div className="hidden"></div>
      )}
    </>
  );
};

export default SectionRSVP;
