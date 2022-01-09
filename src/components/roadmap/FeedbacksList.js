import { Heading, Box, Text, List, ListItem } from "@chakra-ui/layout";

export default function FeedbacksList({ title, description, feedbacks }) {
  return (
    <Box as='section'>
      <Heading
        fontSize='1.8rem'
        lineHeight='2.6rem'
        fontWeight='bold'
        color='darkBlue'
      >
        {title}
      </Heading>
      <Text fontSize='1.4rem' lineHeight='1.9rem' color='semiGray' mt='0.4rem'>
        {description}
      </Text>
      <List>
        <ListItem>
          <Box as='article'>hi</Box>
        </ListItem>
      </List>
    </Box>
  );
}
