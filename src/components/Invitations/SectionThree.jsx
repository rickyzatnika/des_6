import React from "react";
import CountDownTimer from "../Countdown";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import Woods from "../../assets/images/wood.png";

const SectionThree = () => {
  return (
    <div className="w-full h-full py-10 overflow-hidden relative flex flex-col items-center justify-between ">
      <div className="absolute top-0 left-0 right-0 -z-50">
        <img src={Woods} alt="" className="w-full h-[580px] lg:h-auto" />
      </div>

      <div className="mix-blend-overlay text-2xl p-1 text-transparent  bg-black/60  bg-clip-text">
        <h3 className="font-semibold tracking-wide">Add To Callendar</h3>
      </div>
      <CountDownTimer />
      <AddToCalendarButton
        name="The Wedding Of Fauzan & Manda"
        options="'Google'"
        location="4JXH+7MC, Jl. Bukit Maribaya, Mekarwangi, Kec. Lembang, Kabupaten Bandung Barat, Jawa Barat 40391"
        startDate="2023-8-23"
        startTime="09:00"
        endTime="15:00"
        buttonStyle="date"
        timeZone="Asia/Jakarta"
        label=" add to calendar"
        trigger="click"
      ></AddToCalendarButton>
    </div>
  );
};

export default SectionThree;
