import ProjectCategory from "../project-category";

export default function LandscapeProjects() {
  const projects = [
    {
      name: "Hatirjheel Urban Park",
      images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"]
    },
    {
      name: "Corporate Plaza Gardens",
      images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Landscape Projects" 
      description="Ecological and recreational open spaces integrating natural ecosystems with functional public realm design."
      projects={projects}
    />
  );
}
