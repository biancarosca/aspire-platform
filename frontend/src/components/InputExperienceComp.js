import React, { useState } from "react";
//packages
import styled from "styled-components";
import uuid from "react-uuid";
import PropTypes from "prop-types";
//components
import AddFieldsOnClick from "./AddFieldsOnClick";
import { StyBtn} from "../components/GlobalStyles";
import Tooltip from "@material-ui/core/Tooltip";

const InputExperienceComp = ({ title, children }) => {
	const [numFields, setNumFields] = useState([]); //keep track of input groups

	const handleAdd = (e) => {
		e.preventDefault();
		setNumFields((prev) => [...prev, uuid()]); //assign to each input group a unique id
	};
	return (
		<StyExpWrap>
			<div className="header">
				<span className="title">{title}</span>
				<Tooltip title="Add">
					<StyAdd onClick={(e) => handleAdd(e)}>+</StyAdd>
				</Tooltip>
			</div>
			{numFields &&
				numFields.map((id) => (
					<AddFieldsOnClick
						key={id}
						id={id}
						setNumFields={setNumFields}
					>
						{React.Children.toArray(children)}
					</AddFieldsOnClick>
				))}
		</StyExpWrap>
	);
};

InputExperienceComp.propTypes = {
	title: PropTypes.string,
	children: PropTypes.node,
};

const StyAdd = styled(StyBtn)`
	width: 30px;
	height: 30px;
	padding: 0;
	margin: 0;
`;

const StyExpWrap = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 1.5rem;
	.header {
		display: flex;
		width: 100%;
		align-items: center;
	}
	.title {
		padding: 0 0.5rem;
	}
`;

export default InputExperienceComp;
