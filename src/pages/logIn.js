import React, { useRef, useState, useEffect } from "react";
// import axios from "axios";

const LogIn = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(user, pwd);
    setUser("");
    setPwd("");
    setSuccess(true);
  };

  return (
    <div className="h-screen flex justify-center  bg-[#FFE5A3] font-prompt">
      <div>
        <div className="mt-6 text-3xl font-bold text-center text-red-600">
          ยินดีต้อนรับกลับมา!
        </div>
        <div className="mt-2 text-xl font-medium text-center">
          ใส่ชื่อผู้ใช้ และ รหัสผ่าน ด้านล่างเพื่อเข้าสู่ระบบ
        </div>

        {success ? (
          <section>
            <h1>You are logged in!</h1>
            <br />
            <p>
              <a href="/">Go to Home</a>
            </p>
          </section>
        ) : (
          <div
            className="flex flex-col p-8 m-8 bg-white  md:min-w-[600px] 
     sm:min-w-[400px] min-w-[300px]  rounded-xl shadow-xl "
          >
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>

            <label className="block text-gray-darker text-lg font-bold mb-8">
              เข้าสู่บัญชีของคุณ
            </label>
            <form onSubmit={handleSubmit}>
              <div className="mb-10">
                <label
                  className="block text-gray-darker text-sm font-bold mb-2"
                  for="username"
                >
                  ชื่อผู้ใช้
                </label>
                <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker"
                  id="username"
                  type="text"
                  ref={userRef}
                  placeholder="Username"
                  autoComplete="off"
                  onChange={(e) => setUser(e.target.value)}
                  value={user}
                  reduired
                />
              </div>
              <div className="mb-10">
                <label
                  className="block text-gray-daker text-sm font-bold mb-2"
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
                  required
                />
              </div>
              <div className="mb-7">
                <button className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">
                  เข้าสู่ระบบ
                </button>
              </div>
            </form>

            <div className="mb-2 text-center">
              ยังไม่มีบัญชีผู้ใช้ ?{" "}
              <span className="cursor-pointer text-red-600">
                <a href="/register">สมัครสมาชิก</a>
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LogIn;
