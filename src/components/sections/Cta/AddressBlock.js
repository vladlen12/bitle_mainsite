import { Row, Title } from "../../ui";
import CardWithIcon from "../../ui/Cards/CardWithIcon";
import iconAddress from "../../../assets/svg/icon-address.svg";

import css from "./index.module.scss";

const AddressBlock = () => {
  return (
    <>
      <Title
        mod={css.ctaTitle}
        sectionTitle
        tag="h2"
        text="Our Legal Address"
      />
      <Row mod={css.ctaCards}>
        <CardWithIcon
          mod={css.ctaCard}
          iconSrc={iconAddress}
          title="BITL LTD"
          text={
            <>
              №: 225516
              <br />
              Country: Seychelles
              <br />
              Address: Suite 1, Second Floor, Sound & Vision House, Francis
              Rachel Str., Victoria, Mahe, Seychelles.
            </>
          }
        />
        <CardWithIcon
          mod={css.ctaCard}
          iconSrc={iconAddress}
          title="BITL CORP LTD"
          text={
            <>
              №: 225516
              <br />
              Country: Seychelles
              <br />
              Address: Suite 1, Second Floor, Sound & Vision House, Francis
              Rachel Str., Victoria, Mahe, Seychelles.
            </>
          }
        />
      </Row>
    </>
  );
};

export default AddressBlock;
