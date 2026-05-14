import ProjectCategory from "../project-category";

export default function BungalowsCottages() {
  const projects = [
    {
      name: "Purbachal Eco Retreat",
      images: ["/images/project-3.png", "/images/project-4.png", "/images/project-5.png", "/images/project-6.png"]
    },
    {
      name: "Sylhet Hillside Cottage",
      images: ["/images/project-1.png", "/images/project-2.png", "/images/project-7.png", "/images/project-8.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Bungalows & Cottages" 
      description="Private residences designed around how families actually live — intimate, functional, and deeply personal."
      projects={projects}
    />
  );
}
