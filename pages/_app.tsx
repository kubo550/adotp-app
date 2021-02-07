import { AnimatePresence } from "framer-motion";
import { Router } from "next/dist/client/router";

import NProgress from "nprogress";

import "../styles/globals.scss";
import "nprogress/nprogress.css";

import Navbar from "../components/Navbar/Navbar";

NProgress.configure({ showSpinner: false });

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <>
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} key={router.route} />
      </AnimatePresence>
    </>
  );
};

export default MyApp;
