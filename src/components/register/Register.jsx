import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../loader/Loader";
//Firebase
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

const Register = () => {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [confirmPassword, setConfirmPassword] = useState("");
   const [showPassword, setShowPassword] = useState(false);
   const [isLoading, setIsLoading] = useState(false);
   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         toast.error("Password Did not match");
      }
      //* USER REGISTER
      setIsLoading(true);
      createUserWithEmailAndPassword(auth, email, password)
         .then((userCredential) => {
            const user = userCredential.user;
            toast.success("Registration Successful");
            setIsLoading(false);
            document.getElementById("my-modal-4").checked = false;
            navigate("/");
         })
         .catch((error) => {
            toast.error(error.code, error.message);
            setIsLoading(false);
         });

      setEmail("");
      setPassword("");
      setConfirmPassword("");
   };

   const AllFieldsRequired = Boolean(email) && Boolean(password) && Boolean(confirmPassword);

   return (
      <>
         {isLoading && <Loader />}
         <div className="py-6 w-72 md:w-96">
            <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-4xl">
               <div className="w-full px-8 pt-4 pb-6">
                  <p className="text-lg text-gray-600 text-center">Create a new Account</p>

                  <form onSubmit={handleSubmit} className="form-control">
                     <div>
                        <label className="label-text font-bold mb-2 block">Email Address</label>
                        <input
                           className="input input-bordered w-full border-2 "
                           type="email"
                           required
                           value={email}
                           onChange={(e) => setEmail(e.target.value)}
                        />
                     </div>
                     <div className="mt-4 relative">
                        <div className="flex justify-between">
                           <label className="label-text font-bold mb-2">Password</label>
                        </div>
                        <input
                           className="input input-bordered w-full border-2"
                           type={`${showPassword ? "test" : "password"}`}
                           required
                           value={password}
                           onChange={(e) => setPassword(e.target.value)}
                        />
                        <span onClick={() => setShowPassword((prev) => !prev)}>
                           {showPassword ? (
                              <AiFillEye
                                 className="absolute top-10 right-3 "
                                 size={26}
                                 color="gray"
                              />
                           ) : (
                              <AiFillEyeInvisible
                                 className="absolute top-10 right-3 "
                                 size={26}
                                 color="gray"
                              />
                           )}
                        </span>
                     </div>
                     <div className="mt-4">
                        <label className="label-text font-bold mb-2">Confirm Password</label>
                        <input
                           className="input input-bordered w-full border-2"
                           type="password"
                           required
                           value={confirmPassword}
                           onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                     </div>

                     <div className="mt-4">
                        <button type="submit" className="btn w-full" disabled={!AllFieldsRequired}>
                           REGISTER
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   );
};

export default Register;
