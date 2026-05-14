import ProjectCategory from "../project-category";

export default function ReligiousProjects() {
  const projects = [
    {
      name: "Al-Amin Jame Mosque",
      images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"]
    },
    {
      name: "Central Islamic Center",
      images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Religious Projects" 
      description="Sacred spaces demand the highest architectural respect. Our religious projects honor tradition, community, and the spiritual significance of every detail."
      projects={projects}
    />
  );
}
