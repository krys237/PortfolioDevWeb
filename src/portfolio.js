/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Christian GAMBOU",
  title: "Hello world, C'est Christian !",
  subTitle: emoji(
    "Développeur Web Full Stack : je conçois des APIs REST robustes et scalables en Python / Django / Django REST Framework (temps réel WebSocket, traitement asynchrone Celery & Redis, PostgreSQL) et des interfaces modernes en React.js / Next.js / TypeScript. Mes projets couvrent l'e-santé, la fintech et les ERP métier."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AzpJoJMd8qfheaSLRbcpmYelsxE1Q9gB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/krys237",
  linkedin: "https://www.linkedin.com/in/christian-gambou-84b632232/",
  gmail: "christiangambou17@gmail.com",
  // Une chaîne vide masque l'icône (voir src/components/socialMedia)
  facebook: "",
  //medium: "#",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Qu'est ce que je fais ? 🛠  ️",
  subTitle:
    "DÉVELOPPEUR FULL STACK — FRONTEND JAVASCRIPT / TYPESCRIPT, BACKEND PYTHON :)",
  skills: [
    emoji(
      "⚡ Conception d'APIs REST sécurisées et documentées avec Django REST Framework (JWT, OAuth2, 2FA, RBAC, Swagger / OpenAPI)"
    ),
    emoji(
      "⚡ Développement d'interfaces utilisateur modernes et réactives avec React.js / Next.js / TypeScript"
    ),
    emoji(
      "⚡ Temps réel et traitement asynchrone : Django Channels / WebSocket, Celery, Redis"
    ),
    emoji(
      "⚡ Modélisation de bases de données (PostgreSQL, MySQL, MongoDB), conteneurisation Docker et intégration continue avec Git"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery
Les icônes Devicon (devicon-*) proviennent de la feuille de style ajoutée dans
public/index.html — nécessaire pour Django, FastAPI, PyCharm, PostgreSQL... */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Django / DRF",
      fontAwesomeClassname: "devicon-django-plain"
    },
    {
      skillName: "FastAPI",
      fontAwesomeClassname: "devicon-fastapi-plain"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "TypeScript",
      fontAwesomeClassname: "devicon-typescript-plain"
    },
    {
      skillName: "React / Next.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "PostgreSQL / MySQL",
      fontAwesomeClassname: "devicon-postgresql-plain"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Celery",
      fontAwesomeClassname: "fas fa-cogs"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "devicon-redis-plain"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "PyCharm",
      fontAwesomeClassname: "devicon-pycharm-plain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Universite de Douala",
      logo: require("./assets/images/logoudo.webp"),
      subHeader: "Licence - Informatique",
      duration: "Octobre 2018 - Septembre 2021",
      desc: "Ce parcours repose sur un socle scientifique rigoureux où l'informatique est abordée comme une science formelle. Il se concentre sur la maîtrise de la logique et des outils mathématiques indispensables pour modéliser des problèmes complexes, optimiser des algorithmes via les structures de données et exploiter les données grâce aux probabilités et statistiques",
      descBullets: [
        "Algorithmique et structures de données",
        "Analyse et Algèbre, Logique formelle et Arithmétique",
        "Mathématiques discrètes, Probabilités et Statistiques appliquées."
      ]
    },
    {
      schoolName: "Institut Africaine d'Informatique - IAI",
      logo: require("./assets/images/logo-iai.png"),
      subHeader: "Diplôme de Technicien Supérieur - DTS",
      duration: "Octobre 2022 - Octobre 2024",
      desc: "Le Diplôme de Technicien Supérieur (DTS) en génie logiciel est un parcours concret qui allie théorie scientifique et maîtrise technique. Elle forme des professionnels capables de concevoir des logiciels, d'administrer des réseaux et de gérer des données, tout en mettant l'accent sur la pratique en entreprise et la résolution de problèmes technologiques actuels.",
      descBullets: [
        "Journal de santé",
        "Langages de programmation Et Intelligence Artificielle",
        "Programmation mobile et web",
        "Gestion de base de données",
        "Systèmes d'exploitation (OS) et Architecture des ordinateurs",
        "Gestion de projet et gestion de la qualité",
        "Gestion de la sécurité informatique",
        "Gestion de la conformité réglementaire"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Python (Django / DRF)", //Insert stack or technology you have experience in
      progressPercentage: "85%" //Insert relative in percentage
    },
    {
      Stack: "Frontend (React / Next.js / TypeScript)",
      progressPercentage: "70%"
    },
    {
      Stack: "Bases de données & modélisation",
      progressPercentage: "75%"
    },
    {
      Stack: "DevOps (Docker, CI/CD)",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Développeur Full Stack",
      company: "DECODE",
      companylogo: require("./assets/images/LogoDecode.JPG"),
      date: "2024 - 2025",
      desc: "J'ai travaillé pendant une année à DECODE en tant que développeur Full Stack pour leur application de gestion des étudiants en stage et L'application mobile de Suivi de données médicales.",
      descBullets: [
        "Création d'une application de bureau en Python (Tkinter, SQLite) pour la gestion des étudiants en stage dans l'entreprise.",
        "Développement d'une application mobile de suivi de données médicales."
      ]
    },
    {
      role: "Développeur Full Stack (Python / JavaScript)",
      company: "e-Dr TIM",
      companylogo: require("./assets/images/logo-edoctor.webp"),
      date: "2025 – 2026",
      desc: "Développement web de la plateforme de santé digitale e-Dr TIM : APIs Django REST Framework pour les produits métier (dossier médical, téléconsultation, ERP d'officine) et back-offices React / Next.js qui les consomment.",
      descBullets: [
        "DMI patient : API Django/DRF du dossier médical informatisé (comptes, cliniques, suivi d'indicateurs de santé), documentée sous Swagger.",
        "Téléconsultation : file d'attente walk-in et rendez-vous programmés, visioconférence (LiveKit / Jitsi), KYC médecin, 2FA TOTP, conformité RGPD / CEMAC.",
        "e-doctorPharma : ERP d'officine fonctionnant hors-ligne avec synchronisation cloud, point de vente, comptabilité OHADA et facturation PDF.",
        "Back-office d'administration en Next.js 15 / React 19 / TypeScript (TanStack Query, Tailwind CSS).",
        "Stack transverse : PostgreSQL, Celery & Redis, Django Channels (WebSocket), Docker Compose, Firebase Cloud Messaging."
      ]
    },
    {
      role: "Développeur Web Full Stack Freelance",
      company: "Freelance",
      companylogo: require("./assets/images/logo-skytrack.png"),
      date: "2024 – 2026",
      desc: "Conception et développement de plateformes web complètes (frontend, backend, base de données) pour divers clients, en parallèle de mes activités salariées.",
      descBullets: [
        "TontineX360 : plateforme SaaS multi-tenant de gestion de tontines et d'associations (backend Django/DRF, wallets, chat temps réel, notifications push).",
        "GuardianTrack360 : solution de géolocalisation et de suivi en temps réel (site vitrine + application web).",
        "Sky Track : application web de suivi et de gestion développée en Full Stack."
      ]
    }
    /*
    {
      role: "Software Engineer Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    }*/
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projets",
  subtitle:
    "QUELQUES PROJETS FULL STACK — FRONTEND JAVASCRIPT / TYPESCRIPT, BACKEND PYTHON (DJANGO / DRF)",
  projects: [
    {
      image: require("./assets/images/logo-edoctor.webp"),
      projectName: "e-Dr TIM — DMI patient",
      projectDesc:
        "Dossier médical informatisé : API Django REST Framework (comptes, cliniques, suivi d'indicateurs de santé) documentée sous Swagger, et plateforme web de gestion des dossiers patients.",
      footerLink: [
        {
          name: "Site vitrine",
          url: "https://edoctor-tim.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo-edoctor.webp"),
      projectName: "e-Dr TIM — Téléconsultation",
      projectDesc:
        "Plateforme de téléconsultation médicale (CEMAC / RGPD) : consultations immédiates avec file d'attente, rendez-vous programmés, visioconférence LiveKit / Jitsi, KYC médecin et 2FA. Backend Django/DRF (80+ endpoints, 186 tests), back-office Next.js / TypeScript, tâches Celery et WebSocket.",
      footerLink: [
        {
          name: "Voir le service",
          url: "https://edoctor-tim.com/services-dmiDP.html"
        }
      ]
    },
    {
      image: require("./assets/images/logoPharmacy.jpeg"),
      projectName: "e-doctorPharma — Marketplace & ERP d'officine",
      projectDesc:
        "Marketplace e-santé (commande de médicaments et livraison) intégrant un ERP de pharmacie complet qui fonctionne hors-ligne au comptoir : synchronisation event-sourced, point de vente et caisse, gestion de stock par lots, comptabilité OHADA, facturation PDF et RBAC par officine.",
      footerLink: [
        {
          name: "Site vitrine",
          url: "https://website-edrpharma-mobile.vercel.app/"
        }
      ]
    },
    /* Projet FastAPI — a decommenter des que le site sera en ligne
       (mise en ligne annoncee pour la semaine du 12 octobre 2026)
    {
      image: require("./assets/images/programmer.svg"),
      projectName: "A COMPLETER — projet FastAPI",
      projectDesc:
        "A COMPLETER : description du projet. API Python / FastAPI.",
      footerLink: [
        {
          name: "Voir le projet",
          url: "A COMPLETER"
        }
      ]
    },
    */
    {
      image: require("./assets/images/logo-tontinex.png"),
      projectName: "TontineX360",
      projectDesc:
        "Plateforme SaaS multi-tenant de gestion de tontines et d'associations : souscriptions, cycles, finance, gouvernance, sanctions, wallets, chat temps réel et notifications push. Backend Django/DRF avec isolation des données par association.",
      footerLink: [
        {
          name: "Site vitrine",
          url: "https://tontinex360.com/"
        },
        {
          name: "Application",
          url: "https://app.tontinex360.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo-guardian.png"),
      projectName: "GuardianTrack360",
      projectDesc:
        "Solution de géolocalisation et de suivi en temps réel, avec site vitrine et application web.",
      footerLink: [
        {
          name: "Site vitrine",
          url: "https://guardiantrack360.com/"
        },
        {
          name: "Application",
          url: "https://app.guardiantrack360.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo-skytrack.png"),
      projectName: "Sky Track",
      projectDesc:
        "Application web de suivi et de gestion développée en Full Stack.",
      footerLink: [
        {
          name: "Voir l'application",
          url: "https://sky-track-puce.vercel.app/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Focus technique 🏆 "),
  subtitle:
    "Quelques points forts techniques des plateformes sur lesquelles j'ai travaillé",

  achievementsCards: [
    {
      title: "API de téléconsultation à grande échelle",
      subtitle:
        "Backend Django REST Framework de 8 applications : 80+ endpoints couverts par 186 tests automatisés, visioconférence multi-fournisseurs (LiveKit / Jitsi), conformité RGPD et réglementation CEMAC.",
      image: require("./assets/images/logo-edoctor.webp"),
      imageAlt: "e-Dr TIM"
    },
    {
      title: "ERP d'officine offline-first",
      subtitle:
        "Synchronisation hors-ligne event-sourced (résolution de conflits Last Write Wins), numérotation fiscale par blocs pré-alloués, comptabilité OHADA et dashboard KPI — 11 applications Django avec pipeline CI (pytest, flake8, black).",
      image: require("./assets/images/logoPharmacy.jpeg"),
      imageAlt: "e-doctorPharma"
    },
    {
      title: "SaaS multi-tenant",
      subtitle:
        "Architecture multi-tenant en base partagée (isolation automatique par association via middleware et managers dédiés), 16 applications Django, wallets, chat WebSocket et notifications push.",
      image: require("./assets/images/logo-tontinex.png"),
      imageAlt: "TontineX360"
    }
  ],
  display: false // Passer à true pour afficher cette section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "N'hésitez pas à télécharger mon CV",

  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contactez-moi ☎️"),
  subtitle:
    "Je suis disponible pour discuter de votre projet ou simplement pour dire bonjour. Mon boîte de réception est ouverte pour tous.",
  number: "+237 658 207 936",
  email_address: "christiangambou17@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
