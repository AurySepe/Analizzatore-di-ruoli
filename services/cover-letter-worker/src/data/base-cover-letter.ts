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
  experienceParagraph2: string;
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
  experienceParagraph2: "I built this whole system using an AI-native workflow inside Antigravity IDE. I delegate code generation to AI agents guided by detailed custom instructions, getting the exact code I would write by hand but ten times faster. After each iteration, I review the changes directly in the IDE to make sure the code follows our architecture and actually meets the business goals without misinterpreting requirements.",
  companyMotivationTemplate: "The main reason I want to join {company} is that through my work as a founder, I realized what I love most is designing and building products that genuinely solve real problems by interacting with and studying users, especially by leveraging AI and agentic workflows. {company} feels like the exact environment to do just that.",
  callToAction: "Happy to talk through any of this in more detail.",
  signoff: "Sincerely,"
};
