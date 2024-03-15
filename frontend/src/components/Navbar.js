import React, { useState } from "react";
import {Navigate, Link} from 'react-router-dom'
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import "../styles/Navbar.css";

function Navbar() {
  const navigate = useHistory()
  function cn(){
    navigate.push('/contact')
  }
  return (
  
<div class="container">
<nav class="navbar">
    <ul class="nav-links">
        <li onClick={()=>{navigate.push("/")}} class="nav-link services">
        <div> Home </div>
            <ul class="drop-down">
                <li onClick={(e)=>{
                  e.stopPropagation()
                navigate.push("/mission")}
                }>Mission</li>
                <li onClick={(e)=>{
                  e.stopPropagation()
                navigate.push("/vision")}
                }>Vision</li>
            </ul>
        </li>
        <li onClick={()=>{navigate.push("/menu")}} class="nav-link">
        <div> Products </div>
        </li>
        <li onClick={()=>{navigate.push("/about")}} class="nav-link">
        <div> R&D </div>
        </li>
        <li onClick={()=>{navigate.push("/lab")}} class="nav-link">
        <div> Lab establishment </div>
        </li>
        <li onClick={()=>{navigate.push("/Training")}} class="nav-link">
        <div> Training </div>
        </li>

        <li onClick={()=>{navigate.push("/Projects")}} class="nav-link">
        
        <div> Projects </div>
        </li>
        <li class="nav-link" onClick={cn}>
                 Contact 
        </li>
    </ul>
</nav>
</div>
  );
}

export default Navbar;
