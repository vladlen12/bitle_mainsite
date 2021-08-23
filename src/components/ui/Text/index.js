import React from "react";
import cn from "classnames";
import css from "./index.module.scss";

const Text = ({ mod, sm, bold, children }) => {
  let newMod = mod;
  if (Array.isArray(mod)) {
    newMod = mod.join(" ");
  }

  const classes = cn([
    css.text,
    {
      [newMod]: mod,
      [css.bold]: bold,
      [css.sm]: sm,
    },
  ]);
  return <p className={classes}>{children}</p>;
};

export default Text;
