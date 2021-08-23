import cn from "classnames";
import css from "./index.module.scss";

const Container = ({ sm, md, lg, children }) => {
  const classes = cn([
    css.container,
    {
      [css.sm]: sm,
      [css.md]: md,
      [css.lg]: lg,
    },
  ]);

  return <div className={classes}>{children}</div>;
};

export default Container;
