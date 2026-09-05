// Centralized portfolio content. Keep this the single source of truth so
// future updates only need to happen in one place.

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`

export const personal = {
  name: 'Jershika',
  fullGreeting: "Hi, I'm Jershika",
  roles: ['Computer Science & Engineering Student', 'Frontend Developer Intern'],
  heroSupportingText:
    'Building practical digital experiences with React, UI/UX and modern web technologies while developing a strong foundation in software and backend development.',
  aboutText:
    "I'm a second-year Computer Science and Engineering undergraduate at DMI Engineering College, pursuing my BE under Anna University. Alongside my academics, I bring hands-on industry experience as a Frontend Developer Intern at OpsMonsters Software Consulting Private Limited, where I build React-based, UI/UX-focused frontend interfaces — continually sharpening my craft as a developer.",
  careerObjective:
    'Enthusiastic Computer Science and Engineering student with hands-on experience in frontend React development and UI/UX through my current internship at OpsMonsters Software Consulting Private Limited. Seeking opportunities to strengthen my programming and backend development skills, particularly in Spring Boot, while continuing to build practical software development experience and learn from experienced professionals.',
  photo: assetUrl('jershika.jpg'),
  currentRole: 'Associate System Engineer',
  currentCompany: 'OpsMonsters Software Consulting Pvt. Ltd.',
  email: 'jershika.v@opsmonsters.in',
  emailHref: 'mailto:jershika.v@opsmonsters.in',
  linkedinUrl: 'https://www.linkedin.com/in/jershika-v-42484641b',
  linkedinLabel: 'jershika-v-42484641b',
  githubUrl: 'https://github.com/jershikaa17-code',
  githubLabel: 'jershikaa17-code',
}

export const heroStatus = 'Currently Interning at OpsMonsters Software Consulting Private Limited'

export const aboutStats = [
  { value: '9.1', label: 'Current CGPA' },
  { value: '2', label: 'CSE Topper Semesters' },
  { value: '4', label: 'Applications Created' },
  { value: '1', label: 'Current Internship' },
]

export const experience = {
  role: 'Frontend Developer Intern',
  company: 'OpsMonsters Software Consulting Private Limited',
  status: 'Currently Working',
  focus: ['React', 'Frontend Development', 'UI/UX', 'Responsive Interfaces'],
}

export const education = [
  {
    degree: 'BE Computer Science and Engineering',
    institution: 'DMI Engineering College',
    location: 'Aralvaimozhi, Kanyakumari',
    meta: 'Anna University · Batch 2025–2029',
    result: 'Current CGPA: 9.1',
    detail: [
      { label: 'Semester 1', value: '9.11 CGPA' },
      { label: 'Semester 2', value: '9.07 CGPA' },
    ],
  },
  {
    degree: 'Class XII',
    institution: 'VINS School of Excellence',
    location: 'Chunkankadai, Kanyakumari',
    meta: 'CBSE',
    result: 'School Second Rank',
  },
  {
    degree: 'Class X',
    institution: 'Amala Matriculation Higher Secondary School',
    location: 'Thuckalay, Kanyakumari',
    meta: 'State Board',
  },
]

export const skillGroups = [
  {
    category: 'Programming Languages',
    status: 'Working Knowledge',
    skills: ['C', 'C++', 'Java'],
  },
  {
    category: 'Web Technologies',
    status: 'Working Knowledge',
    skills: ['HTML', 'CSS'],
  },
  {
    category: 'Current Internship Experience',
    status: 'Current Experience',
    skills: ['React', 'Frontend Development', 'UI/UX'],
  },
  {
    category: 'Tools',
    status: 'Working Knowledge',
    skills: ['Visual Studio Code', 'Git', 'GitHub'],
  },
  {
    category: 'Operating System',
    status: 'Working Knowledge',
    skills: ['Windows'],
  },
]

export const achievements = [
  {
    title: 'Semester I CSE Topper',
    cgpa: 9.11,
    detail: 'CGPA',
    icon: 'trophy',
  },
  {
    title: 'Semester II CSE Topper',
    cgpa: 9.07,
    detail: 'CGPA',
    icon: 'medal',
  },
  {
    title: 'CBSE Class XII School Second Rank',
    detail: 'Secured School Second Rank in the CBSE Class XII Board Examination.',
    icon: 'academic',
  },
]

export const projects = [
  {
    title: 'Mobile Application 01',
    subtitle: 'Montessori School Management System',
    platform: 'Android APK',
    description:
      'Designed and developed a school management experience for mobile, focusing on practical school workflows and user-friendly interfaces.',
    link: assetUrl('downloads/Montessori_school.apk'),
    repo: null,
  },
  {
    title: 'Mobile Application 02',
    subtitle: 'Montessori School Management System',
    platform: 'Android APK',
    description:
      'A second mobile application built for the school management system, extending its practical, user-friendly workflows.',
    link: assetUrl('downloads/Montessori_v01.apk'),
    repo: null,
  },
  {
    title: 'Web Application 01',
    subtitle: 'Montessori School Management System',
    platform: 'Web',
    description:
      'A web application for the school management system, focused on practical school workflows and user-friendly interfaces.',
    link: 'https://jershikaa17-code.github.io/montessori-admin-demo/',
    repo: null,
  },
  {
    title: 'Web Application 02',
    subtitle: 'Montessori School Management System',
    platform: 'Web',
    description:
      'A second web application built for the school management system, continuing its focus on usability for staff and students.',
    link: null,
    repo: null,
  },
]

export const strengths = [
  {
    title: 'Quick Learner',
    description: 'Comfortable picking up new tools, frameworks and workflows quickly.',
  },
  {
    title: 'Strong Problem-Solving Skills',
    description: 'Enjoys breaking down practical problems and building working solutions.',
  },
  {
    title: 'Good Communication Skills',
    description: 'Collaborates clearly with teams and communicates ideas effectively.',
  },
]

export const languages = ['English', 'Tamil']

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
