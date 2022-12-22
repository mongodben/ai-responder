import React, { useState, useContext } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { Context, ContextSchema } from "./Context";
import axios from "axios";

interface RemixCompletionProps {
  additionDraft: string;
}

const RemixCompletion = ({ additionDraft }: RemixCompletionProps) => {
  const { setAddition } = useContext(Context) as ContextSchema;
  const [remixSuggestion, setRemixSuggestion] = useState("");

  const handleRemixChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setRemixSuggestion(e.target.value);
  };

  const submitRemixCompletion = async (
    e: React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (!additionDraft || !remixSuggestion) {
      return alert(
        "You must have text in the box above and below to use this feature."
      );
    }
    const {
      data: { edit },
    } = await axios.post(
      "/api/edit-response?secret=" + process.env.NEXT_PUBLIC_SECRET,
      {
        input: additionDraft,
        instruction: remixSuggestion,
      }
    );
    console.log(edit);
    setAddition(edit);

    setRemixSuggestion("");
  };
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <Typography>Remix the Completion</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Tell StoryTime how you&apos;d like to change the text above.
        </Typography>
        <form>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField
              label="Remix"
              variant="filled"
              sx={{ mr: 1, width: "75%" }}
              onChange={handleRemixChange}
            />
            <Button variant="contained" onClick={submitRemixCompletion}>
              Remix!
            </Button>
          </Box>
        </form>
      </AccordionDetails>
    </Accordion>
  );
};

export { RemixCompletion };
