import React from "react";
import axios from "axios";
//assets
import hero from "../images/hero.jpg";
//packages
import styled from "styled-components";
import createAuthRefreshInterceptor from "axios-auth-refresh";
// import { useCookies } from "react-cookie";
//components
import { StyWrapper, StyLinkBtn } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import CTAbtn from "../components/CTAbtn";
//redux
import { useSelector, useDispatch } from "react-redux";
//utils
import refreshAuthLogic from "../utils/refreshAuthLogic";
import allActions from "../actions";

const LandingPage = () => {
	const isLoggedIn = useSelector((store) => store.isLoggedIn);
	const pickedRole = useSelector((store) => store.pickedRole);
	const user = useSelector((store) => store.user);
	const dispatch = useDispatch();

	const handleLogout = async () => {
		createAuthRefreshInterceptor(axios, refreshAuthLogic);
		try {
			await axios.post(
				"http://localhost:5000/api/logout",
				{ pickedRole },
				{
					headers: {
						Authorization: "Bearer " + user.accessToken,
					},
				}
			);
			//delete everything from local storage
			localStorage.clear();
			//update state
			dispatch(allActions.setLogin(false));
		} catch (error) {
			console.log(error);
		}
	};
	return (
		<>
			<StyWrapper>
				<LandingNav
					menuItems={
						isLoggedIn
							? [
								{ name: "Why Aspire?", path: "#" },
								{ name: "Dashboard", path: "/dashboard" },
							]
							: [
								{ name: "Why Aspire?", path: "#" },
								{ name: "Log In", path: "/login" },
							]
					}
				>
					{!isLoggedIn ? (
						<CTAbtn />
					) : (
						<StyLogout onClick={handleLogout}>Log out</StyLogout>
					)}
				</LandingNav>
				<StyledHero>
					<div className="info">
						<h1>Fastest link between developers and recruiters.</h1>
						<div className="cta-btn">
							{!isLoggedIn && (
								<StyLinkBtn to="/join">Get started</StyLinkBtn>
							)}
						</div>
					</div>
					<img src={hero} alt="interview" />
				</StyledHero>
			</StyWrapper>
		</>
	);
};

const StyLogout = styled.button`
	text-decoration: none;
	background-color: white;
	cursor: pointer;
	outline: none;
	font: inherit;
	border: none;
	color: #434246;
	margin-left: 3rem;
	&:hover {
		color: black;
	}
`;

const StyledHero = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50vh;
	.info {
		h1 {
			margin-bottom: 1.5rem;
		}
	}
	img {
		z-index: -1;
	}
	@media (max-width: 870px) {
		flex-direction: column;
		.info {
			h1 {
				text-align: center;
			}
		}
		.cta-btn {
			display: flex;
			justify-content: center;
			transform-origin: center;
		}
		.get-started {
			margin-top: 0;
			margin-bottom: 1.5rem;
		}
	}
	@media (max-width: 710px) {
		.info {
			h1 {
				font-size: 1.8rem;
			}
		}
	}
	@media (max-width: 610px) {
		img {
			width: 400px;
			height: 400px;
		}
	}
	@media (max-width: 500px) {
		img {
			width: 250px;
			height: 250px;
		}
		.info {
			h1 {
				font-size: 1.5rem;
			}
		}
	}
	@media (max-width: 380px) {
		.info {
			h1 {
				font-size: 1.2rem;
			}
		}
	}
`;

export default LandingPage;
