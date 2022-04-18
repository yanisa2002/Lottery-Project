import React from "react";

const Register = () => {
  return (
    <div className="h-full flex justify-center  bg-[#FFE5A3] font-prompt">
      <div>
        <div className="mt-6 text-3xl font-bold text-center text-red-600">
          ยินดีต้อนรับ!
        </div>
        <div className="mt-2 text-xl font-medium text-center">
          กรอกข้อมูลด้านล่างเพื่อเข้าร่วมเป็นสมาชิก
        </div>
        <div className="flex flex-col p-8 m-8 bg-white md:min-w-[600px] sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl">
          <h1 className="text-xl font-bold mb-2">สร้างบัญชีของคุณ</h1>
          <h2 className="text-lg mb-4 text-red-600">ข้อมูลส่วนตัว</h2>
          <label
            className="block text-gray-darker text-md font-bold mb-2"
            for="prefix"
          >
            คำนำหน้าชื่อ
          </label>
          <select
            className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            id="prefix"
          >
            <option value="select">เลือกคำนำหน้าชื่อ</option>
            <option value="Mr">นาย</option>
            <option value="Ms">นาง</option>
            <option value="Miss">นางสาว</option>
          </select>

          <div className="flex flex-col grid grid-cols-2 gap-9">
            <div className="flex flex-col">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="firstname"
              >
                ชื่อจริง
              </label>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                id="firstname"
                type="text"
                placeholder="Firstname"
              ></input>
            </div>

            <div className="flex flex-col">
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="lastname"
              >
                นามสกุล
              </label>
              <input
                class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                id="lastname"
                type="text"
                placeholder="Lastname"
              ></input>
            </div>
          </div>

          <label
            className="block text-gray-darker text-md font-bold mt-4 mb-2"
            for="id"
          >
            เลขประจำตัวประชาขน
          </label>
          <input
            class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
            id="id"
            type="text"
            placeholder="Personal ID"
          ></input>

          <label
            className="block text-gray-darker text-md font-bold mt-4 mb-2"
            for="birth"
          >
            วัน-เดือน-ปีเกิด
          </label>
          <select
            className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
            id="birth"
          >
            <option value="select">เลือกวันเดือนปีเกิด</option>
          </select>

          <label
            className="block text-gray-darker text-md font-bold mt-4 mb-2"
            for="email"
          >
            อีเมล
          </label>
          <input
            class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
            id="email"
            type="text"
            placeholder="Email"
          ></input>

          <label
            className="block text-gray-darker text-md font-bold mt-4 mb-2"
            for="username"
          >
            ชื่อผู้ใช้
          </label>
          <input
            class="shadow appearance-none border w-full rounded py-2 px-3 text-grey-darker"
            id="username"
            type="text"
            placeholder="Username"
          ></input>

          <label
            className="block text-gray-darker text-md font-bold mt-4 mb-2"
            for="password"
          >
            รหัสผ่าน
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="password"
            type="text"
            placeholder="Password"
          ></input>

          <label
            className="block text-gray-darker text-md font-bold mt-4 mb-2"
            for="comfirmpass"
          >
            ยืนยันรหัสผ่าน
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="confirmpass"
            type="text"
            placeholder="Confirm Password"
          ></input>

          <label
            className="block text-gray-darker text-md font-bold mt-4 mb-2"
            for="phone"
          >
            เบอร์โทรศัพท์
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
            id="phone"
            type="text"
            placeholder="Phone Number"
          ></input>

          <h2 className="text-lg mt-8 mb-4 text-red-600">ที่อยู่</h2>
          <div className="grid grid-cols-6 gap-6">
            {/* <div>
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="number"
              >
                บ้านเลขที่
              </label>
            </div>

            <div>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="number"
                type="text"
                placeholder="No."
              ></input>
            </div>

            <div>
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="sol"
              >
                ซอย
              </label>
            </div>

            <div>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="sol"
                type="text"
                placeholder="Sol"
              ></input>
            </div>

            <div>
              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="road"
              >
                ถนน
              </label>
            </div>

            <div>
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                id="road"
                type="text"
                placeholder="Road"
              ></input>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
