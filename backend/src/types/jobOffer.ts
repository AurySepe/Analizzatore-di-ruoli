import { JobSource } from '@prisma/client';

export type RemoteType = 'REMOTE' | 'HYBRID' | 'ON_SITE' | 'UNSPECIFIED';
export type ExperienceLevel = 'ENTRY_LEVEL' | 'JUNIOR' | 'MID' | 'SENIOR' | 'LEAD' | 'EXECUTIVE' | 'UNSPECIFIED';
export type ApplicationStatus = 'NEW' | 'SAVED' | 'APPLIED' | 'INTERVIEWING' | 'REJECTED' | 'ARCHIVED';

export interface CompanyInput {
  name: string;
  websiteUrl?: string;
  linkedinUrl?: string;
  industry?: string;
  fundingStage?: string;     // Es: "Pre-Seed", "Seed", "Series A", "Series B", "Bootstrapped", "Public"
  companySizeRange?: string; // Es: "1-10", "11-50", "51-200", "500+"
  employeeCount?: number;    // Es: 120
}

export interface CreateJobOfferInput {
  externalId?: string;
  source: JobSource;

  url: string;
  title: string;
  location?: string;
  remoteType?: RemoteType;
  rawDescription: string;
  datePosted?: Date;
  
  company: CompanyInput;
  
  salaryMin?: number;
  salaryMax?: number;
  currency?: string;
  contractType?: string;
  
  roleCategory?: string;
  experienceLevel?: ExperienceLevel;
  skills?: string[];
}
