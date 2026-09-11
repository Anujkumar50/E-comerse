

import ProductsDetails from './components/Product/ProductDetails'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';

import Register from './components/Register/Register';
import Login from './components/Login/Login';

function App() {
  

  return (

    <>
    <Routes>
      <Route path="/ProductDetails" element={<ProductsDetails />} ></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path='/register' element={<Register />}></Route>
      <Route path='/' element={<Login />}></Route>
    </Routes>
    
    </>
  )
}

export default App;
