import React from "react";
//packages
import styled from "styled-components";
import PropTypes from "prop-types";
//components
import { StyInput, StyBtn } from "../components/GlobalStyles";

const EducationComp = ({ id, setNumEducField }) => {
	const handleRemove = (e) => {
		e.preventDefault();
		setNumEducField((prev) => prev.filter((currId) => currId !== id));
	};

	return (
		<StyWrapper>
			<StyRemove onClick={(e) => handleRemove(e)}>-</StyRemove>
			<StyInput type="text" placeholder="Institution" size="25" />
			<StyInput type="text" placeholder="Degree/title" size="25" />
			<StyInput type="date" />
			<StyInput type="date" />
		</StyWrapper>
	);
};

EducationComp.propTypes = {
	id: PropTypes.string,
	setNumEducField: PropTypes.func,
};

const StyRemove = styled(StyBtn)`
	width: 30px;
	height: 30px;
	padding: 0;
	margin: 0;
	align-self: flex-end;
`;

const StyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	.education-title {
		color: #434246;
		margin-right: 1rem;
	}
	input {
		width: 100%;
	}
	input[type="date"] {
		color: #434246;
		width: 60%;
	}
`;

export default EducationComp;
