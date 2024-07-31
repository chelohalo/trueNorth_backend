import express  from "express";
import checkAuth from "../middleware/checkAuth.js";
import {
    getOperations,
    newOperation,
    deleteOperation,
} from "../controllers/operationControllers.js"

const router = express.Router();

router
    .route('/')
    .get(checkAuth, getOperations)
    .post(checkAuth, newOperation);

router
    .route("/:id")
    .patch(checkAuth, deleteOperation)

export default router;