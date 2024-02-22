// import { LOGO } from "../utils/constants";
import LOGO from "../assets/LOGO.png";

const Header = () => {
  return (
    <>
      <div className="absolute  px-8 py-2 bg-gradient-to-b from-black">
        <img className="w-44" src={LOGO} alt="logo" />
      </div>
     
    </>
  );
};

export default Header;
