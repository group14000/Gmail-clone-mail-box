import React, { useState, useRef } from "react";
import {
  Container,
  Button,
  FormControl,
  Form,
  Row,
  Col,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const emailInputRef = useRef(null);
  const passwordInputRef = useRef(null);
  const confirmPasswordInputRef = useRef(null);

  const navigate = useNavigate();

  const switchAuthHandler = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current?.value;
    const enteredPassword = passwordInputRef.current?.value;

    if (!isLogin) {
      const enteredConfirmPassword = confirmPasswordInputRef.current?.value;

      if (enteredPassword !== enteredConfirmPassword) {
        alert("Passwords do not match.");
        return;
      }
    }

    emailInputRef.current.value = "";
    passwordInputRef.current.value = "";

    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCxyjWUaeJHg-818RzhMUNJv-zoBxRdSXQ";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCxyjWUaeJHg-818RzhMUNJv-zoBxRdSXQ";
    }

    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then((data) => {
            let errorMessage = "Authentication failed!";
            throw new Error(errorMessage);
          });
        }
      })
      .then((data) => {
        const token = data.idToken;
        console.log(token);
        console.log("Congratulations!! User has been logged in");

        emailInputRef.current.value = "";
        passwordInputRef.current.value = "";
        navigate("./MainPage");

        localStorage.setItem("userEmail", enteredEmail);
      })
      .catch((err) => {
        alert(err.message);
        console.error(err.message);
      });
  };

  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mb-8">
        WELCOME TO MAILBOX
      </h2>

      <div className="main-div bg-gray-100 p-8 rounded-lg shadow-md">
        <div className="container mx-auto p-4">
          <div className="text-center mb-6">
            <p
              className={`text-2xl font-bold neon-text ${
                isLogin ? "neon-signin" : "neon-signup"
              }`}
            >
              {isLogin ? "Sign in" : "Sign up"}
            </p>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">
              Email address
            </label>
            <input
              type="email"
              required
              ref={emailInputRef}
              className="w-full py-2 px-3 border rounded-sm"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              ref={passwordInputRef}
              className="w-full py-2 px-3 border rounded-sm"
            />
          </div>

          {!isLogin && (
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                ref={confirmPasswordInputRef}
                required
                className="w-full py-2 px-3 border rounded-sm"
              />
            </div>
          )}

          <div className="flex items-center mb-4">
            <input
              type="checkbox"
              id="flexCheckDefault"
              className="text-sm mr-2"
            />
            <label htmlFor="flexCheckDefault" className="text-sm">
              Remember me
            </label>
          </div>

          <div className="mb-4">
            <a href="#!" className="text-sm text-blue-500">
              Forgot password?
            </a>
          </div>

          <button
            className="mb-4 w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
            onClick={submitHandler}
          >
            {isLogin ? "Sign in" : "Sign up"}
          </button>

          <p className="text-center text-sm">
            {isLogin ? "Not a member? " : "Already a member? "}
            <span
              onClick={switchAuthHandler}
              className="link-text text-blue-500 cursor-pointer"
            >
              {isLogin ? "Register" : "Sign in with an existing account"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
