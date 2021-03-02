import React from "react";
import PropTypes from "prop-types";
//packages
import styled from "styled-components";
//components
import { StyInput } from "../components/GlobalStyles";

const EducWorkComp = ({ placeholder1, placeholder2 }) => {
	return (
		<StyWrap>
			<StyInput type="text" placeholder={placeholder1} size="25" />
			<StyInput type="text" placeholder={placeholder2} size="25" />
			<label htmlFor="start">Start date</label>
			<StyInput type="date" id="start" />
			<label htmlFor="end">End date</label>
			<StyInput type="date" id="end" />
		</StyWrap>
	);
};

EducWorkComp.propTypes = {
	placeholder1: PropTypes.string,
	placeholder2: PropTypes.string,
};

const StyWrap = styled.div`
	input {
		width: 100%;
	}
	input[type="date"] {
		color: #434246;
		width: 60%;
		margin-top: 0;
	}
	label {
		margin-top: 1rem;
		padding: 0 0.5rem;
		font-weight: bold;
		width: fit-content;
	}
`;

export default EducWorkComp;
