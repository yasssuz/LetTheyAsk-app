import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "../globals.css";

const theme = extendTheme({
  textStyles: {
    body: {
      fontFamily: "serif",
    },
  },
  colors: {
    darkGray: "#373F68",
    darkBlue: "#3A4374",
    blue: "#4661E6",
    cyan: "#62BCFA",
    purple: "#AD1FEA",
    orange: "#F49F85",
    darkGray: "#647196",
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
