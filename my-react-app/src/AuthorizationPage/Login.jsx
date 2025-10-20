import React from "react";
import axios from "axios";
export default function Login({handleReg,handleLogin}) {
  const [Sp,setSp]=React.useState(false)
  axios.defaults.withCredentials=true
  async function handleForm(e){
    e.preventDefault()
    const formdata=new FormData(e.currentTarget)
    console.log(formdata.get("email"))
    const response=await axios.post("http://localhost:3000/api/v1/login",{email:formdata.get("email"),password:formdata.get("password")})
    console.log(response.data)
    if(response.data.status==="ok"){
      handleLogin()
    }
  }
  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        <form className="login-form" onSubmit={handleForm}>
          <div>
            <label for="email" className="login-label">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="login-input"
              name="email"
            />
          </div>
          <div>
            <label for="pass" className="login-label">Password</label>
            <input
              id="pass"
              type={Sp?"text":"password"}
              placeholder="Enter your password"
              className="login-input"
              name="password"
            />
            <div style={{display:"flex",alignItems:"center",gap:"5px",marginTop:"5px"}}>
            <input id="show password" type="checkbox" onClick={()=>{
              setSp(!Sp)}}></input>
            <label for="show password">   show password</label>
            </div>
          </div>
          <button type="submit" className="login-button" >
            Sign In
          </button>
        </form>

        {/* Register option */}
        <div className="register-section">
          <p className="register-text">
            Don’t have an account?{" "}
            <a  className="register-link" onClick={handleReg}>
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
