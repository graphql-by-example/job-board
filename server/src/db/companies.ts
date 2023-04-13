import DataLoader from 'dataloader';
import { connection } from './connection.js';
import { CompanyEntity } from './types.js';

const getCompanyTable = () => connection.table<CompanyEntity>('company');

export async function getCompany(id: string) {
  return await getCompanyTable().first().where({ id });
}

export function createCompanyLoader() {
  return new DataLoader(async (ids: string[]) => {
    const companies = await getCompanyTable().select().whereIn('id', ids);
    return ids.map((id) => companies.find((company) => company.id === id));
  });
}
