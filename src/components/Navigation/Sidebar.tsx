import {
  RiHome6Line,
  RiAddCircleFill,
  RiLogoutCircleRLine,
  RiHome2Fill,
  RiCloseLine,
  RiMenu3Fill,
} from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Meme from "../../assets/image/logo.png";
import { useState } from "react";

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/");
  };

  return (
    <>
      <div
        className={`bg-[#2A2B2E] fixed lg:left-0 top-0 w-56 h-full flex flex-col justify-between py-6 rounded-tr-xl rounded-br-xl z-50 transition-all ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        <div>
          <ul className="pl-4">
            <li>
              <h1 className="flex flex-col items-center">
                <img className="w-32" src={Meme} alt="logo de meme" />
              </h1>
            </li>
            <li className=" p-4 rounded-tl-xl rounded-bl-xl mt-6">
              <Link
                to="/home"
                className={`${
                  location.pathname === "/home"
                    ? "bg-[#2BBE7A] p-4 flex justify-center rounded-xl text-white"
                    : "hover:bg-[#2BBE7A] p-4 flex justify-center rounded-xl text-gray-300 group-hover:text-white transition-colors"
                }`}
              >
                <RiHome6Line className="text-2xl" />
                <span className="pl-4">Inicio</span>
              </Link>
            </li>
            <li className="p-4 rounded-tl-xl rounded-bl-xl mt-6">
              <Link
                to="/register"
                className={`${
                  location.pathname === "/register"
                    ? "bg-[#2BBE7A] p-4 flex justify-center rounded-xl text-white"
                    : "hover:bg-[#2BBE7A] p-4 flex justify-center rounded-xl text-gray-300 group-hover:text-white transition-colors"
                }`}
              >
                <RiAddCircleFill className="text-2xl" />{" "}
                <span className="pl-4">Crear</span>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="pl-4">
            <li className="hover:bg-[#222327] p-4 rounded-tl-xl rounded-bl-xl group transition-colors">
              <Link
                to="/"
                onClick={handleLogout}
                className="group-hover:bg-[#2BBE7A] p-4 flex justify-center rounded-xl text-gray-300 group-hover:text-white transition-colors"
              >
                <RiLogoutCircleRLine className="text-2xl" />
                <span className="pl-4">Cerrar Sesión</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <nav className="bg-[#292D39] lg:hidden fixed w-full bottom-0 left-0 text-3xl text-gray-400 py-2 px-8 flex items-center justify-between rounded-tl-xl rounded-tr-xl">
        <Link to="/home">
          <button className="p-2">
            <RiHome2Fill />
          </button>
        </Link>
        <Link to="/register">
          <button className="p-2 text-green-400 text-4xl">
            <RiAddCircleFill />
          </button>
        </Link>
        <button onClick={toggleMenu} className="text-white p-2">
          {showMenu ? <RiCloseLine /> : <RiMenu3Fill />}
        </button>
      </nav>
    </>
  );
};

export default Sidebar;
