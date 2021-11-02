import { Box, Grid } from "@chakra-ui/react";
import Header from "../components/home/Header";
import SideArea from "../components/home/SideArea";

export default function Home() {
  return (
    <div style={{ minHeight: "100vh" }}>
      <Grid
        as='main'
        templateColumns={[null, null, "25.5rem auto"]}
        w='100%'
        p={[null, "5.6rem 3.9rem", "9.4rem 4rem"]}
        maxW='1240px'
        m='0 auto'
        gap={[null, "4rem", "3rem"]}
      >
        <SideArea />
        <Box>
          <Header />
        </Box>
      </Grid>
    </div>
  );
}
