import React from "react";
import { HashLink } from "react-router-hash-link";
import { Column, Container, Row, ThemeSwitcher, Title } from "../../ui";
import css from "./index.module.scss";

const projectsData = {
  title: "Projects",
  links: [
    {
      name: "Gaming",
      path: "/projects#our-projects",
    },
    {
      name: "Exchange",
      path: "/projects#our-projects",
    },
    {
      name: "Shop",
      path: "/projects#our-projects",
    },
    {
      name: "Betting",
      path: "/projects#our-projects",
    },
    {
      name: "NFT",
      path: "/projects#our-projects",
    },
  ],
};

const companyData = {
  title: "Company",
  links: [
    {
      name: "What are we doing?",
      path: "/#what-we-doing",
    },
    {
      name: "Why blockchain UMI?",
      path: "/#why-blockchain-UMI",
    },
    {
      name: "Our plans",
      path: "/#our-plans",
    },
    {
      name: "Consensus PoA",
      path: "/#consensus-PoA",
    },
    {
      name: "About Us",
      path: "/about-us#top",
    },
    {
      name: "Roadmap",
      path: "/roadmap#top",
    },
  ],
};

const blockchainData = {
  title: "Blockchain UMI",
  links: [
    {
      name: "Blockchain UMI",
      path: "/blockchain#info",
    },
    {
      name: "Ecosystem UMI",
      path: "/blockchain#info",
    },
    {
      name: "Fuature UMI",
      path: "/blockchain#info",
    },
  ],
};

const renderColumn = (mod, data) => {
  return (
    <Column mod={mod}>
      <Title tag="h4" text={data.title} footerTitle mod={css.title} />
      {data.links.map(({ name, path }) => (
        <HashLink key={name} smooth className={css.link} to={path}>
          {name}
        </HashLink>
      ))}
    </Column>
  );
};

