
import { useState } from "react";
import { Link } from "react-router-dom";
import CartIcon from "./carticon";
import Cards from "./Cards"
import Categories from "./Categories";

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState("All Products");
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f5f7fb",
      }}
    >

      {/* ================= NAVBAR ================= */}
      <nav
        className="navbar navbar-expand-lg sticky-top"
        style={{
          background: "#ffffff",
          boxShadow: "0 3px 15px rgba(0,0,0,0.08)",
          padding: "14px 0",
        }}
      >
        <div className="container">

          {/* Logo */}
          <Link
            className="navbar-brand fw-bold"
            to="/home"
            style={{
              fontSize: "27px",
              color: "#111827",
              letterSpacing: "-1px",
            }}
          >
            <span style={{ color: "#2563eb" }}>Shop</span>Cart
          </Link>

          {/* Mobile Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="collapse navbar-collapse"
            id="navbarSupportedContent"
          >

            {/* Navigation */}
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a
                  className="nav-link active fw-semibold px-3"
                  href="#"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <Link
                  to="/ProductDetails"
                  className="nav-link fw-semibold px-3"
                >
                  Add Product
                </Link>
              </li>

              <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      /> 
                          

            </ul>
             

            {/* Search */}
            <form
              className="d-flex"
              role="search"
              style={{ gap: "8px" }}
            >
              <input
                className="form-control"
                type="search"
                placeholder="Search products..."
                style={{
                  width: "210px",
                  borderRadius: "8px",
                }}
              />

              <button
                className="btn btn-primary px-3"
                type="submit"
                
                style={{
                  borderRadius: "8px",
                }}
              >
                Search
              </button>
              <CartIcon />
               <div>
      {/* Cart Icon */}
      

     
    </div>

              
            </form>

          </div>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}
      <section
        className="py-5"
        style={{
          background:
            "linear-gradient(135deg, #eaf2ff 0%, #ffffff 100%)",
        }}
      >
        <div className="container py-4">

          <div
            className="row align-items-center"
            style={{ minHeight: "300px" }}
          >

            <div className="col-lg-7">

              <p
                className="fw-bold text-primary mb-2"
                style={{
                  letterSpacing: "2px",
                  fontSize: "14px",
                }}
              >
                WELCOME TO OUR STORE
              </p>

              <h1
                className="fw-bold mb-3"
                style={{
                  fontSize: "52px",
                  lineHeight: "1.1",
                  color: "#111827",
                }}
              >
                Discover Products
                <br />
                <span className="text-primary">
                  You'll Love
                </span>
              </h1>

              <p
                className="text-secondary mb-4"
                style={{
                  fontSize: "17px",
                  maxWidth: "550px",
                }}
              >
                Explore our collection of quality products
                at amazing prices. Find everything you need
                in one place.
              </p>

              <button className="btn btn-primary px-4 py-2 fw-semibold rounded-3">
                Shop Now
              </button>

            </div>

            <div className="col-lg-5 text-center d-none d-lg-block">

              <div
                className="bg-white rounded-4 shadow-sm d-flex align-items-center justify-content-center"
                style={{
                  height: "250px",
                  fontSize: "90px",
                }}
              >
                🛍️
              </div>

            </div>

          </div>
        </div>
      </section>



       <Cards selectedCategory={selectedCategory} />
     


      {/* ================= FOOTER ================= */}
      <footer
        className="py-4 mt-4"
        style={{
          background: "#111827",
          color: "#ffffff",
        }}
      >
        <div className="container text-center">

          <h5 className="fw-bold">
            <span className="text-primary">Shop</span>Cart
          </h5>

          <p
            className="mb-0"
            style={{
              color: "#9ca3af",
              fontSize: "14px",
            }}
          >
            © 2026 ShopCart. All Rights Reserved.
          </p>

        </div>
      </footer>

    </div>
  );
};

export default Home;
