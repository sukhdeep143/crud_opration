const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter the product name!!!"],
  },

  quantity: {
    type: Number,
    required: [true, "Please enter the value of your product"],
    default: 0,
  },

  price: {
    type: Number,
    required: true,
    default: 0,
  },
},
    {
        Timestamp: true
    }

);


const Product = mongoose.model("product", productSchema);

module.exports = Product;