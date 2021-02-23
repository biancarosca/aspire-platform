import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const MenuItems = ({ children, menuActive, menuItems }) => {
	return (
		<StyUl menuActive={menuActive}>
			{menuItems.map((navElement, idx) => (
				<li key={idx}>
					<StyledLink to={navElement.path}>
						{navElement.name}
					</StyledLink>
				</li>
			))}
			{React.Children.toArray(children)}
		</StyUl>
	);
};

MenuItems.defaultProps = {
	menuActive: false,
	menuItems: [],
};

MenuItems.propTypes = {
	menuActive: PropTypes.bool,
	menuItems: PropTypes.array,
	children: PropTypes.node,
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
