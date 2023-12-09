import { FaUnsplash, FaRegMoon } from "react-icons/fa";
import { FiSun } from "react-icons/fi";
import { useGlobalContext } from "../globalContext";

const Navbar = () => {
  const { theme, toggleDarkMode } = useGlobalContext();
  return (
    <nav>
      {/* logo  */}
      <div className="logo">
        <FaUnsplash />
        <h4>Unsplash</h4>
      </div>
      {/* dark mon btn */}
      <button type="btn" onClick={toggleDarkMode} className="dark-toggle">
        {theme ? (
          <FaRegMoon className="toggle-icon" />
        ) : (
          <FiSun className="toggle-icon" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
