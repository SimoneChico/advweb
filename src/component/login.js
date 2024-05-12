import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "./config/firebase";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

export const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  const handleLogin = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(auth, email, password)
          .then(() => {
              setSuccessMsg('Login Successfully! You will now be redirected to HomePage');
              setEmail('');
              setPassword('');
              setErrorMsg('');
              setTimeout(() => {
                  setSuccessMsg('');
                  navigate('/home');
              }, 3000);
          })
          .catch(error => setErrorMsg(error.message));
  };

  return (
    <div className="container px-4 py-5 mx-auto">
      <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card card1">
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                <h3 className="msg-info">LOGIN</h3>
                {successMsg && (
                  <div className="success-msg">{successMsg}</div>
                )}
                {errorMsg && <div className="error-msg">{errorMsg}</div>}
                <form autoComplete="off" onSubmit={handleLogin}>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Email
                    </label>
                    <input
                      type="text"
                      id="email"
                      name="email"
                      placeholder="Enter Email"
                      className="form-control"
                      required
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter Password"
                      className="form-control"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                  </div>
                  <div className="row justify-content-center my-3 px-3">
                    <button className="btn-block btn-color" type="submit">
                      Login
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bottom text-center mb-5">
              <p href="#" className="sm-text mx-auto mb-3">
                Don't have an account?{" "}
                <Link to="/signup">
                  <button className="btn btn-white ml-2">Sign-Up</button>
                </Link>
              </p>
            </div>
          </div>
          <div className="card card2">
            <div className="my-auto mx-md-5 px-md-5 right">
              <h3 className="text-white">Advance Web Development</h3>
              <small className="text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
