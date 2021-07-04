// copied from here: (a little modified)
// https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
import { useEffect, useState } from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../components/Navbar";
import MyThemeProvider from "../components/MyThemeProvider";

function MyApp({ Component, pageProps }) {
  // TODO: store the wanted theme in a cookie and use it
  const [isLightTheme, setIsLightTheme] = useState(false);

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  function setTheme(theme) {
    setIsLightTheme(theme);
  }

  return (
    <>
      <Head>
        <title>Atlas</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <MyThemeProvider isLightTheme={isLightTheme} setTheme={setTheme}>
        <CssBaseline />
        <Navbar setTheme={setTheme} isLightTheme={isLightTheme} />
        <Component {...pageProps} />
      </MyThemeProvider>
    </>
  );
}

export default MyApp;
