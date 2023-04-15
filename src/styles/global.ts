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
  h1, h2, h3 {
    color: ${(props) => props.theme.baseTitle};
  }
  h1 {
    font-size: 1.5rem;
  }
  h2 {
    font-size: 1.25rem;
  }
  h3 {
    font-size: 1.125rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 160%;
  }
`
