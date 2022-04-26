import React, { useRef, useState, useEffect } from "react";
// import Datepicker from "@themesberg/tailwind-datepicker/Datepicker";
// import flatpickr from "flatpickr";
import axios from "../api/axios";

const firstname_REGEX = /^[ก-๏]{0,31}$/; //^[ก-๏\s]+$

// flatpickr(".flatpickr.js-flatpickr-date", {
//   enableTime: false,
//   altInput: true,
//   altFormat: "d M Y",
//   dateFormat: "Y-m-d",
// });

const Register = () => {
  // const defaultValues = {
  //   Title: "",
  //   firstname: "",
  //   LastName: "",
  //   UserName: "",
  //   Password: "",
  //   Email: "",
  //   Birthday: "",
  //   Tel: "",
  //   Address: {
  //     HomeNo: "",
  //     Soi: "",
  //     Road: "",
  //     Subdistrict: "",
  //     District: "",
  //     Province: "",
  //     ZipCode: "",
  //   },
  //   IDCard: "",
  //   wantToBeSeller: "",
  // };

  const firstnameRef = useRef();
  const userRef = useRef();
  const errRef = useRef();

  const [prefix, setPrefix] = useState("");

  const [firstname, setFirstname] = useState("");
  const [validFirstName, setValidFirstName] = useState(false);
  const [firstnameFocus, setFirstnameFocus] = useState(false);

  const [lastname, setLastname] = useState("");
  const [id, setID] = useState("");
  const [email, setEmail] = useState("");

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [conPwd, setConPwd] = useState("");

  const [phone, setPhone] = useState("");
  const [birth, setBirth] = useState("");

  const [no, setNo] = useState("");
  const [soi, setSoi] = useState("");
  const [road, setRoad] = useState("");
  const [subdistrict, SetSubdistrict] = useState("");
  const [district, setDistrict] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [rolesell, setRolesell] = useState(false);
  const [URLImage, setURLImage] = useState("");
  const [success, setSuccess] = useState(false);

  // useEffect(() => {
  //   firstnameRef.current.focus();
  // }, []);

  useEffect(() => {
    const result = firstname_REGEX.test(user);
    console.log(result);
    console.log(firstname);
    setValidFirstName(result);
  }, [firstname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(e.value);
    console.log(firstname, lastname);
    console.log(rolesell);
    // setPrefix("");
    // setFirstname("");
    // setLastname("");
    // setSuccess(true);
  };

  return (
    <div className="h-full flex justify-center  bg-[#FFE5A3] font-prompt">
      <div>
        <div className="mt-6 text-3xl font-bold text-center text-[#E54E3D]">
          ยินดีต้อนรับ!
        </div>
        <div className="mt-2 text-xl font-medium text-center">
          กรอกข้อมูลด้านล่างเพื่อเข้าร่วมเป็นสมาชิก
        </div>

        {success ? (
          <section>
            <h1>You are signed up!</h1>
            <br />
            <p>
              <a href="/">Go to Home</a>
            </p>
          </section>
        ) : (
          <div className="flex flex-col p-8 m-8 bg-white w-[600px] sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl">
            {/* <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p> */}

            <h1 className="text-xl font-bold mb-2">สร้างบัญชีของคุณ</h1>
            <h2 className="text-lg mb-4 text-[#E54E3D]">ข้อมูลส่วนตัว</h2>

            <form onSubmit={handleSubmit}>
              <label
                className="block text-gray-darker text-md font-bold mb-2"
                for="prefix"
              >
                คำนำหน้าชื่อ
              </label>
              <select
                className="border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                id="prefix"
                onChange={(e) => setPrefix(e.target.value)}
                value={prefix}
              >
                <option value="select">เลือกคำนำหน้าชื่อ</option>
                <option value="Mr">นาย</option>
                <option value="Ms">นาง</option>
                <option value="Miss">นางสาว</option>
              </select>
              <div className=" flex-col grid grid-cols-2 gap-9">
                <div className="flex flex-col">
                  <label
                    className="block text-gray-darker text-md font-bold mt-4 mb-2"
                    for="firstname"
                  >
                    ชื่อ
                  </label>
                  <input
                    class="shadow appearance-none border rounded py-2 px-3 text-grey-darker"
                    id="firstname"
                    type="text"
                    placeholder="Firstname"
                    onChange={(e) => setFirstname(e.target.value)}
                    value={firstname}
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
                    onChange={(e) => setLastname(e.target.value)}
                    value={lastname}
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
                onChange={(e) => setID(e.target.value)}
                value={id}
              ></input>

              <label
                className="block text-gray-darker text-md font-bold mt-4 mb-2"
                for="birth"
              >
                วัน-เดือน-ปีเกิด
              </label>

              <input
                className="flatpickr js-flatpickr-date border border-gray-300 rounded text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                id="birth"
                type="date"
                placeholder="Select Birthday"
                onChange={(e) => setBirth(e.target.value)}
                value={birth}
              />
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
                onChange={(e) => setEmail(e.target.value)}
                value={email}
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
                onChange={(e) => setUser(e.target.value)}
                value={user}
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
                type="password"
                placeholder="Password"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
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
                onChange={(e) => setConPwd(e.target.value)}
                value={conPwd}
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
                onChange={(e) => setPhone(e.target.value)}
                value={phone}
              ></input>
              <h2 className="text-lg mt-8 mb-4 text-[#E54E3D]">ที่อยู่</h2>
              <div className="grid grid-cols-6 ">
                <label
                  className="block text-gray-darker text-md font-bold mt-4 mb-2"
                  for="number"
                >
                  บ้านเลขที่
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="number"
                  type="text"
                  placeholder="No."
                  onChange={(e) => setNo(e.target.value)}
                  value={no}
                ></input>

                <label
                  className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                  for="sol"
                >
                  ซอย
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="sol"
                  type="text"
                  placeholder="Sol"
                  onChange={(e) => setSoi(e.target.value)}
                  value={soi}
                ></input>

                <label
                  className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                  for="road"
                >
                  ถนน
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="road"
                  type="text"
                  placeholder="Road"
                  onChange={(e) => setRoad(e.target.value)}
                  value={road}
                ></input>
              </div>
              <div className="grid grid-cols-4 mt-4 ">
                <label
                  className="block text-gray-darker text-md font-bold mt-4 mb-2"
                  for="subdistrict"
                >
                  แขวง/ตำบล
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="subdistrict"
                  type="text"
                  placeholder="Sub District"
                  onChange={(e) => SetSubdistrict(e.target.value)}
                  value={subdistrict}
                ></input>

                <label
                  className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                  for="district"
                >
                  เขต/อำเภอ
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="district"
                  type="text"
                  placeholder="District"
                  onChange={(e) => setDistrict(e.target.value)}
                  value={district}
                ></input>
              </div>
              <div className="grid grid-cols-4 mt-4 ">
                <label
                  className="block text-gray-darker text-md font-bold mt-4 mb-2"
                  for="province"
                >
                  จังหวัด
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="province"
                  type="text"
                  placeholder="Province"
                  onChange={(e) => setProvince(e.target.value)}
                  value={province}
                ></input>

                <label
                  className="block text-gray-darker text-md font-bold text-center mt-4 mb-2"
                  for="zipcode"
                >
                  รหัสไปรษณีย์
                </label>

                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="zipcode"
                  type="text"
                  placeholder="Zip Code"
                  onChange={(e) => setZipcode(e.target.value)}
                  value={zipcode}
                ></input>
              </div>
              <div className="block">
                <div className="mt-5">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="w-6 h-6 rounded"
                      onChange={(e) => setRolesell(e.target.checked)}
                      value={rolesell}
                    />
                    <span className="text-gray-darker text-md font-bold ml-2">
                      ต้องการเป็นผู้ขาย
                    </span>
                  </label>
                </div>
              </div>

              <div class="m-2">
                <label class="inline-block mb-2 text-gray-darker">
                  บัตรผู้ซื้อ-จองล่วงหน้าสลากกินแบ่งรัฐบาล
                </label>
                <div class="flex items-center justify-center w-full">
                  <label class="flex flex-col w-full h-32 border-4 border-blue-200 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="w-8 h-8 text-gray-400 group-hover:text-gray-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                        />
                      </svg>
                      <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                        อัพโหลดไฟล์
                      </p>
                    </div>
                    <input
                      type="file"
                      class="opacity-0"
                      onChange={(e) => setURLImage(e.target.value)}
                      value={URLImage}
                    />
                  </label>
                </div>
              </div>

              <div className="mt-4 mb-7">
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-[#E54E3D] border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                  ยืนยัน
                </button>
              </div>
            </form>

            <div className="mb-7">
              <button className="w-full p-10 py-2 px-4 border-2 border-[#E54E3D] rounded text-[#E54E3D] hover:bg-[#E54E3D] hover:text-white transition duration-300">
                ยกเลิก และ กลับสู่หน้าหลัก
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Register;
