import { useState } from "react";
import cn from "classnames";
import { Button } from "../../../ui";
import Navigation from "../Navigation";

import { languageData } from "../../../../constants/lang";

import css from "./index.module.scss";

const MobileMenu = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentLang, setCurrentLang] = useState(languageData[0]);
  const [openLang, setOpenLang] = useState(false);

  const handleChangeMenuState = () => {
    setOpenMenu((prev) => {
      if (prev) {
        document.body.style.overflow = "";
      } else {
        document.body.style.overflow = "hidden";
      }

      return !prev;
    });
  };

  const handleChangeLangState = () => setOpenLang((prev) => !prev);

  const handleChangeLang = (data) => () => {
    setCurrentLang(data);
    handleChangeLangState();
    handleChangeMenuState();
  };

  return (
    <>
      <div className={css.mobileBtn} onClick={handleChangeMenuState}>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 6C22 5.44772 21.5523 5 21 5H3C2.44772 5 2 5.44772 2 6C2 6.55228 2.44772 7 3 7H21C21.5523 7 22 6.55228 22 6Z"
            fill="var(--white100)"
          />
          <path
            d="M22 12.0322C22 11.4799 21.5523 11.0322 21 11.0322H3C2.44772 11.0322 2 11.4799 2 12.0322C2 12.5845 2.44772 13.0322 3 13.0322H21C21.5523 13.0322 22 12.5845 22 12.0322Z"
            fill="var(--white100)"
          />
          <path
            d="M21 17.0645C21.5523 17.0645 22 17.5122 22 18.0645C22 18.6167 21.5523 19.0645 21 19.0645H3C2.44772 19.0645 2 18.6167 2 18.0645C2 17.5122 2.44772 17.0645 3 17.0645H21Z"
            fill="var(--white100)"
          />
        </svg>
      </div>
      <div
        className={cn([
          css.menuOverlay,
          {
            [css.isActive]: openMenu,
          },
        ])}
        onClick={handleChangeMenuState}
      />
      <div
        className={cn([
          css.mobileMenu,
          {
            [css.isOpen]: openMenu,
          },
        ])}
      >
        <div className={css.mobileMenuInner}>
          <div className={css.menuHeader}>
            <p className={css.menuTitle}>Menu</p>
            <svg
              onClick={handleChangeMenuState}
              width="24"
              height="24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.3 5.71a.996.996 0 00-1.41 0L12 10.59 7.11 5.7A.996.996 0 105.7 7.11L10.59 12 5.7 16.89a.996.996 0 101.41 1.41L12 13.41l4.89 4.89a.996.996 0 101.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4z"
                fill="var(--white100)"
              />
            </svg>
          </div>
          <div className={css.menuBody}>
            <div
              onClick={handleChangeLangState}
              className={cn([
                css.menuLangTitle,
                {
                  [css.isOpen]: openLang,
                },
              ])}
            >
              <img alt={currentLang.name} src={currentLang.icon} />
              <span>{currentLang.name}</span>
              <svg
                width="10"
                height="6"
                viewBox="0 0 10 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.5 4.29177e-07L0.5 0L5 6L9.5 4.29177e-07Z"
                  fill="var(--white100)"
                />
              </svg>
            </div>
            <div
              className={cn([
                css.menuLangBody,
                {
                  [css.isOpen]: openLang,
                },
              ])}
            >
              {languageData.map((data) => (
                <div
                  key={data.name}
                  className={cn([
                    css.menuLangItem,
                    {
                      [css.active]: data.name === currentLang.name,
                    },
                  ])}
                  onClick={handleChangeLang(data)}
                >
                  <img alt={data.name} src={data.icon} />
                  <span>{data.name}</span>
                </div>
              ))}
            </div>
            <Navigation />
          </div>
          <div className={css.menuFooter}>
            <Button
              mod={css.loginBtn}
              onClick={handleChangeMenuState}
              transparent
              text="Login"
            />
            <Button
              onClick={handleChangeMenuState}
              sm
              primary
              text="Registration"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
