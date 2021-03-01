import React, { useState } from "react";
//components
import { StyBtn } from "../components/GlobalStyles";
//packages
import styled from "styled-components";
import { toast } from "react-toastify";
import Avatar from "react-avatar-edit";
//assets
import defaultPortrait from "../images/portrait.png";

const AvatarComp = () => {
	const [preview, setPreview] = useState(null);
	const [edit, setEdit] = useState(true);

	const onClose = () => {
		setPreview(null);
	};

	const onCrop = (preview) => {
		setPreview({ preview });
	};

	const onBeforeFileLoad = (file) => {
		if (file.target.files[0].size > 200000) {
			//>200 kb size
			toast.error(
				"File must not exceed 200kb. Compress the image, or upload another file.",
				{
					position: "top-center",
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				}
			);
			file.target.value = ""; //makes sure the file is not uploaded
		}
	};

	const handleEdit = () => {
		setEdit((prev) => !prev);
		if (edit) {
			toast.success("Avatar successfully updated!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
	};

	return (
		<div>
			<div style={edit ? { display: "block" } : { display: "none" }}>
				<Avatar
					width={300}
					height={205}
					onCrop={onCrop}
					onClose={onClose}
					onBeforeFileLoad={onBeforeFileLoad}
					label="Upload your avatar"
					labelStyle={{ color: "#434246", cursor: "pointer" }}
					src={preview}
				/>
			</div>
			<StyEdit>
				<img
					src={
						preview && preview.preview
							? preview.preview
							: defaultPortrait
					}
					alt="Preview"
				/>
				<StyBtn className="cta-btn" onClick={handleEdit}>
					{edit ? "Done" : "Edit"}
				</StyBtn>
			</StyEdit>
		</div>
	);
};

const StyEdit = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	img {
		margin-top: 1rem;
		border-radius: 100%;
		height: 100px;
		width: 100px;
	}
`;

export default AvatarComp;
