import React, { useState } from "react";
//components
import { StyInput } from "../components/GlobalStyles";
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
			<span style={{ padding: "0 0.5rem", margin: "1rem 0" }}>Company size</span>
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
		</form>
	);
};

export default RecruiterSignup;
