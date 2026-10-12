
import { useState } from "react";

const Categories = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const [open, setOpen] = useState(false);

  // Fixed category list
  const categories = [
    "All Products",
    "Phone",
    "Fashens",
    "Electronics",
    "Clothes",
    "Home",
  ];

  const handleCategory = (item) => {
    setSelectedCategory(item);
    setOpen(false);

    console.log("Selected category:", item);
  };

  return (
    <li
      className="nav-item dropdown list-unstyled"
      style={{ position: "relative" }}
    >
      <button
        type="button"
        className="nav-link dropdown-toggle fw-semibold px-3"
        onClick={() => setOpen(!open)}
      >
        {selectedCategory}
      </button>

      {open && (
        <ul
          className="dropdown-menu show shadow border-0 rounded-3"
          style={{ display: "block" }}
        >
          {categories.map((item) => (
            <li key={item}>
              <button
                type="button"
                className={`dropdown-item ${
                  selectedCategory === item ? "active" : ""
                }`}
                onClick={() => handleCategory(item)}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default Categories;