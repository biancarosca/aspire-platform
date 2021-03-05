import React, { useState } from "react";
import { useSelector } from "react-redux";
//components
import { StyBtn } from "../components/GlobalStyles";
//packages
import styled from "styled-components";
import { toast } from "react-toastify";
import Avatar from "react-avatar-edit";
//assets
import defaultPortrait from "../images/portrait.png";
//redux
import { useDispatch } from "react-redux";
import allActions from "../actions/index";

const AvatarComp = () => {
	const [preview, setPreview] = useState(null);
	const [edit, setEdit] = useState(true);
	const role = useSelector((store) => store.pickedRole);
	const dispatch = useDispatch();

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
		if(preview)
			dispatch(allActions.addAvatar(preview.preview));
		else
			dispatch(allActions.addAvatar(defaultPortrait));
			
		const message = role === "developer" ? "Avatar" : "Logo";
		if (edit) {
			toast.success(`${message} successfully updated!`, {
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
					label={role ==="developer" ? "Upload your avatar" : "Upload the company's logo"}
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
