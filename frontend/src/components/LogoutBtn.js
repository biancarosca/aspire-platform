import React from "react";
//packages
import styled from "styled-components";
import axios from "axios";
import createAuthRefreshInterceptor from "axios-auth-refresh";
//redux
import { useSelector, useDispatch } from "react-redux";
//utils
import refreshAuthLogic from "../utils/refreshAuthLogic";
import allActions from "../actions";

const LogoutBtn = () => {
	const dispatch = useDispatch();
	const pickedRole = useSelector((store) => store.pickedRole);
	const user = useSelector((store) => store.user);
	console.log(user);
	const handleLogout = async () => {
		createAuthRefreshInterceptor(axios, refreshAuthLogic);
		try {
			await axios.post(
				"https://aspire-platform.herokuapp.com/api/logout",
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
			dispatch(allActions.logout());
		} catch (error) {
			console.log(error);
		}
	};
	return <StyLogout onClick={handleLogout}>Log out</StyLogout>;
};

export const StyLogout = styled.button`
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

export default LogoutBtn;
