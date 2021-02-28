import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routing from "./routing";
import Navigation from "./components/common/navigation";
import {
  createMuiTheme,
  MuiThemeProvider,
  responsiveFontSizes,
} from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
  },
});
theme = responsiveFontSizes(theme);

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <Navigation>
        <Routing />
      </Navigation>
    </MuiThemeProvider>
  </BrowserRouter>
);

export default App;
