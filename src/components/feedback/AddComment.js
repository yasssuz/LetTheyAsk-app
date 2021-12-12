import { useState } from "react";
import { Box, Heading, Flex, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useForm } from "react-hook-form";
import { CustomButton } from "../shared/Buttons";

export default function AddComment({ feedbackKey }) {
  const [commentCharacters, setCommentCharacters] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  function onSubmit(data) {
    console.log(data);
  }

  console.log(errors.comment);

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
          fontSize='1.4rem'
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
          <Text>{250 - commentCharacters.length} Characters left</Text>
          <CustomButton bg='purple' width='11.9rem' type='submit'>
            Post Comment
          </CustomButton>
        </Flex>
      </form>
    </Box>
  );
}
