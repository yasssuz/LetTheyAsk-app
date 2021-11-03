import { Image } from "@chakra-ui/image";
import { Box, Heading } from "@chakra-ui/layout";

import Form from "./Form";

export default function Card() {
  return (
    <Box
      as='section'
      mt='5.5rem'
      bg='white'
      borderRadius='1rem'
      p={["0 2.4rem 2.4rem", "0 4.2rem 4rem"]}
    >
      <Box
        color='white'
        bg='radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);'
        w={["40px", "56px"]}
        h={["40px", "56px"]}
        borderRadius='50%'
        display='grid'
        placeContent='center'
        transform='translateY(-50%)'
      >
        <Image
          src='/assets/plus.svg'
          alt='+'
          w={["12px", "16px"]}
          h={["12px", "16px"]}
        />
      </Box>
      <Heading
        as='h1'
        fontSize={["1.8rem", "2.5rem"]}
        lineHeight={["2.6rem", "3.7rem"]}
        color='darkBlue'
        pb={[null, "1rem"]}
      >
        Create New Feedback
      </Heading>
      <Form />
    </Box>
  );
}
