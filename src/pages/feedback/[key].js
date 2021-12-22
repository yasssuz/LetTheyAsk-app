import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";

import { ref, onValue, get, child } from "@firebase/database";
import { database } from "../../services/firebase.config";

import { Box, Flex, Heading, List } from "@chakra-ui/layout";

import GoBack from "../../components/shared/GoBack";
import Feedback from "../../components/shared/Feedback";
import FeedbackSkeleton from "../../components/skeletons/FeedbackSkeleton";
import Comment from "../../components/feedback/Comment";
import AddComment from "../../components/feedback/AddComment";
import NotFoundBox from "../../components/shared/NotFoundBox";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState(null);
  const [comments, setComments] = useState([]);

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
      setFeedback(snapshot.val());

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
    <Box as='main' p={["2.4rem", "5.6rem 4rem"]} maxW='800px' m='0 auto'>
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
        <List>
          {comments.length > 0 ? (
            <>
              <Heading
                as='h2'
                color='darkBlue'
                fontSize='2rem'
                lineHeight='2.6rem'
              >
                {getCommentsAmount(comments)} Comments
              </Heading>
              {comments.map(comment => (
                <Fragment key={comment.key}>
                  <Comment data={comment} />
                </Fragment>
              ))}
            </>
          ) : (
            <NotFoundBox
              title='There is no comment yet.'
              description='Got a question or idea? Be the first one to comment!'
              minHeight={["28rem", "35rem"]}
            />
          )}
        </List>
      </Box>
      <AddComment feedbackKey={key} />
    </Box>
  );
}
