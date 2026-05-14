import ProjectCategory from "../project-category";

export default function CampusMedical() {
  const projects = [
    {
      name: "BRAC University Extension",
      images: ["/images/project-3.png", "/images/project-4.png", "/images/project-5.png", "/images/project-6.png"]
    },
    {
      name: "National Medical College Campus",
      images: ["/images/project-1.png", "/images/project-2.png", "/images/project-7.png", "/images/project-8.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Campus & Medical Projects" 
      description="Comprehensive institutional master planning and educational facilities that support learning, research, and healthcare delivery."
      projects={projects}
    />
  );
}
