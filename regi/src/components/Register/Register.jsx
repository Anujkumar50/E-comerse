import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const validate = yup.object({
    name: yup.string().required("Name is require"),
    email: yup.string().email().required("Email is require"),
    password: yup.string().required("Password is required"),
  });
  const formik = useFormik({
    initialValues: { name: "", email: "", password: "" },
    validationSchema: validate,
  onSubmit: async (values) => {
  try {
    const res = await axios.post(
      "http://localhost:1200/register",
      values
    );

    console.log(res.data);

    alert(res.data.message);

    navigate("/Home");

  } catch (error) {
    console.log(error);

    alert(error.response?.data?.message || "Registration failed");
  }
},
  });
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #dbeafe, #ede9fe, #fce7f3)",
        padding: "20px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {" "}
      {/* ================= BACKGROUND CIRCLE 1 ================= */}{" "}
      <div
        style={{
          position: "absolute",
          width: "280px",
          height: "280px",
          borderRadius: "50%",
          background: "rgba(37, 99, 235, 0.18)",
          top: "-90px",
          left: "-80px",
          animation: "floatCircle 6s ease-in-out infinite",
        }}
      ></div>{" "}
      {/* ================= BACKGROUND CIRCLE 2 ================= */}{" "}
      <div
        style={{
          position: "absolute",
          width: "350px",
          height: "350px",
          borderRadius: "50%",
          background: "rgba(168, 85, 247, 0.16)",
          bottom: "-130px",
          right: "-100px",
          animation: "floatCircle2 7s ease-in-out infinite",
        }}
      ></div>{" "}
      {/* ================= REGISTER CARD ================= */}{" "}
      <div
        className="shadow-lg"
        style={{
          width: "100%",
          maxWidth: "450px",
          background: "rgba(255,255,255,0.94)",
          backdropFilter: "blur(15px)",
          borderRadius: "24px",
          padding: "38px 40px",
          position: "relative",
          zIndex: 2,
          animation: "cardEntry 0.8s ease-out",
          border: "1px solid rgba(255,255,255,0.8)",
        }}
      >
        {" "}
        {/* ================= ICON ================= */}{" "}
        <div
          className="d-flex justify-content-center align-items-center mx-auto mb-3"
          style={{
            width: "65px",
            height: "65px",
            borderRadius: "18px",
            background: "linear-gradient(135deg, #2563eb, #7c3aed)",
            color: "white",
            fontSize: "28px",
            boxShadow: "0 10px 25px rgba(37,99,235,0.3)",
            animation: "iconFloat 3s ease-in-out infinite",
          }}
        >
          {" "}
          👤{" "}
        </div>{" "}
        {/* ================= HEADING ================= */}{" "}
        <div className="text-center mb-4">
          {" "}
          <h1
            className="fw-bold mb-2"
            style={{ color: "#111827", fontSize: "30px" }}
          >
            {" "}
            Create Account{" "}
          </h1>{" "}
          <p className="mb-0" style={{ color: "#6b7280", fontSize: "14px" }}>
            {" "}
            Register to create your new account{" "}
          </p>{" "}
        </div>{" "}
        {/* ================= FORM ================= */}{" "}
        <form onSubmit={formik.handleSubmit}>
          {" "}
          {/* ================= NAME ================= */}{" "}
          <div className="mb-3">
            {" "}
            <label
              className="form-label fw-semibold"
              style={{ color: "#374151" }}
            >
              {" "}
              Full Name{" "}
            </label>{" "}
            <div style={{ position: "relative" }}>
              {" "}
              <span
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "17px",
                  zIndex: 2,
                }}
              >
                {" "}
                👤{" "}
              </span>{" "}
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="Enter your name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
                style={{
                  height: "50px",
                  paddingLeft: "45px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
              />{" "}
            </div>{" "}
            {formik.touched.name && formik.errors.name && (
              <small
                className="text-danger"
                style={{ display: "block", marginTop: "6px" }}
              >
                {" "}
                {formik.errors.name}{" "}
              </small>
            )}{" "}
          </div>{" "}
          {/* ================= EMAIL ================= */}{" "}
          <div className="mb-3">
            {" "}
            <label
              className="form-label fw-semibold"
              style={{ color: "#374151" }}
            >
              {" "}
              Email Address{" "}
            </label>{" "}
            <div style={{ position: "relative" }}>
              {" "}
              <span
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "17px",
                  zIndex: 2,
                }}
              >
                {" "}
                📧{" "}
              </span>{" "}
              <input
                type="email"
                className="form-control"
                name="email"
                placeholder="Enter your email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                style={{
                  height: "50px",
                  paddingLeft: "45px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
              />{" "}
            </div>{" "}
            {formik.touched.email && formik.errors.email && (
              <small
                className="text-danger"
                style={{ display: "block", marginTop: "6px" }}
              >
                {" "}
                {formik.errors.email}{" "}
              </small>
            )}{" "}
          </div>{" "}
          {/* ================= PASSWORD ================= */}{" "}
          <div className="mb-4">
            {" "}
            <label
              className="form-label fw-semibold"
              style={{ color: "#374151" }}
            >
              {" "}
              Password{" "}
            </label>{" "}
            <div style={{ position: "relative" }}>
              {" "}
              <span
                style={{
                  position: "absolute",
                  left: "14px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  fontSize: "17px",
                  zIndex: 2,
                }}
              >
                {" "}
                🔑{" "}
              </span>{" "}
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
                style={{
                  height: "50px",
                  paddingLeft: "45px",
                  borderRadius: "12px",
                  border: "1px solid #d1d5db",
                  transition: "all 0.3s ease",
                  outline: "none",
                }}
              />{" "}
            </div>{" "}
            {formik.touched.password && formik.errors.password && (
              <small
                className="text-danger"
                style={{ display: "block", marginTop: "6px" }}
              >
                {" "}
                {formik.errors.password}{" "}
              </small>
            )}{" "}
          </div>{" "}
          {/* ================= SUBMIT BUTTON ================= */}{" "}
          <button
            type="submit"
            className="btn w-100 fw-bold text-white"
            style={{
              height: "52px",
              border: "none",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #2563eb, #7c3aed)",
              boxShadow: "0 8px 20px rgba(79,70,229,0.3)",
              transition: "all 0.3s ease",
              fontSize: "16px",
            }}
          >
            {" "}
            Create Account →{" "}
          </button>{" "}
          {/* ================= LOGIN LINK ================= */}{" "}
          <div
            className="text-center mt-4"
            style={{ color: "#6b7280", fontSize: "14px" }}
          >
            {" "}
            Already have an account?{" "}
            <a
              href="/login"
              className="fw-bold text-decoration-none"
              style={{ color: "#2563eb" }}
            >
              {" "}
              Login{" "}
            </a>{" "}
          </div>{" "}
        </form>{" "}
      </div>{" "}
      {/* ================= ANIMATIONS ================= */}{" "}
      <style>
        {" "}
        {` @keyframes cardEntry { 0% { opacity: 0; transform: translateY(50px) scale(0.94); } 100% { opacity: 1; transform: translateY(0) scale(1); } } @keyframes iconFloat { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } } @keyframes floatCircle { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(30px, 30px); } } @keyframes floatCircle2 { 0%, 100% { transform: translate(0, 0); } 50% { transform: translate(-35px, -25px); } } input:focus { border-color: #6366f1 !important; box-shadow: 0 0 0 4px rgba(99,102,241,0.12) !important; } button[type="submit"]:hover { transform: translateY(-2px); box-shadow: 0 12px 25px rgba(79,70,229,0.4) !important; } button[type="submit"]:active { transform: translateY(0); } a:hover { opacity: 0.8; } @media (max-width: 480px) { .shadow-lg { padding: 28px !important; } } `}{" "}
      </style>{" "}
    </div>
  );
};
export default Register;
