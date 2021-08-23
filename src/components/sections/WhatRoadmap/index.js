import { Column, Container, Row, Section, Text, Title } from "../../ui";
import stepIcon1 from "../../../assets/svg/step-icon1.svg";
import stepIcon2 from "../../../assets/svg/step-icon2.svg";
import stepIcon3 from "../../../assets/svg/step-icon3.svg";
import stepIcon4 from "../../../assets/svg/step-icon4.svg";
import stepIcon5 from "../../../assets/svg/step-icon5.svg";
import stepIcon6 from "../../../assets/svg/step-icon6.svg";
import stepIcon7 from "../../../assets/svg/step-icon7.svg";
import stepIcon8 from "../../../assets/svg/step-icon8.svg";
import stepIcon9 from "../../../assets/svg/step-icon9.svg";
import stepIcon10 from "../../../assets/svg/step-icon10.svg";

import css from "./index.module.scss";

const stepsData = [
  {
    title: "01 Step",
    text: "Opening applications for the integration of blockchain solutions into business",
    iconSrc: stepIcon1,
  },
  {
    title: "02 Step",
    text: "Launch of the liquidity pool platform",
    iconSrc: stepIcon2,
  },
  {
    title: "03 Step",
    text: "DEX platform launch",
    iconSrc: stepIcon3,
  },
  {
    title: "04 Step",
    text: "Reaching 100,000 coins in the liquidity pool",
    iconSrc: stepIcon4,
  },
  {
    title: "05 Step",
    text: "Creation of the first game based on the UMI blockchain",
    iconSrc: stepIcon5,
  },
  {
    title: "06 Step",
    text: "Creation and launch of the Betting platform",
    iconSrc: stepIcon6,
  },
  {
    title: "07 Step",
    text: "Reaching 300,000 coins in the liquidity pool",
    iconSrc: stepIcon7,
  },
  {
    title: "08 Step",
    text: "Marketplace platform creation",
    iconSrc: stepIcon8,
  },
  {
    title: "09 Step",
    text: "Reaching 800,000 coins in the liquidity pool",
    iconSrc: stepIcon9,
  },
  {
    title: "10 Step",
    text: "Creation and launch of the NFT platform",
    iconSrc: stepIcon10,
  },
];

const WhatRoadmap = () => {
  return (
    <Section mod={css.whatRoadmap}>
      <Container sm>
        <Title tag="h2" text="What is a roadmap?" sectionTitle />
        <Text mod={css.sectionText}>
          A roadmap is an integral part of any project, which contains specific
          goals and development plans. It also provides transparency and honesty
          to the community by showing what and when will be created and
          improved.
        </Text>
        <Row mod={css.steps}>
          <div className={css.stepsDecoration} />
          {stepsData.map(({ title, text, iconSrc }) => (
            <Column key={title} mod={css.step}>
              <Row mod={css.stepInner}>
                <Title smalTitle tag="h4" text={title} />
                <Text>{text}</Text>
                <div className={css.stepDecoration}>
                  <img alt="icon" width="40" height="44" src={iconSrc} />
                </div>
              </Row>
            </Column>
          ))}
        </Row>
        <Text mod={css.sectionText}>
          Description that we are launching these projects ourselves from Bitl.
          <br />
          <br />
          We can partner with companies that want to implement blockchain in
          their business model
        </Text>
      </Container>
    </Section>
  );
};

export default WhatRoadmap;
