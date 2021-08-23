import { Cards, CommonSection } from "../../ui";

const data = [
  {
    theme: 3,
    title: "Blockchain algorithm",
    text: "The UMI blockchain is built on a Proof of Authority consensus that rewards pools of coin holders.",
  },
  {
    theme: 4,
    title: "Pools of coin holders",
    text: "UMI developers have implemented the ability to create pools of holders to increase user earnings.",
  },
  {
    theme: 5,
    title: "Operation of the reward system",
    text: "Due to the pool system, the total number of coins in the staking becomes larger and the% of rewards increases, since the more coins in the pool, the greater the% of the reward.",
  },
];

const LiquidityPool = () => {
  return (
    <CommonSection
      subtitle="Liquidity pool UMI"
      title="Our liquidity pool based on UMI"
      description={
        <>
          The UMI blockchain is built on a consensus (PoA) that rewards pools of
          coin holders. <br />
          To increase earnings, the UMI developers implemented the ability to
          create pools of holders, due to which the total number of coins in
          staking will be greater and the% of rewards will be increased, since
          the more coins in the pool, the more% of rewards.
        </>
      }
    >
      <Cards decorationCard data={data} />
    </CommonSection>
  );
};

export default LiquidityPool;
