import { Accordion, CommonSection, Text } from "../../ui";

const data = [
  {
    title: "What is blockchain",
    body: (
      <>
        <Text>
          Blockchain is a continuous sequential chain of blocks built according
          to certain rules of technology, which contain certain information. The
          connection between blocks is ensured not only by numbering, but also
          by the fact that each block contains its own hash-sum and hash-sum of
          the previous block.
        </Text>
      </>
    ),
  },
  {
    title: "Blockchain advantages UMI",
    body: (
      <>
        <Text>
          The UMI blockchain as a technology now has a large number of
          advantages that can be implemented in a wide variety of new
          directions.
        </Text>
        <Text bold>The main advantages of the technology:</Text>
        <ul>
          <li>Transaction speed - (65.536 sec.).</li>
          <li>No commission - (Transaction fee = 0).</li>
          <li>Smart Contracts - (Fast SMC Creation).</li>
          <li>
            Ease of use - (Buying, selling and storing coins in one safe place).
          </li>
          <li>
            Decentralization - (The project is managed and regulated by the
            community).
          </li>
          <li>
            Innovative technology - (The combination of high transaction speed,
            reliability and simplicity).
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Ecosystem UMI",
    body: (
      <>
        <Text bold>The UMI ecosystem consists of:</Text>
        <ul>
          <li>The wallet with which each user can store and send coins;</li>
          <li>An exchange where every user can change coins at any time;</li>
          <li>
            Structural staking that allows users to join in shared pools and
            receive more% of rewards for holding coins.
          </li>
        </ul>
      </>
    ),
  },
  {
    title: "Outside perspectives and improvement of blockchain",
    body: (
      <>
        <Text>
          The UMI team is steadily engaged in optimizing the operation of the
          blockchain node, increasing the number of master nodes, speeding up
          the processing of transactions and improving the security of the
          blockchain.
        </Text>
      </>
    ),
  },
];

const BlockchainCapabilities = () => {
  return (
    <CommonSection
      id="info"
      withoutTopIndent
      title="UMI blockchain capabilities"
      description="The main advantages that distinguish this blockchain from all."
    >
      <Accordion data={data} />
    </CommonSection>
  );
};

export default BlockchainCapabilities;
