const express = require("express");
const mongoose = require("mongoose");
const product = require("./models/product.model.js");
const middleware = require("./middleware.js")


const app = express();

app.use(express.json());
// app.use(middleware);

app.get("/user",middleware, (req, res) => {
  res.send("You are on user page");
});

app.get("/", (req, res) => {
  res.send("Hello from backend, Is Working?? yes THIS is node API");
});

app.get("/api/products" , async (req, res) => {
  try {
    const products = await product.find({});
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.delete("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await product.deleteOne({ id: id });

    if (!deletedProduct) {
      return res.Status(404).json({ message: "Products is not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.put("/api/product/:id", async (req, res) => {
  try {
    const { id } = req.params;

    const updatedProduct = await product.findByIdAndUpdate(id, req.body);

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const products = await product.findById(id);
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.post("/api/products", async (req, res) => {
  try {
    const Product_Store = await product.create(req.body);
    res.status(201).json(Product_Store);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

mongoose
  .connect("mongodb+srv://sukh:Sukhdeep2003@cluster0.r32l3jk.mongodb.net/")
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("We are listion on port 3000");
    });
  })
  .catch(() => {
    console.log("Failed to connect");
  });
