import React from "react";
import { Link } from "react-router-dom";


import "./styles/article.css";

const Article = (props) => {
	const {  link } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
				
					<div className="homepage-article-title">Technical Skills</div>
					
					<div className="homepage-article-link">
						<h4 style={{ margin: 0, padding: 0, display: "inline", marginRight: "10px" }}>Programming Languages:</h4>

						<Link to={link}>
						C, Java, Python
							</Link>
							<br />
							<h4 style={{ margin: 0, padding: 0, display: "inline", marginRight: "10px" }}>Web Technologies:</h4>
							<Link to={link}>
							   HTML, CSS, JavaScript, ReactJS, Node.js, 
								</Link>
							<br/>
								<h4 style={{ margin: 0, padding: 0, display: "inline", marginRight: "10px" }}>Core: </h4>
							<Link to={link}>
						RDBMS, Data Structures, OOPs, MySQL, Computer Network, Operating System, Git, Machine Learning, Postman
						</Link>
					</div>
					
		
				</div>
			</div>
			
		</React.Fragment>
	);
};

export default Article;
