import style from "./Layout.module.css";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { IoMoonOutline } from "react-icons/io5";
import { useEffect, useState } from "react";

export const Header = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <div className={style.wrap}>
        <header className={style.header}>
          <div className={style.wrapper_link}>
            <Link to="/" className={style.a}>
              HOME
            </Link>
            <Link to="/profile" className={style.a}>
              PROFILE
            </Link>
            <Link to="/chat" className={style.a}>
              CHATS
            </Link>
          </div>
          <div className={style.wrapper_icon} onClick={toggleTheme}>
            <IoMoonOutline />
            {theme} theme
          </div>
        </header>
        <main>
          <Outlet></Outlet>
        </main>
        <footer>
          <div className={style.wrapper_footer}>
            <p>FOOTER</p>
          </div>
        </footer>
      </div>
    </>
  );
};
