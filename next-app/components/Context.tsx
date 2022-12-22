import React, { Dispatch, SetStateAction } from "react";

type ContextSchema = {
  story: string;
  setStory: Dispatch<SetStateAction<string>>;
  addition: string;
  setAddition: Dispatch<SetStateAction<string>>;
};
const Context = React.createContext<ContextSchema | null>(null);

export { Context };
export type { ContextSchema };
