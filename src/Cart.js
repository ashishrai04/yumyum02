import { useState } from "react";

function Cart({ cart, setCart }) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  const increaseQty = (index) => {
    const newCart = [...cart];
    newCart[index].qty += 1;
    setCart(newCart);
  };

  const decreaseQty = (index) => {
    const newCart = [...cart];

    if (newCart[index].qty === 1) {
      newCart.splice(index, 1);
    } else {
      newCart[index].qty -= 1;
    }

    setCart(newCart);
  };

  const removeItem = (index) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const checkout = () => {
    setOrderPlaced(true);
    setCart([]);
    setTimeout(() => setOrderPlaced(false), 2000);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div>
      <h2>Your Cart</h2>

      {orderPlaced && (
        <h3 style={{ textAlign: "center", color: "green" }}>
          Order placed successfully!
        </h3>
      )}

      {cart.length === 0 && !orderPlaced && (
        <h3 style={{ textAlign: "center" }}>Cart is empty</h3>
      )}

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>{item.name}</span>

          <div>
            <button onClick={() => decreaseQty(index)}>-</button>
            <span style={{ margin: "0 10px" }}>{item.qty}</span>
            <button onClick={() => increaseQty(index)}>+</button>
          </div>

          <span>{item.price * item.qty}</span>

          <button onClick={() => removeItem(index)}>
            Remove
          </button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h3 style={{ textAlign: "center" }}>Total: {total}</h3>

          <div style={{ textAlign: "center", marginTop: "10px" }}>
            <button onClick={checkout}>Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
