import express from "express";

import { ProblemController } from "../../controllers/index.js";
const problemRouter = express.Router();

// problemRouter.get("/ping", ProblemController.pingProblemController);

problemRouter.post("/", ProblemController.addProblem);

problemRouter.get("/:id", ProblemController.getProblem);

problemRouter.get("/", ProblemController.getProblems);

problemRouter.put("/:id", ProblemController.updateProblemById);

problemRouter.delete("/:id", ProblemController.deleteProblemById);

export default problemRouter;
