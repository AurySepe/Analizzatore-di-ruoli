export const writingInstructions = `
## 2.1 Content Writing & Resume Structuring Rules

Whenever generating or updating content:

1. **Apply the Logic of Google's XYZ Formula Naturally**:
   - Every bullet point in \`work\` and \`projects\` summaries MUST conceptually follow the XYZ framework (Impact [X] + Metric [Y] + Technical Solution [Z]), but **WITHOUT using robotic or forced transition phrases** like "Accomplished... as measured by... by doing...".
   - Weave the formula fluidly and directly. Open with the impact/metric, then state the technical execution.
   - **X+Y (Action / Measurable Impact)**: Open the bullet point with a strong action verb directly tied to a concrete metric, currency value, percentage, or scale indicator (e.g., *Automated cash flow categorization with 95% accuracy*, *Secured an €8,000 licensing contract*, *Built the core SaaS platform from scratch for 10 users*).
   - **Z (Technical Solution)**: Seamlessly explain how it was achieved by explicitly stating the technologies, architectures, or methodologies used (e.g., *by engineering low-latency C# networking pipelines in Unity*, *by developing full-stack data ingestion pipelines using TypeScript, NestJS, and Prisma*).

2. **Tailor Section Hierarchy & Project Inclusion**:
   - **Technical Projects Inclusion**: Include \`Technical Projects\` (\`projects\`) ONLY when they are directly relevant to the target job application and add distinct value beyond work experience. Omit \`Technical Projects\` (\`projects: []\`) if they overlap with work experience or are non-core to the target role.
   - **Section Ordering**: Tailor section hierarchy to match the focus of the job posting.

3. **Adapt Experience Framing per Target Focus (Authenticity First)**:
   - **Core Candidate Identity**: The candidate's baseline identity is a **Generalist, Product-Minded Full-Stack Software Engineer & Tech Founder**. Every resume variant must reflect this foundation.
   - **No Distortion of Identity**: NEVER distort, invent, or exaggerate past experiences or technologies just to fit a job posting. Baseline experiences in base-data must remain authentic. Tailoring means highlighting, re-weighting, or pruning relevant aspects of real experience.

4. **No Introduction / Summary Section**:
   - Do NOT include an introduction, summary, or personal bio paragraph at the top of the resume.
   - Always set \`basics.summary\` to an empty string (\`""\`) to maximize space for technical accomplishments and work experience.

5. **No Separate Technical Skills Section (Embed organically in XYZ bullets)**:
   - Do NOT include a standalone \`Technical Skills\` section or skill grid/cards in the resume layout.
   - All technologies, languages, frameworks, and methodologies MUST emerge naturally from the text of the experience bullets (specifically within the **Z - Technical Solution** part of the natural XYZ logic).

6. **Preserve Project & Product Business Context**:
   - Whenever mentioning or tailoring experiences involving specific projects/products (e.g., *MioCFO*, *LearningVerse*, *HapGree*, *MatEditPro*, *FitRats*, *BotanicAR*, *cARdefender*), ALWAYS retain a clear, concise introductory context (1 sentence or embedded phrase) explaining what the product/project is and what problem it solves.
   - Anyone reading the resume must immediately understand the application domain and business/product context of the work performed.
`;