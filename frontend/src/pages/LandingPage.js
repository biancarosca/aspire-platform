import React, { useState } from "react";
import logo from "../images/logo-min.png";
import hero from "../images/hero.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MenuItems from "../components/MenuItems";
import { motion } from "framer-motion";

const LandingPage = () => {
	const [menuActive, setMenuActive] = useState(null);

	const openMenu = (value) => {
		setMenuActive(value);
	};

	const variants = {
		close0: {
			opacity: 1,
		},
		close: {
			x: "-100%",
			opacity: 0,
		},
		open0: {
			x: "-100%",
		},
		open: {
			x: "0%",
		},
	};

	return (
		<>
			<StyWrapper>
				<StyledNav>
					<Link to="/" className="brand">
						<img src={logo} alt="Aspire logo" />
						<span>Aspire</span>
					</Link>
					<MenuItems />
					<StyBars
						icon={faBars}
						onClick={() => openMenu(true)}
					></StyBars>
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
				{menuActive !== null && (
					<StyHambgMenu
						initial={menuActive ? "open0" : "close0"}
						animate={menuActive ? "open" : "close"}
						transition={{ type: "tween", duration: 0.5 }}
						variants={variants}
						menuActive={menuActive}
					>
						<MenuItems menuActive={menuActive} />
						<StyClose
							icon={faTimes}
							onClick={() => openMenu(false)}
						/>
					</StyHambgMenu>
				)}
			</StyWrapper>
		</>
	);
};

const StyWrapper = styled.div`
	.cta-btn {
		transition: all 0.2s ease;
		transform-origin: left center;
		&:hover {
			transform: scale(1.04);
			color: white;
		}
	}
	margin-left: auto;
	margin-right: auto;
	width: 960px;
	@media (max-width: 1030px) {
		width: 800px;
	}
	@media (max-width: 870px) {
		width: 700px;
	}
	@media (max-width: 710px) {
		width: 600px;
	}
	@media (max-width: 610px) {
		width: 450px;
	}
	@media (max-width: 500px) {
		width: 350px;
	}
	@media (max-width: 380px) {
		width: 260px;
	}
`;

const StyledNav = styled.nav`
	display: flex;
	min-height: 7vh;
	margin: 3% 0%;
	align-items: center;
	justify-content: space-between;
	.brand {
		text-decoration: none;
		color: inherit;
		display: flex;
		align-items: center;
		font-weight: bold;
	}
	.hamburger {
		width: 30px;
		height: auto;
	}
	@media (max-width: 870px) {
		justify-content: space-around;
	}
	@media (max-width: 610px) {
		justify-content: space-between;
	}
`;

const StyledHero = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
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
	img {
		z-index: -1;
	}
	@media (max-width: 870px) {
		flex-direction: column;
		.info {
			h1 {
				text-align: center;
			}
		}
		.cta-btn {
			display: flex;
			justify-content: center;
			transform-origin: center;
		}
		.get-started {
			margin-top: 0;
			margin-bottom: 1.5rem;
		}
	}
	@media (max-width: 710px) {
		.info {
			h1 {
				font-size: 1.8rem;
			}
		}
	}
	@media (max-width: 610px) {
		img {
			width: 400px;
			height: 400px;
		}
	}
	@media (max-width: 500px) {
		img {
			width: 250px;
			height: 250px;
		}
		.info {
			h1 {
				font-size: 1.5rem;
			}
		}
	}
	@media (max-width: 380px) {
		.info {
			h1 {
				font-size: 1.2rem;
			}
		}
	}
`;

const StyHambgMenu = styled(motion.div)`
	display: none;
	position: absolute;
	left: 0;
	top: 0;
	bottom: 0;
	right: 0;
	height: 100vh;
	width: auto;
	background-color: white;
	z-index: 0;
	@media (max-width: 610px) {
		display: ${(props) => (props.menuActive ? "flex" : "none")};
	}
`;

const StyBars = styled(FontAwesomeIcon)`
	display: none;
	cursor: pointer;
	@media (max-width: 610px) {
		display: inline;
	}
`;

const StyClose = styled(FontAwesomeIcon)`
	position: absolute;
	cursor: pointer;
	right: 0;
	top: 0;
	margin: 1rem;
`;

export default LandingPage;
