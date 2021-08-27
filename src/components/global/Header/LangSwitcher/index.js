import { useState, useEffect, useRef } from "react";
import cn from "classnames";
import { languageData } from "../../../../constants/lang";

import css from "./index.module.scss";

const LangSwitcher = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [currentLang, setCurrentLang] = useState(languageData[0]);
  const dropdown = useRef(null);

  const handleChangeLang = (data) => () => {
    setCurrentLang(data);
    setShowDropdown(false);
  };

  useEffect(() => {
    if (!showDropdown) return;
    function handleClick(event) {
      if (dropdown.current && !dropdown.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [showDropdown]);

  return (
    <div className={css.langSwitcher}>
      <div
        className={css.switcherBtn}
        onClick={() => setShowDropdown((b) => !b)}
      >
        <img alt={currentLang.name} src={currentLang.icon} />
      </div>
      {showDropdown && (
        <div className={css.dropdown} ref={dropdown}>
          {languageData.map((data) => (
            <div
              className={cn([
                css.dropdownItem,
                {
                  [css.active]: data.name === currentLang.name,
                },
              ])}
              onClick={handleChangeLang(data)}
              key={data.name}
            >
              <img alt={data.name} src={data.icon} />
              <span>{data.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LangSwitcher;
