import React, { useState } from "react";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import MenuItems from "../components/MenuItems";
import logo from "../images/logo-min.png";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";
import { StyWrapper } from "../components/GlobalStyles";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LandingNav = ({children, menuItems }) => {
	const [menuActive, setMenuActive] = useState(null);

	const openMenu = (value) => {
		setMenuActive(value);
	};

	const variants = {
		close0: {
			opacity: 1,
			x: "0%",
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
		<StyWrapper>
			<StyledNav>
				<Link to="/" className="brand">
					<img src={logo} alt="Aspire logo" />
					<span>Aspire</span>
				</Link>
				<MenuItems menuItems={menuItems} >
					{React.Children.toArray(children)}
				</MenuItems>
				<StyBars icon={faBars} onClick={() => openMenu(true)}></StyBars>
			</StyledNav>
			{menuActive !== null && (
				<StyHambgMenu
					initial={menuActive ? "open0" : "close0"}
					animate={menuActive ? "open" : "close"}
					transition={{ type: "tween", duration: 0.5 }}
					variants={variants}
				>
					<MenuItems
						menuActive={menuActive}
						menuItems={menuItems}
					>
						{React.Children.toArray(children)}
					</MenuItems>
					<StyClose icon={faTimes} onClick={() => openMenu(false)} />
				</StyHambgMenu>
			)}
		</StyWrapper>
	);
};

LandingNav.propTypes = {
	menuItems: PropTypes.array,
	children: PropTypes.node
};

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
	z-index: 1;
	@media (max-width: 610px) {
		display: flex;
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

export default LandingNav;
