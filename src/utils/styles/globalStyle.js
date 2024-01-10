import { createGlobalStyle } from 'styled-components'
import colors from './colors'

//create a global css style
const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
body {
  font-family: 'Montserrat', sans-serif;
}
a {
    text-decoration: none;
    color: ${colors.primary};
}
`

export default GlobalStyle
