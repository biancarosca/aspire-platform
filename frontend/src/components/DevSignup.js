import React, { useState } from "react";
//components
import { toast } from "react-toastify";
import LangContainers from "../components/LangContainers";
import InputExperienceComp from "../components/InputExperienceComp";
import EducWorkComp from "../components/EducWorkComp";
import InputLinksComp from "../components/InputLinksComp";
import TextareaComp from "../components/TextareaComp";
import { StyBtn, StyInput } from "../components/GlobalStyles";
//utils
import { languagesData } from "../utils/languagesData";

const DevSignup = () => {
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
		<form>
			<TextareaComp placeholder="Add your bio." maxLength={120} />
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
				onChange={({ target }) => handleLanguagesInput(target)}
				type="text"
				placeholder="Languages"
				size="25"
				// value={email}
			/>
			<LangContainers languages={languages} setLanguages={setLanguages} />
			<InputExperienceComp title="Education">
				<EducWorkComp
					placeholder1="Institution"
					placeholder2="Degree/title"
				/>
			</InputExperienceComp>
			<InputExperienceComp title="Work experience">
				<EducWorkComp placeholder1="Company" placeholder2="Job title" />
			</InputExperienceComp>
			<InputExperienceComp title="Personal projects">
				<InputLinksComp
					placeholders={["Link to Github", "Link to a live demo"]}
				>
					<TextareaComp placeholder="Describe in a few words your project." maxLength = {120} />
				</InputLinksComp>
			</InputExperienceComp>
			<InputExperienceComp title="Social links">
				<InputLinksComp
					placeholders={["Add your link"]}
				></InputLinksComp>
			</InputExperienceComp>
			<StyBtn className="cta-btn" type="submit">
				Continue
			</StyBtn>
		</form>
	);
};

export default DevSignup;
