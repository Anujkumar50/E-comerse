
import { useContext } from "react";
import { ValueContext } from "../context/Context";

const CartIcon = () => {
  const { value } = useContext(ValueContext);

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        type="button"
        aria-label={`Shopping cart, ${value} items`}
        style={{
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "10px 14px",
          border: "1px solid #e5e7eb",
          borderRadius: "12px",
          backgroundColor: "#ffffff",
          color: "#1f2937",
          cursor: "pointer",
          transition: "all 0.2s ease",
        }}
      >
        <i
          className="bi bi-cart4"
          style={{
            fontSize: "26px",
            lineHeight: 1,
          }}
        />

        <span
          style={{
            fontSize: "14px",
            fontWeight: "600",
          }}
        >
        
        </span>

        {value > 0 && (
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-8px",
              minWidth: "21px",
              height: "21px",
              padding: "0 5px",
              borderRadius: "50px",
              backgroundColor: "#ef4444",
              color: "#ffffff",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "11px",
              fontWeight: "700",
              border: "2px solid white",
              boxSizing: "content-box",
            }}
          >
            {value}
          </span>
        )}
      </button>
    </div>
  );
};

export default CartIcon;
