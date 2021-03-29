import React, {useState} from "react";
//packages
import styled from "styled-components";
//components
import { StyWrapper } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import LogoutBtn from "../components/LogoutBtn";
import JobListing from "../components/JobListing";
//assets
import defaultPortrait from "../images/portrait.png";
//redux
import { useSelector } from "react-redux";

const JobsPage = () => {
	const [selectedCategory, setSelectedCategory] = useState("Jobs");
	const user = JSON.parse(localStorage.getItem("user"));
	const role = useSelector((store) => store.pickedRole);
	const avatar =
		role === "developer"
			? user.dev.profile.avatar
				? user.dev.profile.avatar
				: ""
			: user.recruiter.profile.avatar
				? user.recruiter.profile.avatar
				: "";
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
			<StyListOptions>
				<li style={selectedCategory === "Jobs" ? {borderBottom: "2px solid #4347ea"} : {}} onClick={() => setSelectedCategory("Jobs")}>Jobs</li>
				<li style={selectedCategory === "P2P" ? {borderBottom: "2px solid #4347ea"} : {}} onClick={() => setSelectedCategory("P2P")}>P2P</li>
			</StyListOptions>
			<JobListing />
			<JobListing />
			<JobListing />
			<JobListing />

		</StyWrapper>
	);
};

const StyListOptions = styled.ul`
	list-style-type: none;
	display: flex;
	margin-left: 1rem;
	margin-bottom: 1.5rem;
	li{
		margin-right: 2rem;
		font-size: 1.1rem;
		cursor: pointer;
		&:hover{
			color: black;
		}
	}
`;

const StyAvatar = styled.img`
	width: 30px;
	height: 30px;
	border-radius: 100%;
	margin-left: 2rem;
`;

export default JobsPage;
