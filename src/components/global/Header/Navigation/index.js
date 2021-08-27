import { HashLink as NavLink } from "react-router-hash-link";
import { useRouteMatch } from "react-router-dom";
import cn from "classnames";
// import { NavLink } from "react-router-dom";
import css from "./index.module.scss";

const navigationData = [
  {
    title: "bitl",
    path: "/",
    to: "/#top",
  },
  {
    title: "About US",
    path: "/about-us",
    to: "/about-us#top",
  },
  {
    title: "blockchain UMI",
    path: "/blockchain",
    to: "/blockchain#top",
  },
  {
    title: "Projects",
    path: "/projects",
    to: "/projects#top",
  },
  {
    title: "Roadmap",
    path: "/roadmap",
    to: "/roadmap#top",
  },
  {
    title: "Contact",
    path: "/contact-us",
    to: "/contact-us#top",
  },
];

const Navigation = () => {
  let match = useRouteMatch();

  return (
    <nav className={css.navigation}>
      {navigationData.map(({ title, path, to }) => (
        <NavLink key={title} to={to} smooth className={css.navigationLink}>
          <span className={cn({ [css.active]: match.path === path })}>
            {title}
          </span>
        </NavLink>
      ))}
    </nav>
  );
};

export default Navigation;
