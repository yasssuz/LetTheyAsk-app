import { Box } from "@chakra-ui/layout";

export default function Overlay({ show }) {
  return (
    <Box
      position='fixed'
      top='0'
      bottom='0'
      right='0'
      left='0'
      bg='rgba(0, 0, 0, 0.5)'
      zIndex='1000'
      visibility={show ? "visible" : "hidden"}
      opacity={show ? "1" : "0"}
      transition='opacity 0.45s ease, visibility 0.45s ease'
    />
  );
}
