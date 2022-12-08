import { Request, Response, RequestHandler } from "express";
import * as CompaniesService from "../services/companies.service";
import CommonError from "../utils/error-util";
import { success } from "../utils/response-util";

export const createCompanies: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { name } = req.body;
    const result = await CompaniesService.createCompany({ name });
    return res.json(success(result));
  } catch (err) {
    return CommonError(req, err, res);
  }
};

export const getCompanies: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const companies = await CompaniesService.getCompanies();
    res.json(success(companies));
  } catch (err) {
    return CommonError(req, err, res);
  }
};

export const getCompanyById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.params;
    const company = await CompaniesService.getCompanyById(id);
    res.json(success(company));
  } catch (err) {
    return CommonError(req, err, res);
  }
};

export const updateCompany: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id, name } = req.body;
    await CompaniesService.updateCompany({
      id,
      name,
    });
    res.json(success(`Company ${id} updated successfully`));
  } catch (err) {
    return CommonError(req, err, res);
  }
};

export const deleteCompanyById: RequestHandler = async (
  req: Request,
  res: Response
) => {
  try {
    const { id } = req.body;
    await CompaniesService.deleteCompanyById(id);
    res.json(success(`Company ${id} locked successfully`));
  } catch (err) {
    return CommonError(req, err, res);
  }
};
