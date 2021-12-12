import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";
import Image from "next/image";

export default function Comment({ data }) {
  return (
    <ListItem mt={["2.4rem", "2.8rem"]}>
      <Flex alignItems='center'>
        <Box
          overflow='hidden'
          height='40px'
          width='40px'
          position='relative'
          borderRadius='50%'
        >
          <Image
            src={data.avatar}
            alt={data.name}
            layout='fill'
            objectFit='cover'
            quality={100}
          />
        </Box>
        <Heading
          as='h3'
          fontSize='1.4rem'
          lineHeight='2rem'
          color='darkBlue'
          ml={["1.6rem", "3.2rem"]}
        >
          {data.name}
        </Heading>
        <Button
          fontSize='1.4rem'
          ml='auto'
          color='blue'
          _hover={{ textDecoration: "underline" }}
          padding='0'
          lineHeight='1.9rem'
        >
          Reply
        </Button>
      </Flex>
      <Text
        fontSize={["1.4rem", "1.5rem"]}
        color='semiGray'
        lineHeight='2rem'
        mt='1rem'
        ml={[null, "7.2rem"]}
      >
        {data.comment}
      </Text>
    </ListItem>
  );
}
