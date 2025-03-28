import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsYoutube, BsBell } from "react-icons/bs";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { TiMicrophone } from "react-icons/ti";
import { toggleSidebar } from "../store/sidebarSlice";
import { changeSearchTerm, clearVideos } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { getSearchPageVideos } from "../store/reducers/getSearchPageVideos";

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const dispatch = useAppDispatch();

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleHamburgerClick = () => {
    dispatch(toggleSidebar());
  };

  const location = useLocation();
  const navigate = useNavigate();

  const searchTerm = useAppSelector((state) => state.youtubeApp.searchTerm);
  const handleSearch = () => {
    if (location.pathname !== "/search") navigate("/search");
    else {
      dispatch(clearVideos());
      dispatch(getSearchPageVideos(false));
    }
  };

  return (
    <div className="flex justify-between items-center px-14 h-14 bg-gray-50 dark:bg-[#212121] opacity-95 sticky top-0 z-50 transition-colors duration-300">
      <div className="flex gap-8 items-center text-2xl">
        <div
          className="text-black dark:text-white cursor-pointer"
          onClick={handleHamburgerClick}
        >
          {GiHamburgerMenu({
            className: " cursor-pointer ",
          })}
        </div>
        <Link to="/">
          <div className="flex gap-1 items-center justify-center">
            {BsYoutube({
              className: "text-red-600 cursor-pointer text-3xl ",
            })}
            <span className="text-xl font-medium text-black dark:text-white">
              YouTube
            </span>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-center gap-5">
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleSearch();
          }}
        >
          <div className="flex bg-gray-200 dark:bg-zinc-900 items-center h-10 px-4 pr-0 rounded-full">
            <div className="flex">
              <div className="flex gap-4 items-center pr-5">
                {AiOutlineSearch({
                  className:
                    " cursor-pointer text-xl text-black dark:text-white ",
                })}
                <input
                  type="text"
                  className="w-96 bg-transparent focus:outline-none border-none text-black dark:text-white"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => dispatch(changeSearchTerm(e.target.value))}
                />
              </div>
              <button className="h-10 w-16 flex items-center justify-center bg-gray-300 dark:bg-zinc-800 rounded-r-full">
                {AiOutlineClose({
                  className:
                    " cursor-pointer text-xl text-black dark:text-white ",
                })}
              </button>
            </div>
          </div>
        </form>
        <div className="text-xl p-3 dark:bg-zinc-900 bg-gray-200  rounded-full">
          {TiMicrophone({
            className: " cursor-pointer ",
          })}
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="relative">
          {BsBell({
            className: " cursor-pointer text-xl",
          })}
          <span className="absolute bottom-2 left-2 text-[10px] bg-red-600 rounded-full px-1 text-white">
            9+
          </span>
        </div>
        <div
          className="cursor-pointer text-2xl text-black dark:text-white"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <div>
              {MdOutlineLightMode({
                className: " cursor-pointer ",
              })}
            </div>
          ) : (
            <div>
              {MdOutlineDarkMode({
                className: " cursor-pointer ",
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
