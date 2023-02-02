import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { json, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   const { user } = useSelector(state => state.auth);

  const user = JSON.parse(localStorage.getItem("pocketbase_auth"));

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">
          <Link to="/">reTrade</Link>
        </a>
      </div>
      <div className="flex-none">
        {user
          ? <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          : <ul className="menu menu-horizontal px-1">
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to="/Register">Signup</Link>
              </li>
            </ul>}
      </div>
    </div>
  );
};

export default Navbar;
