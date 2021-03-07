import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//components
import {
	StyWrapper,
	StyBtn,
	StyInput,
	StyContainer,
} from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import styled from "styled-components";
import CTAbtn from "../components/CTAbtn";
import RoleChoice from "../components/RoleChoice";
//axios
import axios from "axios";
//packages
import { toast } from "react-toastify";
//redux
import { useDispatch } from "react-redux";
import allActions from "../actions/index";

const SignupPage = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const role = useSelector((store) => store.pickedRole);
	const [validEmail, setValidEmail] = useState(true);
	const [validPswd, setValidPswd] = useState(true);
	const history = useHistory();
	const dispatch = useDispatch();
	//use ref because I don't want to store password in state but send it directly to backend
	const pswdEl = useRef(null);
	const confirmPswdEl = useRef(null);

	const handleSubmit = async (e) => {
		//reset email & password to valid before another validation to remove red border
		setValidPswd(true);
		setValidEmail(true);

		e.preventDefault();
		if (pswdEl.current.value !== confirmPswdEl.current.value) {
			toast.error("Passwords do not match!");
			return;
		}

		const user = {
			email,
			password: pswdEl.current.value,
			profile: {
				firstName,
				lastName,
			},
		};
		try {
			const res = await axios.post(
				`http://localhost:5000/api/${role}s`,
				user, {withCredentials: true, credentials: "include"}
			);
			//store user in redux
			dispatch(allActions.addUser(res.data));
			dispatch(allActions.setLogin(true));
			//store access token in local storage
			localStorage.setItem("accessToken",res.data.accessToken);
			//store user in local storage
			localStorage.setItem("user",JSON.stringify(res.data));
			
			//set role in local storage
			localStorage.setItem("pickedRole",JSON.stringify(role));

			history.push("/profile");
		} catch (error) {
			if (error.response && error.response.data.message) {
				const errorMessage = error.response.data.message.replace(
					error.response.data._message + ": ",
					""
				);
				const splitMessage = errorMessage.split(","); //get individual error
				splitMessage.forEach((message) => {
					const individualMessage = message.split(":");
					toast.error(individualMessage[1]);
				});
				if (errorMessage.includes("email")) setValidEmail(false);
				if (errorMessage.includes("password")) setValidPswd(false);
			}
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
					<h1>Hi!</h1>
					<h3>Create a new account</h3>
					<div className="roles">
						<RoleChoice roleName="developer" />
						<RoleChoice roleName="recruiter" />
					</div>
					<form onSubmit={handleSubmit}>
						<StyInput
							required
							onChange={({ target }) =>
								setFirstName(target.value)
							}
							type="text"
							placeholder="First name"
							size="25"
							value={firstName}
						/>
						<StyInput
							required
							onChange={({ target }) => setLastName(target.value)}
							type="text"
							placeholder="Last name"
							size="25"
							value={lastName}
						/>
						<StyInput
							required
							onChange={({ target }) => setEmail(target.value)}
							type="text"
							placeholder="Email"
							size="25"
							value={email}
							style={
								validEmail
									? {}
									: { borderBottomColor: "#f74040" }
							}
						/>
						<StyInput
							required
							type="password"
							placeholder="Password"
							size="25"
							name="password"
							autoComplete="on"
							ref={pswdEl}
							style={
								validPswd
									? {}
									: { borderBottomColor: "#f74040" }
							}
						/>
						<StyInput
							required
							type="password"
							placeholder="Confirm password"
							size="25"
							name="password"
							autoComplete="on"
							ref={confirmPswdEl}
							style={
								validPswd
									? {}
									: { borderBottomColor: "#f74040" }
							}
						/>
						<StyBtn className="cta-btn" type="submit">
							Continue
						</StyBtn>
					</form>
				</div>
			</StylContainer>
		</StyWrapper>
	);
};

const StylContainer = styled(StyContainer)`
	.roles {
		display: flex;
		flex-direction: column;
		width: 100%;
		justify-content: flex-start;
	}
	.cta-btn {
		transform-origin: center;
	}
`;

export default SignupPage;
