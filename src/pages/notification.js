import React, { useState } from "react";
import Noti from "../components/popNoti";

const Notification = (noti_props) => {
  const [checkStatus, setCheckStatus] = useState("");

  const infomation = [
    {
      IID: 7,
      Subject: "ตรวจสอบรายการคำสั่งซื้อที่ 27",
      Detail:
        "กรุณาตรวจสอบคำสั่งซื้อที่ 27 ที่หน้าตรวจสอบคำสั่งซื้อ และกดปุ่มยืนยันเพื่อทำการยืนยันคำสั่งซื้อ หรือกดปุ่มยกเลิกเพิ้อทำการยกเลิกคำสั่งซื้อ ขอขอบคุณ",
      Date: "20220418212532+0700",
      CID: "",
      SID: "4",
      AID: "1",
    },
    {
      IID: 8,
      Subject: "ตรวจสอบรายการคำสั่งซื้อที่ 28",
      Detail:
        "กรุณาตรวจสอบคำสั่งซื้อที่ 28 ที่หน้าตรวจสอบคำสั่งซื้อ และกดปุ่มยืนยันเพื่อทำการยืนยันคำสั่งซื้อ หรือกดปุ่มยกเลิกเพิ้อทำการยกเลิกคำสั่งซื้อ ขอขอบคุณ",
      Date: "20220418212532+0700",
      CID: "",
      SID: "4",
      AID: "1",
    },
    {
      IID: 9,
      Subject: "ตรวจสอบรายการคำสั่งซื้อที่ 29",
      Detail:
        "กรุณาตรวจสอบคำสั่งซื้อที่ 29 ที่หน้าตรวจสอบคำสั่งซื้อ และกดปุ่มยืนยันเพื่อทำการยืนยันคำสั่งซื้อ หรือกดปุ่มยกเลิกเพิ้อทำการยกเลิกคำสั่งซื้อ ขอขอบคุณ",
      Date: "20220418212532+0700",
      CID: "",
      SID: "4",
      AID: "1",
    },
    {
      IID: 10,
      Subject: "ตรวจสอบรายการคำสั่งซื้อที่ 30",
      Detail:
        "กรุณาตรวจสอบคำสั่งซื้อที่ 30 ที่หน้าตรวจสอบคำสั่งซื้อ และกดปุ่มยืนยันเพื่อทำการยืนยันคำสั่งซื้อ หรือกดปุ่มยกเลิกเพิ้อทำการยกเลิกคำสั่งซื้อ ขอขอบคุณ",
      Date: "20220418212532+0700",
      CID: "",
      SID: "4",
      AID: "1",
    },
  ];

  // console.log(infomation);

  return (
    <div className="h-max flex justify-center  bg-[#FFE5A3] font-prompt">
      <div className="flex flex-col p-8 m-8 bg-white  min-w-[44.25%] w-[97%] 2xl:w-[44.25%] xl:w-[53.1%] lg:w-[66.375%] md:w-[88.5%] sm:w-[95%] xs:w-[97%]  rounded-xl shadow-xl ">
        <label className="block text-gray-darker text-xl text-[#E54E3D] font-bold mb-4">
          การแจ้งเตือน
        </label>
        <hr className="bg-[#FFE5A3] h-0.5" />

        <div>
          {infomation.map((Info) => (
            <div className=" m-5">
              <p className="text-lg font-bold mb-2">{Info.Subject}</p>
              <p className="text-md mb-2">{Info.Detail}</p>
              <p className="text-sm mb-2 text-right">
                {Info.Date.slice(6, 8) +
                  "/" +
                  Info.Date.slice(4, 6) +
                  "/" +
                  Info.Date.slice(0, 4) +
                  " เวลา " +
                  Info.Date.slice(8, 10) +
                  ":" +
                  Info.Date.slice(10, 12) +
                  " น."}
              </p>
              <hr className="bg-[#FFE5A3] h-0.5" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notification;
