import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";

export function ProductsDetails() {

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

    image: yup.mixed().required("Image is required")   // 👈 IMPORTANT
  });

  const formik = useFormik({
    initialValues: {
      title: "",
      price: "",
      description: "",
      category: "",
      stock: "",
      image: null
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

        // 👇 image send
        formData.append("image", values.image);

        const res = await axios.post(
          "http://localhost:1200/productdetails",
          formData,
          {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }
        );

        console.log(res.data);

        if (res.data.massage === "productsave") {
          alert("Product saved successfully");
        } else {
          alert("Product not inserted");
        }

      } catch (error) {
        console.log(error);
        alert("Error occurred");
      }
    }
  });

  return (
    <div className="d-flex justify-content-center">
      <div className="p-3" style={{ width: "500px", border: "2px solid black" }}>

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
          <input
            className="form-control mt-2"
            name="category"
            placeholder="Category"
            onChange={formik.handleChange}
            value={formik.values.category}
          />
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