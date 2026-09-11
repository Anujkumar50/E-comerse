import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const Home = () => {

    const [Product , setProduct] = useState([])

    useEffect(() => {
  axios.get("http://localhost:1200/products")
    .then((res) => {
      setProduct(res.data);
    });
}, []);


  return (
    <div className="fixed">

        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">Navbar</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <Link to="/ProductDetails" className="nav-link">Add Product</Link>
        </li>
        <li className="nav-item dropdown">
          <a className ="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
             <li><hr className="dropdown-divider"></hr></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

<div className="d-flex justify-content-around p-2">
{
  Product.map((product) => (
    <div key={product._id} className="card" style={{ width: "18rem" }}>
      <img
        src={product.image}
        className="card-img-top"
        alt={product.title}
      />

      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>

        <p className="card-text">
          {product.description}
        </p>

        <a href="#" className="btn btn-primary">
          Add +
        </a>
      </div>
    </div>
  ))
}
</div>









    </div>
  )
}

export default Home;