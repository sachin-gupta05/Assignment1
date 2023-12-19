import React,{useState,useEffect} from "react";
import  {useNavigate} from "react-router-dom";
function Login (){
    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");
    let navigate = useNavigate(); 
     useEffect(() =>{
    const auth = localStorage.getItem('user');
    if(auth)
    {
        navigate('/');   
    } 
    },[]);
  async function handleLogin(){
      let result = await fetch('http://localhost:1700/login',{
    method : 'post',
    body:JSON.stringify({email,password}),
    headers: {
        'Content-Type': 'application/json'
    },
      });
      result = await result.json();
      if(result.name){
       localStorage.setItem("user",JSON.stringify(result));
       navigate('/');
      } 
      else{
        alert("Please Enter Correct Email id")
      }
    };
    return(
        <div>
            <form className="Sign_up">
            <h1>Login</h1>
        <input className="input-box" type="text" placeholder="Enter Email" value={email} onChange={(e) => SetEmail(e.target.value)} ></input>
        <input className="input-box" type="text" placeholder="Enter Password" value={password} onChange={(e) => SetPassword(e.target.value)}></input>
        <button id="button" type="button" onClick={handleLogin} >Login</button>
        </form>
        </div>
        )
    }
    export default Login;