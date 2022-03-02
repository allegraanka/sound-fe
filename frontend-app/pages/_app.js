import '../styles/globals.css'
import Head from 'next/head'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'
import { createContext } from "react"
import { fetchAPI } from "../lib/api";
import { getStrapiMedia } from "../lib/media"

const App = ({ Component, pageProps }) => {
  // GOOGLE ANALYTICS TRACKING ROUTE CHANGES
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    }
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    }
  }, [router.events]);

  return (
    <Component {...pageProps} />
  )
}

export default App