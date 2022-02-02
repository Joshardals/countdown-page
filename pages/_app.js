import { createGlobalStyle, ThemeProvider } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root {
    
    /* Primary */
    --grayish-blue: hsl(237, 18%, 59%);    
    --soft-red: hsl(345, 95%, 68%); 

    /* Neutral */
    --white: hsl(0, 0%, 100%); 
    --dark-desaturated-blue: hsl(236, 21%, 26%); 
    --very-dark-blue: hsl(235, 16%, 14%); 
    --blue-black: hsl(234, 17%, 12%); 
  }

  html, 
  body {
    margin: 0; 
    padding: 0;
    height: 100vh; 
    width: 100%; 
    overflow-x: hidden;
    font-size: 14px;
    font-weight: 700; 
    background: linear-gradient(to bottom, var(--blue-black), #2f2439);  
  }
`;
function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
