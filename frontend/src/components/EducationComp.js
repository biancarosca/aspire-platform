import React, { useState } from "react";
//packages
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
//components
import { StyInput, StyBtn } from "../components/GlobalStyles";

const EducationComp = ({ id, setNumEducField }) => {
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
				setNumEducField((prev) =>
					prev.filter((currId) => currId !== id)
				),
			400
		);
	};
	return (
		<StyWrapper variants={anim} initial="initial" animate="final">
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
	}
`;

export default EducationComp;
