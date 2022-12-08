import { error } from "./logger-util";
import { badRequest, serverError, notFound } from "./response-util";

const CommonError = (req: any, err: any, res: any) => {
  error(`${req.method} ${req.originalUrl}`, err.message);

  if (/must not be/.test(err.message) || /must be/.test(err.message))
    return res.json(badRequest(err.message));
  if (/not found/.test(err.message)) return res.json(notFound(err.message));

  return res.json(serverError(err.message));
};

export default CommonError;
