import React from "react";

const popNoti = (noti_props) => {
  return (
    <div className="m-5">
      <div className="text-lg mb-2 ">{noti_props.info.Subject}</div>
      <div className="text-lg mb-2 ">{noti_props.info.Detail}</div>
      <div className="text-md mb-2 text-right">{noti_props.info.DateTime}</div>
      <hr className="bg-[#FFE5A3] h-0.5" />
    </div>
  );
};

export default popNoti;
