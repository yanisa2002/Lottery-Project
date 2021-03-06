import React, { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Random = () => {
  const [random, setRandom] = useState("");
  const [errMsg, setErrMsg] = useState("");

  const defaultValues = {
    Amount: random,
  };

  const navigate = useNavigate();
  const toCart = useCallback(
    () => navigate("/", { replace: true }),
    [navigate]
  );

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImhlbGxvbGVlIiwicm9sZSI6ImN1c3RvbWVyIiwiaWF0IjoxNjUxMDk1MDY5LCJleHAiOjE2NTExMDU4Njl9.zZTFWwlN6yIPsi6UAETNHnsminyO6h4jjsazH4j0fa4";
  const Random = () => {
    axios
      .post("http://2561-2a09-bac0-411-00-81e-ea19.ngrok.io/random", {
        token: token,
        Amount: String(defaultValues.Amount),
      })
      .then(function (response) {
        console.log(response);
        if (response.data.status === "success") {
          toCart();
        } else if (response.data.status === "200CR") {
          setErrMsg("จำนวนที่เลือกมีไม่พอ กรุณาเลือกใหม่อีกครั้ง");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(defaultValues);
    Random();
  };

  return (
    <div className="h-screen flex justify-center  bg-[#FFE5A3] font-prompt">
      <div>
        <div className="mt-10 text-3xl font-bold text-center text-red-600">
          สุ่มสลากตามจำนวนใบ
        </div>
        <div className="mt-2 text-xl font-medium text-center">
          ใส่จำนวนสลากที่ต้องการ ด้านล่างเพื่อทำการสุ่ม
        </div>
        <div
          className="flex flex-col p-8 m-8 bg-white  md:min-w-[600px] 
     sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl "
        >
          <label className="block text-gray-darker text-lg font-bold mb-2">
            ระบบสุ่มฝาก
          </label>
          <p
            class={errMsg ? "errmsg" : "offscreen"}
            className="text-red-600 text-md font-bold"
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-5 mt-2">
              <label
                className="block text-gray-darker text-sm font-bold mb-2"
                for="count"
              >
                จำนวนสลาก
              </label>
              <label className="block text-gray-darker text-sm mb-2 text-red-600">
                *หมายเหตุ : โปรดระบุจำนวนไม่เกิน 50 ใบ
              </label>
            </div>

            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
              name="count"
              type="number"
              min={1}
              max={50}
              onChange={(e) => setRandom(e.target.value)}
              value={random}
            />

            <div className="mt-7">
              <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                ยืนยันเพื่อเพิ่มลงตะกร้า
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Random;
