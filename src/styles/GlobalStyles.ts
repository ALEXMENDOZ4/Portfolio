import { createGlobalStyle } from "styled-components";
import { colors } from "./colors";

export const GlobalStyle = createGlobalStyle`

    *{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        text-decoration: none;
        list-style: none;
        scroll-behavior: smooth;

        a{
            color: ${colors.textColor};
        }
    }

    body{
        font-family: 'Poppins', sans-serif;
        font-size: 16px;
        color: ${colors.textColor};
        background-color: ${colors.bgColor};
    }
`;