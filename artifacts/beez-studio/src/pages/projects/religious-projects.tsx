import ProjectCategory from "../project-category";

export default function ReligiousProjects() {
  const projects = [
    { name: "Noman Mosque", location: "Eliot Ganj, Cumilla", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "DSCSC Mosque", location: "Mirpur Cantonment, Dhaka", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Munira Haroon Bautun Nazat Mosque", location: "Pirojpur", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"] },
    { name: "Bautun Ikra Mosque", location: "Nazirpur", images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Religious Projects"
      description="Sacred spaces demand the highest architectural respect. Our mosques and places of worship honor tradition, community, and the spiritual significance of every detail — from spatial orientation to ornamental craftsmanship."
      projects={projects}
    />
  );
}