const Footer = () => {
  return (
    <footer className={css.footer}>
      <Container lg>
        <Row mod={css.sectionNavigationRow}>
          {renderColumn(css.sectionProjectsColumn, projectsData)}
          {renderColumn(css.sectionCompanyColumn, companyData)}
          {renderColumn(css.sectionBlockchainColumn, blockchainData)}
          <Column mod={css.sectionContactColumn}>
            <Title tag="h4" text="Contact Us" footerTitle mod={css.title} />
            <p className={css.contactText}>
              <span className={css.colored}>UMI TECHNOLOGYS</span>
              <br />
              <br />
              №: 225516
              <br />
              Country: Seychelles
              <br />
              Address: Suite 1, Second Floor, Sound & Vision House, Francis
              Rachel.
            </p>
          </Column>
        </Row>
        <Row mod={css.sectionFooterRow}>
          <Column mod={css.sectionThemeColumn}>
            <ThemeSwitcher />
          </Column>
          <Column mod={css.sectionSocialsColumn}>
            <a className={css.socialLink} href="https://twitter.com/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="var(--white100)" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8458 14.1281L15.8689 14.4741L15.4835 14.4318C14.0808 14.2694 12.8554 13.7185 11.8149 12.7935L11.3062 12.3345L11.1752 12.6734C10.8977 13.429 11.075 14.227 11.653 14.7637C11.9613 15.0603 11.892 15.1026 11.3602 14.9261C11.1752 14.8696 11.0133 14.8272 10.9979 14.8484C10.944 14.8978 11.1289 15.5405 11.2754 15.7947C11.4758 16.1478 11.8843 16.4938 12.3313 16.6986L12.7089 16.861L12.2619 16.8681C11.8303 16.8681 11.8149 16.8751 11.8611 17.0234C12.0153 17.4824 12.6241 17.9697 13.3024 18.1815L13.7802 18.3298L13.364 18.5558C12.7475 18.8806 12.023 19.0642 11.2985 19.0784C10.9517 19.0854 10.6665 19.1137 10.6665 19.1349C10.6665 19.2055 11.6068 19.6009 12.154 19.7563C13.7956 20.2153 15.7456 20.0176 17.21 19.2337C18.2504 18.6759 19.2909 17.5672 19.7765 16.4938C20.0385 15.9218 20.3006 14.8767 20.3006 14.3753C20.3006 14.0504 20.3237 14.0081 20.7553 13.6197C21.0096 13.3937 21.2486 13.1466 21.2948 13.0759C21.3719 12.9418 21.3642 12.9418 20.9711 13.0618C20.316 13.2737 20.2235 13.2454 20.5472 12.9276C20.7861 12.7017 21.0713 12.2921 21.0713 12.172C21.0713 12.1509 20.9557 12.1862 20.8247 12.2497C20.6859 12.3203 20.3776 12.4263 20.1464 12.4898L19.7302 12.6099L19.3526 12.3768C19.1445 12.2497 18.8516 12.1085 18.6975 12.0661C18.3044 11.9672 17.7032 11.9814 17.3487 12.0944C16.3853 12.4121 15.7764 13.2313 15.8458 14.1281Z"
                  fill="var(--black800)"
                />
              </svg>
            </a>
            <a className={css.socialLink} href="https://www.facebook.com/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="var(--white100)" />
                <path
                  d="M19.0837 10.6701L17.4837 10.668C15.6837 10.668 14.5253 11.6984 14.5253 13.2934V14.5037H12.917C12.7837 14.5037 12.667 14.6011 12.667 14.7213V16.4749C12.667 16.5951 12.7837 16.6918 12.917 16.6918H14.5253V21.117C14.5253 21.2372 14.642 21.3346 14.7753 21.3346H16.8753C17.017 21.3346 17.1253 21.2372 17.1253 21.117V16.6918H19.0087C19.142 16.6918 19.2587 16.5951 19.2587 16.4749V14.7213C19.2587 14.663 19.2337 14.6082 19.1837 14.567C19.142 14.5265 19.0753 14.5037 19.0087 14.5037H17.1253V13.4776C17.1253 12.9841 17.2587 12.7337 18.0087 12.7337H19.0837C19.217 12.7337 19.3337 12.6363 19.3337 12.5161V10.8877C19.3337 10.7675 19.2253 10.6701 19.0837 10.6701Z"
                  fill="var(--black800)"
                />
              </svg>
            </a>
            <a className={css.socialLink} href="https://www.linkedin.com/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="var(--white100)" />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.8905 13.0464C11.2149 13.0464 10.6665 12.513 10.6665 11.8552C10.6665 11.1975 11.2149 10.6641 11.8905 10.6641C12.5662 10.6641 13.1146 11.1975 13.1146 11.8552C13.1146 12.513 12.5669 13.0464 11.8905 13.0464ZM12.9399 21.3304H10.8416V13.9023H12.9399V21.3304ZM19.2328 21.3306H21.3312V16.7664C21.3312 13.2192 17.4115 13.3481 16.435 15.0944V13.9025H14.3367V21.3306H16.435V17.5463C16.435 15.4442 19.2328 15.272 19.2328 17.5463V21.3306Z"
                  fill="var(--black800)"
                />
              </svg>
            </a>
            <a className={css.socialLink} href="https://medium.com/">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="32" height="32" rx="16" fill="var(--white100)" />
                <path
                  d="M11.9314 13.632C11.9446 13.5083 11.8947 13.386 11.7969 13.3028L10.801 12.1693V12H13.8934L16.2837 16.9524L18.3851 12H21.3332V12.1693L20.4816 12.9406C20.4082 12.9935 20.3718 13.0804 20.387 13.1664V18.8336C20.3718 18.9196 20.4082 19.0065 20.4816 19.0594L21.3133 19.8307V20H17.1302V19.8307L17.9917 19.0406C18.0764 18.9606 18.0764 18.9371 18.0764 18.8148V14.234L15.6811 19.9812H15.3574L12.5688 14.234V18.0858C12.5455 18.2478 12.6025 18.4108 12.7231 18.5279L13.8436 19.8119V19.9812H10.6665V19.8119L11.787 18.5279C11.9068 18.4106 11.9604 18.2465 11.9314 18.0858V13.632Z"
                  fill="var(--black800)"
                />
              </svg>
            </a>
          </Column>
          <Column mod={css.sectionMailColumn}>
            <a href="mailto:helpcenter@bitl.com" className={css.mailToLink}>
              helpcenter@bitl.com
            </a>
          </Column>
          <Column mod={css.sectionCopyrightColumn}>
            <p className={css.copyrightText}>
              Copyright © 2021 BITL. All rights reserved
            </p>
          </Column>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
