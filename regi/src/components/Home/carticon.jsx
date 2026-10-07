import { useState } from "react";

const CartIcon = () => {
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount(cartCount + 1);
  };

  return (
    <div>
      {/* Cart Icon */}
      <div
        style={{
          position: "relative",
          display: "inline-block",
          cursor: "pointer",
        }}
      >
        <i
          className="bi bi-cart4"
          style={{ fontSize: "28px" }}
        ></i>

        {/* Circle Badge */}
        {cartCount > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-10px",
              background: "red",
              color: "white",
              width: "20px",
              height: "20px",
              borderRadius: "50%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {cartCount}
          </span>
        )}
      </div>

      <button
        className="btn btn-primary ms-3"
        onClick={addToCart}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default CartIcon;