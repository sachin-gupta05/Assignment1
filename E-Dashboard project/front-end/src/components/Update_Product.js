import React, { useEffect, useState } from "react";
import {useParams,useNavigate} from "react-router-dom"
function Update_data() {
    const [name, SetName] = useState('');
    const [price, SetPrice] = useState('');
    const [category, SetCategory] = useState();
    const [userId, SetUserId] = useState('');
    const [company, SetCompany] = useState('');
    const navigate = useNavigate();
    const params=useParams();
    useEffect (()=>{
      getProductDetails();
    },[]);
   async function getProductDetails()
   {
    console.warn(params);
    let result = await fetch (`http://localhost:1700/product/${params.id}`);
    result = await result.json();
    SetName(result.name);
    SetPrice(result.price);
    SetCategory(result.category);
    SetCompany(result.company)
   }
    async function Update() {
        let result  = await fetch(`http://localhost:1700/product/${params.id}`,
          {
            method :'put',
            body : JSON.stringify({name,price,category,company}),
            headers :{
                'content-Type':"application/json"
            }
          }
        );
        navigate('/products');
    }
    return (
        <div className="Sign_up">
                <h1>Update Product</h1>
                <input className="input-box" type="text" placeholder="Enter product name" value={name} onChange={(e) => {SetName(e.target.value)}} />
                <input className="input-box" type="text" placeholder="Enter product price" value={price} onChange={(e) => {SetPrice(e.target.value)}} />
                <input className="input-box" type="text" placeholder="Enter product category" value={category} onChange={(e) => {SetCategory(e.target.value)}} />
                <input className="input-box" type="text" placeholder="Enter product company" value={company} onChange={(e) => {SetCompany(e.target.value)}}/>
                <button id="button" type="button" onClick={Update}>Update</button>
        </div>
    )
}
export default Update_data;