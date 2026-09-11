import axios from 'axios';
import { useFormik } from 'formik';
import *as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {

  const navigate = useNavigate();

    const validate = yup.object({

        name:yup.string().required("Name is require"),
        email:yup.string().email().required("Email is require"),
       password: yup.string().required("Password is required")

    })

    const formik = useFormik({
        initialValues:{
            name:"",
            email:"",
            password:""
        },
        validationSchema:validate,
        onSubmit:async (values) =>{
            try{
            const res = await axios.post("http://localhost:1200/register" , values);
            console.log(res.data);
            alert(res.data);
            alert("register Sucessfully");
           navigate("/Login");

        }catch(error){
            console.log(error);
            alert("not register");
        }
    }

    })
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <h1>Register form</h1>
        <dl>
            <dd>Name</dd>
            <dt><input type='text' 
            name='name'
            placeholder='Enter the name'
            onChange={formik.handleChange}
            value={formik.values.name}

            
            />
            </dt>
            {formik.touched.name && formik.errors.name && (
  <span>{formik.errors.name}</span>
)}

             <dd>Email</dd>
            <dt><input type='email' 
            name='email'
            placeholder='Enter the Email'
            onChange={formik.handleChange}
            value={formik.values.email}

            
            />
            </dt>
            {formik.errors.email}
             <dd>Password</dd>
            <dt><input type='password' 
            name='password'
            placeholder='Enter the password'
            onChange={formik.handleChange}
            value={formik.values.password}
            

            
            />
            </dt>
            {formik.errors.password}
            
        </dl>

        <button type='submit'>Submit</button>

      </form>
    </div>
  )
}

export default Register;