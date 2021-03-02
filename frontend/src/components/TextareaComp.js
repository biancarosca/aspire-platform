import React from "react";
import PropTypes from "prop-types";
//packages
import styled from "styled-components";

const TextareaComp = ({ placeholder }) => {
	return (
		<StyTextarea
			rows="4"
			cols="30"
			placeholder={placeholder}
			maxLength={120}
		></StyTextarea>
	);
};

TextareaComp.propTypes = {
	placeholder: PropTypes.string,
};

const StyTextarea = styled.textarea`
	resize: none;
	outline-color: #413feb;
	font-family: "Poppins", sans-serif;
	padding: 0.5rem;
	font-size: 1rem;
`;

export default TextareaComp;
