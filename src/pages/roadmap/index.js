import { useEffect, useState } from "react";

import { database } from "../../services/firebase.config";
import { ref, onValue } from "@firebase/database";

import { Box } from "@chakra-ui/layout";

import Header from "../../components/roadmap/Header";
import RoadmapBoard from "../../components/roadmap/RoadmapBoard";
import BaseLayout from "../../components/shared/BaseLayout";

export default function Roadmap() {
  const [roadmap, setRoadmap] = useState(null);

  useEffect(() => {
    const feedbacksRef = ref(database, `roadmap`);

    onValue(feedbacksRef, snapshot => {
      setRoadmap(snapshot.val());
    });
  }, []);

  useEffect(() => {
    console.log(roadmap);
  }, [roadmap]);

  return (
    <BaseLayout>
      <Box as='main' minH='100vh' mt={[null, "5.6rem"]}>
        <Header />
        <RoadmapBoard feedbacks={[]} />
      </Box>
    </BaseLayout>
  );
}
