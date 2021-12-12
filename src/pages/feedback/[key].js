import { ref, onValue } from "@firebase/database";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import GoBack from "../../components/shared/GoBack";
import { database } from "../../services/firebase.config";
import { Box, Flex, Heading, List, ListItem, Text } from "@chakra-ui/layout";
import Feedback from "../../components/shared/Feedback";
// import { Image } from "@chakra-ui/image";
import { Button } from "@chakra-ui/button";
import Image from "next/image";
import FeedbackSkeleton from "../../components/skeletons/FeedbackSkeleton";
import Comment from "../../components/feedback/Comment";
import AddComment from "../../components/feedback/AddComment";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState(null);
  const comments = [
    {
      avatar:
        "https://lh3.googleusercontent.com/a-/AOh14GhiHC87dOQlrd0SdTvSCfa4Zf9BUYjJ45vkI_sO=s96-c",
      name: "Elijah Moss",
      comment:
        "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
    },
  ];
  const router = useRouter();
  const { key } = router.query;

  useEffect(() => {
    const starCountRef = ref(database, `feedbacks/${key}`);

    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      setFeedback(data);
    });
  }, [key]);

  return (
    <Box as='main' p={["2.4rem", "5.6rem 4rem"]} maxW='730px' m='0 auto'>
      <Flex as='section'>
        <GoBack />
      </Flex>
      <Box as='section' mt='2.4rem'>
        {feedback ? (
          <Feedback data={feedback} heading='h1' />
        ) : (
          <FeedbackSkeleton />
        )}
      </Box>
      <Box
        as='section'
        mt='2.4rem'
        p={["2.4rem", "2.4rem 3.4rem"]}
        bg='white'
        borderRadius='1rem'
      >
        <Heading as='h2' color='darkBlue' fontSize='1.8rem' lineHeight='2.6rem'>
          4 Comments
        </Heading>
        <List>
          {comments.map((comment, index) => (
            <Fragment key={index}>
              <Comment data={comment} />
            </Fragment>
          ))}
        </List>
      </Box>
      <AddComment feedbackKey={key} />
    </Box>
  );
}
