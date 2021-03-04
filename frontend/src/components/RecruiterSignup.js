import React, { useState } from "react";
//packages
import styled from "styled-components";
//components
import { StyInput, StyBtn, StyTextarea } from "../components/GlobalStyles";
import { StyRadioInput, StyRadioInpWrap } from "../components/GlobalStyles";

const RecruiterSignup = () => {
	const [compSize, setCompSize] = useState("Small(1-100 employees)");
	const companySizes = [
		"Small(1-100 employees)",
		"Medium(101-999 employees)",
		"Large(1000+ employees)",
	];

	return (
		<form>
			<StyInput type="text" placeholder="Business name" size="25" />
			<StyInput type="text" placeholder="Location" size="25" />
			<span style={{ padding: "0 0.5rem", margin: "1rem 0" }}>
				Company size
			</span>
			<StyCompanySize>
				{companySizes.map((size) => (
					<StyRadioInpWrap key={size}>
						<StyRadioInput
							style={
								compSize === size
									? { backgroundColor: "#4347ea" }
									: { backgroundColor: "white" }
							}
							onClick={() => setCompSize(size)}
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
			></StyTextarea>
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
