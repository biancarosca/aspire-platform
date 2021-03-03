import React from "react";
import PropTypes from "prop-types";
//packages
import styled from "styled-components";

const TextareaComp = ({ placeholder,maxLength = 120 }) => {
	return (
		<StyTextarea
			rows="4"
			cols="30"
			placeholder={placeholder}
			maxLength={maxLength}
		></StyTextarea>
	);
};

TextareaComp.propTypes = {
	placeholder: PropTypes.string,
	maxLength: PropTypes.number,
};

const StyTextarea = styled.textarea`
	resize: none;
	outline-color: #413feb;
	font-family: "Poppins", sans-serif;
	padding: 0.5rem;
	font-size: 1rem;
`;

export default TextareaComp;
