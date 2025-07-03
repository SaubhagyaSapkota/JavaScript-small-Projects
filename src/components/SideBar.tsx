import { RiHome6Line } from "react-icons/ri";
import { CgShoppingBag } from "react-icons/cg";
import { IoCubeOutline } from "react-icons/io5";
import { FaClockRotateLeft } from "react-icons/fa6";
import { FaFolderClosed } from "react-icons/fa6";
import { CiFileOn } from "react-icons/ci";
import { BsPeople } from "react-icons/bs";
import { MdOutlineContactSupport } from "react-icons/md";
import { TbCircleDotted } from "react-icons/tb";
import { IoIosSettings } from "react-icons/io";
import { FaCircleNotch } from "react-icons/fa";
import { HiDotsHorizontal } from "react-icons/hi";
import { FaArrowCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Profile } from "./Profile";
import { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const opensidebar = () => setIsOpen(!isOpen);

  const [openFolder, setopenfolder] = useState(true);
  const folder = () => setopenfolder(!openFolder);

  return (
    <aside
      className={`${
        isOpen ? "w-64" : "w-16"
      } bg-gray-150 h-screen border-1 m-1 rounded-2xl p-2 flex flex-col transition-all duration-700 ease-in-out justify-between`}
    >
      <div className="bg-gray-100 border-2 border-gray-300 rounded-2xl h-screen p-2">
        <div className="flex items-center gap-2 mb-6">
          <h1 className="flex gap-2 font-bold text-lg">
            <button onClick={opensidebar}>
              {isOpen ? (
                <>
                  <div className="flex space-x-2">
                    <FaCircleNotch className="mt-1" />
                    <span>Untitled UI</span>
                  </div>
                </>
              ) : (
                <FaArrowCircleRight />
              )}
            </button>
          </h1>
        </div>
        {
          <>
            <nav className="space-y-1 text-xl ">
              <Link
                className="flex sidebar-link hover:opacity-70 hover:-translate-y-1"
                to="/"
              >
                <RiHome6Line className="mt-1 mr-2 mb-3" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100 " : "opacity-0 w-0"
                  }`}
                >
                  Home
                </span>
              </Link>
              <Link
                className="flex sidebar-link hover:opacity-70 hover:-translate-y-1"
                to="/store"
              >
                <CgShoppingBag className="mt-1 mr-2 mb-3" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  My Store
                </span>
              </Link>
              <Link
                className="flex sidebar-link hover:opacity-70 hover:-translate-y-1"
                to="/projects"
              >
                <IoCubeOutline className="mt-1 mr-2 mb-3" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Projects
                </span>
              </Link>
              <Link
                className="flex sidebar-link hover:opacity-70 hover:-translate-y-1"
                to="/scheduled"
              >
                <FaClockRotateLeft className="mt-1 mr-2 mb-4" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Scheduled
                </span>
              </Link>
            </nav>

            <div
              className={`transition-all duration-700 ease-in-out ${
                openFolder ? "h-60 " : "h-14"
              } `}
            >
              <hr className="opacity-30" />
              <div className="flex justify-between hover:opacity-70 hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <div className="flex text-sm text-black uppercase mb-2 mt-3 ">
                  <FaFolderClosed className="mt-1 text-xl" />
                  {isOpen && (
                    <span
                      className={`ml-2 text-xl overflow-hidden transition-all duration-500 ease-in-out ${
                        isOpen ? "opacity-100" : "opacity-0 w-0"
                      }`}
                    >
                      Folders
                    </span>
                  )}
                </div>
                <button
                  onClick={folder}
                  className={`${isOpen ? "opacity-100" : "opacity-0 "}`}
                >
                  <HiDotsHorizontal />
                </button>
              </div>

              {openFolder ? (
                <>
                  <div
                    className={` overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? "opacity-100" : "opacity-0"
                    } ml-6`}
                  >
                    <ul className="space-y-1 pl-2 ">
                      <li className="flex justify-between mb-3 ">
                        <span>View all</span>
                        <span>48</span>
                      </li>
                      <li className="flex justify-between mb-3">
                        <span>Recent</span>
                        <span>6</span>
                      </li>
                      <li className="flex justify-between mb-3">
                        <span>Favorites</span>
                        <span>4</span>
                      </li>
                      <li className="flex justify-between mb-3">
                        <span>Shared</span>
                        <span>22</span>
                      </li>
                      <li className="flex justify-between mb-3">
                        <span>Archived</span>
                        <span>14</span>
                      </li>
                    </ul>
                  </div>
                </>
              ) : null}
            </div>

            <div className=" space-y-1 text-xl">
              <hr className="opacity-30" />
              <Link
                className="flex sidebar-link hover:opacity-70 mb-3 hover:-translate-y-1"
                to="/file"
              >
                <CiFileOn className="mt-1 mr-2" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Files
                </span>
              </Link>
              <Link
                className="flex sidebar-link hover:opacity-70 mb-3 hover:-translate-y-1"
                to="/team"
              >
                <BsPeople className="mt-1 mr-2" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Team
                </span>
              </Link>
              <Link
                className="flex sidebar-link hover:opacity-70 mb-3 hover:-translate-y-1"
                to="/appearance"
              >
                <TbCircleDotted className="mt-1 mr-2" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Appearance
                </span>
              </Link>
            </div>
            <div className="fixed bottom-5 space-y-2 text-xl overflow-hidden transition-all duration-500 ease-in-out">
              <Link
                className="flex sidebar-link hover:opacity-70 hover:-translate-y-1"
                to="/support"
              >
                <MdOutlineContactSupport className="mt-1 mr-2 mb-3" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100 " : "opacity-0 w-0"
                  }`}
                >
                  Support
                </span>
              </Link>
              <Link
                className="flex sidebar-link hover:opacity-70 hover:-translate-y-1"
                to="/settings"
              >
                <IoIosSettings className="mt-1 mr-2" />
                <span
                  className={`overflow-hidden transition-all duration-500 ease-in-out${
                    isOpen ? "opacity-100" : "opacity-0 w-0"
                  }`}
                >
                  Settings
                </span>
              </Link>

              <div>
                <Profile isOpen={isOpen} />
              </div>
            </div>
          </>
        }
      </div>
    </aside>
  );
};

export default Sidebar;
