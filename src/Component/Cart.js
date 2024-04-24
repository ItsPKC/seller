import React, { useContext, useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./Cart.css";
import { Contex } from "../App";

const Cart = () => {
  const { cart, setopencart, setcart } = useContext(Contex);

  const [totalBill, settotalBill] = useState(0);

  useEffect(() => {
    let temp = 0;
    Object.keys(cart).map((m) => {
      temp +=
        +cart[m]["price"] * (+cart[m]["l"] + +cart[m]["m"] + +cart[m]["s"]);
      return 0;
    });
    settotalBill(temp);
  }, [cart]);

  return ReactDOM.createPortal(
    <div
      className="cart-container"
      onClick={() => {
        setopencart(false);
      }}
    >
      <div className="cart">
        <center>
          <h1>Cart item</h1>
        </center>
        <div>
          <div>Name</div>
          <div>Description</div>
          <div>Price</div>
          <div>L</div>
          <div>M</div>
          <div>S</div>
        </div>
        <br></br>
        {Object.keys(cart).map((m, i) => {
          return (
            <div key={i.toString()}>
              <div>{cart[m].name}</div>
              <div>{cart[m].des}</div>
              <div>{+cart[m].price}</div>
              <div>{+cart[m].l}</div>
              <div>{+cart[m].m}</div>
              <div>{+cart[m].s}</div>
            </div>
          );
        })}

        <div className="total">
          <div>Total</div>
          <div>₹{totalBill}</div>
        </div>

        <footer
          className="footer"
          onClick={() => {
            console.log(cart);
            console.log("Order placed : ₹" + totalBill);
            setcart({});
          }}
        >
          <div>Place order</div>
        </footer>
      </div>
    </div>,
    document.getElementById("root-cart")
  );
};

export default Cart;
