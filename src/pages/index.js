import { Grid } from "@chakra-ui/react";
import SideArea from "../components/home/SideArea";

export default function Home() {
  return (
    <Grid
      as='main'
      templateColumns={[null, null, "25.5rem 100%"]}
      w='100%'
      minH='100vh'
      p={[null, null, "9.4rem 4rem"]}
    >
      <SideArea />
    </Grid>
  );
}
