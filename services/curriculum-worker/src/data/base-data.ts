import { FullResumeData } from '../curriculum/pdf/schema';

export const baseResumeData: FullResumeData = {
  basics: {
    name: "Aurelio Sepe",
    label: "Full-Stack & Product Engineer",
    email: "aureliosepe01@gmail.com",
    url: "https://www.linkedin.com/in/aurelio-sepe/",
    nationality: "Italian",
    profiles: [
      {
        network: "LinkedIn",
        username: "aurelio-sepe",
        url: "https://www.linkedin.com/in/aurelio-sepe/"
      },
      {
        network: "Google Scholar",
        username: "Aurelio Sepe",
        url: "https://scholar.google.com/citations?user=RZ4gW0wAAAAJ"
      }
    ]
  },
  work: [
    {
      name: "MioCFO",
      position: "Co-Creator & Lead Developer",
      url: "https://test.miocfo.com/",
      startDate: "2026-04-01",
      endDate: "Present",
      summary: "Engineered a zero-to-one SME B2B financial advisory platform for automated cash flow categorization and invoice management using TypeScript, React, Tailwind CSS, NestJS, Prisma, and PostgreSQL, configuring background task queues to parse 1,000+ financial documents.\nAchieved 95% automated categorization accuracy on cash flows using Gemini APIs while designing a rapid-review UX fallback to make manual correction of low-confidence entries frictionless.\nDelivered real-time financial insights to 20 active SME beta users by conducting weekly interviews to translate feedback directly into updates."
    },
    {
      name: "Commigo",
      position: "Founder & Lead Architect",
      url: "https://www.commigo.it/",
      startDate: "2023-08-02",
      endDate: "2026-06-30",
      summary: "Monetized LearningVerse, a multiplayer VR language learning app for Meta Quest, by securing an 8,000 Euro software licensing contract for an EU-funded integration program and deploying it for a 40-hour course at the University of Salerno.\nEngineered real-time spatial synchronization for 20 concurrent VR users in LearningVerse by building low-latency C# networking pipelines in Unity that synchronized 100 interactable 3D objects simultaneously.\nDelivered HapGree (a €25,000 cross-platform mobile app for automated carbon footprint tracking) and MatEditPro (a €9,000 web 3D editor for furniture catalog production) by leading technical development across Flutter, React, Three.js, and WebGL architectures.\nDoubled team feature delivery speed across 3 co-founders by establishing core software architecture guidelines, automated deployment workflows, and facilitating weekly Agile Scrum sprints."
    },
    {
      name: "FitRats",
      position: "Co-Creator & Lead Developer",
      startDate: "2026-01-01",
      endDate: "2026-05-31",
      summary: "Designed and developed FitRats, a zero-to-one B2B SaaS web platform for fitness professionals providing real-time client tracking and workout planning using Flutter and Riverpod connected to a Node.js and PostgreSQL backend.\nStreamlined workout creation and client tracking for 10 personal trainers by conducting hands-on user testing calls and iterating core product features continuously."
    },
    {
      name: "University of Salerno",
      position: "Research Associate",
      url: "https://www.unisa.it/",
      startDate: "2024-12-01",
      endDate: "2025-11-30",
      summary: "Engineered cooperative AR/VR platforms, including BotanicAR (a multiplayer co-located MR experience on Meta Quest 3), and industrial safety training simulations in Unity, co-authoring five peer-reviewed papers published at international IEEE and ACM conferences.\nAccelerated research prototype delivery across 5 collaborative AR/VR projects by establishing modular C# component architectures and reusable data pipelines."
    },
    {
      name: "University of Salerno",
      position: "Research Scholar, Marte Media Lab",
      url: "https://www.unisa.it/",
      startDate: "2023-07-11",
      endDate: "2024-07-11",
      summary: "Published four peer-reviewed scientific papers at international HCI conferences by conducting user studies and testing usability metrics on social interaction in virtual environments.\nSelected for a research scholarship at Marte Media Lab during Master's studies based on top academic standing (GPA: 3.92/4.0)."
    },
    {
      name: "Glasgow University",
      position: "Traineeship, HCI Lab",
      url: "https://ieeexplore.ieee.org/abstract/document/11236242",
      startDate: "2024-03-01",
      endDate: "2024-07-31",
      summary: "Published a peer-reviewed scientific paper at the IEEE VR conference after securing a competitive Erasmus+ research traineeship grant under the supervision of Prof. Stephen Brewster.\nValidated in-car spatial tracking by executing 20 real-world driving test sessions inside moving vehicles after building cARdefender (an in-vehicle Mixed Reality passenger game) using Unity, ZED 2 Stereo SDK, and C++ spatial mapping algorithms."
    }
  ],
  education: [
    {
      institution: "University of Salerno",
      url: "https://www.unisa.it/",
      area: "Computer Science - Software Engineering and IT Management",
      studyType: "Master's Degree",
      startDate: "2022-09-30",
      endDate: "2024-09-27",
      score: "110 cum laude | GPA: 3.92/4.0",
      courses: [
        "Graduated with a GPA of 3.92/4.0 and 110/110 cum laude by defending a thesis on spatial AR interaction in moving vehicles (cARdefender) and cooperative AR gaming (BotanicAR).",
        "Won 1st place and the Youth Jury award in the App Challenge hackathon against 10 competing teams by developing the initial prototype that led to co-founding Commigo."
      ]
    },
    {
      institution: "University of Salerno",
      url: "https://www.unisa.it/",
      area: "Computer Science",
      studyType: "Bachelor's Degree",
      startDate: "2019-09-01",
      endDate: "2022-09-30",
      score: "110 cum laude | GPA: 3.95/4.0",
      courses: [
        "Graduated with a GPA of 3.95/4.0 and 110/110 cum laude by defending a thesis analyzing the evolution of software quality and design patterns.",
        "Published research at the 49th Euromicro SEAA conference by conducting an empirical evaluation of 15 Java projects across 542 releases to analyze the correlation between design patterns and code smell emergence."
      ]
    }
  ],
  publicationsNote: "Co-authored 11 peer-reviewed scientific papers across IEEE, ACM, and HCI conferences. Selected featured publications:",
  publications: [
    {
      name: "Contextualized experiential language learning in the metaverse",
      publisher: "Proceedings of the 15th Biannual Conference of the Italian SIGCHI Chapter",
      releaseDate: "2023"
    },
    {
      name: "MetaCUX: Social interaction and collaboration in the metaverse",
      publisher: "IFIP Conference on Human-Computer Interaction",
      releaseDate: "2023"
    },
    {
      name: "The yin and yang of software quality: On the relationship between design patterns and code smells",
      publisher: "49th Euromicro Conference on Software Engineering and Advanced Applications (SEAA)",
      releaseDate: "2023",
      url: "https://ieeexplore.ieee.org/abstract/document/10371479"
    },
    {
      name: "MetaCUX-a multi-user, multi-scenario environment for a cooperative workspace",
      publisher: "Proceedings of the 15th Biannual Conference of the Italian SIGCHI Chapter",
      releaseDate: "2023"
    },
    {
      name: "Designing a collaborative safety training experience in virtual reality",
      publisher: "Workshop on Artificial Intelligence with and for Learning Sciences",
      releaseDate: "2024"
    },
    {
      name: "A task-oriented multimodal conversational interface for a CSCW immersive virtual environment",
      publisher: "Proceedings of 22nd European Conference on Computer-Supported Cooperative Work",
      releaseDate: "2024"
    },
    {
      name: "Muxi: a multimodal conversational interface for the metaverse",
      publisher: "Proceedings of the 2024 International Conference on Advanced Visual Interfaces (AVI)",
      releaseDate: "2024",
      url: "https://dl.acm.org/doi/abs/10.1145/3656650.3656724"
    },
    {
      name: "Botanicar: A cooperative experience in augmented reality",
      publisher: "IEEE Conference on Virtual Reality and 3D User Interfaces Abstracts and Workshops (VRW)",
      releaseDate: "2024"
    },
    {
      name: "A Glimpse on HCAI Frameworks: A Scoping Review to Adapt them to Mixed Reality",
      publisher: "IEEE International Conference on Metrology for eXtended Reality",
      releaseDate: "2025",
      url: "https://ieeexplore.ieee.org/abstract/document/11340335"
    },
    {
      name: "Neuro-physiological and Subjective measures of Presence Experience in Virtual Reality: Insights from a scoping review",
      publisher: "IEEE International Conference on Metrology for eXtended Reality",
      releaseDate: "2025"
    },
    {
      name: "cARdefender: a Mixed Reality Game for Vehicle Passengers",
      publisher: "IEEE International Symposium on Mixed and Augmented Reality Adjunct (ISMAR-Adjunct)",
      releaseDate: "2025"
    }
  ],
  projects: [
    {
      name: "BotanicAR",
      description: "Engineered a co-located multiplayer cooperative AR game in Unity for Meta Quest 3, enabling real-time spatial synchronization of virtual objects for players sharing the same physical environment to fight a giant carnivorous plant."
    }
  ],
  languages: [
    {
      language: "Italian",
      fluency: "Mother tongue"
    },
    {
      language: "English",
      fluency: "C2 (Full Professional / Proficient)"
    }
  ],
  interests: [
    {
      name: "Personal Interests",
      keywords: [
        "Erasmus+ Youth Exchanges across Europe, serving as Italian Team Leader in Romania, Poland, and Lithuania",
        "Volleyball and Calisthenics",
        "International Travel and Cross-Cultural Projects"
      ]
    }
  ],
};
