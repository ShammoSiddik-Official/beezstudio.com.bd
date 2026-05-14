import ProjectCategory from "../project-category";

export default function ResidentialHotel() {
  const projects = [
    {
      name: "Sea Pearl Resort Extension",
      images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"]
    },
    {
      name: "The Peninsula Boutique Hotel",
      images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Residential Hotel" 
      description="Hospitality architecture that delivers comfort, efficiency, and an experience worth returning to."
      projects={projects}
    />
  );
}
