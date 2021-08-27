import { useState } from "react";
import cn from "classnames";
import Row from "../Row";

import blackModIcon from "../../../assets/svg/black-mod-icon.svg";

import css from "./index.module.scss";

const ThemeSwitcher = () => {
  const [whiteTheme, setWhiteTheme] = useState(true);

  const handleChangeTheme = () => {
    setWhiteTheme((prev) => !prev);
    document.body.classList.toggle("white-theme");
  };

  return (
    <Row mod={css.themeSwitcher} onClick={handleChangeTheme}>
      <img alt="icon" src={blackModIcon} />
      <p className={css.text}>Black mode</p>
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
