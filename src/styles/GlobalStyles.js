import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family:Poppins, Georgia, sans-serif;
        background-color:$(pros=>props.theme.main)
    }

    body{
        background-color:${(props) => props.theme.main};
        color:${(props) => props.theme.textColor};
    }

    
`;

export default GlobalStyle;
