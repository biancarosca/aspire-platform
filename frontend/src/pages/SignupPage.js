import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
//components
import { StyWrapper, StyBtn, StyInput,StyContainer } from "../components/GlobalStyles";
import LandingNav from "../components/LandingNav";
import styled from "styled-components";
import CTAbtn from "../components/CTAbtn";
import RoleChoice from "../components/RoleChoice";
//axios
import axios from "axios";
//packages
import { toast } from "react-toastify";

const SignupPage = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPsw, setConfirmPsw] = useState("");
	const role = useSelector(store => store.pickedRole);
	const history = useHistory();

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (password !== confirmPsw){
			toast.error("Passwords do not match!");
			return;
		}
		try {
			const res = await axios.post(`http://localhost:5000/api/${role}s`, {
				firstName,
				lastName,
				email,
				password,
			});
			console.log(res);
			history.push("/profile");
		} catch (error) {
			console.log(error);
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
						<StyInput onChange={({target}) => setFirstName(target.value)}
							type="text"
							placeholder="First name"
							size="25"
							value={firstName}
						/>
						<StyInput onChange={({target}) => setLastName(target.value)}
							type="text"
							placeholder="Last name"
							size="25"
							value={lastName}
						/>
						<StyInput onChange={({target}) => setEmail(target.value)}
							type="text" 
							placeholder="Email" 
							size="25"
							value={email} 
						/>
						<StyInput onChange={({target}) => setPassword(target.value)}
							type="password"
							placeholder="Password"
							size="25"
							name="password"
							autoComplete="on"
							value={password}
						/>
						<StyInput onChange={({target}) => setConfirmPsw(target.value)}
							type="password"
							placeholder="Confirm password"
							size="25"
							name="password"
							autoComplete="on"
							value={confirmPsw}
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