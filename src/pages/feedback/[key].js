import { ref, onValue, get, child } from "@firebase/database";
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
import useAuth from "../../hooks/useAuth";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState(null);
  const [comments, setComments] = useState([]);
  const { handleSignOut } = useAuth();

  const router = useRouter();
  const { key } = router.query;

  function getCommentsAmount(comments) {
    let commentsAmount = 0;
    comments.forEach(() => commentsAmount++);
    return commentsAmount;
  }

  useEffect(() => {
    const starCountRef = ref(database, `feedbacks/${key}`);
    const dbRef = ref(database);

    onValue(starCountRef, snapshot => {
      const data = snapshot.val();
      const dataCopy = { ...data };
      delete dataCopy.comments;
      setFeedback(dataCopy);

      get(child(dbRef, `feedbacks/${key}/comments`)).then(res => {
        const array = [];
        res.forEach(snapshot => {
          array.push({ key: snapshot.key, ...snapshot.val() });
        });
        setComments(array);
      });
    });
  }, [key]);

  return (
    <Box as='main' p={["2.4rem", "5.6rem 4rem"]} maxW='730px' m='0 auto'>
      <Flex as='section'>
        <button onClick={handleSignOut}>signout</button>
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
          {getCommentsAmount(comments)} Comments
        </Heading>
        <List>
          {comments.map(comment => (
            <Fragment key={comment.key}>
              <Comment data={comment} />
            </Fragment>
          ))}
        </List>
      </Box>
      <AddComment feedbackKey={key} />
    </Box>
  );
}
