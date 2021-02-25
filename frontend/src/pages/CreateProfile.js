import React from "react";
import { useSelector } from "react-redux";
import LandingNav from "../components/LandingNav";
import {
	StyWrapper,
	StyBtn,
	StyInput,
	StyContainer,
} from "../components/GlobalStyles";
import AvatarComp from "../components/AvatarComp";
import styled from "styled-components";

const CreateProfilePage = () => {
	const role = useSelector((store) => store.pickedRole);
	return (
		<StyWrapper>
			<LandingNav />
			<StylContainer>
				<div className="wrapper">
					<h1>{role.charAt(0).toUpperCase() + role.slice(1)}</h1>
					<h3>Create your profile</h3>
					<AvatarComp />
					<form>
						<StyInput
							type="text"
							placeholder="City"
							size="25"
							// value={firstName}
						/>
						<StyInput
							// onChange={({ target }) => setLastName(target.value)}
							type="text"
							placeholder="Country"
							size="25"
							// value={lastName}
						/>
						<StyInput
							// onChange={({ target }) => setEmail(target.value)}
							type="text"
							placeholder="Languages"
							size="25"
							// value={email}
						/>
						<StyBtn className="cta-btn" type="submit">
							Continue
						</StyBtn>
					</form>
				</div>
			</StylContainer>
		</StyWrapper>
	);
};

const StylContainer = styled(StyContainer)`
	.cta-btn {
		transform-origin: center;
	}
`;

export default CreateProfilePage;
