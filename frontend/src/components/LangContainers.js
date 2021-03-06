import React from "react";
//packages
import PropTypes from "prop-types";
import styled from "styled-components";
//assets
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";



const LangContainers = ({ languages, setLanguages }) => {
	const handleDeleteLang = (lang) => {
		const filteredLangs = languages.filter(stateLang => stateLang !== lang);
		setLanguages(filteredLangs);
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
	setLanguages: PropTypes.func
};

const StyClose = styled(FontAwesomeIcon)`
	cursor: pointer;
	color: #8c8e91;
	margin-right: 0.3rem;
	&:hover{
		color:#413feb;
	}
`;

const StyLangWrap = styled.div`
	display: flex;
	flex-wrap: wrap;
	.lang-wrap {
		background-color: #d4d5d6;
		margin-top: 0.3rem;
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
