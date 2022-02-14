import { Box, Flex } from "@chakra-ui/layout";

import Card from "../../components/createFeedback/Card";
import GoBack from "../../components/shared/GoBack";
import BaseLayout from "../../components/shared/BaseLayout";

export default function createFeedback() {
  return (
    <BaseLayout>
      <Flex
        as='main'
        minH='100vh'
        flexDirection={[null, "column"]}
        alignItems={[null, "center"]}
        justifyContent={[null, "center"]}
        p='3.4rem 2.4rem 4rem'
      >
        <Box w='100%' maxW='72rem'>
          <GoBack />
          <Card />
        </Box>
      </Flex>
    </BaseLayout>
  );
}
