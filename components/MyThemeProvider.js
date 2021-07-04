import { MuiThemeProvider } from "@material-ui/core/styles";
import { createMuiTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../lib/themes";

export default function MyThemeProvider({ children, isLightTheme }) {
  return (
    <MuiThemeProvider theme={createMuiTheme(isLightTheme ? lightTheme : darkTheme)}>
      {children}
    </MuiThemeProvider>
  );
}
