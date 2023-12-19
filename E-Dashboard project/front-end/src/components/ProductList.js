import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
function Product_list()
{
    const[products,setproducts] = useState([]);
    useEffect(()=>{
    getProduct();
    },[])
   async function getProduct()
    {
      let result = await fetch('http://localhost:1700/find-product');
      result = await result.json();
      setproducts(result);
    }
    // console.log("products",products);
    let deleteProduct= async(id)=>{
    let result= await fetch(`http://localhost:1700/product/${id}`,{
    method:"Delete"
     } );
    result = await result.json();
    if(result)
    {
        getProduct();
    }
    }
    const searchProduct = async (event)=>{
    let key = event.target.value;
    if(key){
        let  result = await fetch(`http://localhost:1700/search/${key}`);
        result = await result.json();
        if(result){
            setproducts(result);
        }
    }
    else {
        getProduct();
    }
    }
   return(
 
    <div className="product-list">
        <h4>Product list</h4>
        <input type="text" placeholder="Search Product" className="Search-box" onChange={searchProduct}></input>
        <ul>
            <li>S.N</li>
            <li>Name</li>
            <li>Price</li> 
            <li>Category</li>
            <li>Company</li>
            <li>Operation</li>
        </ul>
         {
           products.length>0 ? products.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>${item.price}</li>
                <li>{item.category}</li>
                <li>{item.company}</li>
                <li><button onClick={()=>deleteProduct(item._id)
                }>Delete</button>
                <Link to={"/update/"+item._id}>Update</Link>
                </li>
            </ul> 
            )
            
            : <h1>result not found</h1>
         }
    </div>
   )
}
export default Product_list;