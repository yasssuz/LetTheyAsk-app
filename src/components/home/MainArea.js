import { useEffect, useState } from "react";
import Link from "next/link";

import { database } from "../../services/firebase.config";
import { ref, get, child } from "@firebase/database";

import { Box, List, ListItem } from "@chakra-ui/layout";

import FeedbackSkeleton from "../skeletons/FeedbackSkeleton";
import Header from "./Header";
import Feedback from "../shared/Feedback";
import NotFoundBox from "../shared/NotFoundBox";

export default function MainArea() {
  const [feedbacks, setFeedbacks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggestionsAmount, setSuggestionsAmount] = useState(0);

  useEffect(() => {
    async function fetch() {
      const feedbacksArray = [];
      const dbRef = ref(database);
      const res = await get(child(dbRef, "feedbacks"));
      let amountOfSnaps = 0;

      res.forEach(snapshot => {
        amountOfSnaps++;
        const formattedSnap = {
          ...snapshot.val(),
          key: snapshot.key,
        };
        feedbacksArray.push(formattedSnap);
      });

      setSuggestionsAmount(amountOfSnaps);
      setFeedbacks(feedbacksArray);
      setLoading(false);
    }

    fetch();
  }, []);

  return (
    <Box>
      <Header suggestions={suggestionsAmount} />
      {loading ? (
        <>
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
        </>
      ) : (
        <>
          {feedbacks && feedbacks.length > 0 ? (
            <List
              display='grid'
              gridGap='1.6rem'
              m={["3.2rem 2.4rem", "2.4rem 0"]}
            >
              {feedbacks.map(feedback => (
                <ListItem
                  key={feedback.key}
                  transition='transform 0.2s ease, color 0.2s ease'
                  _hover={{ transform: "scale(1.03)" }}
                  sx={{
                    "&:hover h3": {
                      color: "blue",
                    },
                  }}
                >
                  <Link href={`/feedback/${feedback.key}`} passHref>
                    <a>
                      <Feedback
                        heading='h3'
                        data={feedback}
                        shortDetail={true}
                      />
                    </a>
                  </Link>
                </ListItem>
              ))}
            </List>
          ) : (
            <NotFoundBox
              title='There is no feedback yet.'
              description='Got a suggestion? Found a bug that needs to be squashed? We love hearing
                about new ideas to improve our app.'
              btn={true}
            />
          )}
        </>
      )}
    </Box>
  );
}
