import cn from "classnames";
import { useState } from "react";
import { Row } from "..";

import css from "./index.module.scss";

const FormControl = ({
  mod,
  id,
  label,
  success,
  errorMessage,
  onChange,
  onBlur,
  ...rest
}) => {
  const [activeInput, setActiveInput] = useState(false);
  const handleBlur = ({ target }) => {
    if (onBlur) {
      onBlur();
    }

    if (target.value) {
      setActiveInput(true);
    } else {
      setActiveInput(false);
    }
  };

  return (
    <Row
      mod={cn([
        css.formControl,
        {
          [css.active]: activeInput,
          [css.error]: errorMessage,
          [css.success]: success,
        },
      ])}
    >
      <input
        onChange={onChange}
        onBlur={handleBlur}
        className={css.formInput}
        id={id}
        {...rest}
      />
      <label className={css.formLabel} htmlFor={id}>
        {label}
      </label>
      {errorMessage && <p className={css.formError}>{errorMessage}</p>}
    </Row>
  );
};

export default FormControl;
