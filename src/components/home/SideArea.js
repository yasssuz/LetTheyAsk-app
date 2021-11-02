import { useState } from "react";

import { Box, Flex, Grid } from "@chakra-ui/layout";

import BoardSquare from "./BoardSquare";
import FilterSquare from "./FilterSquare";
import RoadmapSquare from "./RoadmapSquare";
import Overlay from "../shared/overlay";

export default function SideArea() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Grid
      as='aside'
      h={[null, "18.1rem", "fit-content"]}
      gap={[null, "1rem", "2.4rem"]}
      templateColumns={[null, "1fr 2fr", "100%"]}
      w={[null, null, "100%"]}
    >
      <Overlay show={menuOpen} />
      <BoardSquare openMenu={setMenuOpen} menuOpen={menuOpen} />
      <Box
        className={`${menuOpen && "open"}`}
        position={["absolute", "initial"]}
        top='7.2rem'
        bottom='0'
        display={["flex", "grid"]}
        flexDirection='column'
        gridTemplateColumns={[null, "repeat(2, 1fr)", "100%"]}
        gridGap={[null, "1rem", "2.4rem"]}
        right='-100%'
        w={["72%", "auto"]}
        minW={["271px", "unset"]}
        bg={["gray", "transparent"]}
        p={["2.4rem", "0"]}
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
    </Grid>
  );
}
