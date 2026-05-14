import ProjectCategory from "../project-category";

export default function HospitalProjects() {
  const projects = [
    {
      name: "National Heart Institute Annex",
      images: ["/images/project-4.png", "/images/project-5.png", "/images/project-6.png", "/images/project-7.png"]
    },
    {
      name: "Square Specialized Hospital Wing",
      images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-8.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Hospital Projects" 
      description="State-of-the-art medical facilities combining strict regulatory compliance with patient-centric healing environments."
      projects={projects}
    />
  );
}
