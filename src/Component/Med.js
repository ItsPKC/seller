import React, { useContext } from "react";
import { Contex } from "../App";
import "./Med.css";

const Med = () => {
  const { med, setmed, cart, setcart } = useContext(Contex);
  const addToCart = (i, size) => {
    if (+med[i][size] === 0) {
      return;
    }

    const currentMedID = med[i]["id"];
    // console.log(cart[currentMedID] === undefined);

    if (cart[currentMedID] === undefined) {
      const temp = { ...med[i] };
      temp["l"] = 0;
      temp["m"] = 0;
      temp["s"] = 0;
      temp[size] = 1;
      setcart({ ...cart, [currentMedID]: temp });
    } else {
      const temp = { ...cart[currentMedID] };
      temp[size] = +temp[size] + 1;
      setcart({ ...cart, [currentMedID]: temp });
    }

    const temp2 = [...med]; // To create new ref other wise it will not update
    temp2[i][size] = +med[i][size] - 1;
    setmed(temp2);

    // console.log(cart);
  };

  return (
    <div className="med">
      <div>
        <div>Name</div>
        <div>Description</div>
        <div>Price</div>
        <div>Large</div>
        <div>Medium</div>
        <div>Small</div>
      </div>
      {med.map((m, i) => {
        return (
          <div key={i.toString()}>
            <div>{m["name"]}</div>
            <div>{m["des"]}</div>
            <div>{+m["price"]}</div>
            <div
              className="addToCart"
              onClick={() => addToCart(i, "l")}
              style={{ opacity: +m["l"] === 0 ? 0.5 : 1 }}
            >
              Buy Large ({+m["l"]})
            </div>
            <div
              className="addToCart"
              onClick={() => addToCart(i, "m")}
              style={{ opacity: +m["m"] === 0 ? 0.5 : 1 }}
            >
              Buy Medium ({+m["m"]})
            </div>
            <div
              className="addToCart"
              onClick={() => addToCart(i, "s")}
              style={{ opacity: +m["s"] === 0 ? 0.5 : 1 }}
            >
              Buy Small ({+m["s"]})
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Med;
