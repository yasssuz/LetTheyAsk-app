import { createBreakpoints } from "@chakra-ui/theme-tools";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

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
        fontFamily: "'Jost', sans-serif !important",
        position: "relative",
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
    gray: "#647196",
    gray: "#F2F4FF",
    lightGray: "#F7F8FD",
    white: "#FFFFFF",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
