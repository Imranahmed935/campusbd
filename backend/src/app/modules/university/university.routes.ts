import express from "express";
import { universityController } from "./university.controller";

const router = express.Router();

router.get("/", universityController.getAllUniversities);
router.post("/create", universityController.createUniversity);

export const UniversityRoutes = router;
