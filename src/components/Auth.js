import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import Button from "../UI/Button";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const submitHandler = async (e) =>{
    e.preventDefault();

      const user = { username, password, email};
      console.log(user)
      axios.post("http://localhost:4042/user", {user})
      .then(() => {
        console.log('post')
        navigate("/trip-planning")
      })    
     .catch(error => console.log(error));}
  
  

  return (
    <div className="outer">
    
      <form className="register-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
        />
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <Button className="form-button">
          Sign In
        </Button>
      </form>
    
    </div>
  );
}

export default Auth;
