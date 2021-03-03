import React, { useState } from "react";
//packages
// import styled from "styled-components";
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
// //redux
// import { useDispatch, useSelector } from "react-redux";
// import allActions from "../actions/index";

const DevSignup = () => {
	// const dispatch = useDispatch();
	const [languages, setLanguages] = useState([]);
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	// const [institution, setInstitution] = useState("");
	// const [degree, setDegree] = useState("");
	// const [start, setStart] = useState("");
	// const [end, setEnd] = useState("");
	// const education = useSelector((store) => store.education);
	// const activeSection = useSelector((store) => store.activeSection);
	// const [work, setWork] = useState([]);

	// const handleSave = (e,message) => {
	// 	e.preventDefault();
	// 	dispatch(allActions.toggleSection(false));
	// 	handleInput(e.target);

	// 	toast.success(`${message} was successfully saved!`, {
	// 		position: "top-center",
	// 		autoClose: 5000,
	// 		hideProgressBar: false,
	// 		closeOnClick: true,
	// 		pauseOnHover: true,
	// 		draggable: true,
	// 		progress: undefined,
	// 	});
	// };

	// const handleInput = (target) => {
	// 	// "Done" button was clicked, values can be sent to store
	// 	const educIdx = education.findIndex(
	// 		(group) => group.id === target.parentNode.id
	// 	); //find the index of the current input group in state
	// 	if (educIdx !== -1) {
	// 		education.splice(educIdx, 1); //delete it from state if it exists
	// 	}
	// 	//add the updated version
	// 	dispatch(
	// 		allActions.addEducation({
	// 			institution,
	// 			degree,
	// 			period: [start, end],
	// 			id: target.parentNode.id,
	// 		})
	// 	);
	// 	//reset state
	// 	setInstitution("");
	// 	setDegree("");
	// 	setStart("");
	// 	setEnd("");
	// };

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
				onChange={({ target }) => setCity(target.value)}
				type="text"
				placeholder="City"
				size="25"
				value={city}
			/>
			<StyInput
				onChange={({ target }) => setCountry(target.value)}
				type="text"
				placeholder="Country"
				size="25"
				value={country}
			/>
			<StyInput
				onChange={({ target }) => handleLanguagesInput(target)}
				type="text"
				placeholder="Languages"
				size="25"
			/>
			<LangContainers languages={languages} setLanguages={setLanguages} />
			<InputExperienceComp title="Education">
				<EducWorkComp
					placeholder1="Institution"
					placeholder2="Degree/title"
					type="education"
				></EducWorkComp>
				{/* <StyWrap>
					<StyInput
						type="text"
						placeholder="Institution"
						onChange={({ target }) => {
							setInstitution(target.value);
						}}
						size="25"
					/>
					<StyInput
						type="text"
						placeholder="Degree/title"
						onChange={({ target }) => {
							setDegree(target.value);
						}}
						size="25"
					/>
					<label htmlFor="start">Start date</label>
					<StyInput
						type="date"
						id="start"
						onChange={({ target }) => {
							setStart(target.value);
						}}
					/>
					<label htmlFor="end">End date</label>
					<StyInput
						type="date"
						id="end"
						onChange={({target}) => {
							setEnd(target.value);
						}}
					/>
					<StyControl onClick={(e) => handleSave(e,"Education")}>
						Save
					</StyControl>
				</StyWrap> */}
			</InputExperienceComp>
			<InputExperienceComp title="Work experience">
				<EducWorkComp
					placeholder1="Company"
					placeholder2="Job title"
					type="work"
				/>
				{/* <StyWrap>
					<StyInput
						type="text"
						placeholder="Company"
						// onChange={({ target }) => handleInput(target, field)}
						size="25"
					/>
					<StyInput
						type="text"
						placeholder="Job title"
						// onChange={({ target }) => handleInput(target, field)}
						size="25"
					/>
					<label htmlFor="start">Start date</label>
					<StyInput
						type="date"
						id="start"
						// onChange={({ target }) => handleInput(target, field)}
					/>
					<label htmlFor="end">End date</label>
					<StyInput
						type="date"
						id="end"
						// onChange={({ target }) => handleInput(target, field)}
					/>
				</StyWrap> */}
			</InputExperienceComp>
			<InputExperienceComp title="Personal projects">
				<InputLinksComp
					placeholders={["Link to Github", "Link to a live demo"]}
				>
					<TextareaComp
						placeholder="Describe in a few words your project."
						maxLength={120}
					/>
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

// const StyWrap = styled.div`
// 	input {
// 		width: 100%;
// 	}
// 	input[type="date"] {
// 		color: #434246;
// 		width: 60%;
// 		margin-top: 0;
// 	}
// 	label {
// 		margin-top: 1rem;
// 		padding: 0 0.5rem;
// 		font-weight: bold;
// 		width: fit-content;
// 	}
// `;

// const StyControl = styled(StyBtn)`
// 	width: fit-content;
// 	padding: 0.5rem 1rem;
// 	margin: 0;
// 	align-self: flex-end;
// `;

export default DevSignup;
