import React from "react";
//packages
import styled from "styled-components";
//components
import { StyBtn } from "../components/GlobalStyles";

const EducationComp = () => {
	return (
		<StyWrapper>
			<span className="education-title">Education</span>
			<StyAddEduc>+</StyAddEduc>
		</StyWrapper>
	);
};

const StyWrapper = styled.div`
	.education-title {
		color: #434246;
        margin-right: 1rem;
	}
`;

const StyAddEduc = styled(StyBtn)`
	width: 30px;
	height: 30px;
	padding: 0;
`;

export default EducationComp;
