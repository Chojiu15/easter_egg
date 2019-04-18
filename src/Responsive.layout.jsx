import React from "react";
import Navbar from "./Components/TheNavBar.jsx";
import Particle from "./Components/Particle";

const ResponsiveLayout = ({ children }) => {
   let getItems = () => {
      return [{ label: "Chocolate", to: "/chocolate" }, { label: "Eggs", to: "/eggs" }, { label: "Milk", to: "/milk" }];
   };
   return (
      <>
         <Particle />
         <Navbar items={getItems} />
         <div className="container-fluid">{children}</div>
         {/* TODO: Add a footer here */}
      </>
   );
};

export default ResponsiveLayout;