import type { NextApiResponse } from "next";

const errorResponse = (
  res: NextApiResponse,
  status = 404,
  message = "Resource cannot be found"
) => res.status(status).json({ status, message });

export { errorResponse };
