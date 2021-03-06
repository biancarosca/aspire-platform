import React from "react";
//packages
import styled from "styled-components";
//components
import { StyWrapper } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import LogoutBtn from "../components/LogoutBtn";
//assets
import defaultPortrait from "../images/portrait.png";


const DevCommunity = () => {
	const user = JSON.parse(localStorage.getItem("user"));
	const avatar = user.dev.profile.avatar ? user.dev.profile.avatar : "";
	return (
		<StyWrapper>
			<LandingNav
				menuItems={[
					{ name: "Dashboard", path: "/dashboard" },
					{ name: "Jobs", path: "/jobs" },
					{ name: "Community", path: "/community" },
				]}
			>
				<LogoutBtn />
				<StyAvatar src={avatar ? avatar : defaultPortrait} />
			</LandingNav>
			<h1>Welcome to our community!</h1>
		</StyWrapper>
	);
};

const StyAvatar = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 100%;
	margin-left: 2rem;
`;

export default DevCommunity;
