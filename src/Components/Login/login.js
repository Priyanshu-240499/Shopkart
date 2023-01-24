import React,{useRef} from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";
sessionStorage.setItem("Email","priyanshoochoudhary@gmail.com");
sessionStorage.setItem("Password","123456789");
const useremail=sessionStorage.getItem("Email");
const userpassword=sessionStorage.getItem("Password");
function Login() {
  
    const email=useRef();
    const password=useRef();
    const error=useRef();
    const navigate=useNavigate();
    function formvalidation(e){
        e.preventDefault();
        if(password.current.value.length<8){
            error.current.innerHTML="Password Length less than 8"
        }
        else if(email.current.value !==useremail || password.current.value !==userpassword){
          error.current.innerHTML="Wrong login details";
        }
        else{
            error.current.innerText="";
            navigate("/home");
        }
        
    }
  return (
    <div className="login-page">
      <form className="form" onSubmit={formvalidation}>
        <div className="email">
          <h3>Email: </h3>
          <input
            type="email"
            placeholder="Enter E-mail"
            ref={email}
            name="email"
            required
          />
        </div>
        <div className="password">
          <h3>Password: </h3>
          <input
            type="password"
            placeholder="Enter Password"
            ref={password}
            name="psw"
            required
          />
        </div>
        <div className="error" ref={error}></div>
        <div className="login">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
