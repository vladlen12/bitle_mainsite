import { useState } from "react";
import cn from "classnames";
import Row from "../Row";

import whiteModIcon from "../../../assets/svg/white-mod-icon.svg";
import blackModIcon from "../../../assets/svg/black-mod-icon.svg";

import css from "./index.module.scss";

const ThemeSwitcher = () => {
  const [whiteTheme, setWhiteTheme] = useState(false);

  const handleChangeTheme = () => {
    setWhiteTheme((prev) => !prev);
    document.body.classList.toggle("white-theme");
  };

  return (
    <Row mod={css.themeSwitcher} onClick={handleChangeTheme}>
      {whiteTheme ? (
        <img alt="icon" src={blackModIcon} />
      ) : (
        <img alt="icon" src={whiteModIcon} />
      )}
      <p className={css.text}>{whiteTheme ? "White mode" : "Black mode"}</p>
      <div
        className={cn([
          css.switcherBtn,
          {
            [css.active]: whiteTheme,
          },
        ])}
      />
    </Row>
  );
};

export default ThemeSwitcher;
