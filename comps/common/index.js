import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header"));
const ProjectPortfolio = dynamic(() => import("./../project-portfolio"));

export { Header, ProjectPortfolio };
