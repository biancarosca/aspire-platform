import React from "react";
// import PropTypes from "prop-types";
//packages
import styled from "styled-components";
//components
import { StyInput } from "../components/GlobalStyles";
import TextareaComp from "../components/TextareaComp";

const PersonalProjsComp = () => {
	return (
		<StyWrap>
			<StyInput type="url" placeholder="Link to Github" size="25" />
			<StyInput type="url" placeholder="Link to a live demo" size="25" />
			<TextareaComp placeholder="Describe in a few words your project." />
		</StyWrap>
	);
};

// PersonalProjsComp.propTypes = {
// };

const StyWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	input {
		width: 100%;
	}
`;

export default PersonalProjsComp;
