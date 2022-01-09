import { useState } from "react";

import { Box } from "@chakra-ui/layout";

import FeedbacksList from "./FeedbacksList";
import Switcher from "./Switcher";

export default function RoadmapBoard({ feedbacks }) {
  const [mode, setMode] = useState("Planned");

  return (
    <Box as='section' maxW='1240px' m='0 auto' p={["0 2.4rem", "0 4rem"]}>
      <Box display={[null, "none"]}>
        <Switcher mode={mode} setMode={setMode} />
        {(mode === "Planned" && (
          <FeedbacksList
            title='Planned'
            description='Ideas prioritized for research'
            feedbacks={[]}
          />
        )) ||
          (mode === "In-Progress" && (
            <FeedbacksList
              title='In-Progress'
              description='Features currently being developed'
              feedbacks={[]}
            />
          )) || (
            <FeedbacksList
              title='Live'
              description='Released features'
              feedbacks={[]}
            />
          )}
      </Box>
      <Box display={["none", "block"]}>
        <FeedbacksList
          title='Planned'
          description='Ideas prioritized for research'
          feedbacks={[]}
        />
        <FeedbacksList
          title='In-Progress'
          description='Features currently being developed'
          feedbacks={[]}
        />
        <FeedbacksList
          title='Live'
          description='Released features'
          feedbacks={[]}
        />
      </Box>
    </Box>
  );
}
