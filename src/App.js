import { useState } from "react";
import Home from "./Home";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const existing = cart.find(i => i.id === item.id);

    if (existing) {
      setCart(cart.map(i =>
        i.id === item.id ? { ...i, qty: i.qty + 1 } : i
      ));
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", color: "#ff6b6b" }}>
        YumYums
      </h1>

      <Home addToCart={addToCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
