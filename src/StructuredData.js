const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mohd Aarif Ansari",
  jobTitle: "Software Engineer",
  url: "https://aarifansari99.github.io/aarifansari/",
  sameAs: [
    "https://www.linkedin.com/in/aarif-ansari-714457246/",
    "https://github.com/aarifansari99",
    "https://twitter.com/aarif_anis_09",
  ],
  email: "aarif454b@gmail.com",
  telephone: "+91-9156584592",
  description:
    "Software engineer with a proven ability to adapt in both self-starting and collaborative environments while staying focused on achieving high-quality results under strict deadlines. Experienced in developing user-centric web applications using React.js.",
  worksFor: {
    "@type": "Organization",
    name: "Crisfood Online LLP",
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Bhiwandi, Thane",
      },
    },
  },
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "BNN College",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bhiwandi, Thane",
        },
      },
      startDate: "2018-04",
      endDate: "2021-06",
      degree: {
        "@type": "EducationalDegree",
        name: "Bachelor of Science in Information Technology",
      },
    },
    {
      "@type": "CollegeOrUniversity",
      name: "Scholar's College",
      location: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Bhiwandi, Thane",
        },
      },
      startDate: "2016-08",
      endDate: "2018-03",
      degree: {
        "@type": "EducationalDegree",
        name: "Higher Secondary Certificate in Science IT",
      },
    },
  ],
  skills: [
    "JavaScript",
    "HTML",
    "CSS",
    "SQL (Postgres)",
    "Next.js",
    "React.js",
    "Redux",
    "jQuery",
    "Bootstrap",
    "framer-motion",
    "Tailwind CSS",
    "VS Code",
    "Github",
    "npm",
    "Yarn",
    "Postman",
    "Chrome DevTools",
  ],
};

export default structuredData;
