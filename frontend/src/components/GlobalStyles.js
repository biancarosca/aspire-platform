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

export const StyBtn = styled(Link)`
	text-decoration: none;
	color: white;
	background-color: #413feb;
	margin-top: 1rem;
	padding: 0.5rem 3rem;
	border-radius: 5rem;
`;

export default GlobalStyles;
