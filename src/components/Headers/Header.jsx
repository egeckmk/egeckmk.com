import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MoonIcon,
  SunIcon,
  Bars3Icon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/outline";
import Logo from "../Logo";
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import { setToken } from "../../store/user.js";
import { setTheme, setLoading } from "../../store/siteConfig.js";
import { publicHeaderLinks } from "./links";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector((state) => state.users.token);
  const theme = useSelector((state) => state.siteConfig.theme);

  const handleThemeToogle = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    dispatch(setTheme(newTheme));
    localStorage.setItem("theme", JSON.stringify(newTheme));
  };

  const handleLogout = () => {
    dispatch(setToken(""));
    localStorage.removeItem("egeckmk-com-token");
    navigate("/");
  };
  return (
    <div className="fixed top-0 w-full z-[2] flex justify-between md:justify-evenly item-center py-8 dark:bg-black dark:bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <Logo />
      <Menu>
        {publicHeaderLinks.map((item, i) => (
          <MenuItem to={item.link} name={item.name} key={i} />
        ))}
      </Menu>

      <Bars3Icon
        className="flex md:hidden text-black dark:text-white h-6 mr-8 cursor-pointer"
        onClick={() => {
          setTimeout(() => {
            setIsOpen(!isOpen);
          }, 300);
        }}
      />
      <div className="hidden md:flex">
        <div
          className="hidden md:flex justify-center items-center cursor-pointer"
          onClick={handleThemeToogle}
        >
          {theme === "dark" ? (
            <SunIcon className="h-6 w-6 dark:text-white dark:hover:text-amber-400 transition-all ease duration-300 dark:hover:scale-150" />
          ) : (
            <MoonIcon className="h-6 w-6 text-black hover:text-amber-400 transition-all ease duration-300 hover:scale-150" />
          )}
        </div>
      </div>
      <div
        className={`${
          isOpen ? "fixed" : "hidden"
        } md:hidden top-14 right-8 bg-white w-2/5 dark:text-white dark:bg-[#2d3748] rounded-md p-4`}
      >
        <ul className="w-full">
          {publicHeaderLinks.map((item, i) => (
            <MenuItem to={item.link} name={item.name} key={i} />
          ))}
          <div
            className="flex md:hidden text-black py-2 dark:text-white justify-start items-center cursor-pointer"
            onClick={handleThemeToogle}
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6 dark:text-white dark:hover:text-amber-400 transition-all ease duration-300" />
            ) : (
              <MoonIcon className="h-6 w-6 text-black hover:text-amber-400 transition-all ease duration-300" />
            )}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
