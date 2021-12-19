import { useEffect, useState } from "react";

import { database } from "../services/firebase.config";
import { ref, get, child } from "@firebase/database";

import { Grid } from "@chakra-ui/layout";

import SideArea from "../components/home/SideArea";
import MainArea from "../components/home/MainArea";

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
    <Grid
      as='main'
      templateColumns={[null, null, "25.5rem auto"]}
      w='100%'
      p={[null, "5.6rem 3.9rem", "9.4rem 4rem"]}
      maxW='1240px'
      m='0 auto'
      gap={[null, "4rem", "3rem"]}
      minH='100vh'
    >
      <SideArea />
      <MainArea
        feedbacks={feedbacks}
        suggestionsAmount={suggestionsAmount}
        loading={loading}
      />
    </Grid>
  );
}
