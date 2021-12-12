import { createBreakpoints } from "@chakra-ui/theme-tools";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { AuthProvider } from "../contexts/AuthContext";

const theme = extendTheme({
  textStyles: {
    body: {
      fontFamily: "serif",
    },
  },
  styles: {
    global: {
      html: {
        fontSize: "62.5% !important",
        overflowX: "hidden",
      },
      body: {
        overflowX: "hidden",
        position: "relative",
      },
      "h1, h2, h3, h4, h5, h6, input, select, textarea, button, body": {
        fontFamily: "Jost !important",
      },
      "input, textarea": {
        transition: "outline 0.2s ease-in-out !important",
      },
      "input:focus, input:hover, textarea:focus, textarea:hover": {
        outline: "1px solid #4661E6",
      },
    },
  },
  breakpoints: createBreakpoints({
    sm: "640px",
    md: "47.5em",
    lg: "64em",
  }),
  colors: {
    darkGray: "#373F68",
    darkBlue: "#3A4374",
    blue: "#4661E6",
    cyan: "#62BCFA",
    purple: "#AD1FEA",
    orange: "#F49F85",
    semiGray: "#647196",
    gray: "#F2F4FF",
    lightGray: "#F7F8FD",
    white: "#FFFFFF",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Component {...pageProps} />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default MyApp;
