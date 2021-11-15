import { Grid, GridItem, Text, Box } from "@chakra-ui/layout";
import { Skeleton, SkeletonCircle, SkeletonText } from "@chakra-ui/skeleton";

export default function FeedbackSkeleton() {
  return (
    <Grid
      p={["2.4rem", "2.8rem 3.2rem"]}
      templateColumns={["1fr 1fr", "auto 1fr auto"]}
      bg='white'
      borderRadius='1rem'
      m={["1.6rem", "2.4rem 0"]}
    >
      <GridItem
        colStart={[1, 2]}
        colEnd={[3, null]}
        rowStart={[null, 1]}
        mb={["1.6rem", "0"]}
      >
        <Skeleton
          startColor='#A0AEC0'
          h='25px'
          width='50%'
          mb='1rem'
          noOfLines={4}
        />
        <SkeletonText startColor='#A0AEC0' noOfLines={4} />
        <Skeleton startColor='#A0AEC0' h='3rem' w='100px' mt='1rem' />
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
        <SkeletonCircle startColor='#A0AEC0' size='10' />
      </GridItem>
      <GridItem
        display='flex'
        alignItems='center'
        justifyContent='flex-end'
        colStart={[null, 3]}
        ml={[null, "2.5rem"]}
      >
        <Skeleton
          src='/assets/commentary.svg'
          alt='commentary'
          w='20px'
          h='20px'
          startColor='#A0AEC0'
        />
      </GridItem>
    </Grid>
  );
}
