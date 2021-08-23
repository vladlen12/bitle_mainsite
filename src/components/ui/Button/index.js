import { Link } from "react-router-dom";
import cn from "classnames";

import css from "./index.module.scss";

const Button = ({ href, mod, primary, secondary, lg, text }) => {
  const classes = cn([
    css.button,
    {
      [mod]: mod,
      [css.primary]: primary,
      [css.secondary]: secondary,
      [css.lg]: lg,
    },
  ]);

  if (href) {
    return (
      <Link to={href} className={classes}>
        <span className={css.buttonText}>{text}</span>
      </Link>
    );
  }
  return (
    <button className={classes}>
      <span className={css.buttonText}>{text}</span>
    </button>
  );
};

export default Button;
