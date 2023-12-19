import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom"
function Products() {
    const [manufactured, SetName] = useState('');
    const [product_id, SetProduct_id] = useState('');
    const [price, SetPrice] = useState();
    const [qunatity, SetQunatity] = useState('');
    const [category, SetCategory] = useState('');
    async function Collectdata() {
        console.log(manufactured,product_id,price,qunatity,category);
        // const UserId = JSON.parse(localStorage.getItem('user'))._id;
        let result = fetch('http://localhost:5000/add-product', {
            method: 'post',
            body: JSON.stringify({ manufactured, product_id, price, qunatity,category}),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await (await result).json();
        console.log(result);
        console.log(manufactured,product_id,qunatity,price,category);
    }
    return (
        <div className="Sign_up">
                <h1>Add Product</h1>
                <input className="input-box" type="text" placeholder="Product Manufactured" value={manufactured} onChange={(e) => {SetName(e.target.value)}} />
                <input className="input-box" type="text" placeholder="Product Id" value={product_id} onChange={(e) => {SetProduct_id(e.target.value)}} />
                <input className="input-box" type="text" placeholder="Product Qunatity" value={qunatity} onChange={(e) => {SetQunatity(e.target.value)}}/>
                <input className="input-box" type="text" placeholder="Product Price" value={price} onChange={(e) => {SetPrice(e.target.value)}} />
                <input className="input-box" type="text" placeholder=" Product Category" value={category} onChange={(e) => {SetCategory(e.target.value)}} />
                <button id="button" type="button" onClick={Collectdata}>Add Product</button>
        </div>
    )
}
export default Products;