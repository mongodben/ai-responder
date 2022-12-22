import type { NextApiRequest, NextApiResponse } from "next";
import { openAIClient } from "../../api-helpers/openai-client";
import { errorResponse } from "../../api-helpers/errors";

const input =
  "When Beatriz returned to her homeland of Brazil, she brought with her magical stories, spells and potions to share with her people. She began visiting villages and teaching the locals about her magical powers and how to use it for good. Her magical tales spread like wildfire throughout the country and soon she was well known for her strong magical gifts and kind heart. People from all over the world came to learn from her, eager to experience her wonderful magical powers. Eventually, Beatriz was viewed as a true national hero, with the people of Brazil loving her dearly and honoring her as a godlike figure.";

const output =
  "When Beatriz returned to her homeland of Brazil, she brought with her magical stories, spells, and potions to share with her people. She began visiting villages and teaching the locals about her magical powers and how to use it for good. Her magical tales spread like wildfire throughout the country and she became well known for her strong magical gifts and kind heart. Her fame grew in distant lands as well.\nPeople from all over the world came to learn from her. Eventually, Beatriz had become a true hero for the people of Brazil and was considered a godlike figure.";
const instruction =
  "Rewrite paragraph to have Beatriz turn evil when she returns to Brazil";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const { input, instruction } = req.body;
    const edit = await openAIClient.editResponse(input, instruction);

    return res.status(200).json({ edit });
  } else {
    return errorResponse(res);
  }
}
