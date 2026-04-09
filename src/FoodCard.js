import { useState } from "react";

function FoodCard({ item, addToCart }) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1000);
  };

  return (
    <div className="card">
      <h3>{item.name}</h3>
      <p>{item.price}</p>
      <button onClick={handleClick}>
        {added ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}

export default FoodCard;