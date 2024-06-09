/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Bobby's Portfolio",
  description: "Specialized in developing secure banking platforms with modern technologies. Passionate coder, always improving skills through personal projects. Focused on delivering high-quality fintech solutions.",
  og: {
    title: "Prince Bobby Portfolio",
    type: "website",
    url: "#",
  },
};

//Home Page
const greeting = {
  title: "Prince Bobby",
  logo_name: "Prince Bobby",
  nickname: "sch_dey_bore",
  subTitle: "A skilled backend engineer with expertise in API design, database management, and cloud deployments. Proficient in PostgreSQL, MySQL, RabbitMQ, Golang, Clojure, and Java, I excel in disaster recovery and Site Reliability Engineering (SRE).",
  resumeLink: "https://docs.google.com/document/d/1Vvt-X1dA_f3vumhW4e3h14_GVBOnVhBCI_sO6f86_AE/edit?usp=sharing",
  portfolio_repository: "https://github.com/princebobby16/bobby-portfolio",
  githubProfile: "https://github.com/princebobby16",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/ashutosh1919",
  // linkedin: "https://www.linkedin.com/in/ashutosh-hathidara-88710b138/",
  // gmail: "ashutoshhathidara98@gmail.com",
  // gitlab: "https://gitlab.com/ashutoshhathidara98",
  // facebook: "https://www.facebook.com/laymanbrother.19/",
  // twitter: "https://twitter.com/ashutosh_1919",
  // instagram: "https://www.instagram.com/layman_brother/"

  {
    name: "Github",
    link: "https://github.com/princebobby16",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/prince-bobby-505012219/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:princebobby506@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Bonia04552215",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/princekwesibobby/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Creating application backend using Clojure, Java and Golang",
        "⚡ Use Kubernetes and ArgoCD to deploy and auto scale applications",
        "⚡ Building responsive website front end using VueJS and Flutter",
        "⚡ Developing mobile applications using Flutter",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "Golang",
          fontAwesomeClassname: "simple-icons:go",
          style: {
            color: "#81d6f0",
          },
        },
        {
          skillName: "Clojure",
          fontAwesomeClassname: "simple-icons:clojure",
          style: {
            color: "#42f554",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "simple-icons:java",
          style: {
            color: "#4a3e2f",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms suck as Linode, Heroku, Firebase",
        "⚡ Hosting and maintaining web applications on servers with and intranet network along with integration of databases",
        "⚡ Setup and Implement Disaster Recovery System on bank networks to ensure business continuity in the event of a disaster",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa",
      ],
      softwareSkills: [
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "ArgoCD",
          fontAwesomeClassname: "simple-icons:argo",
          style: {
            color: "#d9a273",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    // {
    //   siteName: "LeetCode",
    //   iconifyClassname: "simple-icons:leetcode",
    //   style: {
    //     color: "#F79F1B",
    //   },
    //   profileLink: "https://leetcode.com/layman_brother/",
    // },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/layman_brother",
    // },
    // {
    //   siteName: "Codechef",
    //   iconifyClassname: "simple-icons:codechef",
    //   style: {
    //     color: "#5B4638",
    //   },
    //   profileLink: "https://www.codechef.com/users/ashutosh_1919",
    // },
    // {
    //   siteName: "Codeforces",
    //   iconifyClassname: "simple-icons:codeforces",
    //   style: {
    //     color: "#1F8ACB",
    //   },
    //   profileLink: "http://codeforces.com/profile/layman_brother",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@ashutosh391",
    // },
  ],
};

const degrees = {
  degrees: [
    {
      title: "University of Ghana",
      subtitle: "Bsc in Agricultural Engineering",
      logo_path: "university-of-ghana9757.jpg",
      alt_name: "University of Ghana",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ Specialized in agricultural machinery, soil and water engineering, and precision agriculture.",
        "⚡ Studied renewable energy applications and sustainable practices in farming.",
        "⚡ Applied biotechnology in crop and livestock improvement.",
        "⚡ Gained skills in post-harvest technology and agribusiness management.",
        "⚡ Conducted research and internships on practical agricultural engineering solutions.",
      ],
      website_link: "https://www.ug.edu.gh/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "B.E.C.E. Certificate",
      subtitle: "Prince Boateng Memorial School",
      logo_path: "prince-boateng.jpg",
      certificate_link: "#",
      alt_name: "B.E.C.E",
      color_code: "#8C151599",
    },
    {
      title: "W.A.S.S.C.E Certificate",
      subtitle: "Accra High School",
      logo_path: "Accra_High_School_logo.jpg",
      certificate_link: "#",
      alt_name: "W.A.S.S.C.E",
      color_code: "#00000099",
    },
    {
      title: "Lean Six Sigma White Belt Certificate",
      subtitle: "Six Sigma Society",
      logo_path: "six-sigma.png",
      certificate_link: "https://www.credential.net/a9583ba7-b568-4707-b1f7-2462966da3b3#gs.aijl3n",
      alt_name: "Six Sigma",
      color_code: "#0C9D5899",
    },
    {
      title: "Digital Marketing Certificate",
      subtitle: "Google",
      logo_path: "google_logo.png",
      certificate_link: "#",
      alt_name: "Google",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Internships",
  description:
    "I am a skilled backend engineer with expertise in API design, database management, and cloud deployments. Proficient in PostgreSQL, MySQL, RabbitMQ, Golang, Clojure, and Java, I have experience with disaster recovery systems and client-focused solutions. My background includes leading engineering teams and contributing to various software solutions for banks and hospitals.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Deputy Chief Technology Officer(CTO)",
          company: "Greyparrot IO Company Limited.",
          company_url: "https://www.greyparrot.io",
          logo_path: "logo.jpg",
          duration: "September 2024 - Present",
          location: "Adenta, Fafraha",
          description: "While serving as the Deputy Chief Technology Officer (CTO). My key responsibilities included:\n" +
              "\n" +
              "Leading the engineering team in the design and development of APIs for the Collections Platforms we build, ensuring high performance and reliability.\n" +
              "Collaborating with clients to understand their technical requirements and devising innovative, customized solutions to meet their specific needs.\n" +
              "Overseeing the deployment of applications and services to bank servers, ensuring robust security and seamless integration within client infrastructures.\n" +
              "Assisting the CTO in strategic planning, technology roadmapping, and driving the implementation of cutting-edge technologies to enhance our product offerings.\n" +
              "In this leadership role, I combined technical acumen with strategic vision, contributing to the company's growth and the successful delivery of advanced banking solutions.",
          color: "#000000",
        },
        {
          title: "Senior Backend Engineering Consultant",
          company: "Greyparrot IO Company Limited.",
          company_url: "https://www.greyparrot.io",
          logo_path: "logo.jpg",
          duration: "June 2023 - September 2024",
          location: "Adenta, Fafraha",
          description: "When I became the lead engineer for critical money collections projects. My key responsibilities included:\n" +
              "\n" +
              "Designing and building APIs for various components of the application backend, ensuring seamless integration and functionality across systems.\n" +
              "Engaging directly with clients to understand their specific needs and developing tailored solutions to address their unique challenges.\n" +
              "Deploying applications and services to bank servers, ensuring secure and efficient implementation of our solutions.\n" +
              "This role demanded a blend of technical expertise in API development and client-facing skills, contributing to the successful delivery of customized solutions that enhanced the operational capabilities of banking clients.",
          color: "#000000",
        },
        {
          title: "Part-Time Junior Backend Engineer Developer",
          company: "Infotech Dot Net Systems Company Limited.",
          company_url: "https://www.infotechsystemsonline.com",
          logo_path: "info.png",
          duration: "August 2021 - January 2023",
          location: "Spintex Road",
          description: "At Infotech, a leading provider of software as a service (SaaS) solutions for hospitals, I contributed to the development and enhancement of their Hospital Management System (HIMS). My key responsibilities included:\n" +
              "\n" +
              "Designing and building APIs for various components of the Version 2 application backend, ensuring robust and scalable integration between system modules.\n" +
              "Managing database structures and overseeing version control for APIs, maintaining data integrity and system consistency.\n" +
              "Independently deploying applications and services to the cloud using Jenkins, streamlining continuous integration and delivery processes.\n" +
              "My role required strong technical skills in API development, database management, and cloud deployment, contributing to the successful advancement of HIMS and improving operational efficiency for healthcare providers.",
          color: "#fc1f20",
        },
        {
          title: "Junior Backend Engineering Consultant",
          company: "Greyparrot IO Company Limited.",
          company_url: "https://www.greyparrot.io",
          logo_path: "logo.jpg",
          duration: "October 2021 - June 2023",
          location: "Adenta, Fafraha",
          description: "As a Junior Backend Developer. My key responsibilities included:\n" +
              "\n" +
              "- Implementing a disaster recovery system as a backup for our applications within the banks' environments, ensuring business continuity and data protection.\n" +
              "- Assisting in the design and development of APIs for the Collections Platforms we build.\n" +
              "- Contributing to the maintenance and optimization of database structures using PostgreSQL and MySQL, ensuring efficient data management and retrieval.\n" +
              "- Implementing messaging and task queue systems using RabbitMQ to enhance the scalability and reliability of our applications.\n" +
              "- Developing backend services primarily in Golang and Clojure, focusing on performance and code maintainability.\n" +
              "- Implementing Site Reliability Engineering (SRE) practices to ensure the stability and performance of our systems.\n" +
              "- Collaborating with senior engineers and stakeholders to gather requirements, troubleshoot issues, and deploy updates to bank servers.\n" +
              "\n" +
              "In this role, I gained hands-on experience with a variety of backend technologies and contributed to the delivery of high-quality banking solutions.",
          color: "#0879bf",
        }
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Full Stack Engineer Intern",
          company: "Greyparrot IO Company Limited.",
          company_url: "https://www.greyparrot.io",
          logo_path: "logo.jpg",
          duration: "August 2019 - October 2021",
          location: "Adenta, Fafraha",
          description: "During my internship at Greyparrot IO, a provider of software as a service (SaaS) solutions for banks, I gained valuable experience by working on various projects. My key responsibilities included:\n" +
              "\n" +
              "Working on a church management platform, focusing on features that align with Corporate Social Responsibility (CSR) to enhance community engagement and give back to the community.\n" +
              "Contributing code to the development of our first collections platform, helping to build and optimize backend functionalities.\n" +
              "Assisting in the integration of an API payment gateway for a client, ensuring seamless and secure transaction processing.\n" +
              "This internship allowed me to develop my skills in backend development and contribute to meaningful projects that enhanced my understanding of real-world applications and industry practices.",
          color: "#000000",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "neuro-symbolic-sudoku-solver",
      name: "Neuro-Symbolic Sudoku Solver",
      createdAt: "2023-07-02T00:00:00Z",
      description: "Paper published in KDD KiML 2023",
      url: "https://arxiv.org/abs/2307.00653",
    },
    {
      id: "mdp-diffusion",
      name: "MDP-Diffusion",
      createdAt: "2023-09-19T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/mdp-diffusion/",
    },
    {
      id: "consistency-models",
      name: "Consistency Models",
      createdAt: "2023-10-12T00:00:00Z",
      description: "Blog published in Paperspace",
      url: "https://blog.paperspace.com/consistency-models/",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "prince.jpg",
    description: "I am available on almost every social media platform. You can message me, I will reply within 24 hours. I can help you with Designing and Building of APIs, Android and IOS Apps, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "",
    subtitle: "",
    link: "",
    avatar_image_path: "",
  },
  addressSection: {
    title: "Address",
    subtitle: "Accra, Adenta, Hamburger Street",
    locality: "Adenta",
    country: "Ghana",
    region: "Greater Accra",
    postalCode: "95129",
    streetAddress: "Hamburger Street",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/NvYZqa34Wye4tpS17",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "Prince Bobby - +233550144391",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
