import Collapse from "@kunukn/react-collapse";
import cn from "classnames";
import { useState } from "react";
import { Row, Title } from "..";

import css from "./index.module.scss";

const Accordion = ({ data }) => {
  const [isOpen, setIsOpen] = useState(0);

  const handleOpenAccordion = (id) => () => {
    if (isOpen === id) {
      setIsOpen(false);
    } else {
      setIsOpen(id);
    }
  };

  return (
    <Row mod={css.accordion}>
      {data.map(({ title, body }, i) => {
        return (
          <Row
            key={i}
            mod={cn([css.accordionItem], {
              [css.active]: isOpen === i,
            })}
          >
            <button
              className={css.accordionHead}
              onClick={handleOpenAccordion(i)}
            >
              <Title mod={css.accordionTitle} smalTitle tag="h4" text={title} />
              <svg
                className={css.accordionArrow}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.70538 9.29446C7.09466 8.90519 7.72569 8.90484 8.11538 9.29369L12 13.1698L15.8846 9.29369C16.2743 8.90484 16.9053 8.90519 17.2946 9.29446C17.6842 9.68403 17.6842 10.3157 17.2946 10.7052L12 15.9998L6.70538 10.7052C6.31581 10.3157 6.31581 9.68403 6.70538 9.29446Z"
                  fill="var(--white100)"
                />
              </svg>
            </button>
            <Collapse
              className={css.accordionCollapse}
              transition={`height 0.3s cubic-bezier(.4, 0, .2, 1)`}
              isOpen={isOpen === i}
            >
              <Row mod={css.accordionBody}>{body}</Row>
            </Collapse>
          </Row>
        );
      })}
    </Row>
  );
};

export default Accordion;
