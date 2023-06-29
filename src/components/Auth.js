import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
import Button from "../UI/Button";
import axios from "axios";

const Auth = () => {
  const navigate = useNavigate();
  const [register, setRegister] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState('');

  const [message, setMessage] = useState("");

  const submitHandler = async (e) =>{
    e.preventDefault();

      const user = { username, password, email, phone };
      console.log(user)
      axios.post("http://localhost:4042/user", {user})
      .then(() => {
        console.log('post')
        navigate("/trip-planning")
      })    
     .catch(error => console.log(error));}
  
  

  return (
    <main>
      <form className="register-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="form-input"
        />
        <br />
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
      <p>{message}</p>
    </main>
  );
}

export default Auth;
