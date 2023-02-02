import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { json, Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import logo from '../components/images/reTrade.jpg'

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
    <div className="navbar bg-base-100 w-full p-10" >
      <div className="flex-1">
        <a className=" flex items-center gap-3 btn btn-ghost normal-case text-xl">
          <img src={logo} width={35} height={35} alt="" />
          <Link className=" md:text-3xl text-xl" to="/">reTrade</Link>
        </a>
      </div>
      <div className="flex-none">
        {user
          ? <button className="btn" onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          : <ul className="menu menu-horizontal px-1">
              <li>
                <Link className=" md:text-md" to="/Login">Login</Link>
              </li>
              <li>
                <Link className=" md:text-md" to="/Register">Signup</Link>
              </li>
            </ul>}
      </div>
    </div>
  );
};

export default Navbar;
