import { Fragment, useEffect, useState } from "react";
import Link from "next/link";

import { database } from "../../services/firebase.config";
import { ref, get, child, onValue } from "@firebase/database";
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

        if (getCommentsAmount(a.comments) < getCommentsAmount(b.comments)) {
          return -1;
        }

        return 0;
      });
    }

    return sortedData;
  }

  useEffect(() => {
    const feedbacksRef = ref(database, `feedbacks`);
    const dbRef = ref(database);

    onValue(feedbacksRef, snapshot => {
      setFeedbacks(snapshot.val());

      get(child(dbRef, `feedbacks`)).then(res => {
        let amountOfSnaps = 0;
        const feedbacksArray = [];

        res.forEach(snapshot => {
          amountOfSnaps++;
          feedbacksArray.push({ key: snapshot.key, ...snapshot.val() });
        });

        setSuggestionsAmount(amountOfSnaps);
        setFeedbacks(feedbacksArray);
      });

      setLoading(false);
    });
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
              {sortedFeedbacks().map(feedback => (
                <Fragment key={feedback.key}>
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
        </Fragment>
      )}
    </Box>
  );
}
