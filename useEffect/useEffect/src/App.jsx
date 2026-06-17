// import React,{useState,useEffect} from "react";
// function App(){
//   const [formData, setFormData]=useState({
// name:"",
// email:"",
// password:""
//   });
//   //useEffect
//   useEffect(()=>{
// console.log("form submitted",formData)
//   },[formData])


// }
import React from 'react'

const App = () => {
  return (
    <div>
      <form action=" ">
        <label htmlfor="">
          Email:<input type="text"/>
          Password:<input type="password"/>
        </label>
        </form>
    
      
    </div>
  )
}

export default App
