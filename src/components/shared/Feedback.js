import { Image } from "@chakra-ui/image";
import { Box, Heading, Text, GridItem, Grid } from "@chakra-ui/layout";

export default function Feedback({ data, shortDetail, as, heading }) {
  function getShortDetail(detail) {
    if (detail.length > 75) {
      return detail.substring(0, 75) + "...";
    }

    return detail;
  }

  function getCommentsAmount(comments) {
    let commentsAmount = 0;
    const commentsKeys = comments && Object.keys(comments);

    commentsKeys && commentsKeys.forEach(() => commentsAmount++);
    return commentsAmount;
  }

  return (
    <Grid
      bg='white'
      borderRadius='1rem'
      as={as}
      display='grid'
      p={["2.4rem", "2.8rem 3.2rem"]}
      templateColumns={["1fr 1fr", "auto 1fr auto"]}
    >
      <GridItem
        colStart={[1, 2]}
        colEnd={[3, null]}
        rowStart={[null, 1]}
        mb={["1.6rem", "0"]}
      >
        <Heading
          as={heading}
          fontSize={["1.5rem", "1.8rem"]}
          lineHeight={["1.9rem", "2.6rem"]}
          color='darkBlue'
        >
          {data.title}
        </Heading>
        <Text
          fontSize={["1.4rem", "1.6rem"]}
          lineHeight={["1.9rem", "2.3rem"]}
          color='semiGray'
          m={["0.9rem 0", "0.4rem 0 1.2rem"]}
        >
          {shortDetail ? getShortDetail(data.detail) : data.detail}
        </Text>
        <Box
          color='blue'
          fontWeight='bold'
          fontSize='1.4rem'
          lineHeight='2rem'
          borderRadius='1rem'
          bg='gray'
          display='grid'
          placeContent='center'
          h='3rem'
          w='fit-content'
          px={["1.6rem"]}
        >
          {data.category}
        </Box>
      </GridItem>
      <GridItem
        display='flex'
        borderRadius='1rem'
        bg='gray'
        w={["7rem", "4rem"]}
        h={["3.2rem", "5.3rem"]}
        alignItems='center'
        justifyContent='center'
        colStart={[null, 1]}
        flexDirection={[null, "column"]}
        mr={[null, "4.3rem"]}
      >
        <Image
          src='/assets/arrow-blue.svg'
          alt='arrow'
          transform='rotate(180deg)'
          w='9px'
          h='9px'
          mr={["1rem", "0"]}
          mb={[null, "0.5rem"]}
        />
        <Text as='b' fontSize='1.4rem' lineHeight='1.9rem' color='darkBlue'>
          {data.upVotes}
        </Text>
      </GridItem>
      <GridItem
        display='flex'
        alignItems='center'
        justifyContent='flex-end'
        colStart={[null, 3]}
        ml={[null, "2.5rem"]}
      >
        <Image
          src='/assets/commentary.svg'
          alt='commentary'
          w='18px'
          h='16px'
        />
        <Text
          as='b'
          fontSize={["1.4rem", "1.6rem"]}
          lineHeight={["1.9rem", "2.3rem"]}
          color='darkBlue'
          ml='1rem'
        >
          {getCommentsAmount(data.comments)}
        </Text>
      </GridItem>
    </Grid>
  );
}
