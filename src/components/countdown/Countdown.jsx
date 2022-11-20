import React from "react";

const Countdown = () => {
   return (
      <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
         <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
               <span style={{ "--value": 15 }}></span>
            </span>
            d
         </div>
         <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
               <span style={{ "--value": 10 }}></span>
            </span>
            h
         </div>
         <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
               <span style={{ "--value": 24 }}></span>
            </span>
            m
         </div>
         <div className="flex flex-col">
            <span className="countdown font-mono text-5xl">
               <span style={{ "--value": 45 }}></span>
            </span>
            s
         </div>
      </div>
   );
};

export default Countdown;
