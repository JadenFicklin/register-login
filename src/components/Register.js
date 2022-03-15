import { useState } from "react";
import axios from "axios";

function Register() {
  const [username, setusername] = useState("");
  const [password, setPassword] = useState("");

  const handleError = () => {
    return alert("username already exists");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:5000/api/register",
      data: {
        username: username,
        password: password,
      },
    })
      .then((res) => console.log(res))
      .catch(handleError);
  };

  return (
    <>
      <h1> Register </h1>
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
        <button>Register</button>
      </form>
    </>
  );
}

export default Register;
