import React from "react";
//packages
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const LangContainers = () => {
	return (
		<StyLangWrap>
			<span className="lang-wrap">
				<span className="lang">French</span>
				<StyClose icon={faTimes} />
			</span>
			<span className="lang-wrap">
				<span className="lang">Spanish</span>
				<StyClose icon={faTimes} />
			</span>
		</StyLangWrap>
	);
};

const StyClose = styled(FontAwesomeIcon)`
	cursor: pointer;
	color: #8c8e91;
    margin-right: 0.3rem;
`;

const StyLangWrap = styled.div`
	display: flex;
	.lang-wrap {
		background-color: #d4d5d6;
		margin-right: 0.5rem;
		display: flex;
		align-items: center;
		width: fit-content;
	}
	.lang {
		color: #434246;
		font-size: 15px;
		margin: 0.2rem 0.3rem;
	}
`;

export default LangContainers;
