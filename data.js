const languages = [
  { name: "Python", proficiency: "Advanced" },
  { name: "C++", proficiency: "Beginner" },
  { name: "JavaScript", proficiency: "Intermediate" },
  { name: "PHP", proficiency: "Advanced" },
  { name: "HTML", proficiency: "Advanced" },
  { name: "CSS", proficiency: "Advanced" },
];


const skills = [
    { name: "Web Development", percentage: 80 },
    { name: "Penetration Testing", percentage: 70 },
    { name: "Competitive Programming", percentage: 30 },
    { name: "Math Olympiad", percentage: 74 },
  ];
const email = "minar@duck.com";
const asciiArt = (
  <pre>
    {`
_______  __   __  _______  __   __  _______  __    _ 
|       ||  | |  ||       ||  | |  ||       ||  |  | |
|  _____||  |_|  ||   _   ||  |_|  ||   _   ||   |_| |
| |_____ |       ||  | |  ||       ||  | |  ||       |
|_____  ||       ||  |_|  ||       ||  |_|  ||  _    |
_____| ||   _   ||       | |     | |       || | |   |
|_______||__| |__||_______|  |___|  |_______||_|  |__|

     `}{" "}
  </pre>
);

const getRandomColor = () => {
  const colors = [
    "#3498db",
    "#e74c3c",
    "#6C757D",
    "#d64161",
    "#6b5b95",
    "#feb236",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};
const getRandomGradientColor = () => {
  const startColor = getRandomColor();
  const endColor = getRandomColor();

  const gradientAngle = `${Math.floor(Math.random() * 360)}deg`;

  return `linear-gradient(${gradientAngle}, ${startColor}, ${endColor})`;
};


const projects = [
  {
    title: "Minimal Portfolio",
    description:
      "A minimal portfolio template, developed using Next.js",
    link: "http://sh0von.me/",
  },
  {
    title: "Daily Sparks",
    description:
      "A web app which show unique idea in daily basis , develped using Next.js",
    link: "https://github.com/sh0von/dailysparks",
  },
  {
    title: "WRE Materials (CUET)",
    description:
      "A web app which contains all the materials of Water Resources Engineering Department of CUET, developed using Next.js",
    link: "https://github.com/sh0von/cuetwre",
  },
  {
    title: "Tuition Management System",
    description:
      "A web app for managing tuition center, developed using Flask and MongoDB.",
    link: "#",
  },
  {
    title: "Hydro Vapor Lang",
    description:
      "A basic programming language idea which is developed using Python and interpret using Flask web.",
    link: "https://github.com/sh0von/HydroVapour",
  },
  {
    title: "Codeforces Solution",
    description:
      "All list of my solved problem in CF",
    link: "https://github.com/sh0von/codeforces-solution-in-python",
  },
  {
    title: "Wolfram Alpha Messenger Bot",
    description:
      "A messenger bot which can solve math problem and show wolfram alpha result.",
    link: "https://github.com/sh0von/WolframAlpha-Messenger-Bot",
    
  },
  
];
const ctfAchievements = [
  {
    name: "Antarjal Maze CTF",
    position: "42 th",
  },
  {
    name: "BUET CSE Fest 2023",
    position: "70 th",
  },
  {
    name: "KingSquad CTF 2023",
    position: "374 th",
  },
 
];


const socialMedia = [
  {
    name: "Facebook",
    url: "https://www.facebook.com/minar.svn",
    iconClass: "fa fa-facebook",
    color: getRandomColor(),
  },
  {
    name: "Gthub",
    url: "https://github.com/sh0von",
    iconClass: "fa fa-github",
    color: getRandomColor(),
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourhandle",
    iconClass: "fa fa-twitter",
    color: getRandomColor(),
  },
 
];

export { languages, skills, email, projects, asciiArt, getRandomColor,ctfAchievements ,socialMedia,getRandomGradientColor};
