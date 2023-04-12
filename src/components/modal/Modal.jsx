import React, { useState } from "react";
import Login from "../login/Login";
import Register from "../register/Register";
const Modal = () => {
   const [isLogin, setIsLogin] = useState(true);

   return (
      <>
         <input type="checkbox" id="my-modal-4" className="modal-toggle" />
         <label htmlFor="my-modal-4" className="modal cursor-pointer flex flex-col">
            <div className="tabs tabs-boxed  ">
               <button
                  className={`tab tab-lg w-[50%] ${isLogin ? "tab-active" : null}`}
                  onClick={() => setIsLogin((prev) => !prev)}
               >
                  Login
               </button>
               <button
                  className={`tab tab-lg w-[50%] ${isLogin ? null : "tab-active"}`}
                  onClick={() => setIsLogin((prev) => !prev)}
               >
                  Register
               </button>
            </div>
            <label className=" md:w-96 ">{isLogin ? <Login /> : <Register />}</label>
         </label>
      </>
   );
};

export default Modal;
