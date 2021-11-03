import { useRef, useState } from "react";
import Link from "next/link";

import { Button } from "@chakra-ui/button";
import { Flex, Heading, Text } from "@chakra-ui/layout";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/modal";

export default function ButtonsArea({}) {
  const [cancelModal, setCancelModal] = useState(false);
  const cancelBtnRef = useRef();

  return (
    <Flex
      flexDirection={["column", "row"]}
      justifyContent={[null, "flex-end"]}
      mt='4rem'
    >
      <Button
        type='submit'
        bg='purple'
        py={["0.81em", "0.9em"]}
        mr={[null, "1.6rem"]}
        fontSize='1.4rem'
        lineHeight='1.9rem'
        fontWeight='bold'
        borderRadius='1rem'
        color='white'
        w={["100%", "14.4rem"]}
        h='unset'
        textAlign='center'
        transition='filter 0.2s ease'
        _hover={{ textDecoration: "none", filter: "brightness(1.15)" }}
      >
        Add Feedback
      </Button>
      <Button
        type='button'
        bg='darkGray'
        py={["0.81em", "0.9em"]}
        fontSize='1.4rem'
        lineHeight='1.9rem'
        fontWeight='bold'
        borderRadius='1rem'
        color='white'
        w={["100%", "9.3rem"]}
        h='unset'
        textAlign='center'
        transition='filter 0.2s ease'
        _hover={{ textDecoration: "none", filter: "brightness(1.15)" }}
        mt={["1.6rem", "0"]}
        onClick={() => setCancelModal(true)}
      >
        Cancel
      </Button>
      <AlertDialog
        isOpen={cancelModal}
        leastDestructiveRef={cancelBtnRef}
        onClose={() => setCancelModal(true)}
      >
        <AlertDialogOverlay>
          <AlertDialogContent
            top='50%'
            transform='translateY(-50%) !important'
            m='0 2.4rem'
            w='100%'
            maxW='390px'
            p={["1.6rem 1rem", "2rem 1.2rem"]}
            borderRadius='1rem'
          >
            <AlertDialogHeader>
              <Heading as='h3' fontSize='1.9rem'>
                Undo Feedback
              </Heading>
            </AlertDialogHeader>
            <AlertDialogBody>
              <Text fontSize={["1.5rem", "1.7rem"]}>
                Are you sure? You can&apos;t undo this action afterwards.
              </Text>
            </AlertDialogBody>
            <AlertDialogFooter>
              <Button
                ref={cancelBtnRef}
                onClick={() => setCancelModal(false)}
                fontSize='1.6rem'
                py='1.2em'
                width='10rem'
                borderRadius='1rem'
                bg='lightGray'
                transition='filter 0.2s ease'
                _hover={{ filter: "brightness(0.8)" }}
              >
                Cancel
              </Button>
              <Link href='/' passHref>
                <Button
                  as='a'
                  colorScheme='red'
                  ml={3}
                  fontSize='1.6rem'
                  py='1.2em'
                  width='10rem'
                  borderRadius='1rem'
                >
                  Delete
                </Button>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
}
