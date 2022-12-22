import React, { useContext, useEffect, useState } from "react";
import { PageSectionTitle } from "./PageSectionTitle";
import { Button, TextareaAutosize } from "@mui/material";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { Context, ContextSchema } from "./Context";
import axios from "axios";

const Story = () => {
  const { story, setStory, setAddition } = useContext(Context) as ContextSchema;
  const [storyDraft, setStoryDraft] = useState(story);

  useEffect(() => {
    console.log(story);
    setStoryDraft(story);
  }, [story]);

  const handleDraftChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setStoryDraft(e.target.value);
  };
  const handleStorySubmission = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("DRAFT IS::\n\n" + storyDraft);
    const {
      data: { completion },
    } = await axios.post(
      "/api/respond?secret=" + process.env.NEXT_PUBLIC_SECRET,
      {
        story: storyDraft,
      }
    );
    console.log("COMPLETION IS::" + completion);
    setStory(storyDraft);
    setAddition(completion);
  };

  return (
    <section>
      <PageSectionTitle>Your Story</PageSectionTitle>
      <form>
        <PageSectionSubtitle>
          {story === "" ? "Start your story!" : "Keep writing!"}
        </PageSectionSubtitle>
        <Button onClick={handleStorySubmission}>Generate Next Paragraph</Button>

        <TextareaAutosize
          minRows={15}
          style={{ width: "100%" }}
          value={storyDraft}
          onChange={handleDraftChange}
        />
      </form>
    </section>
  );
};

export { Story };
