const express=require('express');
const app=express();
const cors=require('cors');
require('./db/Config');
app.use(express.json());
app.use(cors());
const user=require('./db/User');
const User = require('./db/User');
const Products = require('./db/Product');
app.post('/register',async(req,resp)=>{
    let user=new User(req.body);
    let res= await user.save();
    res = res.toObject();
    delete res.password;
    resp.send(res);
    console.log(res);
})

app.post('/login',async(req,resp)=>{
   if(req.body.email && req.body.password){
    let user = await User.findOne(req.body).select("-password");
    if(user)
  {
    resp.send(user);
  }
  else
  {
    resp.send({result:"No User Found"})
  }
}
  else{
    resp.send({result:"NO user Found"});
  }
});

app.post('/add-product',async(req,resp)=>{
 let product= new Products(req.body);
 let result = await product.save();
 resp.send(result);
})

app.get('/find-product',async(req,resp)=>{
  let products =  await Products.find();
 if(products.length >0)
 {
    resp.send(products);
 }
})

app.delete("/product/:id", async(req,resp)=>{
  let result=await Products.deleteOne({_id:req.params.id});
  resp.send(result);
})
app.get("/product/:id", async(req,resp)=>{
  let result=await Products.findOne({_id:req.params.id});
  if(result)
  {
    resp.send(result);
  }
  else{
    resp.send({result:"No data found"});
  }
});
app.put("/product/:id",async(req,resp)=>{
  let result = await Products.updateOne(
   { _id:req.params.id}
  , 
  {
    $set : req.body
  });
  resp.send(result);
})
app.get("/search/:key",async(req,resp)=>{
  let result = await Products.find({
    "$or":[

      {name : {$regex:req.params.key}},
      {company : {$regex:req.params.key}},
      {category : {$regex:req.params.key}},
      {price : {$regex:req.params.key}}
    ]
  })
  resp.send(result);
})
app.listen(1700);