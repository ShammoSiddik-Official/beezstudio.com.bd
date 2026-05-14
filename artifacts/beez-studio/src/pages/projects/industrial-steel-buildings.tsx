import ProjectCategory from "../project-category";

export default function IndustrialSteelBuildings() {
  const projects = [
    {
      name: "Bashundhara Industrial Complex",
      images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"]
    },
    {
      name: "Gazipur Steel Manufacturing Plant",
      images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"]
    },
    {
      name: "Narayanganj Textile Factory",
      images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Industrial Steel Buildings" 
      description="Engineered for performance, designed with purpose. Our industrial steel structures combine structural integrity with architectural consideration — delivering facilities built to last."
      projects={projects}
    />
  );
}
