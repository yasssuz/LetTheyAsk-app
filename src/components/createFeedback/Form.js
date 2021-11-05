import { useState } from "react";
import { useForm } from "react-hook-form";

import { Box, Heading, List, ListItem, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import { Textarea } from "@chakra-ui/textarea";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";

import ButtonsArea from "./ButtonsArea";

export default function Form() {
  const [category, setCategory] = useState("Feature");
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    const feedbackData = {
      ...data,
      category,
    };
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <List>
        <ListItem mt='2.4rem'>
          <Heading
            fontSize={["1.4rem", "1.6rem"]}
            lineHeight={["2rem", "2.5rem"]}
            color='darkBlue'
          >
            Feedback Title
          </Heading>
          <Text
            fontSize={["1.4rem", "1.6rem"]}
            lineHeight={["2rem", "2.5rem"]}
            color='semiGray'
            mt='0.3rm'
            mb='1.6rem'
          >
            Add a short, decriptive headline
          </Text>
          <Input
            className={errors.title ? "error" : null}
            {...register("title", { required: true, pattern: /^[a-zA-Z0-9]/ })}
            type='text'
            bg='lightGray'
            border='none'
            h='4.8rem'
            w='100%'
            borderRadius='0.5rem'
            px={["1.6rem", "2.4rem"]}
            fontSize='1.4rem'
            lineHeight='1.9rem'
            color='darkBlue'
            sx={{
              "&.error": {
                outline: "1px red solid",
              },
            }}
          />
        </ListItem>
        <ListItem mt='2.4rem' position='relative'>
          <Heading
            fontSize={["1.4rem", "1.6rem"]}
            lineHeight={["2rem", "2.5rem"]}
            color='darkBlue'
          >
            Category
          </Heading>
          <Text
            fontSize={["1.4rem", "1.6rem"]}
            lineHeight={["2rem", "2.5rem"]}
            color='semiGray'
            mt='0.3rm'
            mb='1.6rem'
          >
            Choose a category for your feedback
          </Text>
          <Menu>
            <Box
              sx={{
                "div:first-of-type": {
                  width: "100%",
                },
              }}
            >
              <MenuButton
                className='teste'
                as={Button}
                bg='lightGray'
                border='none'
                h='4.8rem'
                w='100%'
                borderRadius='0.5rem'
                px={["1.6rem", "2.4rem"]}
                sx={{
                  span: {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  },
                }}
              >
                <Text fontSize='1.5rem' lineHeight='2.2rem' color='darkBlue'>
                  {category}
                </Text>
                <Image src='/assets/arrow-blue.svg' alt='go' />
              </MenuButton>
              <MenuList
                p='0'
                w='100%'
                border='none'
                borderRadius='1rem'
                overflow='hidden'
                boxShadow='0px 10px 40px -7px rgba(55, 63, 104, 0.350492) !important'
                sx={{
                  "div:last-of-type hr": {
                    display: "none",
                  },
                  "[data-js-focus-visible] :focus:not([data-focus-visible-added])":
                    {
                      all: "unset",
                    },
                }}
              >
                {["Feature", "UI", "UX", "Enhancement", "Bug"].map(item => (
                  <Box
                    key={item}
                    _hover={{
                      button: {
                        background: "gray",
                      },
                    }}
                  >
                    <MenuItem
                      onClick={() => setCategory(item)}
                      fontWeight='600'
                      fontSize='1.6rem'
                      lineHeight='2.3rem'
                      color='semiGray'
                      p={["1.4rem 1.6rem", "1.6rem 2.4rem"]}
                      _hover={{ color: "purple" }}
                    >
                      {item}
                    </MenuItem>
                    <MenuDivider m='0' opacity='0.1' />
                  </Box>
                ))}
              </MenuList>
            </Box>
          </Menu>
        </ListItem>
        <ListItem mt='2.4rem'>
          <Heading
            fontSize={["1.4rem", "1.6rem"]}
            lineHeight={["2rem", "2.5rem"]}
            color='darkBlue'
          >
            Feedback Detail
          </Heading>
          <Text
            fontSize={["1.4rem", "1.6rem"]}
            lineHeight={["2rem", "2.5rem"]}
            color='semiGray'
            mt='0.3rm'
            mb='1.6rem'
          >
            Include any specific comments on what should be improved, added,
            etc.
          </Text>
          <Textarea
            className={errors.detail ? "error" : null}
            {...register("detail", { required: true, pattern: /^[a-zA-Z0-9]/ })}
            bg='lightGray'
            border='none'
            h='12rem'
            w='100%'
            borderRadius='0.5rem'
            p={["1rem 1.6rem", "1.5rem 2.4rem"]}
            fontSize='1.4rem'
            lineHeight='1.9rem'
            color='darkBlue'
            resize='none'
            sx={{
              "&.error": {
                outline: "1px red solid",
              },
            }}
          />
        </ListItem>
      </List>
      <ButtonsArea />
    </form>
  );
}
