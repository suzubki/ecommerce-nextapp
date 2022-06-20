import "../styles/globals.css"

import type { AppProps } from "next/app"
import { SWRConfig } from "swr"
import { CssBaseline, ThemeProvider } from "@mui/material"

import { CartProvider, UIProvider } from "../context"
import { lightTheme } from "../themes"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: (resource, init) =>
          fetch(resource, init).then(res => res.json())
      }}
    >
      <UIProvider>
        <CartProvider>
          <ThemeProvider theme={lightTheme}>
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </CartProvider>
      </UIProvider>
    </SWRConfig>
  )
}

export default MyApp
