export interface BaseCoverLetterData {
  basics: {
    name: string;
    label: string;
    email: string;
    phone: string;
    website: string;
    profiles: Array<{ network: string; url: string }>;
  };
  experienceParagraph1: string;
  experienceParagraph1AlternativeStory: string;
  experienceParagraph1CombinedStory: string;
  experienceParagraph2: string;
  guidelinesForMotivation: string[];
  companyMotivationTemplate: string;
  callToAction: string;
  signoff: string;
}

export const baseCoverLetterData: BaseCoverLetterData = {
  basics: {
    name: "Aurelio Sepe",
    label: "Full-Stack & Product Engineer",
    email: "aureliosepe01@gmail.com",
    phone: "+39 334 7720035",
    website: "https://github.com/AurySepe",
    profiles: [
      {
        network: "LinkedIn",
        url: "https://www.linkedin.com/in/aurelio-sepe/"
      },
      {
        network: "GitHub",
        url: "https://github.com/AurySepe"
      }
    ]
  },
  experienceParagraph1: "To show how I work as an AI-boosted, product-oriented full-stack engineer across TypeScript, React, NestJS, Prisma, and LLM APIs, take MioCFO, the AI financial platform I co-founded. In our first version, uploading hundreds of invoices was synchronous, locking users on a loading screen until processing finished. Listening to their feedback, I improved the feature step by step through an iterative process. First, I converted the upload flow from synchronous to asynchronous by building a backend task queue and updating the frontend UI so users could track live progress while navigating freely to other pages. Second, to handle occasional AI extraction mistakes, I built a review screen where users could quickly verify low-confidence data. This step-by-step approach turned a blocking workflow into a smooth experience with 95% categorization accuracy across 1,000+ invoices.",
  experienceParagraph1AlternativeStory: "To show how I approach building reliable software and applying an AI-proficient mindset to production backend systems, take MioCFO, the fintech platform I co-founded. Initially, our bank statement extraction relied on a single prompt that tried to pull all transactions from unstructured PDFs in one shot without validation. This produced inconsistent results, frequent errors, and timeouts on larger files. To fix this, I re-engineered the pipeline into an asynchronous microservice backed by a BullMQ task queue. Using LangGraph, I split the extraction logic into distinct states, mixing specialized agents with deterministic steps. First, a classifier inspects the document structure page by page. Next, worker nodes process chunks in parallel to extract specific data domains. Finally, a deterministic validation step reconciles extracted transactions against balances, triggering an automated correction loop if it finds discrepancies.",
  experienceParagraph1CombinedStory: "To show how I work as an AI-boosted, product-oriented full-stack engineer across TypeScript, Next.js, Node, and LLM workflows, take MioCFO, the financial platform I co-founded. In our first version, uploading and parsing bank statements was completely synchronous. The backend relied on a single prompt that tried to extract every transaction from messy PDFs in one pass without validation, which locked users on a loading screen and often resulted in timeouts or subtle extraction errors. Listening to user feedback, I tackled the problem end to end through an iterative process. First, I redesigned the user experience. I converted the flow from synchronous to asynchronous, updating the UI with live progress tracking so users could navigate freely, and built a review screen where they could quickly verify low-confidence data. Next, to fix the extraction accuracy under the hood, I replaced the single prompt with an asynchronous pipeline backed by a task queue. Using LangGraph, I split the extraction into distinct states: a classifier first inspects document structure page by page, dedicated worker nodes extract specific data domains in parallel, and a deterministic step reconciles transactions against statement balances to trigger correction loops on any discrepancy. Finally, I built an evaluation dataset to run automated regression tests on every node, transforming a fragile, blocking feature into a reliable experience with a 95%+ reconciliation rate.",
  experienceParagraph2: "I built this whole system using an AI-native workflow inside Antigravity IDE. I delegate code generation to AI agents guided by detailed custom instructions, getting the exact code I would write by hand but ten times faster. After each iteration, I review the changes directly in the IDE to make sure the code follows our architecture and actually meets the business goals without misinterpreting requirements.",
  guidelinesForMotivation: [
    "Focus tecnico: Abbandonare la dispersione operativa delle startup (vendite, burocrazia) per dedicarsi al 100% alla scrittura di codice robusto e all'architettura software.",
    "Scala e affidabilità: Uscire dai prototipi e misurarsi con sistemi maturi, traffico reale e metriche rigorose di stabilità.",
    "Crescita e confronto: Lavorare con ingegneri più esperti per ricevere code review severe, alzare l'asticella tecnica e apprendere pattern architetturali avanzati.",
    "Ownership del ciclo di vita: Seguire il software dal rilascio all'uso reale sul campo, misurando l'impatto e manutenendo ciò che si rilascia invece di consegnare codice a terzi.",
    "Cultura di lavoro moderna e flessibile: Lavorare in contesti dinamici e meno rigidi, con autonomia decisionale, fiducia reciproca, modelli ibridi e processi orientati all'efficacia anziché alla burocrazia aziendale tradizionale.",
    "Vicinanza al cliente e feedback immediato: Raccogliere riscontri diretti da chi utilizza effettivamente il software ogni giorno per iterare velocemente, eliminando i passaggi intermedi e vedendo l'impatto pratico di ogni modifica rilasciata."
  ],
  companyMotivationTemplate: "The main reason I want to join {company} is that through my work as a founder, I realized what I love most is designing and building products that genuinely solve real problems by interacting with and studying users, especially by leveraging AI and agentic workflows. {company} feels like the exact environment to do just that.",
  callToAction: "Happy to talk through any of this in more detail.",
  signoff: "Sincerely,"
};
