import React, { useEffect, useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const fetchFn = () => {
  return fetch(
    "https://raw.githubusercontent.com/syook/react-dishpoll/main/users.json"
  ).then((res) => res.json());
};

function Login() {
  const [users, setUsers] = useState();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    fetchFn().then((user) => {
      setUsers(user);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    users.map((item) => {
      if (item.username === username && item.password === password) {
        setErr(false);
        navigate("/main");
      } else if (users.length) {
        setErr(true);
      }
    });
  };

  return (
    <div className="login-container">
      <div className="form-body card col-sm-7 col-md-3">
        <div className="card-header">
          <h1>LOG IN</h1>
        </div>

        <form className="card-body" onSubmit={handleSubmit}>
          {err && (
            <div className="alert alert-danger">
              <p>Invalid Username/Password</p>
            </div>
          )}
          <div className="mb-3">
            <label htmlFor="username" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary col-12">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
