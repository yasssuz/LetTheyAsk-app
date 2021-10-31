import { useState } from "react";

import { Box, Flex } from "@chakra-ui/layout";

import BoardSquare from "./BoardSquare";
import FilterSquare from "./FilterSquare";
import RoadmapSquare from "./RoadmapSquare";
import Overlay from "../shared/overlay";

export default function SideArea() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Overlay show={menuOpen} />
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
          zIndex='1500'
          transition='right 0.45s cubic-bezier(0.45, 0.05, 0.55, 0.95)'
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
    </>
  );
}
