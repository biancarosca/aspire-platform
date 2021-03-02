import React, { useState } from "react";
//packages
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
//components
import { StyInput, StyBtn } from "./GlobalStyles";
import Tooltip from "@material-ui/core/Tooltip";

const EducWorkComp = ({ id, setNumFields, placeholder1, placeholder2 }) => {
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
			<StyInput type="text" placeholder={placeholder1} size="25" />
			<StyInput type="text" placeholder={placeholder2} size="25" />
			<label htmlFor="start">Start date</label>
			<StyInput type="date" id="start" />
			<label htmlFor="end">End date</label>
			<StyInput type="date" id="end" />
		</StyWrapper>
	);
};

EducWorkComp.propTypes = {
	id: PropTypes.string,
	setNumFields: PropTypes.func,
	placeholder1: PropTypes.string,
	placeholder2: PropTypes.string,
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
