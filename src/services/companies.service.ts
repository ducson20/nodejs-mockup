import { execute } from "../configs/database";

import { CompaniesQueries } from "./queries/companies.queries";
import { ICompany } from "../models/companies.model";

/**
 * Gets companies
 */
export const getCompanies = async () => {
  return execute<ICompany[]>(CompaniesQueries.GetCompanies, []);
};

/**
 * Get a company by id
 */
export const getCompanyById = async (id: ICompany["id"]) => {
  return execute<ICompany>(CompaniesQueries.GetCompanyById, [id]);
};

/**
 * Create a company by id
 */
export const createCompany = async (company: ICompany) => {
  const result = await execute<{ affectedRows: number }>(
    CompaniesQueries.CreateCompany,
    [company.name]
  );
  return result.affectedRows > 0;
};

/**
 * Updates company information based on the id provided
 */
export const updateCompany = async (company: ICompany) => {
  const result = await execute<{ affectedRows: number }>(
    CompaniesQueries.UpdateCompanyById,
    [company.name, company.id]
  );
  return result.affectedRows > 0;
};

/**
 * Updates company information based on the id provided
 */
export const deleteCompanyById = async (id: ICompany["id"]) => {
  const result = await execute<{ affectedRows: number }>(
    CompaniesQueries.DeleteCompanyById,
    [id]
  );
  return result.affectedRows > 0;
};
