const languages = [
  "JavaScript",
  "Python",
  "C++",
  "Java",
  "Ruby",
  "HTML",
  "CSS",
];
const skills = [
    { name: "Web Development", percentage: 80 },
    { name: "Penetration Testing", percentage: 70 },
    { name: "Competitive Programming", percentage: 90 },
    { name: "Capture The Flag (CTF)", percentage: 75 },
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
    "#333333",
  ];

  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
};

const projects = [
  {
    title: "Project 1",
    description:
      "A web application for managing tasks and to-do liA web application for managing tasks and to-do liA web application for managing tasks and to-do liA web application for managing tasks and to-do lists. Built using React and Redux.",
    link: "#dd",
  },
  {
    title: "Project 2",
    description:
      "An e-commerce website for selling fashion accessories. Developed using Node.js and MongoDB.",
    link: "#aa",
  },
  {
    title: "Project 2",
    description:
      "An e-commerce website for selling fashion accessories. Developed using Node.js and MongoDB.",
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "An e-commerce website for selling fashion accessories. Developed using Node.js and MongoDB.",
    link: "#",
  },
  {
    title: "Project 2",
    description:
      "An e-commerce website for selling fashion accessories. Developed using Node.js and MongoDB.",
    link: "#",
  },
 
];

export { languages, skills, email, projects, asciiArt, getRandomColor,colors };
