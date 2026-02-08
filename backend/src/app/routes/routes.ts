import express from "express";
import { UniversityRoutes } from "../modules/university/university.routes";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/university",
    route: UniversityRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
