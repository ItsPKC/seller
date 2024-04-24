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

  const getdata = async () => {
    await axios.get(`https://crudcrud.com/api/${api}/seller`).then((value) => {
      console.log(value.data);
      for (const i of value.data) {
        setcart(i["cart"]);
        setmed(i["med"]);
      }
    });
  };

  const updatedata = async () => {
    try {
      let id = "";
      await axios
        .get(`https://crudcrud.com/api/${api}/seller`)
        .then((value) => {
          console.log(value.data);
          for (const i of value.data) {
            id = i._id;
          }
        });

      await axios.post(`https://crudcrud.com/api/${api}/seller/${id}`, {
        cart: cart,
        med: med,
      });
    } catch (e) {
      console.log(e.data);
    }
  };

  useEffect(() => {
    getdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Contex.Provider
      value={{ med, setmed, cart, setcart, setopencart, updatedata }}
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
