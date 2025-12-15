import { logger } from "../config/logger.config.js";
import { NotFoundError } from "../errors/notfound.error.js";
import { Problem } from "../models/problem.model.js";

export class ProblemRepository {
  async createProblem(problemData) {
    try {
      const problem = await Problem.create({
        title: problemData.title,
        description: problemData.description,
        codeStubs: problemData.codeStubs,
        testCases: problemData.testCases ? problemData.testCases : [],
      });

      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getAllProblems() {
    try {
      const problems = await Problem.find({});
      return problems;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProblem(id) {
    try {
      const problem = await Problem.findById(id);
      if (!problem) {
        throw new NotFoundError("Problem", id);
      }
      return problem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteProblemById(id) {
    try {
      const deletedProblem = await Problem.findByIdAndDelete(id);
      if (!deletedProblem) {
        logger.error(
          `Problem.Repository: Problem with id: ${id} not found in the db`
        );
        throw new NotFoundError("problem", id);
      }
      return deletedProblem;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}
