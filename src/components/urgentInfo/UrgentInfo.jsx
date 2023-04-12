import React from "react";

const UrgentInfo = () => {
   return (
      <div>
         {/* Put this part before </body> tag */}
         <input type="checkbox" id="my-modal-69" className="modal-toggle" />
         <label htmlFor="my-modal-69" className="modal cursor-pointer">
            <label className="modal-box relative" htmlFor="">
               <h3 className="text-lg font-bold">
                  SORRY, this feature is currently Disabled due to Spamming
               </h3>
               <p className="py-4">
                  Still wanna test the app ? contact <br />
                  <a href="mailto: kartikpavan2@gmail.com" className="text-red-500 font-semibold">
                     kartikpavan2@gmail.com
                  </a>
               </p>
            </label>
         </label>
      </div>
   );
};

export default UrgentInfo;
