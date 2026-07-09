import ProjectCategory from "../project-category";

export default function BridgeProjects() {
  const projects = [
    { name: "MIST Bridge", location: "MIST, Dhaka Cantonment", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "100 Ft Span Bridge", location: "Kamrangir Char, Dhaka", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Bridge Projects"
      description="Infrastructure with architectural ambition. Our bridge and civil projects combine structural engineering precision with design sensibility — connecting communities while contributing to the built character of Bangladesh."
      projects={projects}
    />
  );
}
