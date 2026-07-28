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

  searchCriteriaText: `I am looking for a Product Engineer role in Europe within a solid, fast-growing startup, ideally at the Series A or Series B stage. I am fully open to relocating across Europe for the right opportunity. I am not looking to join a large corporation where I would simply be executing tickets; instead, I want to be part of a company with a well-defined product and a lean structure that offers a high degree of autonomy and decision-making power.

Drawing from my direct experience as a co-founder and full-stack developer—building complex software ecosystems and robust backend infrastructures—I want an environment where I can apply my entrepreneurial mindset end-to-end. It is crucial for me that the company is deeply customer-centric. I am seeking a role where engineering is not isolated in a silo, but is actively involved in understanding user needs and directly translating them into effective solutions.

Leveraging my background in cross-functional development and my experience collaborating in international, multicultural environments, my goal is to have a tangible impact on the product roadmap. I want to balance architectural choices and the final user experience with complete ownership.

--- COMPENSATION & TECH STACK FLEXIBILITY ---
- Compensation: I am seeking a competitive, well-defined CASH SALARY. I am NOT looking for pure equity / equity-only roles, unpaid positions, or unbacked equity-for-work proposals.
- Tech Stack Flexibility: Specific technologies used by the company are NOT a barrier. As a Product Engineer, I am technology-agnostic and fully adaptable to any modern tech stack (TypeScript, Go, Rust, Python, Java, C#, etc.).

--- KEY CONSTRAINTS & DEAL-BREAKERS FOR AI SCORING ---
- Target Roles: Product Engineer, Mid-level / Junior Fullstack Engineer, Product-focused Engineer in lean product teams.
- Ideal Company Stage: Fast-growing startups (Series A / Series B), product-centric companies.
- Geography / Work Setup: Open to Relocation across Europe, Remote, or Hybrid in Europe.
- Strict Exclusions (DEAL-BREAKERS / DISQUALIFIERS):
  * Senior, Staff, Lead, Principal, or Executive roles (I am a 25-year-old developer seeking Junior / Mid-level positions, NOT Senior level roles).
  * Unpaid roles, pure equity-only compensation (no base salary).
  * Large corporations with siloed ticket-executing roles (no product ownership).
  * Non-technical / non-engineering roles (Sales, HR, Marketing, Admin).
  * Obsolete legacy technology stacks or pure IT support / helpdesk roles.
`,
};
