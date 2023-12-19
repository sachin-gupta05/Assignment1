const express=require('express');
const app=express();
const cors=require('cors');
const qrcode = require('qrcode');
require('./config');
app.use(express.json());
app.use(cors());

const Products = require('./Product');
  
app.post('/add-product',async(req,resp)=>{
 let product= new Products(req.body);
 let result = await product.save();
 resp.send(result);
});

app.get('/find-product',async(req,resp)=>{
  let products =  await Products.find();
 if(products.length >0)
 {
    resp.send(products);
 }
});
 
app.listen(5000);