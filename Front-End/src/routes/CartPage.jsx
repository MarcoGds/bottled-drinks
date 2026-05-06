import { useEffect, useState } from "react";

function CartPage() {
  const userId = 1;
  const [cart, setCart] = useState([]);
  
  const fetchCart = () => {
  fetch(`https://bottled-drinks-api.onrender.com/cart/${userId}`)
    .then(res => res.json())
    .then(data => {
      console.log("Cart data:", data);
      setCart(Array.isArray(data) ? data : []);
    });
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const updateQuantity = async (id, newQuantity) => {
    if (!id) {
      console.error("ID is undefined!");
      return;
    }

    if (newQuantity < 1) return;

    await fetch(`https://bottled-drinks-api.onrender.com/cart/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        quantity: newQuantity
      })
    });

    fetchCart();
  };

    const total = Array.isArray(cart)
      ? cart.reduce((sum, item) => sum + (item.productPrice || 0) * item.quantity, 0)
      : 0;

    const removeItem = async (id) => {
    if (!id) {
      console.error("ID is undefined!");
      return;
    }

    await fetch(`https://bottled-drinks-api.onrender.com/cart/${id}`, {
      method: "DELETE"
    });

    fetchCart();
  };

  return (
    <div>
      <h1>Your Cart</h1>
      <p>Total: ${total.toFixed(2)}</p>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
          Array.isArray(cart) && cart.map(item => (
          <div key={item.id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
            <h3>{item.productName}</h3>
            <p>Price: ${item.productPrice}</p>
            <div>
              <button   disabled={item.quantity <= 1} onClick={() => item.id && updateQuantity(item.id, item.quantity - 1)}>
                -
              </button>
              <span>{item.quantity}</span>
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                +
              </button>
            </div>
            <button onClick={() => removeItem(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
export default CartPage;