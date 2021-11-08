import Link from "next/link";

import { Image } from "@chakra-ui/image";
import { Text, Heading, Flex } from "@chakra-ui/layout";
import { CustomButton } from "../shared/Buttons";

export default function FeedbacksArea({}) {
  return (
    <Flex
      as='section'
      borderRadius='1rem'
      bg='white'
      minH={["46rem", "60rem"]}
      m={["3.2rem 2.4rem 4.6rem", "2.4rem 0 0"]}
      px={["2.4rem"]}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
    >
      <Image
        src='/assets/detective.svg'
        alt=''
        mb={["3.9rem", "5.4rem"]}
        w={[null, "130px"]}
        h={[null, "137px"]}
      />
      <Heading
        fontWeight='bold'
        lineHeight={["2.6rem", "3.5rem"]}
        fontSize={["1.9rem", "2.4rem"]}
        color='darkBlue'
        mb={["1.4rem", "1.6rem"]}
      >
        There is no feedback yet.
      </Heading>
      <Text
        fontSize={["1.4rem", "1.6rem"]}
        lineHeight={["1.9rem", "2.3rem"]}
        color='semiGray'
        maxW='45ch'
      >
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </Text>
      <Link href='/create-feedback' passHref>
        <CustomButton
          bg='purple'
          w={["13.4rem", "15.8rem"]}
          mt={["2.4rem", "4.8rem"]}
        >
          + Add Feedback
        </CustomButton>
      </Link>
    </Flex>
  );
}
