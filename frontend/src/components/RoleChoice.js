import React from "react";
import PropTypes from "prop-types";
//redux
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions/index";
import { StyRadioInput, StyRadioInpWrap } from "../components/GlobalStyles";

const RoleChoice = ({ roleName }) => {
	const dispatch = useDispatch();
	const role = useSelector((store) => store.pickedRole);

	const handleRoleSelection = () => {
		dispatch(allActions.pickRole(roleName));
		localStorage.setItem("pickedRole", JSON.stringify(roleName));
	};

	return (
		<StyRadioInpWrap>
			<StyRadioInput
				style={
					role === roleName
						? { backgroundColor: "#4347ea" }
						: { backgroundColor: "white" }
				}
				onClick={() => handleRoleSelection(roleName)}
			></StyRadioInput>
			<span className="label">{roleName}</span>
		</StyRadioInpWrap>
	);
};

RoleChoice.propTypes = {
	roleName: PropTypes.string,
};

export default RoleChoice;
