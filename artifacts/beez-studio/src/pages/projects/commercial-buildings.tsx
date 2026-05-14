import ProjectCategory from "../project-category";

export default function CommercialBuildings() {
  const projects = [
    {
      name: "Gulshan Commerce Tower",
      images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"]
    },
    {
      name: "Banani Tech Park",
      images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Commercial Buildings" 
      description="From corporate headquarters to mixed-use developments, our commercial portfolio reflects the ambitions of Bangladesh's growing business landscape."
      projects={projects}
    />
  );
}
