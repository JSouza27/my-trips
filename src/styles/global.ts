import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  :root {
    --highlight: #ff8906;
    --background: #0f0e17;
    --white: #fffffe;

    --container: 100rem;

    --small: 1.5rem;
    --medium: 3rem;
    --large: 5rem;
  }

  * {
    box-sizing: 0;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
  }

  html, body, #__next {
    background-color: var(--background);
    color: var(--white);
    height: 100%;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
  }

  p,
  a {
    font-size: 2rem;
    line-height: var(--medium);
  }

  a {
    color: var(--highlight);
  }
`

export default GlobalStyles
