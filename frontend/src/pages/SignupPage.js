import React from "react";
import { StyWrapper, StyBtn, StyInput } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import styled from "styled-components";

const SignupPage = () => {
	return (
		<StyWrapper>
			<LandingNav />
			<StyContainer>
				<div className="wrapper">
					<h1>Hi!</h1>
					<h3>Create a new account</h3>
					<form>
						<StyInput
							type="text"
							placeholder="First name"
							size="25"
						/>
						<StyInput
							type="text"
							placeholder="Last name"
							size="25"
						/>
						<StyInput type="text" placeholder="Email" size="25" />
						<StyInput
							type="password"
							placeholder="Password"
							size="25"
							name="password"
							autoComplete="on"
						/>
						<StyInput
							type="password"
							placeholder="Confirm password"
							size="25"
							name="password"
							autoComplete="on"
						/>
					</form>

					<StyBtn to="" className="cta-btn">
						Continue
					</StyBtn>
				</div>
			</StyContainer>
		</StyWrapper>
	);
};

const StyContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1 {
			color: #4347ea;
			margin: 1rem 0;
		}
		h3 {
			font-size: 16px;
			margin-bottom: 1rem;
		}
		input {
			display: block;
		}
	}
`;

export default SignupPage;
