import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

import { database } from "../../services/firebase.config";
import { ref, get, child } from "@firebase/database";
import { getCommentsAmount } from "../../utils/comments";

import { Box, List, ListItem } from "@chakra-ui/layout";

import FeedbackSkeleton from "../skeletons/FeedbackSkeleton";
import Header from "./Header";
import Feedback from "../shared/Feedback";
import NotFoundBox from "../shared/NotFoundBox";

export default function MainArea() {
  const [feedbacks, setFeedbacks] = useState(null);
  const [loading, setLoading] = useState(true);
  const [suggestionsAmount, setSuggestionsAmount] = useState(0);
  const [sort, setSort] = useState("Most Upvotes");

  function sortedFeedbacks() {
    const sortedData = [...feedbacks];

    if (sort === "Most Upvotes") {
      sortedData.sort((a, b) => {
        if (a.upVotes < b.upVotes) {
          return 1;
        }

        if (a.upVotes > b.upVotes) {
          return -1;
        }

        return 0;
      });
    }

    if (sort === "Least Upvotes") {
      sortedData.sort((a, b) => {
        if (a.upVotes > b.upVotes) {
          return 1;
        }

        if (a.upVotes < b.upVotes) {
          return -1;
        }

        return 0;
      });
    }

    if (sort === "Most Comments") {
      sortedData.sort((a, b) => {
        if (getCommentsAmount(a.comments) < getCommentsAmount(b.comments)) {
          return 1;
        }

        if (getCommentsAmount(a.comments) > getCommentsAmount(b.comments)) {
          return -1;
        }

        return 0;
      });
    }

    if (sort === "Least Comments") {
      sortedData.sort((a, b) => {
        if (getCommentsAmount(a.comments) > getCommentsAmount(b.comments)) {
          return 1;
        }
        console.log();

        if (getCommentsAmount(a.comments) < getCommentsAmount(b.comments)) {
          return -1;
        }

        return 0;
      });
    }

    return sortedData;
  }

  useEffect(() => {
    async function fetchData() {
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

    fetchData();
  }, []);

  return (
    <Box>
      <Header suggestions={suggestionsAmount} sort={sort} setSort={setSort} />
      {loading ? (
        <>
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
          <FeedbackSkeleton />
        </>
      ) : (
        <Fragment>
          {feedbacks && feedbacks.length > 0 ? (
            <List
              display='grid'
              gridGap='1.6rem'
              m={["3.2rem 2.4rem", "2.4rem 0"]}
            >
              {sortedFeedbacks().map(feedback => {
                return (
                  <Fragment key={feedback.key}>
                    <h1 key={feedback.key}>{feedback.category}</h1>
                    <ListItem
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
                  </Fragment>
                );
              })}
            </List>
          ) : (
            <NotFoundBox
              title='There is no feedback yet.'
              description='Got a suggestion? Found a bug that needs to be squashed? We love hearing
                about new ideas to improve our app.'
              btn={true}
            />
          )}
        </Fragment>
      )}
    </Box>
  );
}
