import { createGlobalStyle } from "styled-components"
import lightOn from "../assets/light-on.svg"
import lightOff from "../assets/light-off.svg"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: background 0.2s ease-in, color 0.2s ease-in;
  }
`

export const lightTheme = {
  body: `no-repeat url(${lightOn})`,
  text: "#121620",
  background: "#F5F5F5",
}
export const darkTheme = {
  body: `no-repeat url(${lightOff})`,
  text: "#f1f1f1",
  background: "#171918",
}
