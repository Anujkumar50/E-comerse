import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());


// ================= DATABASE =================

mongoose
  .connect("mongodb://localhost:27017/formDB")
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log(err));


// ================= CLOUDINARY =================

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "products",
    allowed_formats: ["jpg", "jpeg", "png", "webp"],
  },
});

const upload = multer({ storage });


// ================= USER SCHEMA =================

const RegisterSchema = new mongoose.Schema({
  name: String,
  email: {
    type: String,
    unique: true,
  },
  password: String,
});

const Register = mongoose.model("register", RegisterSchema);


// ================= PRODUCT SCHEMA =================

const ProductSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  stock: Number,
  image: String,
});

const Product = mongoose.model("product", ProductSchema);


// ================= REGISTER =================

app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // const user = await Register.findOne({ email });

    // if (user) {
    //   return res.status(400).json({
    //     message: "User already exists",
    //   });
    // }

    const hashPassword = await bcrypt.hash(password, 10);

    const newUser = new Register({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    res.status(201).json({
      message: "Registered Successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// ================= LOGIN =================

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await Register.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User Not Found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        email: user.email,
      },
      "secretkey",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Login Successful",
      token,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// ================= AUTH MIDDLEWARE =================

const auth = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({
      message: "No Token Provided",
    });
  }

  try {
    const decoded = jwt.verify(
      token,
      "secretkey"
    );

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({
      message: "Invalid Token",
    });
  }
};


// ================= PROTECTED ROUTE =================

app.get("/profile", auth, (req, res) => {
  res.json({
    message: "Protected Route",
    user: req.user,
  });
});


// ================= ADD PRODUCT =================

app.post(
  "/productdetails",
  upload.single("image"),
  async (req, res) => {
    try {
      const product = new Product({
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        category: req.body.category,
        stock: req.body.stock,
        image: req.file?.path || "",
      });

      await product.save();

      res.json({
        message: "Product Saved",
      });
    } catch (error) {
      res.status(500).json({
        message: error.message,
      });
    }
  }
);


// ================= GET PRODUCTS =================

app.get("/products", async (req, res) => {
  try {
    const products = await Product.find();

    res.json(products);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});


// ================= SERVER =================

app.listen(1200, () => {
  console.log("Server Running On Port 1200");
});