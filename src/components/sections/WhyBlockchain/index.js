import { CommonSection, Cards } from "../../ui";
import iconSpeed from "../../../assets/svg/icon-speed.svg";
import iconConvenience from "../../../assets/svg/icon-convenience.svg";
import iconCommissions from "../../../assets/svg/icon-commissions.svg";
import iconDecentralization from "../../../assets/svg/icon-decentralization.svg";
import iconTechnology from "../../../assets/svg/icon-technology.svg";
import iconContracts from "../../../assets/svg/icon-contracts.svg";

const data = [
  {
    iconSrc: iconSpeed,
    title: "Speed",
    text: "High transaction speed (65.536 transactions per second)",
  },
  {
    iconSrc: iconConvenience,
    title: "Convenience",
    text: "Ease of use (Buying, selling and storing coins in one safe place)",
  },
  {
    iconSrc: iconCommissions,
    title: "Commissions",
    text: (
      <>
        No Commissions
        <br /> (Transaction Fee = 0)
      </>
    ),
  },
  {
    iconSrc: iconDecentralization,
    title: "Decentralization",
    text: "Decentralized (Project is fully community driven and regulated)",
  },
  {
    iconSrc: iconTechnology,
    title: "Technology",
    text: "Innovative technology (Combining high transaction speed, reliability and ease of scaling)",
  },
  {
    iconSrc: iconContracts,
    title: "Smart contracts",
    text: "Smart contracts (Convenient and quick creation of SMC for different tasks)",
  },
];

const WhyBlockchain = () => {
  return (
    <CommonSection
      id="why-blockchain-UMI"
      subtitle="Why blockchain UMI?"
      title="The list of the main advantages of the technology:"
      description="The uniqueness and capabilities of the UMI blockchain"
    >
      <Cards data={data} iconCard />
    </CommonSection>
  );
};

export default WhyBlockchain;
