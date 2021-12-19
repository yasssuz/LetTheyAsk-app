import { useEffect, useState } from "react";
import Link from "next/link";

import { database } from "../services/firebase.config";
import { ref, get, child } from "@firebase/database";

import { Box, Grid, List, ListItem } from "@chakra-ui/layout";

import Header from "../components/home/Header";
import SideArea from "../components/home/SideArea";
import Feedback from "../components/shared/Feedback";
import NotFoundBox from "../components/shared/NotFoundBox";
import FeedbackSkeleton from "../components/skeletons/FeedbackSkeleton";

export default function Home() {
  const [feedbacks, setFeedbacks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggestionsAmount, setSuggestionsAmount] = useState(0);

  useEffect(() => {
    async function fetch() {
      const array = [];
      const dbRef = ref(database);
      const res = await get(child(dbRef, "feedbacks"));
      let amountOfSnaps = 0;

      res.forEach(snapshot => {
        amountOfSnaps++;
        const snapshotCopy = { ...snapshot.val(), key: snapshot.key };
        delete snapshotCopy.comments;
        array.push(snapshotCopy);
      });

      setSuggestionsAmount(amountOfSnaps);
      setFeedbacks(array);
      setLoading(false);
    }

    fetch();
  }, []);

  return (
    <div style={{ minHeight: "100vh" }}>
      <Grid
        as='main'
        templateColumns={[null, null, "25.5rem auto"]}
        w='100%'
        p={[null, "5.6rem 3.9rem", "9.4rem 4rem"]}
        maxW='1240px'
        m='0 auto'
        gap={[null, "4rem", "3rem"]}
      >
        <SideArea />
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
      </Grid>
    </div>
  );
}
