import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
//redux
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions/index";

const RoleChoice = ({ roleName }) => {
	const dispatch = useDispatch();
	const role = useSelector(store => store.pickedRole);

	return (
		<StyContainer>
			<StyCheckbox
				style={
					role === roleName
						? { backgroundColor: "#4347ea" }
						: { backgroundColor: "white" }
				}
				onClick={() => dispatch(allActions.pickRole(roleName))}
			></StyCheckbox>
			<span className="label">{roleName}</span>
		</StyContainer>
	);
};

RoleChoice.propTypes = {
	roleName: PropTypes.string,
};

const StyCheckbox = styled.span`
	width: 20px;
	height: 20px;
	background-color: white;
	display: inline-block;
	border-radius: 100%;
	border: 2px solid #4347ea;
	cursor: pointer;
`;

const StyContainer = styled.div`
	display: flex;
	align-items: center;
	h1 {
		color: #4347ea;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.label {
		font-size: 16px;
		margin-left: 1rem;
	}

	@media (max-width: 500px) {
		.label {
			font-size: 16px;
		}
	}
`;

export default RoleChoice;
