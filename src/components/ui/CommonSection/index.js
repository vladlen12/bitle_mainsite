import cn from "classnames";
import { Container, Section, Text, Title } from "..";
import css from "./index.module.scss";

const CommonSection = ({
  id,
  withoutTopIndent,
  subtitle,
  title,
  description,
  children,
}) => {
  return (
    <Section
      id={id}
      mod={cn([
        css.contentSection,
        { [css.withoutTopIndent]: withoutTopIndent },
      ])}
    >
      <Container md>
        {subtitle && <Title tag="h3" text={subtitle} subSectionTitle />}
        <Title tag="h2" text={title} sectionTitle />
        <Text mod={css.sectionText}>{description}</Text>
        {children}
      </Container>
    </Section>
  );
};

export default CommonSection;
