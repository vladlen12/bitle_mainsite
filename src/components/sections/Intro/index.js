import cn from "classnames";
import { Container, Section, Title } from "../../ui";

import css from "./index.module.scss";

const Intro = ({ page, sectionTitle, sectionSubTitle }) => {
  return (
    <Section mod={cn([css.intro, css[page]])}>
      <Container sm>
        <Title
          tag="h3"
          mod={css.introSubtitle}
          text={sectionSubTitle}
          subSectionTitle
        />
        <Title tag="h1" mod={css.introTitle} text={sectionTitle} pageTitle />
      </Container>
    </Section>
  );
};

export default Intro;
