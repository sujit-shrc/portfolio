"use client";

const Projects = (selected ?: string) => {
  const mock = [
    {
      image: "url(./projects/time-picker.png)",
      title: "Time Picker",
      filter: ["frontend"],
      technologies:["html","tailwind-css"],
      link:"#",
      code: "https://github.com/mnamesujit/time-picker",
    },
    {
      image: "url(./projects/calculator.png)",
      title: "Calculator",
      filter: ["frontend"],
      technologies:["html","css","javascript"],
      link:"https://mnamesujit.github.io/calculator/",
      code: "https://github.com/mnamesujit/Calculator",
    },
    {
      image: "url(./projects/todo-app.png)",
      title: "Modern Todo App",
      filter: ["frontend"],
      technologies:["javascript","redux","scss","local-storage"],
      link:"https://modern-react-todo-app.netlify.app/",
      code: "https://github.com/mnamesujit/modern-todo-app",
    },
    {
      image: "url(./projects/tribute-page.png)",
      title: "Tribute to Mahi",
      filter: ["frontend"],
      technologies:["html", "css"],
      link:"https://mnamesujit.github.io/tribute-page/",
      code: "https://github.com/mnamesujit/tribute-page",
    },
    {
      image: "url(./projects/safe-your-web-clone.png)",
      title: "Safe Your Web Clone",
      filter: ["frontend"],
      technologies:["react", "typescript", "scss"],
      link:"https://safeyourweb.netlify.app/",
      code: "https://github.com/mnamesujit/safe-your-web-clone",
    },
    {
      image: "url(./projects/dev-to.png)",
      title: "dev.to Clone",
      filter: ["frontend"],
      technologies:["react", "scss", "dev-to"],
      link:"https://mnamesujit-devto.netlify.app/",
      code: "https://github.com/mnamesujit/dev-to-clone",
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "URL Shortner",
      filter: ["backend"],
      technologies:["express","mongodb", "ejs"],
      link:"#",
      code: "https://github.com/mnamesujit/url-shortner",
    },
    {
      image: "url(./projects/pass-gen.png)",
      title: "Password Generator",
      filter: ["frontend"],
      technologies:["typescript","tailwind-css"],
      link:"https://test.nucleus-dev.me/",
      code: "https://github.com/mnamesujit/pass-gen",
    },
    {
      image: "url(./projects/dev-finder.png)",
      title: "dev finder",
      filter: ["frontend"],
      technologies:["html","css","js", "github"],
      link:"https://mnamesujit.github.io/github_dev_finder/",
      code: "https://github.com/mnamesujit/github_dev_finder",
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "prosecdevs-backend",
      filter: ["backend","complex"],
      technologies:["express","mariadb"],
      link:"#",
      code: "https://github.com/mnamesujit/Proesec-dev-b",
    },
    {
      image: "url(projects/safeyourweb-clone.png)",
      title: "SafeYourWeb Clone",
      filter: ["frontend","backend", "complex"],
      technologies:["nextjs","tailwind-css","recharts"],
      link:"https://safeyourweb.netlify.app/",
      code: "https://github.com/mnamesujit/Safe-Your-Web-Clone",
    },
    {
      image: "url(projects/prosecdevs.png)",
      title: "prosecdevs.com",
      filter: ["frontend","backend"],
      technologies:["typescript","tailwind-css","framer-motion"],
      link:"https://prosecdevs.com",
      code: "https://github.com/mnamesujit/prosecdevs",
    },
    {
      image: "url(projects/safeyourweb.png)",
      title: "safeyourweb.com",
      filter: ["frontend","backend"],
      technologies:["typescript","tailwind-css","framer-motion"],
      link:"https://safeyourweb.com",
      code: "https://github.com/mnamesujit/safe-your-web",
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "portfolio",
      filter: ["frontend","backend", "complex"],
      technologies:["nextjs","tailwind-css","recharts"],
      link:"#",
      code: "https://github.com/mnamesujit/nucleus.dev",
    },
  ];
  return selected
    ? mock.filter((item) => item.filter.includes(selected))
    : mock;
};

export default Projects;