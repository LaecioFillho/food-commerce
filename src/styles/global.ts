import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

html{
  @media (max-width: 1080px){
    font-size: 93.75%;
  }

  @media (max-width: 720px){
    font-size: 87.5%;
  }
}

body{
  background: ${({theme}) => theme.colors.gray800};
  -webkit-font-smoothing: antialiased;
  color: ${({theme}) => theme.colors.white};
}

body,
input,
select,
textarea,
button{
  font: 400 1rem 'Roboto', Helvetica, Arial, Sans-serif;
}

a{
  color: inherit;
  text-decoration: none;
}

button{
  cursor: pointer;
}

ul,
ol,
li{
  list-style: none;
}

`
