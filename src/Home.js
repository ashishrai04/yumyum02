import foodItems from "./data";
import FoodCard from "./FoodCard";

function Home({ addToCart }) {
  return (
    <>
      <h2>YumYums Menu</h2>
      <div className="container">
        {foodItems.map(item => (
          <FoodCard key={item.id} item={item} addToCart={addToCart} />
        ))}
      </div>
    </>
  );
}

export default Home;
