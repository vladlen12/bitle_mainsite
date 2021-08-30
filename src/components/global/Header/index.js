import { NavHashLink as Link } from "react-router-hash-link";
import Navigation from "./Navigation";
import MobileMenu from "./MobileMenu";
import { Button, Row } from "../../ui";

import useWindowWidth from "../../../hook/useWindowWidth";

import css from "./index.module.scss";
import LangSwitcher from "./LangSwitcher";

const Header = () => {
  const isTablet = useWindowWidth();
  return (
    <header className={css.header}>
      <div className={css.headerInner}>
        <Link smooth className={css.logo} to="/#top">
          <svg
            width="108"
            height="40"
            viewBox="0 0 108 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M48 12H57.5868C59.1526 12 60.303 12.3429 61.038 13.0286C61.773 13.699 62.1405 14.7276 62.1405 16.1143C62.1405 17.0286 61.9328 17.7752 61.5174 18.3543C61.1019 18.9181 60.5906 19.3143 59.9835 19.5429C61.2777 19.8781 62.1565 20.701 62.6198 22.0114C62.7796 22.4838 62.8595 23.0324 62.8595 23.6571C62.8595 25.1505 62.492 26.2476 61.757 26.9486C61.022 27.6495 59.8716 28 58.3058 28H48V12ZM58.5455 22.9714C58.5455 22.0571 58.0661 21.6 57.1074 21.6H52.314V24.8H57.1074C58.0661 24.8 58.5455 24.3429 58.5455 23.4286V22.9714ZM57.8264 16.5714C57.8264 15.6571 57.3471 15.2 56.3884 15.2H52.314V18.4H56.3884C57.3471 18.4 57.8264 17.9429 57.8264 17.0286V16.5714Z"
              fill="var(--white100)"
            />
            <path
              d="M73.9233 28H65.2952V24.8H67.4522V15.2H65.2952V12H73.9233V15.2H71.7663V24.8H73.9233V28Z"
              fill="var(--white100)"
            />
            <path
              d="M85.2258 28H80.9118V15.2H75.8787V12H90.2589V15.2H85.2258V28Z"
              fill="var(--white100)"
            />
            <path
              d="M97.2521 24.8H106V28H92.938V12H97.2521V24.8Z"
              fill="var(--white100)"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.9215 0.553009C17.2077 -0.184336 18.7923 -0.184336 20.0785 0.553008L33.9215 8.48915C35.2077 9.2265 36 10.5892 36 12.0639V27.9361C36 29.4108 35.2077 30.7735 33.9215 31.5109L20.0785 39.447C18.7923 40.1843 17.2077 40.1843 15.9215 39.447L2.07846 31.5109C0.792305 30.7735 0 29.4108 0 27.9361V12.0639C0 10.5892 0.792305 9.2265 2.07846 8.48915L15.9215 0.553009ZM13 12C12.4477 12 12 12.4477 12 13V27C12 27.5523 12.4477 28 13 28H21.7097C23.1849 28 24.2688 27.6495 24.9613 26.9486C25.6538 26.2476 26 25.1505 26 23.6571C26 23.0324 25.9247 22.4838 25.7742 22.0114C25.3376 20.701 24.5097 19.8781 23.2903 19.5429C23.8624 19.3143 24.3441 18.9181 24.7355 18.3543C25.1269 17.7752 25.3226 17.0286 25.3226 16.1143C25.3226 14.7276 24.9763 13.699 24.2839 13.0286C23.5914 12.3429 22.5075 12 21.0323 12H13ZM20.5806 21.6C21.4839 21.6 21.9355 22.0571 21.9355 22.9714V23.4286C21.9355 24.3429 21.4839 24.8 20.5806 24.8H16.0645V21.6H20.5806ZM19.9032 15.2C20.8065 15.2 21.2581 15.6571 21.2581 16.5714V17.0286C21.2581 17.9429 20.8065 18.4 19.9032 18.4H16.0645V15.2H19.9032Z"
              fill="var(--white100)"
            />
          </svg>
        </Link>
        {!isTablet && <Navigation />}
        {!isTablet && <LangSwitcher />}
        {!isTablet && (
          <Row mod={css.headerActions}>
            <Button mod={css.loginBtn} transparent text="Login" />
            <Button sm primary text="Registration" />
          </Row>
        )}
        {isTablet && <MobileMenu />}
      </div>
    </header>
  );
};

export default Header;
