import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import "../../css/Navbar.css";
import { AuthContext } from "./ContextComponents/AuthContext";

const Navbar = () => {
  const { user, dispatch } = useContext(AuthContext);
  var [dropdown, showDropdown] = useState(false);
  const toggleDropdown = () => {
    showDropdown((dropdown) => !dropdown);
  };
  var [dropdown1, showDropdown1] = useState(false);
  const toggleDropdown1 = () => {
    showDropdown1((dropdown1) => !dropdown1);
  };
  const handleLogout = () => {
    localStorage.removeItem("token");
    dispatch({ type: "LOGOUT" });
  };
  return (
    <header>
      <nav>
        <ol>
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="link">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <div
            onMouseEnter={toggleDropdown}
            onMouseLeave={toggleDropdown}
            className="dropdown"
          >
            <span className="link">Hooks</span>
            {dropdown && (
              <ul className="dropdown-list">
                <li>
                  <Link to="/react-lifecycle-methods" className="dropdown-link">
                    Lifecycle
                  </Link>
                </li>
                <li>
                  <Link to="/use-state" className="dropdown-link">
                    UseState
                  </Link>
                </li>
                <li>
                  <Link to="/use-effect" className="dropdown-link">
                    UseEffect
                  </Link>
                </li>
                <li>
                  <Link to="/use-api" className="dropdown-link">
                    UseEffectAPI
                  </Link>
                </li>
                <li>
                  <Link to="/use-ref" className="dropdown-link">
                    UseRef
                  </Link>
                </li>
                <li>
                  <Link to="/use-memo" className="dropdown-link">
                    UseMemo
                  </Link>
                </li>
                <li>
                  <Link to="/use-call" className="dropdown-link">
                    UseCallback
                  </Link>
                </li>
                <li>
                  <Link to="/use-context" className="dropdown-link">
                    UseContext
                  </Link>
                </li>
                <li>
                  <Link to="/use-custom" className="dropdown-link">
                    UseLocalStorage
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <div
            onMouseEnter={toggleDropdown1}
            onMouseLeave={toggleDropdown1}
            className="dropdown"
          >
            <span className="link">Memoization</span>
            {dropdown1 && (
              <ul className="dropdown-list">
                <li>
                  <Link to="/memo" className="dropdown-link">
                    Memo
                  </Link>
                </li>
                <li>
                  <Link to="/lazy" className="dropdown-link">
                    Lazy,Suspense
                  </Link>
                </li>
              </ul>
            )}
          </div>
          <li>
            <Link to="/hoc" className="link">
              HoC
            </Link>
          </li>
          <li>
            {user ? (
              <span onClick={handleLogout} className="link">
                Logout
              </span>
            ) : (
              <Link to="/login" className="link">
                Login
              </Link>
            )}
          </li>
        </ol>
      </nav>
    </header>
  );
};
export default Navbar;
