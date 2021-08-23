import { Cards, CommonSection } from "../../ui";
import iconNumber1 from "../../../assets/svg/icon-number1.svg";
import iconNumber2 from "../../../assets/svg/icon-number2.svg";
import iconNumber3 from "../../../assets/svg/icon-number3.svg";
import iconNumber4 from "../../../assets/svg/icon-number4.svg";
import iconNumber5 from "../../../assets/svg/icon-number5.svg";
import iconNumber6 from "../../../assets/svg/icon-number6.svg";

const data = [
  {
    iconSrc: iconNumber1,
    title: "Bitl.one",
    text: "This is a 2-nd wave blockchain company that integrates ready-made blockchain market solutions into developing business areas.",
  },
  {
    iconSrc: iconNumber2,
    title: "Our ambitions",
    text: "Our goal is to introduce blockchain technology into all possible areas of business, where this technology will improve the process of monitoring, tracking and recording data.",
  },
  {
    iconSrc: iconNumber3,
    title: "Our background",
    text: "The company was founded by a group of ambitious professionals. Each member has achieved success in their business niche.",
  },
  {
    iconSrc: iconNumber4,
    title: "Our projects",
    text: "The level of the team's expertise allows us to aim at creating completely new solutions in niches where there was nothing like it before.",
  },
  {
    iconSrc: iconNumber5,
    title: "The Mission",
    text: "Our mission is to bring innovation in areas where blockchain technology will improve all processes and change the user experience.",
  },
  {
    iconSrc: iconNumber6,
    title: "Our team",
    text: "On the overall account of our team, more than 10 large projects in the field of IT and blockchain technologies have been successfully implemented.",
  },
];

const AboutCompany = () => {
  return (
    <CommonSection
      title="About company"
      description="The uniqueness and capabilities of the UMI blockchain"
    >
      <Cards data={data} iconCard />
    </CommonSection>
  );
};

export default AboutCompany;
