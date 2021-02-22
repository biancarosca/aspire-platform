import { createGlobalStyle } from "styled-components";

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

export default GlobalStyles;