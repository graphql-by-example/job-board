export interface CompanyEntity {
  id: string;
  name: string;
  description?: string;
}

export interface JobEntity {
  id: string;
  companyId: string;
  title: string;
  description?: string;
  createdAt: string;
}

export interface UserEntity {
  id: string;
  companyId: string;
  email: string;
  password: string;
}
