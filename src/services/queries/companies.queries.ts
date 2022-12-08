export const CompaniesQueries = {
  GetCompanies: `
  SELECT
    *
  FROM companies
  `,

  GetCompanyById: `
  SELECT
    c.id,
    c.name,
    c.isActive
  FROM companies as c
  WHERE
    id = ?
  `,

  CreateCompany: `
  INSERT INTO companies (name, isActive)
    VALUES (?, 1);
  `,

  UpdateCompanyById: `
  UPDATE companies
  SET name = ?
  WHERE
    id = ?
  `,

  DeleteCompanyById: `
  UPDATE companies
  SET isActive = false
  WHERE
    id = ?
  `,
};
