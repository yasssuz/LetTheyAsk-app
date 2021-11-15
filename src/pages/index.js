import { useEffect, useState } from "react";

import { database } from "../services/firebase.config";
import { ref, get, child } from "@firebase/database";

import { Box, Grid, List } from "@chakra-ui/layout";

import Header from "../components/home/Header";
import SideArea from "../components/home/SideArea";
import Feedback from "../components/home/Feedback";
import NotFoundBox from "../components/home/NotFoundBox";
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
        array.push({ key: snapshot.key, ...snapshot.val() });
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
                    <Feedback
                      key={feedback.key}
                      data={feedback}
                      shortDetail={true}
                    />
                  ))}
                </List>
              ) : (
                <NotFoundBox />
              )}
            </>
          )}
        </Box>
      </Grid>
    </div>
  );
}
