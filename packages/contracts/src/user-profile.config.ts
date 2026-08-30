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

  searchCriteriaText: `I am looking for a Product Engineer or Full-Stack Engineer role in Europe at a PRODUCT COMPANY (SaaS, B2B/B2C tech products). Company size is flexible (fast-growing startups or established product companies) as long as there is strong product ownership, high autonomy, customer-centricity, and a fast-moving mindset. I am open to Relocation in Europe, Remote, or Hybrid.

--- CORE PREFERENCES ---
- Role: Product Engineer / Mid-level or Junior Full-Stack Engineer in established teams (NOT Founding Engineer).
- Tech Stack: Fully technology-agnostic (TypeScript, Go, Rust, Python, Java, C#, etc.).
- Compensation: Mandatory explicitly stated cash salary in the job description (no undisclosed salary, no equity-only or unpaid roles).

--- DEAL-BREAKERS (IMMEDIATE DISQUALIFICATION) ---
* Missing or undisclosed salary in the job post (must explicitly state salary/range).
* Founding Engineer, Co-Founder, or 1st engineer roles.
* IT Consulting, agencies, software houses, body rental, or staff augmentation.
* Senior, Staff, Lead, Principal, or Executive roles (seeking Junior / Mid-level).
* Unpaid roles or pure equity-only compensation.
* Non-technical roles (Sales, HR, Marketing) or pure IT support/helpdesk.
`,
};
