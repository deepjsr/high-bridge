import React, { useContext } from "react";

import { Link, useNavigate } from "react-router-dom";
import { AuthContext, useFirebase } from "../context/AuthContext";
import { useCookies } from "react-cookie";
import { useFormik } from "formik";

const Login = () => {
  const [cookies, setCookie, removeCookie] = useCookies();

  const firebase = useFirebase();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onsubmit: (values) => {
      console.log(values, formik.values);
      loginWithEmail(values.email, values.password);
    },
  });

  async function handleGoogleLogin() {
    try {
      const response = await firebase.signInWithGoogle();
      if (response) {
        console.log(response.user.isSignedIn, "Google login successful");
        setCookie("username", response.user.displayName);
        navigate(`/workflows`);
      }
    } catch (error) {
      if (error.code === "auth/internal-error") {
        console.error(
          "Google login error: Internal Firebase error. Please check your Firebase configuration.",
          error
        );
      } else {
        console.error("Google login error:", error.message || error);
      }
      // alert("An error occurred during Google login. Please try again later.");
    }
  }

  async function loginWithEmail(email, password) {
    console.log("Logging in with email and password...", email, password);
    try {
      await firebase.login(email, password);
      navigate("/workflows");
    } catch (error) {
      console.error("Login error:", error.message || error);
      alert("An error occurred during login. Please try again later.");
    }
  }

  return (
    <div className="login-page d-flex align-items-center justify-content-between">
      {/* Left Side */}
      <div className="login-left d-none d-md-flex flex-column justify-content-center text-white p-5 me-5">
        <div className="logo mb-5">
          <img
            src="../src/assets/logo.svg"
            alt="HighBridge Logo"
            className="login-logo"
          />{" "}
        </div>
        <h1 className="mb-3">Building the Future...</h1>
        <p className="text-light w-75">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>

      {/* Right Side */}
      <div className="login-right d-flex align-items-center justify-content-center p-4">
        <div
          className="login-box bg-white shadow rounded p-4"
          style={{ width: "100%", maxWidth: "400px" }}
        >
          <h6 className="text-uppercase text-muted">Welcome Back!</h6>
          <h4 className="fw-bold mb-4">Log In to your Account</h4>

          <form>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
              />
            </div>
            <div className="mb-3">
              <input
                onChange={formik.handleChange}
                type="password"
                id="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>

            <div className="d-flex justify-content-between align-items-center mb-3">
              <div>
                <input
                  type="checkbox"
                  className="form-check-input me-2"
                  id="remember"
                  autoComplete="off"
                />
                <label htmlFor="remember" className="form-check-label">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>

            <button type="submit" className="btn btn-danger w-100 mb-3">
              Log In
            </button>

            <div className="text-center mb-3 text-muted">or</div>

            <div className="social-login mb-3">
              <button
                className="btn btn-outline-dark w-100 mb-2"
                onClick={handleGoogleLogin}
              >
                <i className="bi bi-google me-2"></i>Log in with Google
              </button>
              <button className="btn btn-outline-primary w-100 mb-2">
                <i className="bi bi-facebook me-2"></i>Log in with Facebook
              </button>
              <button className="btn btn-outline-secondary w-100">
                <i className="bi bi-apple me-2"></i>Log in with Apple
              </button>
            </div>

            <div className="text-center">
              <small>
                New User?{" "}
                <Link to="/signup" className="text-success fw-bold">
                  SIGN UP HERE
                </Link>
              </small>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
