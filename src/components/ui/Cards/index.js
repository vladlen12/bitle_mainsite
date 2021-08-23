import cn from "classnames";
import Row from "../Row";
import CardWithDecor from "./CardWithDecor";
import CardWithIcon from "./CardWithIcon";

import css from "./index.module.scss";

const Cards = ({ data, iconCard, decorationCard }) => {
  return (
    <Row
      mod={cn({
        [css.cardsWithIcon]: iconCard,
        [css.cardsWithDecoration]: decorationCard,
      })}
    >
      {iconCard &&
        data.map(({ iconSrc, title, text }) => (
          <CardWithIcon
            key={title}
            iconSrc={iconSrc}
            title={title}
            text={text}
          />
        ))}
      {decorationCard &&
        data.map(({ theme, title, text }, i) => (
          <CardWithDecor
            key={title}
            theme={`theme${theme}`}
            title={title}
            text={text}
          />
        ))}
    </Row>
  );
};

export default Cards;
