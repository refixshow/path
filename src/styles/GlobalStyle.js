import { createGlobalStyle } from 'styled-components';
import { theme } from './theme';

const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
        color: inherit;
    }

    html {
        /* font-size: 62.5%;  */
        font-size: 50%;
        scroll-behavior: smooth;
    }

    body {
        box-sizing: border-box;
        background-color: ${theme.colors.primary};
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.greyLight};
        font-size: ${theme.fontSizes.normal};
        font-family: 'Times New Roman', Times, serif;
    }
`;

export default GlobalStyle;
