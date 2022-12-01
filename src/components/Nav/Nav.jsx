import style from "./Nav.module.css";

import SVGList from "../SVGList/SVGList";

const Nav = () => {
  return (
    <nav className={style.Nav}>
      <a href="/" className={style.portfolioLogo}>
        adamkeyes
      </a>
      <SVGList />
    </nav>
  );
};

export default Nav;
