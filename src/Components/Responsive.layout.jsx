import React from "react";
import Navbar from "./TheNavBar.jsx";

const ResponsiveLayout = ({ children }) => {
   let getItems = () => {
      return [{ label: "Chocolate", to: "/chocolate" }, { label: "Eggs", to: "/egg" }, { label: "Milk", to: "/milk" }];
   };
   return (
      <>
         <Navbar items={getItems} />
         <div className="container-fluid">{children}</div>
         {/* TODO: Add a footer here */}
      </>
   );
};

export default ResponsiveLayout;