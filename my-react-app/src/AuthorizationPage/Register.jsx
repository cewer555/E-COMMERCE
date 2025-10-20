import React from "react";

export default function Register({handleReg}) {
  const [Sp,setSp]=React.useState(false)
  return (
    <div className="login-bg">
      <div className="login-card">
        <h2 className="login-title">Register</h2>
        <form className="login-form">
          <div>
            <label for="em" className="login-label">Email</label>
            <input
              id="em"
              type="email"
              placeholder="Enter your email"
              className="login-input"
            />
          </div>
          <div>
            <label for="pass" className="login-label">Password</label>
            <input
              id="pass"
              type={Sp?"text":"password"}
              placeholder="Enter your password"
              className="login-input"
            />
          </div>
          
          <div>
            <label for="confpass" className="login-label">Confirm Password</label>
            <input
              id="confpass"
              type={Sp?"text":"password"}
              placeholder="Enter your password"
              className="login-input"
            />
          </div>
          <div style={{display:"flex",alignItems:"center",gap:"5px",marginTop:"5px"}}>
            <input id="show password" type="checkbox" onClick={()=>{
                setSp(!Sp)
            }}></input>
            <label for="show password">   show password</label>
            </div>
          <button type="submit" className="login-button">
            Register
          </button>
        </form>

        {/* Register option */}
        <div className="register-section">
          <p className="register-text">
            Already Have an Account?{" "}
            <a  className="register-link" onClick={handleReg}>
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
