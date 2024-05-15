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
						<Link to={link}>
							C{" "}, Java{" "}, Python{" "}, ReactJS{" "}, Node.js{" "}, Express.js{" "}, RDBMS{" "}, Data Structures{" "}, OOPs{" "}, Php{" "}, HTML{" "}, CSS{" "}, JavaScript{" "}, Git{" "}, MySQL{" "}, MongoDB{" "}

						</Link>
					</div>
					
		
				</div>
			</div>
			
		</React.Fragment>
	);
};

export default Article;
