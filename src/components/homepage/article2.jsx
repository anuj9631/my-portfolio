import React from "react";
import { Link } from "react-router-dom";


import "./styles/article.css";

const Article2 = (props) => {
	const { link } = props;

	return (
		<React.Fragment>
			<div className="homepage-article">
				<div className="homepage-article-content">
				
					<div className="homepage-article-title">Soft Skills</div>
					<div className="homepage-article-link">
						<Link to={link}>
							Good Communication Skills{" "}, Leadership{" "}, Problem Solving{" "}, Team Player{" "}

						</Link>
					</div>
					
		
				</div>
			</div>
			
		</React.Fragment>
	);
};

export default Article2;
