import React from "react";
import cn from "classnames";
import css from "./index.module.scss";

const Title = ({
  tag,
  pageTitle,
  sectionTitle,
  subSectionTitle,
  smalTitle,
  footerTitle,
  mod,
  text,
}) => {
  return React.createElement(tag, {
    className: cn([
      css.title,
      {
        [mod]: mod,
        [css.pageTitle]: pageTitle,
        [css.sectionTitle]: sectionTitle,
        [css.subSectionTitle]: subSectionTitle,
        [css.smalTitle]: smalTitle,
        [css.footerTitle]: footerTitle,
      },
    ]),
    dangerouslySetInnerHTML: { __html: text },
  });
};

export default Title;
