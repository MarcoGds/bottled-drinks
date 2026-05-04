import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);
  const userId = 1;

  useEffect(() => {
    fetch(`https://bottled-drinks-api.onrender.com/cart/${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log("Cart data:", data);
        setCart(data);
      })
      .catch(err => console.error(err));
  }, []);

    const total = Array.isArray(cart)
      ? cart.reduce((sum, item) => sum + (item.productPrice || 0) * item.quantity, 0)
      : 0;

    const removeItem = async (id) => {
      await fetch(`https://bottled-drinks-api.onrender.com/cart/${userId}`, {
        method: "DELETE"
      });

      setCart(cart.filter(item => item.id !== id));
};

  return (
    <div>
      <h1>Your Cart</h1>
      <p>Total: ${total.toFixed(2)}</p>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
            <h3>{item.productName}</h3>
            <p>Price: ${item.productPrice}</p>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

console.log("Cart data:", data);

export default CartPage;