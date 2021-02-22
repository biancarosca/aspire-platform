import React from "react";
import logo from "../images/logo-min.png";
import hero from "../images/hero.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LandingPage = () => {
	return (
		<StyWrapper>
			<StyledNav>
				<Link to="/" className="brand">
					<img src={logo} alt="Aspire logo" />
					<span>Aspire</span>
				</Link>
				<ul>
					<li>
						<StyledLink to="#">Why Aspire?</StyledLink>
					</li>
					<li>
						<StyledLink to="/login">Log In</StyledLink>
					</li>
					<li className="cta-btn">
						<StyledLink to="/join" className="join">
							Join
						</StyledLink>
					</li>
				</ul>
			</StyledNav>
			<StyledHero>
				<div className="info">
					<h1>Fastest link between developers and recruiters.</h1>
					<div className="cta-btn">
						<Link to="/join" className="get-started">
							Get started
						</Link>
					</div>
				</div>
				<img src={hero} alt="interview" />
			</StyledHero>
		</StyWrapper>
	);
};

const StyWrapper = styled.div`
	.cta-btn {
		transition: all 0.2s ease;
		transform-origin:left center;
		&:hover {
			transform: scale(1.04);
			color: white;
		}
	}
`;

const StyledNav = styled.nav`
	display: flex;
	min-height: 7vh;
	width: 80%;
	margin: 3% 10%;
	align-items: center;
	justify-content: space-between;
	ul {
		display: flex;
		list-style-type: none;
		li {
			margin-left: 3rem;
			text-decoration: none;
			color: inherit;
		}
	}
	.brand {
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: center;
		font-weight: bold;
	}
	.join {
		background-color: #413feb;
		border-radius: 5rem;
		color: white;
		padding: 0.5rem 2rem;
		&:hover {
			color: white;
		}
	}
`;

const StyledHero = styled.div`
	display: flex;
	align-items: center;
	width: 80%;
	margin: 0 10%;
	.info {
		h1 {
			margin-bottom: 1.5rem;
		}
	}
	.get-started {
		text-decoration: none;
		color: white;
		background-color: #413feb;
		margin-top: 1rem;
		padding: 0.5rem 3rem;
		border-radius: 5rem;
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #434246;
	&:hover {
		color: black;
	}
`;

export default LandingPage;
