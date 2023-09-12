"use client";

const Projects = (selected ?: string) => {
  const mock = [
    {
      image: "url(https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?w=996&t=st=1694528885~exp=1694529485~hmac=2035739a9919bdb15cc9d861768918f366c4ee63d9ffa629ffac0635c17bb5f5)",
      title: "JavaScript",
      filter: ["complex"],
      technologies:["typescript","next","node"],
      link:"#",
    },
    {
      image: "url(https://img.freepik.com/free-photo/colorful-wallpaper-background-multicolored-generative-ai_91128-2257.jpg?w=996&t=st=1694528885~exp=1694529485~hmac=2035739a9919bdb15cc9d861768918f366c4ee63d9ffa629ffac0635c17bb5f5)",
      title: "JavaScript",
      filter: ["frontend"],
      technologies:["javascript","typescript","next"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["backend"],
      technologies:["javascript"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["next"],
      technologies:["next"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["react"],
      technologies:["react"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["frontend"],
      technologies:["javascript"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["complex"],
      technologies:["html","css"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["complex"],
      technologies:["javascript","next"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["backend","complex"],
      technologies:["javascript","git","next"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["complex"],
      technologies:["react","typescript","html","css"],
      link:"#"
    },
    {
      image: "url(https://img.freepik.com/free-photo/working-office-desk-with-modern-technology-generated-by-ai_188544-17029.jpg?t=st=1694529192~exp=1694532792~hmac=5aafac384923ac56daf0af34201fddf8ed77abf5d835b24fda3eea73a3551456&w=996)",
      title: "JavaScript",
      filter: ["frontend","complex"],
      technologies:["javascript","react","git"],
      link:""
    },
  ];
  return selected
    ? mock.filter((item) => item.filter.includes(selected))
    : mock;
};

export default Projects;