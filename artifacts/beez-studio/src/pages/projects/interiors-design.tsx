import ProjectCategory from "../project-category";

export default function InteriorsDesign() {
  const projects = [
    {
      name: "Corporate HQ Interiors",
      images: ["/images/project-4.png", "/images/project-5.png", "/images/project-6.png", "/images/project-7.png"]
    },
    {
      name: "Luxury Penthouse Styling",
      images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-8.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Interiors Design" 
      description="Interior environments crafted to complement the architecture — material-honest, spatially considered, and unmistakably refined."
      projects={projects}
    />
  );
}
