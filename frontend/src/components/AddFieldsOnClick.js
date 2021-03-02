import React, { useState } from "react";
//packages
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
//components
import { StyBtn } from "./GlobalStyles";
import Tooltip from "@material-ui/core/Tooltip";

const AddFieldsOnClick = ({ id, setNumFields, children }) => {
	const mountingAnim = {
		initial: { opacity: 0 },
		final: { opacity: 1 },
	};
	const unmountAnim = {
		initial: { opacity: 1, height: "auto" },
		final: {
			opacity: 0,
			height: 0,
			transition: {
				duration: 0.4,
				ease: [0.04, 0.62, 0.23, 0.98],
			},
		},
	};
	const [anim, setAnim] = useState(mountingAnim);
	const handleRemove = (e) => {
		e.preventDefault();
		setAnim(unmountAnim);
		setTimeout(
			() =>
				setNumFields((prev) => prev.filter((currId) => currId !== id)),
			400
		);
	};
	return (
		<StyWrapper variants={anim} initial="initial" animate="final">
			<Tooltip title="Delete">
				<StyRemove id="deleteBtn" onClick={(e) => handleRemove(e)}>
					-
				</StyRemove>
			</Tooltip>
			{React.Children.toArray(children)}
		</StyWrapper>
	);
};

AddFieldsOnClick.propTypes = {
	id: PropTypes.string,
	setNumFields: PropTypes.func,
	children: PropTypes.node
};

const StyRemove = styled(StyBtn)`
	width: 30px;
	height: 30px;
	padding: 0;
	margin: 0;
	align-self: flex-end;
`;

const StyWrapper = styled(motion.div)`
	display: flex;
	flex-direction: column;
	height: auto;
	overflow: hidden;
`;

export default AddFieldsOnClick;
