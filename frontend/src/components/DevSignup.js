import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
//components
import { toast } from "react-toastify";
import LangContainers from "../components/LangContainers";
import InputExperienceComp from "../components/InputExperienceComp";
import EducWorkComp from "../components/EducWorkComp";
import InputLinksComp from "../components/InputLinksComp";
import { StyBtn, StyInput, StyTextarea } from "../components/GlobalStyles";
//utils
import { languagesData } from "../utils/languagesData";
import refreshAuthLogic from "../utils/refreshAuthLogic";
//redux
import { useSelector } from "react-redux";
//packages
import createAuthRefreshInterceptor from "axios-auth-refresh";

const DevSignup = () => {
	// const dispatch = useDispatch();
	const [languages, setLanguages] = useState([]);
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [projDescrip, setProjDescrip] = useState("");
	const user = useSelector((store) => store.user);
	const education = useSelector((store) => store.education);
	const work = useSelector((store) => store.work);
	const socialLinks = useSelector((store) => store.socialLinks);
	const portfolio = useSelector((store) => store.portfolio);
	const avatar = useSelector((store) => store.avatar);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		const bio = e.target.children[0].value; //get bio input
		education.forEach((group) => delete group.id);
		work.forEach((group) => delete group.id);
		portfolio.forEach((project) => delete project.id);
		//make an array with the input social links
		let linksArray = [];
		socialLinks.forEach((socialLink) => linksArray.push(socialLink.link));
		const update = {
			...user.dev,
			profile: {
				...user.dev.profile,
				spokenLangs: languages,
				homeLocation: {
					city,
					country,
				},
				education,
				workExp: work,
				bio,
				socialLinks: linksArray,
				portfolio,
				avatar,
			},
		};
		createAuthRefreshInterceptor(axios, refreshAuthLogic);
		try {
			await axios.patch(
				`https://aspire-platform.herokuapp.com/api/developers/${user.dev._id}`,
				{ update, pickedRole: "developer" },
				{
					headers: {
						Authorization: "Bearer " + user.accessToken,
					},
				}
			);
			history.push("/dashboard");
			//update local storage
			const currentData = JSON.parse(localStorage.getItem("user"));
			currentData.dev.profile = { ...update.profile };
			console.log(currentData);
			localStorage.setItem("user", JSON.stringify(currentData));
		} catch (error) {
			console.log(error);
		}
	};

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
		<form onSubmit={(e) => handleSubmit(e)}>
			<StyTextarea
				rows="4"
				cols="30"
				placeholder="Add your bio"
				maxLength={120}
			></StyTextarea>
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
			</InputExperienceComp>
			<InputExperienceComp title="Work experience">
				<EducWorkComp
					placeholder1="Company"
					placeholder2="Job title"
					type="work"
				/>
			</InputExperienceComp>
			<InputExperienceComp title="Personal projects">
				<InputLinksComp
					placeholders={["Link to Github", "Link to a live demo"]}
					type="projects"
				>
					<StyTextarea
						rows="4"
						cols="30"
						placeholder="Describe in a few words your project."
						maxLength={120}
						projDescrip={projDescrip}
						onChange={({ target }) => setProjDescrip(target.value)}
					></StyTextarea>
				</InputLinksComp>
			</InputExperienceComp>
			<InputExperienceComp title="Social links">
				<InputLinksComp
					placeholders={["Add your link"]}
					type="links"
				></InputLinksComp>
			</InputExperienceComp>
			<StyBtn className="cta-btn" type="submit">
				Continue
			</StyBtn>
		</form>
	);
};

export default DevSignup;
