// Skills configuration with colors
export const skillsConfig = {
  "HTML+CSS": {
    color: "#000000ff",
    bgColor: "#1956a0ff",
  },
  JavaScript: {
    color: "#000000ff",
    bgColor: "#f3c10bff",
  },
  "Web Design": {
    color: "#000000ff",
    bgColor: "#079444ff",
  },
  "Git and GitHub": {
    color: "#000000ff",
    bgColor: "#ef3524ff",
  },
  React: {
    color: "#000000ff",
    bgColor: "#2acafbff",
  },
  Svelte: {
    color: "#000000ff",
    bgColor: "#f64a1fff",
  },
  Vue: {
    color: "#000000ff",
    bgColor: "#2ffe6dff",
  },
  GraphQL: {
    color: "#e10098",
    bgColor: "#fce7f3",
  },
  "Node.js": {
    color: "#68a063",
    bgColor: "#f0fdf0",
  },
  TypeScript: {
    color: "#3178c6",
    bgColor: "#eff6ff",
  },
  Python: {
    color: "#3776ab",
    bgColor: "#eff6ff",
  },
  MongoDB: {
    color: "#47a248",
    bgColor: "#f0fdf4",
  },
  Express: {
    color: "#000000",
    bgColor: "#f9fafb",
  },
  "Next.js": {
    color: "#000000",
    bgColor: "#f9fafb",
  },
};

// People data with simplified skills (just names)
export const peopleData = [
  {
    id: 1,
    name: "Ashraf Khaled",
    image: "/images/Ashraf.jpg",
    bio: "Full-stack web developer who start his journey learning web development and passionate about teaching others.",
    skills: ["HTML+CSS", "JavaScript", "Web Design", "Git and GitHub", "React", "Svelte"],
  },
];

// Helper function to get skill configuration
export const getSkillConfig = (skillName) => {
  return (
    skillsConfig[skillName] || {
      color: "#6b7280",
      bgColor: "#f3f4f6",
    }
  );
};
