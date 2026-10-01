// Everything about you that appears on the site, in one place.
// Projects live in src/content/projects/ as Markdown files instead.

export const site = {
  name: 'Ibrahim Adeshina',
  title: 'Ibrahim Adeshina, software engineer',
  description:
    'Software engineer in Glasgow specialising in backend systems: APIs, data models, integrations, and the tests that prove they work.',

  // Top of the homepage
  headline: 'Software that holds up under load, retries and bad data.',
  intro:
    "I'm Ibrahim Adeshina, a software engineer in Glasgow specialising in backend systems: APIs, data models, integrations, and the tests that prove they work.",
  facts: [
    { label: 'Focus', value: 'Backend systems, APIs, data integrity' },
    { label: 'Stack', value: 'Python, Django, FastAPI, PostgreSQL, TypeScript' },
    { label: 'Experience', value: '2+ years, Huawei and MaxGood' },
    { label: 'Status', value: 'Open to roles across the UK', highlight: true },
  ],

  // Links. To update your CV, replace the file in public/ and keep this name.
  email: 'ibrahim.adeshina.10@gmail.com',
  github: 'https://github.com/IbraCoded',
  linkedin: 'https://linkedin.com/in/ibrahim-adeshina',
  cv: '/Ibrahim_Adeshina_CV.pdf',

  // About section, one string per paragraph. The first is shown larger.
  about: [
    "I trained as an electrical and electronics engineer at the University of Ilorin, then moved into software. Since then I've built incident workflows for telecom operators at Huawei, shipped a Slack integration for an AI start-up in Canada, and taken on freelance work across Python and TypeScript.",
    "I'm drawn to the parts of a system people hope never break: the database rules, the retries, the integrations with someone else's API. Right now I'm finishing an MSc in Advanced Computer Science with Software Engineering at Strathclyde.",
  ],

  // Experience, newest first. `current: true` highlights the dates.
  experience: [
    {
      dates: 'Jan 2026 to Jan 2027',
      title: 'MSc Advanced Computer Science, University of Strathclyde',
      current: true,
    },
    {
      dates: 'Sep to Nov 2025',
      title: 'Software Engineering Intern, MaxGood.work',
      detail: 'Remote, Canada',
    },
    {
      dates: 'Jan 2024 to Oct 2025',
      title: 'Software Automation Engineer, Huawei Technologies',
    },
    {
      dates: '2022 to now',
      title: 'Freelance full-stack engineer',
      detail: 'Platr, Asolar, David Bukola Foundation',
    },
  ] as { dates: string; title: string; detail?: string; current?: boolean }[],

  contactHeadline: "Hiring a software engineer in the UK? Let's talk.",
};
