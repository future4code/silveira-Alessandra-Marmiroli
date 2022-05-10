import { ThemeProvider } from "@material-ui/core/styles";
import React from "react"
import theme from './constants/theme'
import Router from "./routes/Router"


export default function App () {
  return (
    <ThemeProvider theme={theme} >
     <Router />
    </ThemeProvider >
  );
}


