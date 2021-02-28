import React, {useState} from "react";
import { useSelector } from "react-redux";
//packages
import styled from "styled-components";
//components
import LandingNav from "../components/LandingNav";
import {
	StyWrapper,
	StyBtn,
	StyInput,
	StyContainer,
} from "../components/GlobalStyles";
import AvatarComp from "../components/AvatarComp";
import LangContainers from "../components/LangContainers";

const CreateProfile = () => {
	const role = useSelector((store) => store.pickedRole);
	const [languages, setLanguages] = useState([]);

	const handleLanguagesInput = (target) => {
		if (target.value.indexOf(",") !== -1) {
			const lang = target.value;
			const langSanitized = lang.charAt(0).toUpperCase() + lang.toLowerCase().slice(1,lang.length-1); //capitalize
			setLanguages([...languages, langSanitized]);
			target.value = "";
		}
	};

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
							onChange={({ target }) =>
								handleLanguagesInput(target)
							}
							type="text"
							placeholder="Languages"
							size="25"
							// value={email}
						/>
						<LangContainers
							languages={languages}
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

export default CreateProfile;
