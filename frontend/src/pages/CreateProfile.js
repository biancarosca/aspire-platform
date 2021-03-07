import React, { useEffect } from "react";
import { useSelector } from "react-redux";
//packages
import styled from "styled-components";
//components
import LandingNav from "../components/LandingNav";
import { StyWrapper, StyBtn, StyContainer } from "../components/GlobalStyles";
import AvatarComp from "../components/AvatarComp";
import DevSignup from "../components/DevSignup";
import RecruiterSignup from "../components/RecruiterSignup";

const CreateProfile = () => {
	const role = useSelector((store) => store.pickedRole);

	//reload alert
	useEffect(() => {
		window.onbeforeunload = function () {
			return true;
		};
		return () => {
			window.onbeforeunload = null;
		};
	}, []);

	return (
		<StyWrapper>
			<LandingNav />
			<StylContainer>
				<div className="wrapper">
					<h1>{role.charAt(0).toUpperCase() + role.slice(1)}</h1>
					<h3>
						{role === "developer"
							? "Create your profile"
							: "Create the company profile"}
					</h3>
					<StyBtn className="cta-btn">Or complete later</StyBtn>
					<AvatarComp />
					{role === "developer" ? <DevSignup /> : <RecruiterSignup />}
				</div>
			</StylContainer>
		</StyWrapper>
	);
};

const StylContainer = styled(StyContainer)`
	margin-bottom: 5rem;
	form {
		width: 300px;
	}
	.cta-btn {
		transform-origin: center;
	}
`;

export default CreateProfile;
