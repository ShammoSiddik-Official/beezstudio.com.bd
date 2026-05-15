import ProjectCategory from "../project-category";

export default function HospitalProjects() {
  const projects = [
    { name: "Labaid Hospital", location: "Habiganj", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Hospital Projects"
      description="Precision-planned medical facilities that meet international standards while remaining responsive to the specific needs of patients, staff, and visitors. Healthcare architecture that heals beyond its walls."
      projects={projects}
    />
  );
}
