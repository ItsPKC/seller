import { useState, createContext, useEffect } from "react";
import "./App.css";
import AddMed from "./Component/AddMed";
import Header from "./Component/Header";
import Med from "./Component/Med";
import Cart from "./Component/Cart";
import axios from "axios";

export const Contex = createContext();

function App() {
  const [med, setmed] = useState([]);
  const [cart, setcart] = useState({});
  const [opencart, setopencart] = useState(false);
  const api = "8853329d09c242f795d2577e90aa0c41";

  // const getmed = async () => {
  //   await axios.get(`https://crudcrud.com/api/${api}/med`).then((value) => {
  //     console.log(value);
  //   });
  // };

  const updatemed = async () => {
    try {
      // await axios
      //   .put(`https://crudcrud.com/api/${api}/med`, { id: "Pankjdk" })
      //   .then((value) => {
      //     console.log(value.data);
      //   });

      await axios.post(`https://crudcrud.com/api/${api}/store`, {});
    } catch (e) {
      console.log(e.data);
    }
  };

  // const getcart = async () => {
  //   await axios.get(`https://crudcrud.com/api/${api}/cart`).then((value) => {
  //     console.log(value.data);
  //   });
  // };

  const updatecart = async () => {
    await axios.post(`https://crudcrud.com/api/${api}/cart`, cart);
  };

  const makeCrudFolder = async () => {
    await axios.post(`https://crudcrud.com/api/${api}/seller`, {
      cart: cart,
      med: med,
    });
  };

  useEffect(() => {
    // getcart();
    // getmed();
    // updatemed();
    makeCrudFolder();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Contex.Provider
      value={{ med, setmed, cart, setcart, setopencart, updatecart, updatemed }}
    >
      <div className="App">
        <Header />
        {opencart && <Cart />}
        <AddMed />
        <hr></hr>
        <Med />
      </div>
    </Contex.Provider>
  );
}

export default App;
