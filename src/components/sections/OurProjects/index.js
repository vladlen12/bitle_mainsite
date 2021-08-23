import { Cards, CommonSection } from "../../ui";
import iconNumber1 from "../../../assets/svg/icon-number1.svg";
import iconNumber2 from "../../../assets/svg/icon-number2.svg";
import iconNumber3 from "../../../assets/svg/icon-number3.svg";
import iconNumber4 from "../../../assets/svg/icon-number4.svg";
import iconNumber5 from "../../../assets/svg/icon-number5.svg";

const data = [
  {
    iconSrc: iconNumber1,
    title: "Gaming",
    text: "For blockchain users, gaming is the ability to easily exchange in-game assets without the involvement of intermediaries.",
  },
  {
    iconSrc: iconNumber2,
    title: "Exchanges",
    text: "Own DEX exchange, where SWAP of UMI coins will be available within the pool of currency pairs.",
  },
  {
    iconSrc: iconNumber3,
    title: "Shop",
    text: "The marketplace will allow each user to make purchases and sales of various goods and pay/receive them in cryptocurrencies.",
  },
  {
    iconSrc: iconNumber4,
    title: "Betting",
    text: "Trust has been a key issue in betting. As a decentralized technology, blockchain removes the unified control that brings legitimacy to the gambling industry.",
  },
  {
    iconSrc: iconNumber5,
    title: "Digital arts NFT",
    text: "Our platform will combine all the possibilities and advantages in this area of creativity for digital art, making it possible to create and sell your own NFTs.",
  },
];

const OurProjects = () => {
  return (
    <CommonSection
      withoutTopIndent
      title="Our projects"
      description="Bitl's own development  and implementation of  blockchain technologies "
    >
      <Cards data={data} iconCard />
    </CommonSection>
  );
};

export default OurProjects;
