import React from "react";

const Notification = () => {
  return (
    <div className="h-screen flex justify-center  bg-[#FFE5A3] font-prompt">
      <div
        className="flex flex-col p-8 m-8 bg-white  md:min-w-[600px] 
     sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl "
      >
        <label className="block text-gray-darker text-xl font-bold mb-8">
          การแจ้งเตือน
        </label>
      </div>
    </div>
  );
};

export default Notification;
