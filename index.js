const express = require('express');
const mongoose = require("mongoose");
const product = require("./models/product.model.js")

const app = express()

app.use(express.json());


app.get('/', (req, res)=>{
    res.send("Hello from backend, Is Working?? yes THIS is node API");
    
});

app.post('/api/products', async (req, res) => {
    try {

        const Product_Store = await product.create(req.body);
        res.status(200).json(Product_Store)
        
    } catch (error) {
        res.status(500).json({message: error.message})
    }
    
});

mongoose.connect("mongodb+srv://sukh:Sukhdeep2003@cluster0.r32l3jk.mongodb.net/").then(()=>{
    console.log("Connected to database");
    app.listen(3000, ()=>{
    console.log("We are listion on port 3000");
    
}); 
    
})
.catch(()=>{
    console.log("Failed to connect");
    
})