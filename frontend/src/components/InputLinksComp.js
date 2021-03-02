import React from "react";
import PropTypes from "prop-types";
//packages
import styled from "styled-components";
//components
import { StyInput } from "./GlobalStyles";

const InputLinksComp = ({ placeholders, children }) => {
	return (
		<StyWrap>
			{placeholders.map((placeholder) => (
				<StyInput
					type="url"
					placeholder={placeholder}
					key={placeholder}
					size="25"
				/>
			))}

			{React.Children.toArray(children)}
		</StyWrap>
	);
};

InputLinksComp.propTypes = {
	placeholders: PropTypes.array,
	children: PropTypes.node,
};

const StyWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	input {
		width: 100%;
	}
`;

export default InputLinksComp;
