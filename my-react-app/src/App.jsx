import { useState } from 'react'
import Header from "./components/header.jsx"
import Main from "./components/main.jsx"
import { Footer
 } from './components/footer.jsx'
 import Register from './AuthorizationPage/Register.jsx'
 import Login from './AuthorizationPage/Login.jsx'
import './login.css'
import './App.css'
import React from 'react'
import axios from 'axios'

function App() {
  React.useEffect(()=>{
    async function fetchlogin(){
      const response=await axios.post("http://localhost:3000/api/v1/login",{withCredentials:true})
      if(response.data.status==="ok"){
      setLoggedIn(true)
    }

  }
    fetchlogin()

},[])
  const [LoggedIn,setLoggedIn]=useState(false)
  const [LogReg,setLogReg]=useState(false)
  let response=null
  const [Cart,setCart]=useState(0);      
  function handleReg(){
    setLogReg(!LogReg)
  }           
    function Addcart(){
        setCart(Cart+1)
        }
    function handleLogin(){ 
    setLoggedIn(!LoggedIn)
    }
  
  return (
    <>
    {LoggedIn?<div className='app'>
      <Header Cart={Cart}/>
      <Main Addcart={Addcart}/>
      <Footer/>
    </div>:LogReg?<Register handleReg={handleReg} handleLogin={handleLogin}/>:<Login handleLogin={handleLogin} handleReg={handleReg}/>}
    </>
  )
}

export default App
