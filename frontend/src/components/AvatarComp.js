import React, { useState } from "react";
import styled from "styled-components";
import portrait from "../images/portrait.png";

const AvatarComp = () => {
	const [avatarImg, setAvatarImg] = useState(null);

	const handleFile = (files) => {
		const image = files[0];
		const reader = new FileReader();
		reader.onload = (avatar) => setAvatarImg(avatar.target.result);
		if (image) reader.readAsDataURL(image);
	};
	return (
		<StyWrapper>
			<StyUploader
				onChange={({ target }) => handleFile(target.files)}
				type="file"
				id="avatar"
				name="avatar"
				accept="image/png, image/jpeg"
			></StyUploader>
			<StyAvatar image={avatarImg ? avatarImg : portrait} />
		</StyWrapper>
	);
};

const StyWrapper = styled.div`
	position: relative;
`;

const StyUploader = styled.input`
	display: block;
	opacity: 0;
	border-radius: 50%;
	position: absolute;
	top: 0;
	width: 128px;
	height: 128px;
	cursor: pointer;
	z-index: 2;
`;

const StyAvatar = styled.div`
	cursor: pointer;
	height: auto;
	width: 128px;
	height: 128px;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position: center;
	border-radius: 50%;
	z-index: 1;
`;

export default AvatarComp;
