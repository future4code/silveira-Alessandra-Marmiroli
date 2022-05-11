import { ThemeProvider } from "@material-ui/core/styles";
import React, { useState } from "react"
import theme from './constants/theme'
import Router from "./routes/Router"


export default function App () {
  const token = localStorage.getItem("token")
  const [buttonHeader, setButtonHeader] = useState(token ? "Logout":"Login")

  return (
    <ThemeProvider theme={theme} >
     <Router buttonHeader={buttonHeader} setButtonHeader={setButtonHeader}/>
    </ThemeProvider >
  );
}


