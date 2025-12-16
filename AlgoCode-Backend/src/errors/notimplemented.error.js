import BaseError from "./base.error.js";
import { StatusCodes } from "http-status-codes";

export class NotImplementedError extends BaseError {
  constructor(methodName, details = {}) {
    super(
      "NotImplementedError",
      StatusCodes.NOT_IMPLEMENTED,
      `Method '${methodName}' not implemented`,
      details
    );
  }
}
