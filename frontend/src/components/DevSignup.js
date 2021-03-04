import React, { useState } from "react";
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
//redux
import { useSelector } from "react-redux";
// import allActions from "../actions/index";

const DevSignup = () => {
	// const dispatch = useDispatch();
	const [languages, setLanguages] = useState([]);
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [projDescrip, setProjDescrip ] = useState("");
	const developer = useSelector (store => store.developer);
	const education = useSelector (store => store.education);
	const work = useSelector (store => store.work);
	const socialLinks = useSelector (store => store.socialLinks);
	const portfolio = useSelector (store => store.portfolio);

	const handleSubmit = async (e) => {
		e.preventDefault();
		const bio = e.target.children[0].value;			//get bio input
		education.forEach(group => delete group.id);
		work.forEach(group => delete group.id);
		portfolio.forEach(project => delete project.id );

		let linksArray = [];
		socialLinks.forEach(socialLink => linksArray.push(socialLink.link));
		
		const update = {...developer, profile: {
			...developer.profile,
			spokenLangs: languages,
			homeLocation: {
				city,
				country
			},
			education,
			workExp: work,
			bio,
			socialLinks: linksArray,
			portfolio,
		}};
		console.log(update);
		try {
			const res = await axios.patch(`http://localhost:5000/api/developers/${developer._id}`,update);
			console.log(res);
			// history.push("/profile");
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
				// onChange={(e) => console.log(e.target)}
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
						onChange={({target}) => setProjDescrip(target.value)}
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
