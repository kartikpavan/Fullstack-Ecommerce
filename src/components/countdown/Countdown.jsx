import React from "react";

const Countdown = () => {
   return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
         <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono md:text-2xl">
               <span style={{ "--value": 50 }}></span>
            </span>
            days
         </div>
         <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono md:text-2xl">
               <span style={{ "--value": 10 }}></span>
            </span>
            hours
         </div>
         <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono md:text-2xl">
               <span style={{ "--value": 24 }}></span>
            </span>
            min
         </div>
         <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
            <span className="countdown font-mono md:text-2xl">
               <span style={{ "--value": 1 }}></span>
            </span>
            sec
         </div>
      </div>
   );
};

export default Countdown;
