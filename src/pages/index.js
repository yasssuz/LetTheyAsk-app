import { Grid } from "@chakra-ui/layout";

import SideArea from "../components/home/SideArea";
import MainArea from "../components/home/MainArea";

export default function Home() {
  return (
    <Grid
      as='main'
      templateColumns={[null, null, "25.5rem auto"]}
      w='100%'
      p={[null, "5.6rem 3.9rem", "9.4rem 4rem"]}
      maxW='1240px'
      m='0 auto'
      gap={[null, "4rem", "3rem"]}
      minH='100vh'
    >
      <SideArea />
      <MainArea />
    </Grid>
  );
}
