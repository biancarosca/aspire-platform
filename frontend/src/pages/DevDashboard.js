import React from "react";
//packages
import styled from "styled-components";
//components
import { StyWrapper } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import LogoutBtn from "../components/LogoutBtn";
//assets
import defaultPortrait from "../images/portrait.png";

const DevDashboard = () => {
	const greet = () => {
		const name = JSON.parse(localStorage.getItem("user")).dev.profile
			.firstName;
		const sanitizedName = name.charAt(0).toUpperCase() + name.slice(1);
		return sanitizedName;
	};
	const user = JSON.parse(localStorage.getItem("user"));
	const avatar = user.dev.profile.avatar ? user.dev.profile.avatar : "";
	console.log(avatar);
	return (
		<StyWrapper>
			<LandingNav
				menuItems={[
					{ name: "Dashboard", path: "/dashboard" },
					{ name: "Jobs", path: "/jobs" },
					{ name: "Dev community", path: "/dev_community" },
				]}
			>
				<LogoutBtn />
				<StyAvatar src={avatar ? avatar : defaultPortrait} />
			</LandingNav>
			<h1>Hi, {greet()}!</h1>
		</StyWrapper>
	);
};

const StyAvatar = styled.img`
	width: 50px;
	height: 50px;
	border-radius: 100%;
	margin-left: 2rem;
`;

export default DevDashboard;
