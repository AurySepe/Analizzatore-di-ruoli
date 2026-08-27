import React from 'react';
import { MarkdownContent } from '@/Commons/Components/MarkdownContent';
import type { JobOfferDetailViewModelDTO } from '../../ViewModel/jobOffersViewModel';

const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
    {children}
  </span>
);

const InfoItem: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</dt>
    <dd className="mt-1 text-sm font-semibold text-slate-900">{value}</dd>
  </div>
);

const InfoLink: React.FC<{ label: string; value: string }> = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
    <dt className="text-xs font-bold uppercase tracking-wider text-slate-500">{label}</dt>
    <dd className="mt-1 text-sm font-semibold text-indigo-600 truncate">
      {value.startsWith('http') ? (
        <a href={value} target="_blank" rel="noreferrer" className="hover:underline">
          {value}
        </a>
      ) : (
        value
      )}
    </dd>
  </div>
);

export const JobOfferDetailOverview: React.FC<{
  data: JobOfferDetailViewModelDTO;
  onSelectCompany?: (companyId: string) => void;
}> = ({ data, onSelectCompany }) => {
  return (
    <>
      <section>
        <h3 className="text-lg font-semibold text-slate-950">Testo annuncio</h3>
        <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <MarkdownContent content={data.rawDescription} />
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-950">Informazioni ruolo</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <InfoItem label="Luogo" value={data.location} />
          <InfoItem label="Retribuzione" value={data.salaryRange} />
          <InfoItem label="Categoria ruolo" value={data.roleCategory} />
          <InfoItem label="Fonte" value={data.source} />
          <InfoItem label="Freschezza" value={data.freshness} />
          <InfoItem label="ID esterno" value={data.externalId} />
          <InfoItem label="Pubblicato il" value={data.datePosted} />
          <InfoItem label="Creato il" value={data.createdAt} />
          <InfoItem label="Aggiornato il" value={data.updatedAt} />
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-950">Competenze</h3>
        {data.skills.length > 0 ? (
          <div className="mt-4 flex flex-wrap gap-2">
            {data.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        ) : (
          <p className="mt-3 text-sm text-slate-500">Nessuna competenza indicata.</p>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-slate-950">Azienda</h3>
          <button
            type="button"
            onClick={() => {
              if (data.company.id && onSelectCompany) onSelectCompany(data.company.id);
            }}
            className="rounded-xl border border-indigo-200 bg-indigo-50 px-3.5 py-1.5 text-xs font-extrabold text-indigo-700 hover:bg-indigo-100 transition shadow-2xs"
          >
            🏢 Profilo Aziendale & Annunci ➔
          </button>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <InfoItem label="Nome" value={data.company.name} />
          <InfoItem label="Settore" value={data.company.industry} />
          <InfoItem label="Funding stage" value={data.company.fundingStage} />
          <InfoItem label="Dimensione" value={data.company.companySizeRange} />
          <InfoItem label="Dipendenti" value={data.company.employeeCount} />
          <InfoItem label="ID azienda" value={data.company.id} />
          <InfoLink label="Sito web" value={data.company.websiteUrl} />
          <InfoLink label="LinkedIn" value={data.company.linkedinUrl} />
        </div>
      </section>

      <section>
        <h3 className="text-lg font-semibold text-slate-950">Note</h3>
        <div className="mt-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
          <MarkdownContent content={data.notes} />
        </div>
      </section>
    </>
  );
};
