import { Router } from "express";
import CompaniesRoutes from "../routes/companies.routes";
import UsersRoutes from "../routes/users.routes";
const routerApp = Router();

routerApp.use("/users", UsersRoutes);
routerApp.use("/companies", CompaniesRoutes);

export { routerApp };
