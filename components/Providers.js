import { useEffect, useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { createTheme } from "@material-ui/core/styles";
import { lightTheme, darkTheme } from "../lib/themes";

export default function MyThemeProvider({ children, theme, setTheme }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") === "dark" ? false : true);
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <ThemeProvider theme={createTheme(theme ? lightTheme : darkTheme)}>{children}</ThemeProvider>
  );
}
