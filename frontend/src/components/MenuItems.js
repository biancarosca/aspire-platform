import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuItems = ({ menuActive }) => {
	return (
		<StyUl menuActive={menuActive}>
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
		</StyUl>
	);
};

MenuItems.propTypes = {
	menuActive: PropTypes.bool,
};

const StyUl = styled.ul`
	display: flex;
	list-style-type: none;
	.join {
		background-color: #413feb;
		border-radius: 5rem;
		color: white;
		padding: 0.5rem 2rem;
		&:hover {
			color: white;
		}
	}
	li {
		margin-left: 3rem;
		text-decoration: none;
		color: inherit;
	}
	@media (max-width: 610px) {
		display: ${(props) => (props.menuActive ? "flex" : "none")};
		z-index: 1;
		flex-direction: column;
		align-items: center;
		width: 80%;
		margin: 1rem;
		li {
			margin-left: 1rem;
			margin-top: 2rem;
			width: fit-content;
		}
	}
`;

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #434246;
	&:hover {
		color: black;
	}
`;

export default MenuItems;
