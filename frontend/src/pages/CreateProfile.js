import React, { useState } from "react";
import { useSelector } from "react-redux";
//packages
import styled from "styled-components";
import { toast } from "react-toastify";
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
//utils
import { languagesData } from "../utils/languagesData";

const CreateProfile = () => {
	const role = useSelector((store) => store.pickedRole);
	const [languages, setLanguages] = useState([]);

	const handleLanguagesInput = (target) => {
		if (target.value.indexOf(",") !== -1) {
			const lang = target.value;
			const langSanitized = lang
				.split(" ")
				.map(
					(piece) =>
						piece.charAt(0).toUpperCase() +
						piece.toLowerCase().slice(1, lang.length - 1) //capitalize
				)
				.join(""); 
			if (languages.includes(langSanitized))
				toast.error("Language already added!");
			else if (languagesData.includes(langSanitized))
				setLanguages([...languages, langSanitized]);
			else
				toast.error("Not a valid language!");	
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
						<LangContainers languages={languages} />
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
	form {
		width: 300px;
	}
	.cta-btn {
		transform-origin: center;
	}
`;

export default CreateProfile;
