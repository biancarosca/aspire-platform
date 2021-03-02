import React, { useState } from "react";
import { useSelector } from "react-redux";
//packages
import styled from "styled-components";
import { toast } from "react-toastify";
import uuid from "react-uuid";
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
import EducationComp from "../components/EducationComp";
//utils
import { languagesData } from "../utils/languagesData";

const CreateProfile = () => {
	const role = useSelector((store) => store.pickedRole);
	const [languages, setLanguages] = useState([]);
	const [numEducField, setNumEducField] = useState([]); //keep track of education input groups

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

	const handleAddEduc = (e) => {
		e.preventDefault();
		setNumEducField((prev) => [...prev, uuid()]); //assign to each education input group a unique id
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
							setLanguages={setLanguages}
						/>
						<div className="education-wrapper">
							<div className="education-header">
								<span className="education-title">
									Education
								</span>
								<StyAddEduc onClick={(e) => handleAddEduc(e)}>
									+
								</StyAddEduc>
							</div>
							{numEducField &&
								numEducField.map((id) => (
									<EducationComp
										key={id}
										id={id}
										setNumEducField={setNumEducField}
									/>
								))}
						</div>
						<StyBtn className="cta-btn" type="submit">
							Continue
						</StyBtn>
					</form>
				</div>
			</StylContainer>
		</StyWrapper>
	);
};

const StyAddEduc = styled(StyBtn)`
	width: 30px;
	height: 30px;
	padding: 0;
	margin: 0;
`;

const StylContainer = styled(StyContainer)`
	margin-bottom: 5rem;
	form {
		width: 300px;
	}
	.cta-btn {
		transform-origin: center;
	}
	.education-wrapper {
		display: flex;
		flex-direction: column;
		margin-top: 1.5rem;
	}
	.education-header {
		display: flex;
		width: 100%;
		align-items: center;
	}
	.education-title {
		padding: 0 0.5rem;
	}
`;

export default CreateProfile;
