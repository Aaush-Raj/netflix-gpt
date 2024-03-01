import { useNavigate } from "react-router-dom";
import LOGO from "../assets/LOGO.png";

import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { clearGptMovies, toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";
import { changeLanguage } from "../utils/configSlice";
const Header = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/browse");
      });
  };
  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    console.log(e.target.value);
    dispatch(changeLanguage(e.target.value));
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

    return () => unsubscribe();
  }, []);
  return (
    <div className="absolute w-screen md:px-8 px-4 py-2 bg-gradient-to-b text-white from-black z-10 flex flex-col md:flex-row justify-around md:justify-between">
      <img className="md:w-44 w-32 mx-auto md:mx-0" src={LOGO} alt="logo" />

      {user && (
        <div className="flex md:p-2 justify-between">
          <button
            className="py-2 px-4 md:mx-4 my-2 bg-gray-900 text-white rounded-lg"
            onClick={() => {
              if (showGptSearch) {
                dispatch(clearGptMovies());
              }
              handleGptSearchClick();
            }}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>

          {showGptSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <div className="flex flex-col">
            <img src={user?.photoURL} className="mx-auto w-8 h-8 py-1 object-cover" alt="user_avatar" />
            <button onClick={handleSignout} className="font-semibold  text-sm py-1 hover:bg-gray-700 bg-gray-900 px-2  rounded-md  ">
              (SignOut)
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
