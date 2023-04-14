import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme.brandBlue};
  }
  body {
    background: ${(props) => props.theme.baseBg};
    color: ${(props) => props.theme.baseText};
    -webkit-font-smoothing: antialiased;
  }
  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
