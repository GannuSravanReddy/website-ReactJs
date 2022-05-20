import React, { Component } from 'react'
import "./js/function.js";
import "../api.js"
import "./css/Home.css";
export class Home extends Component {
  render() {
    return (
      <div className='container1'>
        <div className='parallax' id='parallax'><h1>Div1</h1></div>
        <div className='parallax reveal'><h1>Div2</h1></div>
        <div className='parallax'><h1>Div3</h1></div>
        <div className='parallax'><h1>Div4</h1></div>
         
      </div>
      
        
    ) 
  }
}

export default Home;