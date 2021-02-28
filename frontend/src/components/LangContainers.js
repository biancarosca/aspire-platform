import React from "react";
//packages
import PropTypes from "prop-types";
import styled from "styled-components";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
//components
import {
	StyWrapper,
} from "../components/GlobalStyles";


const LangContainers = ({ languages }) => {
	const handleDeleteLang = (lang) => {
		console.log(lang);
	};

	return (
		<StyLangWrap>
			{languages.map((lang) => (
				<span className="lang-wrap" key={lang}>
					<span className="lang">{lang}</span>
					<StyClose
						id={lang}
						icon={faTimes}
						onClick={() => handleDeleteLang(lang)}
					/>
				</span>
			))}
		</StyLangWrap>
	);
};

LangContainers.propTypes = {
	languages: PropTypes.array,
};

const StyClose = styled(FontAwesomeIcon)`
	cursor: pointer;
	color: #8c8e91;
	margin-right: 0.3rem;
`;

const StyLangWrap = styled(StyWrapper)`
	display: flex;
	flex-wrap: wrap;
	.lang-wrap {
		background-color: #d4d5d6;
		margin-top: 1rem;
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
