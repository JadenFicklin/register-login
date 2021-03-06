import { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/login",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => {
        if (username.length === 0 || password.length === 0) {
          alert("please enter username and password");
        } else if (res.data === true) {
          alert("you have successfully Logged in!");
        } else if (res.data === false) {
          alert("incorrect username or password");
        }
      })
      .catch(() => console.log("this is an error"));
  };

  return (
    <>
      <h1> login </h1>
      <form onSubmit={handleSubmit}>
        <label>
          username
          <input
            value={username}
            type="username"
            placeholder="Enter username"
            onChange={(e) => setusername(e.target.value)}
          />
        </label>

        <label>
          Password
          <input
            value={password}
            type="password"
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button>login</button>
      </form>
    </>
  );
}

export default Login;
