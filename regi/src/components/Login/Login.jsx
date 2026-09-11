import axios from "axios"
import { useFormik } from "formik"
import { Link, } from "react-router-dom";
import *as yup from 'yup';
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()

    const validate  = yup.object({
        email:yup.string().email().required("email is required"),
        password:yup.string().required("password is rewuire").min(6, "Six digit id required")

    })

    const formik = useFormik({
        initialValues:{
            email:"",
            password:""
        },
        validationSchema:validate,
       onSubmit: async (values) => {
      
  try {
    const res = await axios.post(
      "http://localhost:1200/login",
      values
    );

    console.log(res.data);

    alert(res.data.message);

    localStorage.setItem(
      "token",
      res.data.token
    );

    navigate("/home");

  } catch (error) {
    console.log(error);

    alert(
      error.response?.data?.message ||
      "Login Failed"
    );
  }
}

    })





  return (
    <div>
<form onSubmit={formik.handleSubmit}>
    <h1>Login form</h1>
    <dl>
        <dd>Email</dd>
        <dt><input type="email"
        placeholder="Enter the Email"
        value={formik.values.name}
        name="email"
        onChange={formik.handleChange}
        
        /></dt>
        {formik.errors.email}
        <dd>Password</dd>
        <dt><input type="password"
        placeholder="Enter the password"
        name="password"
        value={formik.values.password}
        onChange={formik.handleChange} 
        
        
        />
        
        </dt>
        {formik.errors.password}
    </dl>
    <button type="submit">Login</button>
    <br></br>
    <Link to="/register">for register</Link>
</form>
    </div>
  )
}

export default Login
