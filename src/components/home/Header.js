import Link from "next/link";

import { Flex, Button, Heading, Box } from "@chakra-ui/layout";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Image } from "@chakra-ui/image";
import { CustomButton } from "../shared/Buttons";

export default function Header({ suggestions, sort, setSort }) {
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
          {suggestions} Suggestions
        </Heading>
      </Flex>
      <Menu>
        <MenuButton
          as={Button}
          fontSize='1.4rem'
          lineHeight='2rem'
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
          p='0'
          color='semiGray'
          border='none'
          w={["19rem", "27rem"]}
          borderRadius={["0.7rem", "1rem"]}
          overflow='hidden'
          sx={{
            "div:last-of-type hr": {
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
            <Box
              _hover={{
                button: {
                  background: "gray",
                },
              }}
              key={text}
            >
              <MenuItem
                cursor='pointer'
                fontWeight='600'
                fontSize='1.6rem'
                lineHeight='2.3rem'
                color='semiGray'
                p={["1.4rem 1.6rem", "1.6rem 2.4rem"]}
                _hover={{ color: "purple" }}
                onClick={() => setSort(text)}
              >
                {text}
              </MenuItem>
              <MenuDivider m='0' opacity='0.1' />
            </Box>
          ))}
        </MenuList>
      </Menu>
      <Link href='/feedback/create-feedback' passHref>
        <CustomButton
          as='a'
          bg='purple'
          w={["13.4rem", "15.8rem"]}
          ml={[null, "auto"]}
        >
          + Add Feedback
        </CustomButton>
      </Link>
    </Flex>
  );
}
