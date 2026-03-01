import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));
const ProjectPortfolio = dynamic(() => import("./../project-portfolio"));
const PortfolioHero = dynamic(() => import("./../home/Portfoliohero"));
const FigmaGrid = dynamic(() => import("./../figma"));
const SkillsExpertise = dynamic(() => import("./../abouts"));

const DesignProcess = dynamic(() => import("./../activitys/design-process"));
const LearningAndGrowth = dynamic(
  () => import("./../activitys/learning-and-growth"),
);
const CommunityImpact = dynamic(
  () => import("./../activitys/community-impact"),
);

const DisableInspect = dynamic(() => import("./../common/disable-Inspect"));

export {
  Header,
  Footer,
  ProjectPortfolio,
  PortfolioHero,
  FigmaGrid,
  SkillsExpertise,
  DesignProcess,
  LearningAndGrowth,
  CommunityImpact,
  DisableInspect,
};
