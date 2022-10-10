import dynamic from "next/dynamic";
import PropTypes from "prop-types";
const Navigation = dynamic(() => import("../components/Navigation"));
const Greetings = dynamic(() => import("../containers/Greetings"));
const Skills = dynamic(() => import("../containers/Skills"));
const Proficiency = dynamic(() => import("../containers/Proficiency"));
const Education = dynamic(() => import("../containers/Education"));
const Experience = dynamic(() => import("../containers/Experience"));
const Projects = dynamic(() => import("../containers/Projects"));
const Feedbacks = dynamic(() => import("../containers/Feedbacks"));
const About = dynamic(() => import('../containers/About/About'))
const OutTech = dynamic(() => import('../containers/OurTechnologies/Technologies'))
import ScrollToTop from "react-scroll-to-top";

const GithubProfileCard = dynamic(() =>
	import("../components/GithubProfileCard")
);
import { AboutUs, openSource } from "../portfolio";
import SEO from "../components/SEO";
import { Button } from "reactstrap";
import { Icon } from "@iconify/react";
import Services from "../containers/Services/Services";
import Portfolio from "../containers/Portfolio/Portfolio";
import Contact from "../containers/Contact/Contact";
import Footer from "../containers/Footer/Footer";

export default function Home({ githubProfileData }) {
	return (
		<div>
			<SEO />
			<ScrollToTop
				smooth
				component={
					<Icon icon='akar-icons:circle-chevron-up-fill' fontSize={26} />
				}
			/>
			<Navigation />
			<Greetings />
			<About />
			<OutTech />
			<Services />
			{/* <Portfolio /> */}
			<Contact />
			<Footer />
			{/* <Skills />
			<Proficiency />
			<Education />
			<Experience /> */}
			{/* <Feedbacks /> */}
			{/* <Projects /> */}
			{/* <GithubProfileCard prof={githubProfileData} /> */}
		</div>
	);
}

Home.prototype = {
	githubProfileData: PropTypes.object.isRequired,
};

export async function getStaticProps(_) {
	const githubProfileData = await fetch(
		`https://api.github.com/users/${openSource.githubUserName}`
	).then((res) => res.json());

	return {
		props: { githubProfileData },
	};
}
