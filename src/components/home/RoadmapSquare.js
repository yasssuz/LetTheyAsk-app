import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/layout";
import Link from "next/link";

export default function RoadmapSquare() {
  return (
    <Box
      as='section'
      mt='1.9rem'
      bg='white'
      borderRadius='1rem'
      p='2.4rem 2.2rem'
    >
      <Flex alignItems='center' justifyContent='space-between'>
        <Heading color='darkBlue' fontSize='1.8rem' lineHeight='2.6rem'>
          Roadmap
        </Heading>
        <Link href='/roadmap' passHref>
          <Text
            color='blue'
            textDecoration='underline'
            fontWeight='600'
            fontSize='1.4rem'
            lineHeight='1.4rem'
          >
            View
          </Text>
        </Link>
      </Flex>
      <List mt='2.2rem'>
        <ListItem display='flex' alignItems='center'>
          <Box w='8px' h='8px' borderRadius='50%' bg='orange' mr='1rem' />
          <Text as='span' fontSize='1.6rem' lineHeight='2.3rem'>
            Planned
          </Text>
          <Text
            as='strong'
            ml='auto'
            color='bg'
            fontSize='1.6rem'
            lineHeight='2.3rem'
          >
            0
          </Text>
        </ListItem>
        <ListItem display='flex' alignItems='center' mt='0.8rem'>
          <Box w='8px' h='8px' borderRadius='50%' bg='purple' mr='1rem' />
          <Text as='span' fontSize='1.6rem' lineHeight='2.3rem'>
            In-Progress
          </Text>
          <Text
            as='strong'
            ml='auto'
            color='bg'
            fontSize='1.6rem'
            lineHeight='2.3rem'
          >
            0
          </Text>
        </ListItem>
        <ListItem display='flex' alignItems='center' mt='0.8rem'>
          <Box w='8px' h='8px' borderRadius='50%' bg='cyan' mr='1rem' />
          <Text as='span' fontSize='1.6rem' lineHeight='2.3rem'>
            Live
          </Text>
          <Text
            as='strong'
            ml='auto'
            color='bg'
            fontSize='1.6rem'
            lineHeight='2.3rem'
          >
            0
          </Text>
        </ListItem>
      </List>
    </Box>
  );
}
