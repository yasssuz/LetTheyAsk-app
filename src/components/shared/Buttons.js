import { Button } from "@chakra-ui/button";

export function CustomButton(props) {
  return (
    <Button
      py={["0.81em", "0.9em"]}
      fontSize={["1.4rem", "1.5rem"]}
      lineHeight={["1.9rem", "2.1rem"]}
      fontWeight='bold'
      borderRadius='1rem'
      textAlign='center'
      transition='filter 0.2s ease'
      h='unset'
      color='white'
      _hover={{ textDecoration: "none", filter: "brightness(1.2)" }}
      {...props}
    >
      {props.children}
    </Button>
  );
}
