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
      .then((res) => console.log(res.data))
      .catch(() => "this is an error");
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
