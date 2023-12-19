import React,{useEffect,useState} from "react";
import { Link } from "react-router-dom";
import { QRCodeCanvas } from "qrcode.react"
import axios from 'axios';
function Product_list()
{
    const[products,setproducts] = useState([]);
    const[url,setUrl]=useState('')
    useEffect(()=>{
    getProduct();
    },[])
   async function getProduct()
    {
      let result = await fetch('http://localhost:5000/find-product');
      result = await result.json();
      setproducts(result);
    }
     
    
   return(
 
    <div className="product-list">
        <h4>Product list</h4>
        <ul>
            <li>S.N</li>
            <li>manufactured</li>
            <li>product_id</li> 
            <li>price</li>
            <li>qunatity</li>
            <li>category</li>
        </ul>
         {
           products.length>0 ? products.map((item,index)=>
            <ul key={item._id}>
                <li>{index+1}</li>
                <li>{item.manufactured}</li>
                <li>{item.product_id}</li>
                <li>Rs.{item.price}</li>
                <li>{item.qunatity}</li>
                <li>{item.category}</li>
            </ul> 
            )
            
            : <h1>result not found</h1>
         }
          <QrCode /> 
    </div>
   )
}

const QrCode = () => {
    const [url, setUrl] = useState("");
  
    const downloadQRCode = (e) => {
      e.preventDefault();
      setUrl("");
    };
  
    const qrCodeEncoder = (e) => {
      setUrl(e.target.value);
    };
  
    const qrcode = (
      <QRCodeCanvas
        id="qrCode"
        value={url}
        size={100}
        bgColor={"#00ff90"}
        level={"H"}
      />
    );
    return (
      <div className="qrcode__container">
        <h3>Barcode (QR)</h3>
        <div>{qrcode}</div>
        <div className="input__group">
          <form onSubmit={downloadQRCode}>
            
          <button type="submit" disabled={!url} className="qrsubmit">
            Download QR code
          </button> 
        </form>
      </div>
    </div>
  );
};

  
  
export default Product_list;