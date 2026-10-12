import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

export function ProductsDetails() {
  const navigate = useNavigate();

  const validationSchema = yup.object({
    title: yup.string().required("Title is required"),

    price: yup
      .number()
      .typeError("Price must be a number")
      .required("Price is required"),

    description: yup
      .string()
      .required("Description is required")
      .min(20, "Minimum 20 characters required"),

    category: yup.string().required("Category is required"),

    stock: yup
      .number()
      .typeError("Stock must be a number")
      .required("Stock is required"),

    image: yup.mixed().required("Image is required"), // 👈 IMPORTANT
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      stock: "",
      image: null,
    },

    validationSchema,

   onSubmit: async (values) => {
try {
const formData = new FormData();

formData.append("title", values.title);
formData.append("price", values.price);
formData.append("description", values.description);
formData.append("category", values.category);
formData.append("stock", values.stock);
formData.append("image", values.image);



// Category ke according API select hogi

const API_URL = import.meta.env.VITE_API_URL;

const apiRoutes = {
   Electronics: `${API_URL}/electronics`,
  Clothes: `${API_URL}/clothes`,
  Fashens: `${API_URL}/fashens`,
  Home: `${API_URL}/home`,
};

const apiUrl = apiRoutes[values.category];

if (!apiUrl) {
  alert("Please select a category");
  return;
}

const res = await axios.post(apiUrl, formData);

console.log(res.data);

if (res.data.message === "Product Saved") {
  alert("Product saved successfully");
  navigate("/home");
} else {
  alert("Product not inserted");
}


} catch (error) {
console.log(error.response?.data || error.message);
alert("Error occurred");
}
},

  });

  return (
    <div className="d-flex justify-content-center">
      <div
        className="p-3"
        style={{ width: "500px", border: "2px solid black" }}
      >
        <form onSubmit={formik.handleSubmit}>
          <h2 className="text-center">Product Details</h2>

          {/* TITLE */}
          <input
            className="form-control mt-2"
            name="title"
            placeholder="Title"
            onChange={formik.handleChange}
            value={formik.values.title}
          />
          {formik.touched.title && formik.errors.title && (
            <p className="text-danger">{formik.errors.title}</p>
          )}

          {/* PRICE */}
          <input
            className="form-control mt-2"
            name="price"
            placeholder="Price"
            onChange={formik.handleChange}
            value={formik.values.price}
          />
          {formik.touched.price && formik.errors.price && (
            <p className="text-danger">{formik.errors.price}</p>
          )}

          {/* DESCRIPTION */}
          <input
            className="form-control mt-2"
            name="description"
            placeholder="Description"
            onChange={formik.handleChange}
            value={formik.values.description}
          />
          {formik.touched.description && formik.errors.description && (
            <p className="text-danger">{formik.errors.description}</p>
          )}

          {/* CATEGORY */}
         <select
className="form-control mt-2"
name="category"
onChange={formik.handleChange}
onBlur={formik.handleBlur}
value={formik.values.category}

>

  <option value="All Products">All Products</option>
  <option value="Electronics">Electronics</option>
  <option value="Clothes">Clothes</option>
  <option value="Fashens">Fashens</option>
  <option value="Home">Home</option>
</select>



          {formik.touched.category && formik.errors.category && (
            <p className="text-danger">{formik.errors.category}</p>
          )}

          {/* STOCK */}
          <input
            className="form-control mt-2"
            name="stock"
            placeholder="Stock"
            onChange={formik.handleChange}
            value={formik.values.stock}
          />
          {formik.touched.stock && formik.errors.stock && (
            <p className="text-danger">{formik.errors.stock}</p>
          )}

          {/* IMAGE */}
          <input
            className="form-control mt-2"
            type="file"
            onChange={(event) => {
              formik.setFieldValue("image", event.currentTarget.files[0]);
            }}
          />
          {formik.touched.image && formik.errors.image && (
            <p className="text-danger">{formik.errors.image}</p>
          )}

          <button type="submit" className="btn btn-primary form-control mt-3">
            Submit Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default ProductsDetails;
