import React from "react";
import OrnR from "../../assets/orn.png";

const Subfooter = () => {
  return (
    <div className="w-full relative overflow-hidden flex flex-col items-center justify-center  h-full py-16 bg-white">
      <div className="absolute bottom-0 left-0">
        <img src={OrnR} alt="" className="w-[110px] lg:w-[180px]" />
      </div>
      <div className="absolute bottom-0 -right-14 -rotate-90">
        <img src={OrnR} alt="" className="w-[110px] lg:w-[180px]" />
      </div>

      <div className="text-center w-5/6 lg:w-3/6 mx-auto leading-relaxed">
        <i className="text-sm sm:text-md text-zinc-500">
          "Dan nikahkanlah orang-orang yang masih membujang di antara kamu, dan
          juga orang-orang yang layak (menikah) dari hamba-hamba sahayamu yang
          laki-laki dan perempuan. Jika mereka miskin, Allah akan memberi
          kemampuan kepada mereka dengan karunia-Nya."
        </i>
        <p className="text-md lg:text-lg text-zinc-700">QS. An-Nur Ayat 32</p>
      </div>
    </div>
  );
};

export default Subfooter;
