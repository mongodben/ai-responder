import React, { useContext, useEffect, useState } from "react";
import { PageSectionTitle } from "./PageSectionTitle";
import { Button, TextareaAutosize } from "@mui/material";
import { PageSectionSubtitle } from "./PageSectionSubtitle";
import { Context, ContextSchema } from "./Context";
import { RemixCompletion } from "./RemixCompletion";
import { Container } from "@mui/system";
import { HorizontalRule } from "@mui/icons-material";

const Completion = () => {
  const { story, addition, setStory } = useContext(Context) as ContextSchema;
  const [additionDraft, setAdditionDraft] = useState("");

  useEffect(() => {
    const trimmed = addition.trim();
    setAdditionDraft(trimmed);
  }, [addition]);

  const handleDraftChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    setAdditionDraft(e.target.value);
  };

  const handleStoryAddition = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    const newStory = story.trim() + "\n\n" + additionDraft;
    setStory(newStory);
    setAdditionDraft("");
  };

  return (
    <section>
      <PageSectionTitle>What happens Next?</PageSectionTitle>
      <form>
        <PageSectionSubtitle>
          {addition === ""
            ? "Click 'Generate Next Paragraph' below to have StoryTime draft the next paragraph for you."
            : "Here's what StoryTime thinks should happen next."}
        </PageSectionSubtitle>

        <TextareaAutosize
          minRows={3}
          style={{ width: "100%" }}
          value={additionDraft}
          onChange={handleDraftChange}
        />
        <Container sx={{ pb: 2 }}>
          <Button onClick={handleStoryAddition}>Add to Story</Button>
        </Container>
        {/* TODO: add functionality to edit response */}
        <RemixCompletion additionDraft={additionDraft} />
      </form>
    </section>
  );
};

export { Completion };
