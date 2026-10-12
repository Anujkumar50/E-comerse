import { useEffect, useState , useContext} from "react";
import { ValueContext } from "../context/Context";
import axios from "axios";
const Cards = ()=>{
     const [Product, setProduct] = useState([]);
    
     const { addToCart } = useContext(ValueContext);


       useEffect(() => {
    axios
      .get("http://localhost:1200/products")
      .then((res) => {
        setProduct(res.data);
      });
  }, []);

    return(
        <>
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
                All Products
              </h2>
            </div>

            <span className="text-secondary">
              {Product.length} 
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

                   <button
  type="button"
  className="btn btn-primary btn-sm px-3"
  onClick={() => addToCart(product)}
  style={{
    borderRadius: "8px",
  }}
>
  Add +
</button>

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>
      </section>
        
        </>
    )

 }
 export default Cards;