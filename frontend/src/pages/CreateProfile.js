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
import InputExperienceComp from "../components/InputExperienceComp";
import EducWorkComp from "../components/EducWorkComp";
import InputLinksComp from "../components/InputLinksComp";
import TextareaComp from "../components/TextareaComp";

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
			else toast.error("Not a valid language!");
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
					<StyBtn className="cta-btn">Or complete later</StyBtn>
					<AvatarComp />
					<form>
						<TextareaComp placeholder="Add your bio." />
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
							setLanguages={setLanguages}
						/>
						<InputExperienceComp title="Education">
							<EducWorkComp
								placeholder1="Institution"
								placeholder2="Degree/title"
							/>
						</InputExperienceComp>
						<InputExperienceComp title="Work experience">
							<EducWorkComp
								placeholder1="Company"
								placeholder2="Job title"
							/>
						</InputExperienceComp>
						<InputExperienceComp title="Personal projects">
							<InputLinksComp placeholders={["Link to Github","Link to a live demo"]}>
								<TextareaComp placeholder="Describe in a few words your project." />
							</InputLinksComp>
						</InputExperienceComp>
						<InputExperienceComp title="Social links">
							<InputLinksComp placeholders={["Add your link"]}>
							</InputLinksComp>
						</InputExperienceComp>
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
	margin-bottom: 5rem;
	form {
		width: 300px;
	}
	.cta-btn {
		transform-origin: center;
	}
`;

export default CreateProfile;
