import BaseError from "./base.error";
import { StatusCodes } from "http-status-codes";

export class InternalServerError extends BaseError {
  constructor(details) {
    super("InternalServerError", 
    StatusCodes.INTERNAL_SERVER_ERROR, 
    "Internal Server Error Occurred",
    details);
  }
}


