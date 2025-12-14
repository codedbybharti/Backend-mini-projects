import { StatusCodes } from "http-status-codes";
import NotImplementedError from "../errors/notimplemented.error.js";
import { ProblemService } from "../services/index.js";
import { ProblemRepository } from "../repositories/problem.repository.js";

const problemService = new ProblemService(new ProblemRepository());

export const addProblem = async (req, res, next) => {
  try {
    console.log("Incoming request body", req.body);
    const newproblem = await problemService.createProblem(req.body);
    return res.status(StatusCodes.CREATED).json({
      success: true,
      message: "Successfully created a new problem",
      error: [],
      data: newproblem,
    });
  } catch (error) {
    next(error);
  }
};
export async function getProblem(req, res, next) {
  try {
    const problem = await problemService.getProblem(req.params.id);
    return res.status(StatusCodes.OK).json({
      success: true,
      error: {},
      message: "Successfully fetched a problem",
      data: problem,
    });
  } catch (error) {
    next(error);
  }
}

export async function getProblems(req, res, next) {
  try {
    const response = await problemService.getAllProblems();
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Successfully fetched all the problems",
      error: {},
      data: response,
    });
  } catch (error) {
    next(error);
  }
}

export const updateProblemById = (req, res, next) => {
  try {
    throw new NotImplementedError("updateProblemById", {
      reason: "Functionality is pending...",
    });
  } catch (error) {
    next(error);
  }
};

export const deleteProblemById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await problemService.deleteProblemById(id);
    return res.status(StatusCodes.OK).json({
      success: true,
      message: "Problem deleted successfully",
      error: {},
      data: result,
    });
  } catch (error) {
    next(error);
  }
};
