import React, { useState } from "react";
import LandingNav from "../components/LandingNav";
import { StyWrapper } from "../components/GlobalStyles";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const RoleChoice = () => {
	const history = useHistory();
	const [role, setRole] = useState(null);

	const handleRole = (rolePicked) => {
		setRole(rolePicked);
		setTimeout(() => history.push("/profile"), 200);
	};

	return (
		<StyWrapper>
			<LandingNav />
			<StyContainer>
				<div className="wrapper">
					<h1>I am a</h1>
					<div className="inputs-container">
						<div className="input-container">
							<StyCheckbox
								style={
									role === "recruiter"
										? { backgroundColor: "#4347ea" }
										: { backgroundColor: "white" }
								}
								onClick={() => handleRole("recruiter")}
							></StyCheckbox>
							<span className="label">
								recruiter at a company
							</span>
						</div>
						<div className="input-container">
							<StyCheckbox
								style={
									role === "developer"
										? { backgroundColor: "#4347ea" }
										: { backgroundColor: "white" }
								}
								onClick={() => handleRole("developer")}
							></StyCheckbox>
							<span className="label">developer</span>
						</div>
					</div>
				</div>
			</StyContainer>
		</StyWrapper>
	);
};

const StyCheckbox = styled.span`
	width: 30px;
	height: 30px;
	background-color: white;
	display: inline-block;
	border-radius: 100%;
	border: 2px solid #4347ea;
	cursor: pointer;
`;

const StyContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		color: #4347ea;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.inputs-container {
		margin-top: 2rem;
	}
	.input-container {
		display: flex;
		align-items: center;
		margin: 1rem 0;
	}
	.label {
		font-size: 20px;
		margin-left: 1rem;
	}

    @media (max-width: 500px){
        .label{
            font-size: 16px;
        }
    }
`;

export default RoleChoice;
