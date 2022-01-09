import { Box, Divider } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

export default function Switcher({ mode, setMode }) {
  return (
    <Box
      as='section'
      height='6rem'
      width='100vw'
      marginLeft='-2.4rem'
      borderBottom='1px solid hsla(231, 20%, 63%, 0.25)'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      position='relative'
    >
      <Button
        onClick={() => setMode("Planned")}
        padding='0'
        flex='1'
        height='100%'
        fontSize='14px'
        lineHeight='19px'
        fontWeight='bold'
        color='darkBlue'
        opacity={mode === "Planned" ? "1" : "0.4"}
      >
        Planned
      </Button>
      <Button
        onClick={() => setMode("In-Progress")}
        padding='0'
        flex='1'
        height='100%'
        fontSize='14px'
        lineHeight='19px'
        fontWeight='bold'
        color='darkBlue'
        opacity={mode === "In-Progress" ? "1" : "0.4"}
      >
        In-Progress
      </Button>
      <Button
        onClick={() => setMode("Live")}
        padding='0'
        flex='1'
        height='100%'
        fontSize='14px'
        lineHeight='19px'
        fontWeight='bold'
        color='darkBlue'
        opacity={mode === "Live" ? "1" : "0.4"}
      >
        Live
      </Button>
      <Divider
        opacity='1'
        background='purple'
        width='33.333%'
        height='4px'
        position='absolute'
        bottom='0'
        right={
          mode === "Live"
            ? "0%"
            : mode === "In-Progress"
            ? "33.333%"
            : "66.666%"
        }
        transition='right 0.2s ease-in-out'
      />
    </Box>
  );
}
