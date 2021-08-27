import { HashLink as Link } from "react-router-hash-link";
import cn from "classnames";

import css from "./index.module.scss";

const Button = ({
  onClick,
  href,
  mod,
  primary,
  secondary,
  transparent,
  sm,
  lg,
  text,
}) => {
  const classes = cn([
    css.button,
    {
      [mod]: mod,
      [css.primary]: primary,
      [css.secondary]: secondary,
      [css.transparent]: transparent,
      [css.sm]: sm,
      [css.lg]: lg,
    },
  ]);

  if (href) {
    return (
      <Link to={`${href}#top`} smooth className={classes}>
        <span className={css.buttonText}>{text}</span>
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={classes}>
      <span className={css.buttonText}>{text}</span>
    </button>
  );
};

export default Button;
