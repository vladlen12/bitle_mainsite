import cn from "classnames";
import { Row, Text, Title } from "../..";

import css from "./index.module.scss";

const CardWithIcon = ({ mod, iconSrc, title, text }) => {
  return (
    <Row
      mod={cn([
        css.cardWithIcon,
        {
          [mod]: mod,
        },
      ])}
    >
      <img
        className={css.iconImage}
        alt="icom"
        width="54"
        height="60"
        src={iconSrc}
      />
      <Title tag="h4" smalTitle text={title} />
      <Text>{text}</Text>
    </Row>
  );
};

export default CardWithIcon;
