import { Application } from "express";
import { routerApp } from "./router.config";

export const routes = (app: Application) => {
  app.use("/api", routerApp);
};
