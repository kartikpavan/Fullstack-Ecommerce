import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const AdminRoute = ({ children }) => {
   const { email } = useSelector((store) => store.auth);
   if (email === import.meta.env.VITE_ADMIN_KEY) return children;
   return (
      <section className="flex flex-col items-center justify-center w-full page gap-5">
         <h2 className="text-4xl font-bold">PERMISSION DENIED</h2>
         <p className="text-xl">This page can only be viewed by admin.</p>
         <Link to="/" className="btn btn-error btn-outline btn-lg">
            &larr; Take me back home
         </Link>
         {/*  */}
      </section>
   );
};

export const AdminOnlyLink = ({ children }) => {
   const { email } = useSelector((store) => store.auth);
   if (email === import.meta.env.VITE_ADMIN_KEY) return children;
   return null;
};

export default AdminRoute;
