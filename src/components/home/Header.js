import { useState } from "react";
import Link from "next/link";

import { Flex, Button, Link as ChakraLink, Heading } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Image } from "@chakra-ui/image";

export default function Header() {
  const [sort, setSort] = useState("Most Upvotes");

  return (
    <Flex
      as='header'
      alignItems='center'
      justifyContent={["space-between", "flex-start"]}
      h={["5.6rem", "7.2rem"]}
      bg='darkGray'
      color='white'
      px='2.4rem'
      w='100%'
      borderRadius={[null, "1rem"]}
    >
      <Flex alignItems='center' display={["none", "flex"]}>
        <Image src='/assets/light.svg' alt='light' mr='1.6rem' />
        <Heading fontSize='1.8rem' lineHeight='2.6rem' mr='3.6rem'>
          6 Suggestions
        </Heading>
      </Flex>
      <Menu>
        <MenuButton
          as={Button}
          fontSize='1.4rem'
          lineHeight='2rem'
          opacity={[null, null, "0.75"]}
          sx={{
            span: {
              display: "flex",
              alignItems: "center",
            },
          }}
        >
          Sort by :&nbsp; <strong>{sort}</strong>
          <Image src='/assets/arrow.svg' alt='' ml='0.9rem' />
        </MenuButton>
        <MenuList
          color='semiGray'
          border='none'
          w={["19rem", "25.5rem"]}
          sx={{
            "hr:last-of-type": {
              display: "none",
            },
          }}
        >
          {[
            "Most Upvotes",
            "Least Upvotes",
            "Most Comments",
            "Least Comments",
          ].map(text => (
            <>
              <MenuItem
                _hover={{ color: "purple" }}
                fontSize={["1.6rem", "1.7rem"]}
                lineHeight='2.3rem'
                cursor='pointer'
                px={["1.9rem", "2.4rem"]}
                py='0.7rem'
                onClick={() => setSort(text)}
              >
                {text}
              </MenuItem>
              <MenuDivider opacity='0.15' />
            </>
          ))}
        </MenuList>
      </Menu>
      <Link href='/create-feedback' passHref>
        <ChakraLink
          bg='purple'
          py={["0.81em", "0.9em"]}
          fontSize={["1.3rem", "1.4rem"]}
          lineHeight='1.9rem'
          fontWeight='bold'
          borderRadius='1rem'
          w={["13.4rem", "15.8rem"]}
          textAlign='center'
          ml={[null, "auto"]}
          transition='filter 0.2s ease'
          _hover={{ textDecoration: "none", filter: "brightness(1.15)" }}
        >
          + Add Feedback
        </ChakraLink>
      </Link>
    </Flex>
  );
}
