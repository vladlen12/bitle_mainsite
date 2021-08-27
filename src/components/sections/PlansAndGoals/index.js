import { Cards, CommonSection } from "../../ui";

const data = [
  {
    theme: 1,
    title: "Operation of transactions",
    text: "The UMI blockchain enables a large number of transactions per second, which opens up many ways to use this technology.",
  },
  {
    theme: 2,
    title: "Commissions online",
    text: "Zero commission on the network is an undeniable advantage that makes the integration of the UMI blockchain as scalable as possible.",
  },
  {
    theme: 3,
    title: "Blockchain application",
    text: "The use of such a universal blockchain in new directions is possible since there will be no problems with low transaction processing speed and high cost of implementation.",
  },
];

const PlansAndGoals = () => {
  return (
    <CommonSection
      id="our-plans"
      subtitle="Plans and goals UMI"
      title="Our capabilities and plans based on the UMI "
      description="Due to the fact that we have the ability to make a large number of transactions per second with zero commission, we can use this blockchain in new directions that were previously inaccessible due to the high cost and low speed of transaction processing."
    >
      <Cards decorationCard data={data} />
    </CommonSection>
  );
};

export default PlansAndGoals;
