import React, { useState, useRef } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
//components
import { StyWrapper, StyBtn, StyInput, StyContainer } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import styled from "styled-components";
import CTAbtn from "../components/CTAbtn";
//packages
import { toast } from "react-toastify";
//redux
import { useDispatch } from "react-redux";
import allActions from "../actions/index";

const LoginPage = () => {
	const [eyeOpen, setEyeOpen] = useState(false);
	const passEl = useRef(null);
	const history = useHistory();
	const dispatch = useDispatch();

	const toggleEye = () => {
		setEyeOpen((prev) => !prev);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const email = e.target.children[0].value;
		const password = passEl.current.value;
		try {
			const res = await axios.post(
				"http://localhost:5000/api/login",
				{ email, password },
				{ withCredentials: true, credentials: "include" }
			);
			//save to local storage
			console.log(res);
			if (res.data.role === "developer")
				localStorage.setItem(
					"user",
					JSON.stringify({ dev: res.data.user, accessToken: res.data.token })
				);
			else
				localStorage.setItem(
					"user",
					JSON.stringify({ recruiter: res.data.user, accessToken: res.data.token })
				);
			localStorage.setItem("accessToken", JSON.stringify(res.data.token));
			localStorage.setItem("pickedRole", JSON.stringify(res.data.role));

			//login state
			dispatch(allActions.setLogin(true));

			//role state
			dispatch(allActions.pickRole(res.data.role));

			history.push("dashboard");
		} catch (error) {
			toast.error("Unable to log in");
		}
	};

	return (
		<StyWrapper>
			<LandingNav
				menuItems={[
					{ name: "Why Aspire?", path: "#" },
					{ name: "Log In", path: "/login" },
				]}
			>
				<CTAbtn />
			</LandingNav>
			<StylContainer>
				<div className="wrapper">
					<h1>Welcome!</h1>
					<h3>Log in to continue</h3>
					<form onSubmit={(e) => handleSubmit(e)}>
						<StyInput required type="text" placeholder="Email" size="25" />
						<div className="input-container">
							<StyInput
								required
								type={eyeOpen ? "text" : "password"}
								ref={passEl}
								placeholder="Password"
								size="25"
								name="password"
								autoComplete="on"
							/>
							<span className="eye-open" onClick={toggleEye}>
								{eyeOpen ? (
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
										<path d="M508.7 246c-4.6-6.3-113.6-153.2-252.7-153.2S7.8 239.8 3.2 246c-4.3 5.9-4.3 14 0 19.9 4.6 6.3 113.6 153.2 252.7 153.2s248.2-146.9 252.7-153.2C513.1 260 513.1 252 508.7 246zM256 385.4c-102.5 0-191.3-97.5-217.6-129.4 26.3-31.9 114.9-129.4 217.6-129.4 102.5 0 191.3 97.5 217.6 129.4C447.4 287.9 358.7 385.4 256 385.4z" />
										<path d="M256 154.7c-55.8 0-101.3 45.4-101.3 101.3s45.4 101.3 101.3 101.3 101.3-45.4 101.3-101.3S311.8 154.7 256 154.7zM256 323.5c-37.2 0-67.5-30.3-67.5-67.5s30.3-67.5 67.5-67.5 67.5 30.3 67.5 67.5S293.2 323.5 256 323.5z" />
									</svg>
								) : (
									<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
										<g>
											<path d="m500.862 225.775c-29.621-34.367-64.949-66.624-102.388-91.029l83.309-83.309c5.86-5.859 5.86-15.361 0-21.22-5.859-5.859-15.361-5.859-21.22 0l-88.729 88.729c-39.21-20.972-78.035-31.584-115.834-31.584-94.311 0-183.452 67.163-244.862 138.413-14.85 17.231-14.85 43.218 0 60.449 29.621 34.367 64.949 66.624 102.388 91.029l-83.309 83.309c-5.86 5.859-5.86 15.361 0 21.22 5.861 5.861 15.361 5.86 21.22 0l88.729-88.729c39.21 20.972 78.034 31.584 115.833 31.584 94.311 0 183.452-67.163 244.862-138.413 14.852-17.23 14.852-43.218.001-60.449zm-466.992 40.856c-5.309-6.16-5.309-15.103 0-21.263 33.169-38.484 121.213-127.995 222.13-127.995 33.052 0 64.723 9.603 93.538 23.869l-41.153 41.153c-14.787-10.554-32.873-16.771-52.385-16.771-49.833 0-90.376 40.543-90.376 90.376 0 19.511 6.216 37.597 16.77 52.385l-47.12 47.12c-46.296-28.99-82.636-67.098-101.404-88.874zm282.495-10.631c0 33.285-27.08 60.365-60.365 60.365-11.211 0-21.711-3.082-30.716-8.428l41.326-41.326 41.326-41.326c5.347 9.004 8.429 19.504 8.429 30.715zm-120.73 0c0-33.285 27.08-60.365 60.365-60.365 11.211 0 21.711 3.082 30.716 8.429l-41.326 41.326-41.326 41.326c-5.347-9.005-8.429-19.505-8.429-30.716zm282.495 10.631c-33.169 38.485-121.213 127.996-222.13 127.996-33.052 0-64.723-9.603-93.538-23.869l41.153-41.153c14.787 10.554 32.873 16.771 52.385 16.771 49.833 0 90.376-40.543 90.376-90.376 0-19.511-6.216-37.597-16.771-52.385l47.12-47.12c46.296 28.99 82.636 67.098 101.404 88.873 5.31 6.16 5.31 15.103.001 21.263z" />
										</g>
									</svg>
								)}
							</span>
						</div>
						<StyBtn type="submit" className="cta-btn">
							Continue
						</StyBtn>
					</form>
				</div>
			</StylContainer>
		</StyWrapper>
	);
};

const StylContainer = styled(StyContainer)`
	svg {
		width: 30px;
		height: 30px;
		fill: #434246;
	}
	.eye-open {
		position: absolute;
		bottom: 1.2rem;
		right: 0.2rem;
		cursor: pointer;
	}
	.input-container {
		position: relative;
	}
	.cta-btn {
		transform-origin: center;
	}
`;

export default LoginPage;
