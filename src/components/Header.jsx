// import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import LOGO from "../assets/LOGO.png";
// import {  USER_AVATAR } from "../utils/constants";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
        navigate("/browse");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    // Unsiubscribe when component unmounts
    return () => unsubscribe();
  }, []);
  return (
    // <div className="absolute flex w-full justify-between text-white  px-8 py-2 bg-gradient-to-b from-black">
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b text-white from-black z-10 flex flex-col md:flex-row justify-between">
      <img className="w-44" src={LOGO} alt="logo" />

      {user && (
        <div className="flex p-2">
          <img src={user?.photoURL} className="w-12 h-12" alt="user_avatar" />
          <button onClick={handleSignout} className="font-bold ">
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
