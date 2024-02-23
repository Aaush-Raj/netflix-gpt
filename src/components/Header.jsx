// import { LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import LOGO from "../assets/LOGO.png";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        navigate("/");

        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      });
  };
  return (
    <div className="absolute flex w-full justify-between text-white  px-8 py-2 bg-gradient-to-b from-black">
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
