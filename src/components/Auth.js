import { useState, useContext } from "react";
import "./Auth.css";
import AuthContext from "../store/authContext";
import Button from "../UI/Button";
import axios from "axios";

const Auth = () => {
  const [register, setRegister] = useState(true);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const [message, setMessage] = useState("");

  const authContext = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    axios
      .post(
        register
          ? "http://localhost:4042/register"
          : "http://localhost:4042/login",
        { userName, password, firstName, lastName, address, email, phone }
      )
      .then((res) => {
        console.log("after auth", res.data);
        authContext.login(res.data.token, res.data.exp, res.data.userId);
      })
      .catch((error) => {
        setMessage(error.response.data);
        // setUserName("");
        // setPassword("");
        // setFirstName("");
        // setLastName("");
        // setAddress("");
        // setEmail("");
        // setPhone("");
      });
  };

  return (
    <main>
      <form className="register-form" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
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
        <br />
        <input
          type="text"
          placeholder="first name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="form-input"
        />
        <br />
        <input
          type="text"
          placeholder="last name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-input"
        />
        <br />
        <input
          type="text"
          placeholder="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
        />
        <input
          type="text"
          placeholder="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="form-input"
        />
        <br />
        <Button className="form-button">
          {register ? "Sign Up" : "Login"}
        </Button>
      </form>
      <p>{message}</p>
      <button onClick={() => setRegister(!register)}>
        Need to {register ? "Login" : "Sign Up"}?
      </button>
    </main>
  );
};

export default Auth;
