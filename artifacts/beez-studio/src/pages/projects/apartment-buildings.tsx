import ProjectCategory from "../project-category";

export default function ApartmentBuildings() {
  const projects = [
    {
      name: "Skyline Residences",
      images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"]
    },
    {
      name: "Dhanmondi Heights",
      images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Apartment Buildings" 
      description="Multi-family residential architecture that balances density with livability — creating communities, not just units."
      projects={projects}
    />
  );
}
