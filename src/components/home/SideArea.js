import { Box, Flex } from "@chakra-ui/layout";
import { useState } from "react";

import BoardSquare from "./BoardSquare";
import FilterSquare from "./FilterSquare";
import RoadmapSquare from "./RoadmapSquare";

export default function SideArea() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Flex as='aside' h='100vh'>
      <BoardSquare openMenu={setMenuOpen} menuOpen={menuOpen} />
      <Box
        className={`${menuOpen && "open"}`}
        position='absolute'
        top='7.2rem'
        bottom='0'
        right='-100%'
        w='72%'
        minW='271px'
        bg='gray'
        p='2.4rem'
        transition='right 0.25s ease-out'
        sx={{
          "&.open": {
            right: 0,
          },
        }}
      >
        <FilterSquare />
        <RoadmapSquare />
      </Box>
    </Flex>
  );
}
