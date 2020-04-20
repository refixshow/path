import { createGlobalStyle } from 'styled-components';
import { colors } from './colors';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        padding: 0;
        margin: 0;
        box-sizing: inherit;
    }

    html {
        font-size: 62.5%;
    }

    body {
        box-sizing: border-box;
        background-color: #021645;
        color: ${colors.greyLight};
        font-size: 2rem;
        font-family: 'Times New Roman', Times, serif;
    }
`;
