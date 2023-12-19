import React from 'react';
import{Button, Link} from 'react-scroll'; 
import './intro.css';
import bg from '.././image/img.png'
import btn from '.././image/hireMeLogo.png'
const Profile = () =>{
return (
    <div>
      <section id="intro">
         <div className='introContent'>
         <span className='hello'>Hello</span><br></br>
         <span className='introText'>I'M <span className='introName'>Sachin Gupta</span><br />Website Developer</span>
         <p className='introPara' >I am Skilled web designer with experince in creating<br></br> visully appealing and user friendly websites.</p>
         <Link><button className='btn'><img src={btn} alt='' className='btnImg' /> Hire Me</button></Link>
         </div>
         <img src={bg} alt='' className='bg' />
      </section>
    </div>
)
}
export default Profile;