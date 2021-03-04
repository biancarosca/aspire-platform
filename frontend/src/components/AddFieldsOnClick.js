import React, { useState } from "react";
//packages
import styled from "styled-components";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
//components
import { StyBtn } from "./GlobalStyles";
import Tooltip from "@material-ui/core/Tooltip";
//redux
import { useDispatch } from "react-redux";
import allActions from "../actions/index";

const AddFieldsOnClick = ({ id, setNumFields, children, type }) => {
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

	const dispatch = useDispatch();
	const [anim, setAnim] = useState(mountingAnim);

	const handleRemove = (e) => {
		e.preventDefault();

		//delete the object with the current id from state
		if (type === "Education") {
			dispatch(allActions.deleteGroupEduc(id));
		} else if (type === "Work experience") {
			dispatch(allActions.deleteGroupWork(id));
		}
		else if (type === "Personal projects"){
			dispatch(allActions.deleteGroupProjects(id));
		}
		else if (type === "Social links"){
			dispatch(allActions.deleteGroupLinks(id));
		}

		setAnim(unmountAnim);
		//make sure the animation happens before unmounting
		setTimeout(
			() =>
				setNumFields((prev) => prev.filter((currId) => currId !== id)),
			400
		);
	};
	return (
		<StyWrapper variants={anim} initial="initial" animate="final">
			<Tooltip title="Delete">
				<StyControl id="deleteBtn" onClick={(e) => handleRemove(e)}>
					-
				</StyControl>
			</Tooltip>
			{React.Children.map(children, (child) =>
				React.cloneElement(child, {
					id,
				})
			)}
		</StyWrapper>
	);
};

AddFieldsOnClick.propTypes = {
	id: PropTypes.string,
	setNumFields: PropTypes.func,
	children: PropTypes.node,
	type: PropTypes.string,
};

const StyControl = styled(StyBtn)`
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
