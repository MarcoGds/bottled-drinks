import { useEffect, useState } from "react";

const userId = 1;

const addToCart = async (productId) => {
  try {
    await fetch("https://bottled-drinks-api.onrender.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        userId: userId,
        productId: productId,
        quantity: 1
      })
    });

    alert("Added to cart!");
  } catch (err) {
    console.error(err);
  }
};

function ProductPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://bottled-drinks-api.onrender.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div>
      <h1>Drinks Store</h1>

      {products.map(product => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button onClick={() => addToCart(product.id)}>
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;