import React, { useEffect } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";

import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";


import "./styles/articles.css";

const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>
      
			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
				<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="articles-main-container">
						<div className="title articles-title">
							{INFO.articles.title}
						</div>

						<div className="subtitle articles-subtitle">
							{INFO.articles.description}
							<ul>
								<li>Proficient in programming languages such as  Python, Java, C.</li>
								<li>Strong understanding of software development methodologies and best practices.</li>
								<li>Familiarity with databases and data structures.</li>
								<li>Proficient in using version control systems such as Git.</li>
								<li>Ability to quickly adapt to new technologies and learn new concepts.</li>
								<li>Strong analytical and problem-solving skills.</li>
								<li>Passionate about staying updated with the latest trends and advancements in technology.</li>
				        <li>Experience with web development and Back-end frameworks React and Node.</li>
								<li>Excellent communication and collaboration abilities for effective team dynamics.</li>
							</ul>
							<a href="https://drive.google.com/file/d/1mjf8iBku4_1TUic01Kx_TzgZr55EpBJG/view?usp=sharing"><button className="button">Download Resume</button></a>
							
						</div>
       
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
