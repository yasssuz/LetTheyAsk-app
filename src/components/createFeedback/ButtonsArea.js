import { useRef, useState } from "react";
import useAuth from "../../hooks/useAuth";
import Link from "next/link";

import { Flex, Heading, Text } from "@chakra-ui/layout";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/modal";
import { CustomButton } from "../shared/Buttons";

export default function ButtonsArea({}) {
  const { user, handleSignIn } = useAuth();
  const [cancelModal, setCancelModal] = useState(false);
  const cancelBtnRef = useRef();

  return (
    <Flex
      flexDirection={["column", "row"]}
      justifyContent={[null, "flex-end"]}
      mt='4rem'
    >
      {!user ? (
        <CustomButton
          type='button'
          onClick={handleSignIn}
          bg='red'
          w={["100%", "10rem"]}
        >
          Log In
        </CustomButton>
      ) : (
        <>
          <CustomButton
            type='submit'
            w={["100%", "14.4rem"]}
            bg='purple'
            mr={[null, "1.6rem"]}
            mt=''
          >
            Add Feedback
          </CustomButton>
          <CustomButton
            type='button'
            onClick={() => setCancelModal(true)}
            bg='darkGray'
            w={["100%", "9.3rem"]}
            mt={["1.6rem", "0"]}
          >
            Cancel
          </CustomButton>
        </>
      )}
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
              <CustomButton
                ref={cancelBtnRef}
                onClick={() => setCancelModal(false)}
                py='0.8em'
                color='black'
                width='10rem'
                bg='lightGray'
                _hover={{ filter: "brightness(0.75)" }}
              >
                Cancel
              </CustomButton>
              <Link href='/' passHref>
                <CustomButton
                  as='a'
                  colorScheme='red'
                  ml={3}
                  py='0.8em'
                  width='10rem'
                >
                  Delete
                </CustomButton>
              </Link>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </Flex>
  );
}
