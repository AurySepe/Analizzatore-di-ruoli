export interface UserProfileConfig {
  /**
   * Testo libero del Curriculum Vitae ed Esperienze Professionali (Skill possedute dall'utente)
   */
  resumeText: string;

  /**
   * Testo libero dei Desiderata, Criteri di ricerca e Vincoli dell'utente (Cosa stai cercando)
   */
  searchCriteriaText: string;
}

export const userProfileConfig: UserProfileConfig = {
  resumeText: `# Profile & Technical Overview

I am a 25-year-old software developer and co-founder. I hold a Bachelor's and a Master's degree in Computer Science from the University of Salerno, both completed with a grade of 110 cum laude.

## Professional Experience

I have worked on several software projects, often collaborating with my colleagues Simone Spera and Otino Pio Santosuosso.
* **Commigo:** I acted as Lead Architect for a VR language learning platform, developing C# networking pipelines in Unity to synchronize users and 3D objects.
* **MioCFO:** I co-created a B2B financial platform using TypeScript, React, NestJS, Prisma, and PostgreSQL. The project included the integration of Gemini APIs for the automated categorization of cash flows.
* **FitRats:** I co-developed a web platform for fitness professionals using Flutter, Riverpod, Node.js, and PostgreSQL. This project intersects with my personal interest in physical training.
* **HapGree & MatEditPro:** I worked on the technical development of a mobile SaaS and a web 3D editor, utilizing Flutter, React, Three.js, and WebGL.
## Academic Research and 3D Technologies

I worked as a Research Associate and Scholar at the University of Salerno, and completed a traineeship at Glasgow University.
* **XR & Mixed Reality:** I developed virtual and augmented reality applications using Unity. I implemented C++ object recognition algorithms using the ZED 2 SDK for in-vehicle mixed reality.
* **3D Reconstruction:** I have experience with volumetric capture, photogrammetry, and Gaussian Splatting, utilizing tools such as COLMAP and LichtFeld Studio.
* **Publications:** I co-authored peer-reviewed scientific papers presented at IEEE and ACM conferences.

## Additional Information

* **Languages:** My mother tongue is Italian, and I have English proficiency (C2 understanding, C1 speaking, C1 writing).
* **Programs:** I participated in multiple Erasmus+ youth exchanges in countries including Romania, Poland, Lithuania, and Austria, serving as a National Group Leader for the Italian team during these projects.
`,

  searchCriteriaText: `I am looking for a Product Engineer role in Europe at a PRODUCT COMPANY (SaaS, B2B/B2C tech product, etc.). Company size is flexible—I am open to both fast-growing startups and larger, more established product companies. The key requirement is company culture: I want an environment driven by strong product ownership, high autonomy, and a lean, fast-moving mindset (operating with the agility of a small company regardless of size). I am fully open to relocating across Europe for the right opportunity. I am not looking for a rigid corporate setup or a consulting firm where I would simply be executing isolated tickets or client projects without decision-making power or product impact.

Drawing from my direct experience as a co-founder and full-stack developer—building complex software ecosystems and robust backend infrastructures—I want an environment where I can apply my entrepreneurial mindset end-to-end. It is crucial for me that the company is deeply customer-centric. I am seeking a role where engineering is not isolated in a silo, but is actively involved in understanding user needs and directly translating them into effective solutions.

Leveraging my background in cross-functional development and my experience collaborating in international, multicultural environments, my goal is to have a tangible impact on the product roadmap. I want to balance architectural choices and the final user experience with complete ownership.

--- COMPENSATION & TECH STACK FLEXIBILITY ---
- Compensation: I am seeking a competitive, well-defined CASH SALARY. I am NOT looking for pure equity / equity-only roles, unpaid positions, or unbacked equity-for-work proposals.
- Tech Stack Flexibility: Specific technologies used by the company are NOT a barrier. As a Product Engineer, I am technology-agnostic and fully adaptable to any modern tech stack (TypeScript, Go, Rust, Python, Java, C#, etc.).

--- KEY CONSTRAINTS & DEAL-BREAKERS FOR AI SCORING ---
- Target Roles: Product Engineer, Mid-level / Junior Fullstack Engineer, Product-focused Engineer in lean product teams.
- Ideal Company Environment: Product companies (B2B/B2C SaaS, Tech Products) of any size (from fast-growing startups to larger tech companies) that foster strong product ownership, high autonomy, and operate with a lean, fast-moving startup mindset.
- Location & Work Setup: Open to Relocation ONLY across Europe (EU, EEA, UK, Switzerland), Remote, or Hybrid in Europe (must be compatible with European timezones/residents).
- Strict Exclusions (DEAL-BREAKERS / DISQUALIFIERS - IMMEDIATE DISQUALIFICATION):
  * Relocation outside Europe: Any role requiring physical relocation outside Europe (USA, Canada, APAC, Australia, etc.) is STRICTLY DISQUALIFIED.
  * Non-European Location / Incompatible Timezones: Roles requiring residency/visas outside Europe (e.g. US Only, North America only) or working hours outside European timezone business hours are STRICTLY DISQUALIFIED.
  * IT Consulting companies, outsourcing agencies, software houses, body rental, staff augmentation, or agency consulting services (IMMEDIATE DISQUALIFICATION: I ONLY want Product Companies building their own product).
  * Senior, Staff, Lead, Principal, or Executive roles (I am a 25-year-old developer seeking Junior / Mid-level positions, NOT Senior level roles).
  * Missing or undisclosed salary in the job post (must explicitly state salary/range).
  * Unpaid roles, pure equity-only compensation (no base salary).
  * Rigid corporate environments with siloed ticket-executing roles lacking product ownership and autonomy.
  * Non-technical / non-engineering roles (Sales, HR, Marketing, Admin).
  * Obsolete legacy technology stacks or pure IT support / helpdesk roles.
`,
};
