import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
            <div className="work">
							<img
								src="./lawcrats.jpeg"
								alt="lawcrats"
								className="work-image"
							/>
							<div className="work-title">LawCrats</div>
							<div className="work-subtitle">
								Software Engineer intern
							</div>
							<div className="work-duration">Aug 2024 - Current</div>
						</div>

						<div className="work">
							<img
								src="./celebal.jpg"
								alt="celebal"
								className="work-image"
							/>
							<div className="work-title">Celebal Technologies</div>
							<div className="work-subtitle">
								Data Science intern
							</div>
							<div className="work-duration">June 2023 - Aug 2023</div>
						</div>

						<div className="work">
							<img
								src="./isoeh.jpeg"
								alt="isoeh"
								className="work-image"
							/>
							<div className="work-title">Indian School of Ethical Hacking</div>
							<div className="work-subtitle">
								Web development intern
							</div>
							<div className="work-duration"> May 2023 - June 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
