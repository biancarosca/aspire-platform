import React, { useState } from "react";
//assets
// import portrait from "../images/portrait.png";
//components
// import { StyBtn } from "../components/GlobalStyles";
//packages
// import styled from "styled-components";
// import { toast } from "react-toastify";
// import { useMediaQuery } from "react-responsive";
import Avatar from "react-avatar-edit";
import hero from "../images/hero.jpg";

const AvatarComp = () => {
	// const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });
	const [preview, setPreview] = useState(null);
	const [edit, setEdit] = useState(true);

	const onClose = () => {
		setPreview(null);
	};

	const onCrop = (preview) => {
		setPreview( {preview} );
	};

	return (
		<div>
			<div style={edit ? {display: "block"} : {display: "none"}}>
				<Avatar
					width={320}
					height={225}
					onCrop={onCrop}
					onClose={onClose}
					src={hero}
				/>
			</div>
			<img src={preview && preview.preview} alt="Preview" />
			<button onClick={() => setEdit(prev => !prev)}>{edit ? "Done" : "Edit"}</button>
		</div>
	);
};

export default AvatarComp;
