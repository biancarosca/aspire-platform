import React, { useState } from "react";
//assets
import portrait from "../images/portrait.png";
//components
import { StyBtn } from "../components/GlobalStyles";
//packages
import styled from "styled-components";
import { toast } from "react-toastify";
import { useMediaQuery } from "react-responsive";

const AvatarComp = () => {
	const [avatarImg, setAvatarImg] = useState(null);
	const [dragDir, setDragDir] = useState({ x: 50, y: 50 });
	const [edit, setEdit] = useState(false);
	const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

	const handleEdit = () => {
		let message;
		if (isTabletOrMobile) message = "Use the arrows to reposition avatar.";
		else message = "Drag the avatar to reposition it.";
		if (!edit)
			//when "Reposition" is clicked the toast is triggered (edit is false then)
			toast.info(message, {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		else
			toast.success("Avatar succesfully saved!", {
				position: "top-center",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		setEdit((prev) => !prev);
	};

	//only for mobile
	const handleArrowEdit = (direction) => {
		const { x, y } = dragDir;
		let xDir = x, yDir = y;
		if (direction === "up") yDir = y - 15;
		if (direction === "down") yDir = y + 15;
		if (direction === "right") xDir = x + 15;
		if (direction === "left") xDir = x - 15;

		setDragDir({ x: xDir, y: yDir });
	};

	//only for desktop
	const handleDrag = () => {
		const { x, y } = dragDir;
		const xOffs = window.event.offsetX;
		const yOffs = window.event.offsetY;
		let xDir = x,
			yDir = y;
		if (Math.abs(xOffs) > Math.abs(yOffs)) xDir = x - 15 * Math.sign(xOffs);
		else yDir = y - 15 * Math.sign(yOffs);

		setDragDir({ x: xDir, y: yDir });
	};

	const handleFile = (files) => {
		const image = files[0];
		const reader = new FileReader();
		reader.onload = (avatar) => setAvatarImg(avatar.target.result);
		if (image) reader.readAsDataURL(image);
	};
	return (
		<>
			<StyWrapper>
				<StyUploader
					edit={edit}
					onChange={({ target }) => handleFile(target.files)}
					type="file"
					id="avatar"
					name="avatar"
					accept="image/png, image/jpeg"
				></StyUploader>
				<div className="drag-wrapper">
					<StyAvatar
						draggable="true"
						onDragEnd={handleDrag}
						dragDir={dragDir}
						image={avatarImg ? avatarImg : portrait}
					/>
				</div>
				<StyEdit onClick={handleEdit}>
					{edit ? "Done" : "Reposition"}
				</StyEdit>
			</StyWrapper>
			{isTabletOrMobile && edit && (
				<StyControls>
					<div className="top-arrow">
						<svg
							onClick={() => handleArrowEdit("up")}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 240.8 240.8"
						>
							<path d="M129 57.8c-4.7-4.7-12.5-4.7-17.2 0L3.6 165.8c-4.7 4.7-4.7 12.4 0 17.2 4.7 4.7 12.4 4.7 17.2 0l99.7-99.4 99.7 99.4c4.8 4.7 12.4 4.7 17.2 0 4.7-4.7 4.7-12.4 0-17.2L129 57.8z" />
						</svg>
					</div>
					<div className="middle-arrows">
						<svg
							onClick={() => handleArrowEdit("left")}
							className="left"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 492 492"
						>
							<path d="M198.6 246.1L382.7 62c5.1-5.1 7.9-11.8 7.9-19 0-7.2-2.8-14-7.9-19l-16.1-16.1C361.5 2.8 354.7 0 347.5 0s-14 2.8-19 7.9L109.3 227c-5.1 5.1-7.9 11.9-7.8 19.1 0 7.2 2.8 14 7.8 19.1l218.9 218.9c5.1 5.1 11.8 7.9 19 7.9 7.2 0 14-2.8 19-7.9l16.1-16.1c10.5-10.5 10.5-27.6 0-38.1L198.6 246.1z" />
						</svg>
						<svg
							onClick={() => handleArrowEdit("right")}
							className="right"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 492 492"
						>
							<path d="M382.7 226.8L163.7 7.9C158.7 2.8 151.9 0 144.7 0s-14 2.8-19 7.9l-16.1 16.1c-10.5 10.5-10.5 27.6 0 38.1L293.4 245.9l-184.1 184.1c-5.1 5.1-7.9 11.8-7.9 19 0 7.2 2.8 14 7.9 19l16.1 16.1c5.1 5.1 11.8 7.9 19 7.9s14-2.8 19-7.9L382.7 265c5.1-5.1 7.9-11.9 7.8-19.1C390.5 238.7 387.8 231.9 382.7 226.8z" />
						</svg>
					</div>
					<div className="bottom-arrow">
						<svg
							onClick={() => handleArrowEdit("down")}
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 451.8 451.8"
						>
							<path d="M225.9 354.7c-8.1 0-16.2-3.1-22.4-9.3L9.3 151.2c-12.4-12.4-12.4-32.4 0-44.8 12.4-12.4 32.4-12.4 44.7 0l171.9 171.9 171.9-171.9c12.4-12.4 32.4-12.4 44.7 0 12.4 12.4 12.4 32.4 0 44.8L248.3 345.4C242.1 351.6 234 354.7 225.9 354.7z" />
						</svg>
					</div>
				</StyControls>
			)}
		</>
	);
};

const StyControls = styled.div`
	width: 260px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	svg {
		width: 25px;
		height: auto;
		cursor: pointer;
		&:hover{
			fill:#4347ea;
		}
	}
	.middle-arrows {
		.left {
			margin-right: 1rem;
		}
		.right {
			margin-left: 1rem;
		}
	}
`;

const StyEdit = styled(StyBtn)`
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
	padding: 0.5rem 1rem;
	transition: all 0.2s ease;
	transform-origin: center;
	&:hover {
		transform: scale(1.04);
		color: white;
	}
`;

const StyWrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	.drag-wrapper {
		cursor: pointer;
		height: auto;
		width: 128px;
		height: 128px;
		border-radius: 50%;
		z-index: 1;
	}
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
	z-index: ${(props) => (props.edit ? -3 : 3)};
`;

const StyAvatar = styled.div`
	cursor: pointer;
	height: auto;
	width: 128px;
	height: 128px;
	background-image: url(${(props) => props.image});
	background-size: cover;
	background-repeat: no-repeat;
	background-position-x: ${({ dragDir }) => dragDir.x}%;
	background-position-y: ${({ dragDir }) => dragDir.y}%;
	border-radius: 50%;
	z-index: 2;
`;

export default AvatarComp;
