import { Router } from "express";
import {
  getCompanies,
  createCompanies,
  getCompanyById,
  updateCompany,
  deleteCompanyById,
} from "../controllers/companies.controller";

const router = Router();

router.route("/").post(createCompanies);
router.route("/").get(getCompanies);
router.route("/").patch(updateCompany);
router.route("/").delete(deleteCompanyById);
router.route("/:id").get(getCompanyById);

export default router;
