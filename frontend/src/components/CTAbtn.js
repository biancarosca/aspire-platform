import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const CTAbtn = () => {
	return (
		<li className="cta-btn">
			<StyledLink to="/join" className="join">
				Join
			</StyledLink>
		</li>
	);
};

const StyledLink = styled(Link)`
	text-decoration: none;
	color: #434246;
	&:hover {
		color: black;
	}
`;


export default CTAbtn;
