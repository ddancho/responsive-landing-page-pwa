import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    font-family: 'Roboto', sans-serif;
}

a {
    text-decoration: none;
    color: unset;
}
`;

export default GlobalStyles;
