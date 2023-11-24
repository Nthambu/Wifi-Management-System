import { IoIosWifi } from "react-icons/io";

import "./navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar_icon">
        <IoIosWifi />
      </div>
      <h2 className="navbar_header">WISPMAN WIFI LOGIN</h2>
    </nav>
  );
};
export default Navbar;
