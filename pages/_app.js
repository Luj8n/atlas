import { useEffect, useState } from "react";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import Navbar from "../components/Navbar";
import Providers from "../components/Providers";

export default function MyApp({ Component, pageProps }) {
  const [theme, setTheme] = useState(undefined); // true => light; false => dark

  useEffect(() => {
    // https://github.com/mui-org/material-ui/blob/master/examples/nextjs/pages/_app.js
    // ¯\_(ツ)_/¯
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) jssStyles.parentElement.removeChild(jssStyles);
  }, []);

  const changeTheme = (choice) => {
    localStorage.setItem("theme", choice ? "light" : "dark");
    setTheme(choice);
  };

  return (
    <>
      <Head>
        <title>Atlas</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Providers setTheme={changeTheme} theme={theme}>
        <CssBaseline />
        <Navbar setTheme={changeTheme} theme={theme} />
        <Component {...pageProps} />
      </Providers>
    </>
  );
}
