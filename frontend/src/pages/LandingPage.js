import React from "react";
//assets
import hero from "../images/hero.jpg";
//packages
import styled from "styled-components";
//components
import { StyWrapper, StyLinkBtn } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import CTAbtn from "../components/CTAbtn";
import LogoutBtn from "../components/LogoutBtn";
//redux
import { useSelector} from "react-redux";

const LandingPage = () => {
	const isLoggedIn = useSelector((store) => store.isLoggedIn);
	
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
						<LogoutBtn />
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
