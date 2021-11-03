import { Heading, List, ListItem, Text } from "@chakra-ui/layout";
import { Input } from "@chakra-ui/input";
import { Textarea } from "@chakra-ui/textarea";
import ButtonsArea from "./ButtonsArea";

export default function Form() {
  return (
    <form>
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
            type='text'
            bg='lightGray'
            border='none'
            h='4.8rem'
            w='100%'
            borderRadius='0.5rem'
            px='1.6rem'
            fontSize='1.4rem'
            lineHeight='1.9rem'
            color='darkBlue'
          />
        </ListItem>
        <ListItem mt='2.4rem'>
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
          <Input
            type='text'
            bg='lightGray'
            border='none'
            h='4.8rem'
            w='100%'
            borderRadius='0.5rem'
            px='1.6rem'
            fontSize='1.4rem'
            lineHeight='1.9rem'
            color='darkBlue'
          />
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
            bg='lightGray'
            border='none'
            h='12rem'
            w='100%'
            borderRadius='0.5rem'
            p='1rem 1.6rem'
            fontSize='1.4rem'
            lineHeight='1.9rem'
            color='darkBlue'
            resize='none'
          />
        </ListItem>
      </List>
      <ButtonsArea />
    </form>
  );
}
