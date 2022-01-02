import { Box, Heading } from "@chakra-ui/layout";
import Header from "../../components/roadmap/Header";

export default function createFeedback() {
  return (
    <Box as='main' minH='100vh' mt={[null, "5.6rem"]}>
      <Header />
      <Box maxW='1240px' m='0 auto' p={["0 2.4rem", "0 4rem"]}>
        <Heading mt='20rem'>still under construction, fam!</Heading>
      </Box>
    </Box>
  );
}
