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
    "Développeur Web Full Stack avec de l'expérience dans la création d'applications web robustes et scalables : interfaces modernes avec React.js / Next.js côté frontend, APIs et services avec Java EE / Spring Boot côté backend, et gestion de bases de données relationnelles et NoSQL (MySQL, PostgreSQL, MongoDB)."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1AzpJoJMd8qfheaSLRbcpmYelsxE1Q9gB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/krys237",
  linkedin: "#https://www.linkedin.com/in/christian-gambou-84b632232/",
  gmail: "#christiangambou17@gmail.com",
  gitlab: "christian.gambou@edoctor-tim.com",
  facebook: "#",
  //medium: "#",
  stackoverflow: "#",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Qu'est ce que je fais ? 🛠  ️",
  subTitle: "DÉVELOPPEUR WEB FULL STACK PASSIONNÉ PAR LA CRÉATION DE SOLUTIONS ROBUSTES ET SCALABLES :)",
  skills: [
    emoji(
      "⚡ Développement d'interfaces utilisateur modernes et réactives avec React.js / Next.js"
    ),
    emoji(
      "⚡ Conception et développement d'APIs REST robustes avec Java EE et Spring Boot"
    ),
    emoji(
      "⚡ Modélisation et gestion de bases de données relationnelles (MySQL, PostgreSQL) et NoSQL (MongoDB)"
    ),
    emoji(
      "⚡ Intégration continue, gestion de version et suivi de projet avec Git, Jenkins, Maven et Jira"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
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
      skillName: "SQL / MySQL / PostgreSQL",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
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
      skillName: "Jira",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Jenkins",
      fontAwesomeClassname: "fab fa-jenkins"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
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
      descBullets: ["Journal de santé",
         "Langages de programmation Et Intelligence Artificielle",
         "Programmation mobile et web",
         "Gestion de base de données",
         "Systèmes d'exploitation (OS) et Architecture des ordinateurs",
         "Gestion de projet et gestion de la qualité",
         "Gestion de la sécurité informatique",
         "Gestion de la conformité réglementaire",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "65%" //Insert relative in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "75%"
    },
    {
      Stack: "Base de données",
      progressPercentage: "70%"
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
        "Création d’une application de bureau avec python, sqlite et tKinter pour la gestion des étudiants en stage dans l’entreprise.",
        "Développement d’une application mobile ade Suivi de données médicales."
      ]
    },
    {
      role: "Développeur Full Stack",
      company: "e-Dr TIM",
      companylogo: require("./assets/images/logo-edoctor.webp"),
      date: "2025 – 2026",
      desc: "Développeur Full Stack pour l'entreprise e-Dr TIM, en charge du développement web et mobile de la plateforme de santé digitale.",
      descBullets: [
        "e-Dr TIM DMI : dossier médical informatisé, plateforme web (edoctor-tim.com) de gestion des dossiers patients.",
        "6 Connect : application de prise de paramètres de 6 facteurs de risque pour la prédiction de maladies."
      ]
    },
    {
      role: "Développeur Web Full Stack Freelance",
      company: "Freelance",
      companylogo: require("./assets/images/logo-skytrack.png"),
      date: "2024 – 2026",
      desc: "Conception et développement de plateformes web complètes (frontend, backend, base de données) pour divers clients, en parallèle de mes activités salariées.",
      descBullets: [
        "Sky Track : application web de suivi et de gestion développée en Full Stack.",
        "GuardianTrack360 : solution de géolocalisation et de suivi en temps réel (site vitrine + application web).",
        "TontineX360 : plateforme de gestion de tontines en ligne (site vitrine + application web)."
      ]
    },
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
  title: "Project",
  subtitle: "QUELQUES PROJETS WEB FULL STACK SUR LESQUELS J'AI TRAVAILLÉ",
  projects: [
    {
      image: require("./assets/images/logo-edoctor.webp"),
      projectName: "e-Dr TIM",
      projectDesc: "Plateforme de santé digitale : dossier médical informatisé et suivi de données médicales.",
      footerLink: [
        {
          name: "Site vitrine",
          url: "https://edoctor-tim.com/"
        }
      ]
    },
    {
      image: require("./assets/images/logo-skytrack.png"),
      projectName: "Sky Track",
      projectDesc: "Application web de suivi et de gestion développée en Full Stack.",
      footerLink: [
        {
          name: "Voir l'application",
          url: "https://sky-track-puce.vercel.app/"
        }
      ]
    },
    {
      image: require("./assets/images/logo-guardian.png"),
      projectName: "GuardianTrack360",
      projectDesc: "Solution de géolocalisation et de suivi en temps réel, avec site vitrine et application web.",
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
      image: require("./assets/images/logo-tontinex.png"),
      projectName: "TontineX360",
      projectDesc: "Plateforme de gestion de tontines en ligne, avec site vitrine et application web.",
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
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "N'hésitez pas à télécharger mon CV",

  // Please Provide with Your Podcast embeded Link
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
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
