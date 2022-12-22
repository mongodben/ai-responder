// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { openAIClient } from "../../api-helpers/openai-client";
import { errorResponse } from "../../api-helpers/errors";

// TODO: delete these later
const story = `Once upon a time there was a American boy who met a magical Brazilian princess named Ana Beatriz. The boy, named Benjamin, was amazed to find that Ana Beatriz had an astonishing magical power. She could make anything she wished for come true, with just a wave of her hand. Whenever she and Billy were together, the most incredible things seemed to happen. One time, she even conjured up a beautiful rainbow over the lake where they were having a picnic. Billy was so fascinated by Ana Beatriz's powers and all the wondrous things she could do, that he could hardly wait to spend time with her every day.

One day, while they were out walking in the meadows, Ana Beatriz asked Benjamin if he'd like to receive a magical gift. He was astonished by the offer and quickly accepted.

The princess waved her hand, and suddenly Benjamin found himself wearing a sparkling golden crown. He was overjoyed with his gift, as it sparkled in the sunlight and flew around atop his head. From that day on, every time Benjamin needed help, he would simply close his eyes and imagine being crowned by Ana Beatriz. He'd feel her magical power and it would give him strength and courage to face anything. With the power of the magical crown, all his dreams seemed to come true.

The two of them continued to share magical adventures for months, until finally one day, Ana Beatriz said it was time for her to go home. But as a parting gift, she left Benjamin with a never-ending supply of magical adventures, so he could keep on having fun. He thanked her profusely, and promised to never forget her or their time together. And so the magical Brazilian princess went back to her homeland and Benjamin went on to live his life with his magical crown.`;
const nextPromptContent =
  "Talk about what Beatriz did when she returned to Brazil.";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { story, nextPromptContent } = req.body;
  if (req.method === "POST") {
    const completion = await openAIClient.respond(story, nextPromptContent);

    return res.status(200).json({ completion });
  } else {
    return errorResponse(res);
  }
}
