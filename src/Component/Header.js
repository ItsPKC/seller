import React, { useContext } from "react";
import "./Header.css";
import { Contex } from "../App";

const Header = () => {
  const { setopencart } = useContext(Contex);
  return (
    <div className="header">
      <div
        className="cart-button"
        onClick={() => {
          setopencart(true);
        }}
      >
        Cart
      </div>
    </div>
  );
};

export default Header;
