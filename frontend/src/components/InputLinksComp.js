import React, { useState } from "react";
import PropTypes from "prop-types";
//packages
import styled from "styled-components";
//components
import { StyInput, StyBtn } from "./GlobalStyles";
import { toast } from "react-toastify";
//redux
import { useDispatch, useSelector } from "react-redux";
import allActions from "../actions/index";

const InputLinksComp = ({ placeholders, children, id, type }) => {
	const dispatch = useDispatch();
	const [input0, setInput0] = useState("");
	const [input1, setInput1] = useState("");
	const [saved, setSaved] = useState(false);
	const portfolio = useSelector((store) => store.portfolio);
	const socialLinks = useSelector((store) => store.socialLinks);
	const [saveClick, setSaveClick] = useState(false); //the border bottom color should be red only when the user tried to save without completing all the required fields
	const arrayOfStates = [input0, input1];

	const handleEdit = () => {
		setSaved(false);
	};

	const addToState = (target, idx) => {
		setSaveClick(false); //restore the state
		switch (idx) {
		case 0: {
			setInput0(target.value);
			break;
		}
		case 1: {
			setInput1(target.value);
			break;
		}
		default:
			return;
		}
	};

	const handleSave = () => {
		setSaveClick(true);
		if (type === "links" && !input0) toast.error("All fields are required");
		else if (
			type === "projects" &&
			(!input0 || !input1 || !children.props.projDescrip)
		)
			toast.error("All fields are required");
		else {
			handleInput();
			setSaved(true);
			let message;
			if (type === "projects") message = "Portfolio";
			else if (type === "links") message = "The social link";
			toast.success(`${message} was successfully saved!`, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	const handleInput = () => {
		setSaveClick(false); //restore the state
		let state;
		if (type === "projects") state = portfolio;
		else if (type === "links") state = socialLinks;

		//find the index of the current input group in state
		const idx = state.findIndex((group) => group.id === id);

		//delete it from state if it exists
		if (idx !== -1) state.splice(idx, 1);

		//add update
		if (type === "projects") {
			dispatch(
				allActions.addProject({
					github: input0,
					demo: input1,
					description: children.props.projDescrip,
					id,
				})
			);
		} else if (type === "links") {
			dispatch(
				allActions.addLink({
					link: input0,
					id,
				})
			);
		}
	};

	return (
		<StyWrap>
			{placeholders.map((placeholder, idx) => (
				<StyInput
					type="url"
					placeholder={placeholder}
					key={placeholder}
					size="25"
					disabled={saved ? true : false}
					style={
						saved
							? { backgroundColor: "white", borderBottom: "none" }
							: arrayOfStates[idx]
								? {}
								: saveClick
									? { borderBottomColor: "#f74040" }
									: {}
					}
					onChange={({ target }) => addToState(target, idx)}
				/>
			))}

			{React.Children.map(children, (child) =>
				React.cloneElement(child, {
					disabled: saved ? true : false,
					style: saved
						? { backgroundColor: "white" }
						: children.props.projDescrip
							? {}
							: saveClick
								? { borderColor: "#f74040" }
								: {},
				})
			)}
			<StyControl
				onClick={(e) => {
					e.preventDefault();
					saved ? handleEdit() : handleSave();
				}}
			>
				{saved ? "Edit" : "Save"}
			</StyControl>
		</StyWrap>
	);
};

InputLinksComp.propTypes = {
	placeholders: PropTypes.array,
	children: PropTypes.node,
	id: PropTypes.string,
	type: PropTypes.string,
};

const StyWrap = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	input {
		width: 100%;
	}
`;

const StyControl = styled(StyBtn)`
	width: fit-content;
	padding: 0.5rem 1rem;
	margin: 1rem 0;
	align-self: flex-start;
	transition: all 0.2s ease;
	transform-origin: left center;
	&:hover {
		transform: scale(1.02);
		color: white;
	}
`;

export default InputLinksComp;
