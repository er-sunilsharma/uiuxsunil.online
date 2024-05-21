import dynamic from "next/dynamic";

const Header = dynamic(() => import("./header"));
const Footer = dynamic(() => import("./footer"));
const ProjectPortfolio = dynamic(() => import("./../project-portfolio"));

export { Header, Footer, ProjectPortfolio };
