import { useRef, useState } from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useForm, setValue } from "react-hook-form";
import { CustomButton } from "../shared/Buttons";
import { push, ref, set } from "firebase/database";
import { database } from "../../services/firebase.config";
import useAuth from "../../hooks/useAuth";

export default function AddComment({ feedbackKey }) {
  const [commentCharacters, setCommentCharacters] = useState("");
  const { user, handleSignIn } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  async function onSubmit(data) {
    const feedbackRef = ref(database, `/feedbacks/${feedbackKey}/comments`);
    const addComment = await push(feedbackRef);
    const comment = {
      comment: data.comment,
      user,
    };

    try {
      await set(addComment, comment);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Box
      as='section'
      mt='2.4rem'
      p={["2.4rem", "2.4rem 3.2rem"]}
      bg='white'
      borderRadius='1rem'
    >
      <Heading color='darkBlue' fontSize='1.8rem' lineHeight='2.6rem'>
        Add Comment
      </Heading>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Textarea
          height='8rem'
          resize='none'
          borderRadius='0.5rem'
          border='none'
          bg='lightGray'
          placeholder='Type your comment here...'
          mt='2.4rem'
          fontSize='1.6rem'
          p='1.6rem'
          maxLength='250'
          className={errors.comment ? "error" : null}
          {...register("comment", { required: true, pattern: /^[a-zA-Z0-9]/ })}
          onChange={e => {
            setCommentCharacters(e.target.value);
          }}
          sx={{
            "&.error": {
              outline: "1px red solid",
            },
          }}
        />
        <Flex mt='1.7rem' alignItems='center' justifyContent='space-between'>
          <Text
            fontSize={["1.3rem", "1.5rem"]}
            lineHeight='1.9rem'
            color='semiGray'
          >
            {250 - commentCharacters.length} Characters left
          </Text>
          {user ? (
            <CustomButton
              bg='purple'
              width={["11.9rem", "14.2rem"]}
              type='submit'
            >
              Post Comment
            </CustomButton>
          ) : (
            <CustomButton
              type='button'
              onClick={handleSignIn}
              bg='red'
              w={["100%", "10rem"]}
            >
              Log In
            </CustomButton>
          )}
        </Flex>
      </form>
    </Box>
  );
}
