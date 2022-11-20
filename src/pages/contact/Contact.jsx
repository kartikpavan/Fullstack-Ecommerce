import React, { useRef, useState } from "react";
import { Header } from "../../components";
import { CiPhone } from "react-icons/ci";
import { AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
   const formRef = useRef();
   const [loading, setLoading] = useState(true);

   const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true);
      emailjs
         .sendForm(
            "service_rn5uwdh",
            "template_z55djla",
            formRef.current,
            "onCf_FZuuuG_27Kb_"
         )
         .then(
            (result) => {
               console.log(result.text);
               toast.success("Feedback Recorded. We will Contact you shortly");
            },
            (error) => {
               console.log(error.text);
               toast.error("Something went Wrong , Please try again later");
            }
         );
      setLoading(false);
      e.target.reset(); // clear input fields
   };

   return (
      <>
         <Header text="Contact Us" />
         <main className="w-full mx-auto px-2 lg:w-9/12 md:px-6 mt-4 lg:mt-6 flex flex-col md:flex-row justify-between gap-10">
            <section className="w-full md:w-[30rem] bg-primary-content rounded-md p-6 h-72">
               {/* Card */}
               <div className="mb-10">
                  <h1 className="text-xl md:text-3xl mb-2">
                     Contact Information
                  </h1>
                  <p className="md:text-lg">
                     Fill the form or contact us via other channels
                  </p>
               </div>
               <div>
                  <div className="flex items-center gap-2 my-2 md:text-xl">
                     <AiOutlineMail />
                     <a href="mailto: Support@eshop.com?subject=Feedback&body=message">
                        Support@eshop.com
                     </a>
                  </div>
                  <div className="flex items-center gap-2  my-2 md:text-xl">
                     <CiPhone />
                     <a href="tel:+91-123-12345">91-123-12345</a>
                  </div>
                  <div className="flex items-center gap-2 md:text-xl  my-2">
                     <AiOutlineTwitter />
                     <a
                        href="https://twitter.com/kartik_im"
                        rel="noreferrer"
                        target="_blank"
                     >
                        @kartik_im
                     </a>
                  </div>
               </div>
            </section>
            <section className="w-full md:w-2/3 rounded-md shadow-lg border-2 p-6">
               {/* Form */}
               <h1 className="text-xl md:text-3xl">Contact Us</h1>
               <form
                  className="form-control"
                  onSubmit={sendEmail}
                  ref={formRef}
               >
                  <div className="py-2">
                     <label className="label-text md:font-semibold mb-2 block text-lg">
                        Name :
                     </label>
                     <input
                        className="input input-bordered max-w-lg w-full border-2"
                        type="text"
                        placeholder="Full Name"
                        required
                        name="username"
                     />
                  </div>
                  <div className="py-2">
                     <label className="label-text md:font-semibold mb-2 block text-lg">
                        Email :
                     </label>
                     <input
                        className="input input-bordered max-w-lg w-full border-2"
                        type="email"
                        placeholder="Active Email"
                        required
                        name="email"
                     />
                  </div>
                  <div className="py-2">
                     <label className="label-text md:font-semibold mb-2 block text-lg">
                        Subject :
                     </label>
                     <input
                        className="input input-bordered max-w-lg w-full border-2"
                        type="text"
                        placeholder="Subject"
                        required
                        name="subject"
                     />
                  </div>
                  <div className="py-2">
                     <label className="label-text md:font-semibold mb-2 block text-lg">
                        Message :
                     </label>
                     <textarea
                        className="textarea textarea-bordered max-w-[100%] w-full"
                        rows={5}
                        required
                        name="message"
                     ></textarea>
                  </div>
                  <button className="btn max-w-xs w-full" type="submit">
                     Send Message
                  </button>
               </form>
            </section>
         </main>
      </>
   );
};

export default Contact;
