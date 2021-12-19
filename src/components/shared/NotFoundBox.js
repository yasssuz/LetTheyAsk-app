import Link from "next/link";

import { Image } from "@chakra-ui/image";
import { Text, Heading, Flex, List } from "@chakra-ui/layout";
import { CustomButton } from "./Buttons";

export default function NotFoundBox({
  title,
  description,
  btn,
  heading,
  minHeight,
}) {
  return (
    <Flex
      as='section'
      borderRadius='1rem'
      bg='white'
      minH={minHeight ? minHeight : ["46rem", "60rem"]}
      m={["3.2rem 2.4rem 4.6rem", heading ? "0" : "2.4rem 0 0"]}
      px={["2.4rem"]}
      flexDirection='column'
      alignItems='center'
      justifyContent='center'
      textAlign='center'
    >
      <Image
        src='/assets/detective.svg'
        alt=''
        mb={["3.9rem", "4.8rem"]}
        w={[null, "130px"]}
        h={[null, "137px"]}
      />
      <Heading
        as={heading ? heading : "h2"}
        fontWeight='bold'
        lineHeight={["2.6rem", "3.5rem"]}
        fontSize={["1.9rem", "2.4rem"]}
        color='darkBlue'
        mb={["1.4rem", "1.6rem"]}
      >
        {title}
      </Heading>
      <Text
        fontSize={["1.4rem", "1.6rem"]}
        lineHeight={["1.9rem", "2.3rem"]}
        color='semiGray'
        maxW='45ch'
      >
        {description}
      </Text>
      {btn && (
        <Link href='/feedback/create-feedback' passHref>
          <CustomButton
            bg='purple'
            w={["13.4rem", "15.8rem"]}
            mt={["2.4rem", "4.8rem"]}
          >
            + Add Feedback
          </CustomButton>
        </Link>
      )}
    </Flex>
  );
}
