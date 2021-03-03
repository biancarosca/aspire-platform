import React from "react";
import PropTypes from "prop-types";
//packages
import styled from "styled-components";
//components
import { StyInput } from "../components/GlobalStyles";

const EducWorkComp = ({ placeholder1, placeholder2 }) => {
	// useEffect(() => {
	// 	let stateObj;
	// 	if (type === "education")
	// 		stateObj = { institution: "", degree: "", period: [] };
	// 	else stateObj = { company: "", jobTitle: "", period: [] };
	// }, []);

	// const handleInput = (target, field) => {
	// 	stateObj[field] = target.value;
	// };
	return (
		<StyWrap>
			<StyInput
				type="text"
				placeholder={placeholder1}
				// onChange={({ target }) => handleInput(target, field)}
				size="25"
			/>
			<StyInput
				type="text"
				placeholder={placeholder2}
				// onChange={({ target }) => handleInput(target, field)}
				size="25"
			/>
			<label htmlFor="start">Start date</label>
			<StyInput
				type="date"
				id="start"
				// onChange={({ target }) => handleInput(target, field)}
			/>
			<label htmlFor="end">End date</label>
			<StyInput
				type="date"
				id="end"
				// onChange={({ target }) => handleInput(target, field)}
			/>
		</StyWrap>
	);
};

EducWorkComp.propTypes = {
	placeholder1: PropTypes.string,
	placeholder2: PropTypes.string,
	setState: PropTypes.func,
	id: PropTypes.number,
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
