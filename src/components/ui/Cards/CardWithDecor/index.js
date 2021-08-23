import { Row, Text, Title } from "../..";

import css from "./index.module.scss";

const CardWithDecor = ({ theme, title, text }) => {
  return (
    <Row mod={[css.card, css[theme]]}>
      <Title tag="h4" smalTitle text={title} />
      <Text>{text}</Text>
    </Row>
  );
};

export default CardWithDecor;
