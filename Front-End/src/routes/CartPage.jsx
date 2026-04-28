import { useEffect, useState } from "react";

function CartPage() {
  const [cart, setCart] = useState([]);
  const userId = 1;

  useEffect(() => {
    fetch(`http://localhost:8080/cart/${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log("Cart data:", data); // 👈 VERY IMPORTANT
        setCart(data);
      })
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cart.map(item => (
          <div key={item.id} style={{ border: "1px solid black", margin: 10, padding: 10 }}>
            <p>Product ID: {item.productId}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartPage;