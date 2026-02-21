import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));
const ProjectPortfolio = dynamic(() => import("./../project-portfolio"));
const PortfolioHero = dynamic(() => import("./../home/Portfoliohero"));
const FigmaGrid = dynamic(() => import("./../figma"));
const SkillsExpertise = dynamic(() => import("./../abouts"));

export {
  Header,
  Footer,
  ProjectPortfolio,
  PortfolioHero,
  FigmaGrid,
  SkillsExpertise,
};
