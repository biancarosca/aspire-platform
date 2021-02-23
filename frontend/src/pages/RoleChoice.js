import React from "react";
import LandingNav from "../components/LandingNav";
import { StyWrapper } from "../components/GlobalStyles";
import styled from "styled-components";

const RoleChoice = () => {
	return (
		<StyWrapper>
			<LandingNav />
			<StyContainer>
				<div className="wrapper">
					<h1>I am a</h1>
					<div className="inputs-container">
						<div className="input-container">
							<span className="checkbox"></span>
							<span className="label">
								recruiter at a company
							</span>
						</div>
						<div className="input-container">
							<span className="checkbox"></span>
							<span className="label">developer</span>
						</div>
					</div>
				</div>
			</StyContainer>
		</StyWrapper>
	);
};

const StyContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	h1 {
		color: #4347ea;
	}
	.checkbox{
        width: 30px;
        height: 30px;
        background-color: white;
        display: inline-block;
        border-radius: 100%;
        border: 2px solid #4347ea;
        cursor: pointer;
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
`;

export default RoleChoice;
