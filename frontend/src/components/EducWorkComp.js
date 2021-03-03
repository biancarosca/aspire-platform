import React, { useState } from "react";
import PropTypes from "prop-types";
//packages
import styled from "styled-components";
import { toast } from "react-toastify";
//components
import { StyInput, StyBtn } from "../components/GlobalStyles";
//redux
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions/index";

const EducWorkComp = ({ id, placeholder1, placeholder2, type }) => {
	const dispatch = useDispatch();
	const [firstInp, setFirstInp] = useState("");
	const [secondInp, setSecondInp] = useState("");
	const [start, setStart] = useState("");
	const [end, setEnd] = useState("");
	const education = useSelector((store) => store.education);
	const work = useSelector((store) => store.work);

	const handleSave = (e, message) => {
		e.preventDefault();
		dispatch(allActions.toggleSection(false));
		handleInput();

		toast.success(`${message} was successfully saved!`, {
			position: "top-center",
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	};

	const handleInput = () => {
		// "Done" button was clicked, values can be sent to store
		let state;
		if (type === "education") state = education;
		else state = work;

		//find the index of the current input group in state
		const idx = state.findIndex((group) => group.id === id);

		//delete it from state if it exists
		if (idx !== -1) state.splice(idx, 1);

		//add the updated version
		if (type === "education") {
			dispatch(
				allActions.addEducation({
					institution: firstInp,
					degree: secondInp,
					period: [start, end],
					id,
				})
			);
		} else if (type === "work") {
			dispatch(
				allActions.addWork({
					company: firstInp,
					degree: secondInp,
					period: [start, end],
					id,
				})
			);
		}
	};
	return (
		<StyWrap>
			<StyInput
				type="text"
				placeholder={placeholder1}
				onChange={({ target }) => {
					setFirstInp(target.value);
				}}
				size="25"
			/>
			<StyInput
				type="text"
				placeholder={placeholder2}
				onChange={({ target }) => {
					setSecondInp(target.value);
				}}
				size="25"
			/>
			<label htmlFor="start">Start date</label>
			<StyInput
				type="date"
				id="start"
				onChange={({ target }) => {
					setStart(target.value);
				}}
			/>
			<label htmlFor="end">End date</label>
			<StyInput
				type="date"
				id="end"
				onChange={({ target }) => {
					setEnd(target.value);
				}}
			/>
			<StyControl
				onClick={(e) => {
					type === "education"
						? handleSave(e, "Education")
						: handleSave(e, "Work experience");
				}}
			>
				Save
			</StyControl>
		</StyWrap>
	);
};

EducWorkComp.propTypes = {
	id: PropTypes.string,
	placeholder1: PropTypes.string,
	placeholder2: PropTypes.string,
	type: PropTypes.string,
};

const StyWrap = styled.div`
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

const StyControl = styled(StyBtn)`
	width: fit-content;
	padding: 0.5rem 1rem;
	margin: 0;
	align-self: flex-end;
	transition: all 0.2s ease;
	transform-origin: left center;
	&:hover {
		transform: scale(1.02);
		color: white;
	}
`;
export default EducWorkComp;
