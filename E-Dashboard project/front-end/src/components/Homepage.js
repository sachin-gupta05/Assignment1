import React from "react";
function Home()
{
    return(
        <div className="Home-container">
        <h1 className="Heading">Welcome to my E-commerce</h1>
        <h3 className="pl">Please Login  </h3><br/>
        <span className="Em"> Access The All Properties.....</span><br/>
        <span>Email : sachin@test.com</span><br/>
        <span>Password : sachin@123</span><br/>
        <h3>What is used in this project?</h3>
        <ul>
            <li>Using React js (Front-End).
            <p>Using react hook ,react router, BrowserRouter,fetching API,Link and using Basic Styles CSS ect. </p><br></br>
            </li>
        </ul>
        <ul>
            <li>Using Node js (Back-End)..
            <p>Mostly using node js API.Dynamic api use,connect to Data Base(Mongodb),api login page ,Product-Add<br></br> and api using ect. and using method post,get,put,delete method.May be used mongodb for database ect. </p>
            <br></br>
            </li>
        </ul>
        </div>
    )
}
export default Home;