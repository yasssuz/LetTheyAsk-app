import { Button } from "@chakra-ui/button";
import { Box, Flex, Heading } from "@chakra-ui/layout";

export default function BoardSquare({ openMenu, menuOpen }) {
  return (
    <Flex
      as='section'
      h='7.2rem'
      w='100%'
      bg='radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);'
      color='white'
      px='2.4rem'
      alignItems='center'
      justifyContent='space-between'
    >
      <Box>
        <Heading
          as='h1'
          fontSize='1.6rem'
          fontWeight='bold'
          lineHeight='2.2rem'
        >
          Karim&apos;s Portfolio
        </Heading>
        <Heading
          opacity='0.75'
          fontWeight='500'
          fontSize='1.35rem'
          lineHeight='2rem'
        >
          Feedback Board
        </Heading>
      </Box>
      <Button
        className={`${menuOpen && "open"}`}
        flexDirection='column'
        p='0'
        onClick={() => openMenu(prev => !prev)}
        sx={{
          "&.open": {
            "span:first-of-type": {
              transform: "translateY(7px) rotate(45deg)",
            },
            "span:nth-of-type(2)": {
              opacity: 0,
            },
            "span:last-of-type": {
              transform: "translateY(-7px) rotate(-45deg)",
            },
          },
        }}
      >
        <Box
          as='span'
          w='20px'
          h='3px'
          display='block'
          bg='white'
          transition='transform 0.2s ease'
        ></Box>
        <Box
          as='span'
          w='20px'
          h='3px'
          display='block'
          bg='white'
          mt='4px'
          transition='opacity 0.2s ease'
        ></Box>
        <Box
          as='span'
          w='20px'
          h='3px'
          display='block'
          bg='white'
          mt='4px'
          transition='transform 0.2s ease'
        ></Box>
      </Button>
    </Flex>
  );
}
