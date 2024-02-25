import React, { useState, useRef } from "react";
import { BG_URL, USER_AVATAR } from "../utils/constants";
import { validateFormData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";


const Login = () => {
  const [signUpForm, setSignUpForm] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const dispatch = useDispatch();

  const email = useRef(null);
  const password = useRef(null);
  const username = useRef(null);

  const formSubmitHandler = () => {
    setErrorMessage(
      validateFormData(email.current.value, password.current.value)
    );
    if (errorMessage === null) {
      if (signUpForm) {
        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // const user = userCredential.user;
            updateProfile(auth.currentUser, {
              displayName: username.current.value,
              photoURL: USER_AVATAR,
            })
              .then(() => {
                const { uid, email, displayName, photoURL } = auth.currentUser;

                dispatch(
                  addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL: photoURL,
                  })
                );
              })
              .catch((error) => {
                setErrorMessage(error.message);
              });

            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            setErrorMessage(errorCode + "-" + errorMsg);
            console.log(errorMsg);
            // ..
          });
      } else {
        console.log("SIGNIN IN USER");

        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            const user = userCredential.user;
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMsg = error.message;
            setErrorMessage(errorCode + "-" + errorMsg);
          });
      }
    }
  };

  return (
    <div className="login-component ">
      <Header />
      <img src={BG_URL} alt="" />
      <div className=" w-4/12 absolute mx-auto  mt-24 h-full right-0 bottom-0 left-0 top-0 bg-black bg-opacity-80 text-white">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="p-14"
          action=""
        >
          <h1 className="text-3xl font-bold mb-6 ">
            {!signUpForm ? "Sign In" : "Sign Up"}
          </h1>
          {signUpForm && (
            <input
              ref={username}
              className="p-4 my-2 w-full bg-transparent border-gray-500 rounded-sm border"
              type="text"
              placeholder="Username "
            />
          )}
          <input
            ref={email}
            className="p-4 my-2 w-full bg-transparent border-gray-500 rounded-sm border"
            type="email"
            placeholder="Email or phone number "
          />
          <input
            ref={password}
            className="p-4 my-2 w-full bg-transparent border-gray-500 rounded-sm border"
            type="password"
            placeholder="Password"
          />
          <p className="text-red-600 font-semibold">{errorMessage}</p>
          <button
            className="bg-red-600 w-full p-2 text-l font-bold rounded-sm mt-2"
            onClick={formSubmitHandler}
          >
            {" "}
            {!signUpForm ? "Sign In" : "Create account"}
          </button>
        </form>
        {!signUpForm && (
          <>
            <span className="pl-14 cursor-pointer hover:underline ">
              Forgot password?
            </span>
            <br />
          </>
        )}

        <span className="  p-14 mt-6 text-gray-400">
          {!signUpForm ? "New to Netflix?" : "Already a user?"}{" "}
          <strong
            className=" cursor-pointer hover:underline text-white"
            onClick={() => {
              setSignUpForm(!signUpForm);
            }}
          >
            {!signUpForm ? "Sign up now" : "Sign In"}
          </strong>
        </span>
      </div>
    </div>
  );
};

export default Login;
