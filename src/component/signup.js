import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth, fs } from "./config/firebase";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const Signup = () => {
  const navigate = useNavigate();
  const [fullName, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUsertype] = useState("");
  const [contact, setContact] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const ref = doc(fs, "tblUsers", userCredential.user.uid);
      await setDoc(ref, {
        FullName: fullName,
        Email: email,
        Password: password,
        userType: userType,
        Contact: contact,
      });
      setSuccessMsg("Signup Successful. You will now be redirected to Login");
      setTimeout(() => {
        setSuccessMsg("");
        navigate("/");
      }, 3000);
    } catch (error) {
      setErrorMsg(error.message);
    }
  };

  return (
    <div className="container px-4 py-5 mx-auto">
      <div className="card card0">
        <div className="d-flex flex-lg-row flex-column-reverse">
          <div className="card card1">
            <div className="row justify-content-center my-auto">
              <div className="col-md-8 col-10 my-5">
                <h3 className="msg-info">SIGN-UP</h3>
                {successMsg && (
                  <div className="success-msg">{successMsg}</div>
                )}
                {errorMsg && <div className="error-msg">{errorMsg}</div>}
                <form autoComplete="off" onSubmit={handleSignup}>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      placeholder="Enter Username"
                      className="form-control"
                      required
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
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
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Password
                    </label>
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      placeholder="Enter Password"
                      className="form-control"
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      User Type
                    </label>
                    <select
                      id="userType"
                      name="userType"
                      className="form-control"
                      required
                      onChange={(e) => setUsertype(e.target.value)}
                    >
                      <option>Please Choose</option>
                      <option value="client">Client</option>
                      <option value="admin">Admin</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-control-label text-muted">
                      Contact
                    </label>
                    <input
                      type="text"
                      id="contact"
                      name="contact"
                      placeholder="Enter Contact"
                      className="form-control"
                      required
                      onChange={(e) => setContact(e.target.value)}
                    />
                  </div>
                  <div className="row justify-content-center my-3 px-3">
                    <button className="btn-block btn-color" type="submit">
                      Signup
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="bottom text-center mb-5">
              <p href="#" className="sm-text mx-auto mb-3">
                Already have an account?{" "}
                <Link to="/">
                  <button className="btn btn-white ml-2">Login</button>
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

export default Signup;
