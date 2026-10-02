
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [Product, setProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1200/products")
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

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

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle fw-semibold px-3"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                >
                  Categories
                </a>

                <ul className="dropdown-menu shadow border-0 rounded-3">

                  <li>
                    <a className="dropdown-item" href="#">
                      Electronics
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Fashion
                    </a>
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      Home & Kitchen
                    </a>
                  </li>

                  <li>
                    <hr className="dropdown-divider" />
                  </li>

                  <li>
                    <a className="dropdown-item" href="#">
                      All Products
                    </a>
                  </li>

                </ul>
              </li>

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


      {/* ================= PRODUCTS ================= */}
      <section className="py-5">

        <div className="container">

          {/* Heading */}
          <div className="d-flex justify-content-between align-items-end mb-4">

            <div>
              <p
                className="text-primary fw-bold mb-1"
                style={{
                  fontSize: "13px",
                  letterSpacing: "1.5px",
                }}
              >
                OUR COLLECTION
              </p>

              <h2
                className="fw-bold mb-0"
                style={{
                  color: "#111827",
                }}
              >
                Featured Products
              </h2>
            </div>

            <span className="text-secondary">
              {Product.length} Products
            </span>

          </div>


          {/* Product Cards */}
          <div className="row g-4">

            {Product.map((product) => (

              <div
                key={product._id}
                className="col-12 col-sm-6 col-lg-4 col-xl-3"
              >

                <div
                  className="card h-100 border-0 overflow-hidden"
                  style={{
                    borderRadius: "16px",
                    boxShadow:
                      "0 5px 20px rgba(0,0,0,0.07)",
                    transition: "0.3s",
                  }}
                >

                  {/* Image */}
                  <div
                    className="position-relative"
                    style={{
                      height: "240px",
                      background: "#f1f3f6",
                    }}
                  >

                    <img
                      src={product.image}
                      className="w-100 h-100"
                      alt={product.title}
                      style={{
                        objectFit: "cover",
                      }}
                    />

                    <span
                      className="badge bg-primary position-absolute"
                      style={{
                        top: "12px",
                        left: "12px",
                        padding: "7px 11px",
                        borderRadius: "20px",
                      }}
                    >
                      New
                    </span>

                  </div>


                  {/* Card Body */}
                  <div className="card-body p-3">

                    <small
                      className="text-primary fw-bold"
                      style={{
                        textTransform: "uppercase",
                        fontSize: "11px",
                        letterSpacing: "1px",
                      }}
                    >
                      Product
                    </small>

                    <h5
                      className="card-title fw-bold mt-1 mb-2"
                      style={{
                        color: "#111827",
                      }}
                    >
                      {product.title}
                    </h5>

                    <p
                      className="card-text text-secondary"
                      style={{
                        fontSize: "14px",
                        lineHeight: "1.5",
                        minHeight: "42px",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {product.description}
                    </p>


                    {/* Price + Button */}
                    <div className="d-flex justify-content-between align-items-center mt-3">

                      <h5
                        className="fw-bold mb-0"
                        style={{
                          color: "#111827",
                        }}
                      >
                        ₹{product.price}
                      </h5>

                      <a
                        href="#"
                        className="btn btn-primary btn-sm px-3"
                        style={{
                          borderRadius: "8px",
                        }}
                      >
                        Add +
                      </a>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>


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
