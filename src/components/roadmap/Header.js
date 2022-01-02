import { useRouter } from "next/router";

import { Flex, Box, Heading } from "@chakra-ui/layout";
import { CustomButton } from "../shared/Buttons";

import GoBack from "../shared/GoBack";

export default function Header() {
  const router = useRouter();

  function handleChangePage() {
    router.push("/feedback/create-feedback");
  }

  return (
    <Box as='header' maxW='1240px' m='0 auto' p={[null, "0 4rem"]}>
      <Flex
        borderRadius={[null, "1rem"]}
        h={["10rem", "13rem"]}
        bg='darkGray'
        alignItems='center'
        justifyContent='space-between'
        p={["0 2.4rem", "0 3.2rem"]}
      >
        <Box>
          <GoBack whiteMode />
          <Heading
            fontSize={["1.8rem", "2.4rem"]}
            lineHeight={["2.6rem", "3.4rem"]}
            mt='0.4rem'
            color='white'
          >
            Roadmap
          </Heading>
        </Box>
        <CustomButton
          onClick={handleChangePage}
          bg='purple'
          w={[null, "15.8rem"]}
        >
          + Add Feedback
        </CustomButton>
      </Flex>
    </Box>
  );
}
