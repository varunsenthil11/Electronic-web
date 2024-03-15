import React, { useState } from "react";
import "../styles/Contact.css";
import axios from 'axios';
import { useHistory } from 'react-router-dom';


function Contact() {
  const history = useHistory()
  const [actual,change] = React.useState(false);
  const[formData,setformdata]= useState({
    name:"",
    email:"",
    message:""
  });

const handlechange=(e)=>{
 
  setformdata({ ...formData, [e.target.name]: e.target.value });
}

const handlesubmit=(e)=>{
axios.post('http://localhost:7000/',formData) .then((response) => {
    console.log("Form data sent successfully:", formData);
  })
  .catch((error) => {
    console.error("Error sending form data:", error);
  });
}
if(actual)
      history.push('/Response');
  return (
    <div className="contact">
     
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" value={formData.name} onChange={handlechange} required/>
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" value={formData.email} onChange={handlechange} required />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            value={formData.message}
            onChange={handlechange}
            required
          ></textarea>
          <button type="submit" onClick={(e) => {
            change(true)
            handlesubmit(e)
          }}>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
