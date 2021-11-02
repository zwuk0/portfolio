import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}
body {
    background-color: ${(props) => props.theme.color.background};
    

   
    font-family: ${(props) => props.theme.fonts.primary};
    text-rendering: optimizeLegibility;
    &.blur {
    overflow: hidden;
        #___gatsby #main-content > * {
            /* filter: blur(5px); */
            transition: all 0.3s ease-out;
            pointer-events: none;
            user-select: none;
        }
    }
   
}
h1 {
    font-family: "Work Sans", sans-serif;
}
h2 {
    font-family: "Work Sans", sans-serif;

}
h3 {
    font-family: "Work Sans", sans-serif;

}
h4 {
    font-family: "Work Sans", sans-serif;

}
h5 {
    font-family: "Work Sans", sans-serif;

}
p {
    
}
`;

export default GlobalStyle;
