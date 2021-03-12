import styled, { createGlobalStyle } from "styled-components";
import { Link } from "react-router-dom";

const GlobalStyles = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing: border-box;
    }
    body{
        font-family: 'Poppins',sans-serif;
        font-size: 16px;
        color: #434246;
    }
`;

export const StyRadioInpWrap = styled.div`
	display: flex;
	align-items: center;
	h1 {
		color: #4347ea;
	}
	.wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.label {
		font-size: 16px;
		margin-left: 1rem;
	}

	@media (max-width: 500px) {
		.label {
			font-size: 16px;
		}
	}
`;

export const StyRadioInput = styled.span`
	width: 20px;
	height: 20px;
	background-color: white;
	display: inline-block;
	border-radius: 100%;
	border: 2px solid #4347ea;
	cursor: pointer;
`;

export const StyTextarea = styled.textarea`
	resize: none;
	outline-color: #413feb;
	font-family: "Poppins", sans-serif;
	padding: 0.5rem;
	font-size: 1rem;
`;


export const StyWrapper = styled.div`
	.cta-btn {
		transition: all 0.2s ease;
		transform-origin: left center;
		&:hover {
			transform: scale(1.04);
			color: white;
		}
	}
	margin-left: auto;
	margin-right: auto;
	width: 960px;
	@media (max-width: 1030px) {
		width: 800px;
	}
	@media (max-width: 870px) {
		width: 700px;
	}
	@media (max-width: 710px) {
		width: 600px;
	}
	@media (max-width: 610px) {
		width: 450px;
	}
	@media (max-width: 500px) {
		width: 350px;
	}
	@media (max-width: 380px) {
		width: 260px;
	}
`;

export const StyBtn = styled.button`
	text-decoration: none;
	cursor: pointer;
	outline: none;
	color: white;
	font: inherit;
	border: none;
	background-color: #413feb;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	padding: 0.5rem 3rem;
	border-radius: 5rem;
`;

export const StyLinkBtn = styled(Link)`
	text-decoration: none;
	color: white;
	background-color: #413feb;
	margin-top: 1rem;
	margin-bottom: 1.5rem;
	padding: 0.5rem 3rem;
	border-radius: 5rem;
`;

export const StyInput = styled.input`
	margin: 1rem 0;
	outline: none;
	border-top-style: hidden;
	border-right-style: hidden;
	border-left-style: hidden;
	border-bottom-style: solid;
	border-color: #434246;
	padding: 0.3rem 0.5rem;
	font-family: "Poppins", "sans-serif";
	font-size: 16px;
	&:focus {
		border-color: #4347ea;
	}
`;

export const StyContainer = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	form {
		display: flex;
		flex-direction: column;
	}
	.wrapper {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		h1 {
			color: #4347ea;
			margin: 1rem 0;
		}
		h3 {
			font-size: 16px;
			margin-bottom: 1rem;
		}
		input {
			display: block;
		}
	}
`;

export default GlobalStyles;
