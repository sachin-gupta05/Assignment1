import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom"
function Products() {
    const [name, SetName] = useState('');
    const [price, SetPrice] = useState('');
    const [category, SetCategory] = useState();
    const [userId, SetUserId] = useState('');
    const [company, SetCompany] = useState('');
    async function Collectdata() {
        // console.log(name,price,category,userId,company);
        const UserId = JSON.parse(localStorage.getItem('user'))._id;
        let result = fetch('http://localhost:1700/add-product', {
            method: 'post',
            body: JSON.stringify({ name, price, category, userId, company }),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        result = await (await result).json();
        console.log(result);
    }
    return (
        <div className="Sign_up">
                <h1>Add Product</h1>
                <input className="input-box" type="text" placeholder="Enter product name" value={name} onChange={(e) => {SetName(e.target.value)}} />
                <input className="input-box" type="text" placeholder="Enter product price" value={price} onChange={(e) => {SetPrice(e.target.value)}} />
                <input className="input-box" type="text" placeholder="Enter product category" value={category} onChange={(e) => {SetCategory(e.target.value)}} />
                {/* <input className="input-box46" type="text" placeholder="Enter product userId" value={userId} onChange={(e) => {SetUserId(e.target.value)}} /> */}
                <input className="input-box" type="text" placeholder="Enter product company" value={company} onChange={(e) => {SetCompany(e.target.value)}}/>
                <button id="button" type="button" onClick={Collectdata}>Add Product</button>
        </div>
    )
}
export default Products;