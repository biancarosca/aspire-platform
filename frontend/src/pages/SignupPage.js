import React from "react";
//components
import { StyWrapper, StyBtn, StyInput } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import styled from "styled-components";
import CTAbtn from "../components/CTAbtn";
import RoleChoice from "../components/RoleChoice";

const SignupPage = () => {
	return (
		<StyWrapper>
			<LandingNav
				menuItems={[
					{ name: "Why Aspire?", path: "#" },
					{ name: "Log In", path: "/login" },
				]}
			>
				<CTAbtn />
			</LandingNav>
			<StyContainer>
				<div className="wrapper">
					<h1>Hi!</h1>
					<h3>Create a new account</h3>
					<div className="roles">
						<RoleChoice roleName="recruiter" />
						<RoleChoice roleName="developer" />
					</div>
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
					<StyBtn to="/role" className="cta-btn">
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
	.roles {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: flex-start;
	}
`;

export default SignupPage;
