import * as React from "react";
import Typography from "@mui/material/Typography";

interface SubtitleProps {
  children: string;
}

const PageSectionSubtitle = ({ children }: SubtitleProps) => {
  return (
    <Typography paragraph variant="subtitle2">
      {children}
    </Typography>
  );
};

export { PageSectionSubtitle };
