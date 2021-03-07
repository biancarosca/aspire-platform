import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//utils
import refreshAuthLogic from "../utils/refreshAuthLogic";
//packages
import styled from "styled-components";
import createAuthRefreshInterceptor from "axios-auth-refresh";
//components
import { StyInput, StyBtn, StyTextarea } from "../components/GlobalStyles";
import { StyRadioInput, StyRadioInpWrap } from "../components/GlobalStyles";
import InputExperienceComp from "../components/InputExperienceComp";
import InputLinksComp from "../components/InputLinksComp";
//redux
import { useSelector } from "react-redux";

const RecruiterSignup = () => {
	const [companySize, setCompanySize] = useState("Small(1-100 employees)");
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [businessName, setBusinessName] = useState("");
	const user = useSelector((store) => store.user);
	const socialLinks = useSelector((store) => store.socialLinks);
	const companyDescripEl = useRef(null);
	const avatar = useSelector((store) => store.avatar);
	const history = useHistory();
	const companySizes = [
		"Small(1-100 employees)",
		"Medium(101-999 employees)",
		"Large(1000+ employees)",
	];

	const handleSubmit = async (e) => {
		e.preventDefault();
		const companyDescription = companyDescripEl.current.value;
		//make an array with the input social links
		let linksArray = [];
		socialLinks.forEach((socialLink) => linksArray.push(socialLink.link));

		const update = {
			...user.recruiter,
			profile: {
				...user.recruiter.profile,
				location: {
					city,
					country,
				},
				companyDescription,
				socialLinks: linksArray,
				logo: avatar,
			},
		};
		createAuthRefreshInterceptor(axios, refreshAuthLogic);
		try {
			await axios.patch(
				`http://localhost:5000/api/recruiters/${user.recruiter._id}`,
				{ update, pickedRole: "recruiter" },
				{
					headers: {
						Authorization: "Bearer " + user.accessToken,
					},
				}
			);
			history.push("/dashboard");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<form onSubmit={(e) => handleSubmit(e)}>
			<StyInput
				onChange={({ target }) => setBusinessName(target.value)}
				type="text"
				placeholder="Business name"
				size="25"
				value={businessName}
			/>
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
			<span style={{ padding: "0 0.5rem", margin: "1rem 0" }}>
				Company size
			</span>
			<StyCompanySize>
				{companySizes.map((size) => (
					<StyRadioInpWrap key={size}>
						<StyRadioInput
							style={
								companySize === size
									? { backgroundColor: "#4347ea" }
									: { backgroundColor: "white" }
							}
							onClick={() => setCompanySize(size)}
						></StyRadioInput>
						<span className="label">{size}</span>
					</StyRadioInpWrap>
				))}
			</StyCompanySize>
			<StyTextarea
				rows="4"
				cols="30"
				placeholder="Describe the company and its values."
				maxLength={1000}
				ref={companyDescripEl}
			></StyTextarea>
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

const StyCompanySize = styled.div`
	margin-bottom: 1.5rem;
`;

export default RecruiterSignup;
