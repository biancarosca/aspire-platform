import React from "react";
//components
import { StyBtn } from "../components/GlobalStyles";
//packages
import styled from "styled-components";
//assets
import portrait from "../images/portrait.png";

const JobListing = () => {
	return (
		<StyJobContainer>
			<div className="img-container">
				<img src={portrait} alt="portrait" />
			</div>
			<div className="job-details">
				<div className="job-header">
					<h3>Junior frontend developer</h3>
					<div className="technologies-container">
						<span>Javascript</span>
						<span>React</span>
						<span>Node.js</span>
						<span>GraphQL</span>
						<span>Redux</span>
					</div>
				</div>
				<div className="job-info-container">
					<div className="job-info-details">
						<p className="company-name">IT Solutions</p>
						<p>
							<span>Job level:</span> Junior
						</p>
						<p>
							<span>Min. experience:</span> 0 years{" "}
						</p>
						<p>
							<span>Location:</span> Europe (Remote)
						</p>
						<p>
							<span>Salary range:</span> 30k-50k $
						</p>
						<p>
							<span>Employment type:</span> Full-time
						</p>
					</div>
					<div className="btn-container">
						<StySeeMore>See More</StySeeMore>
					</div>
				</div>
			</div>
		</StyJobContainer>
	);
};

const StySeeMore = styled(StyBtn)`
	margin: 0;
	@media (max-width: 790px) {
		margin-right: 1rem;
	}
`;

const StyJobContainer = styled.div`
	display: flex;
	margin: 1rem;
	border: 2px solid #413feb;
	padding: 1rem;
	@media (max-width: 790px) {
		display: block;
	}
	p {
		span {
			font-weight: bold;
		}
	}
	.job-info-container {
		display: flex;
		justify-content: space-between;
		@media (max-width: 790px) {
			display: block;
		}
	}
	.btn-container {
		display: flex;
		align-items: flex-end;
		flex-grow: 1;
		justify-content: flex-end;
		@media (max-width: 790px) {
			justify-content: center;
			margin-top: 1rem;
		}
	}
	.img-container {
		display: flex;
		align-items: flex-start;
	}
	img {
		width: 100px;
		height: 100px;
	}
	.job-details {
		margin-left: 1rem;
		width: 100%;
		.company-name {
			font-style: italic;
			margin-bottom: 1rem;
		}
		.technologies-container {
			display: flex;
			flex-wrap: wrap;
			span {
				margin-right: 1rem;
				margin-bottom: 0.5rem;
				background-color: #413feb;
				color: white;
				border-radius: 5rem;
				padding: 0 0.3rem;
				font-size: 0.8rem;
			}
		}
	}
	@media (max-width: 790px) {
		.job-details {
			margin: 0;
		}
	}
`;

export default JobListing;
