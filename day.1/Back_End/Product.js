const mongoose = require('mongoose');
 const productSchema = new mongoose.Schema({
    manufactured:String,
    product_id:String,
    price:String,
    qunatity:String,
    category:String,
 });
 module.exports = mongoose.model("products",productSchema);