import ProjectCategory from "../project-category";

export default function BridgeProjects() {
  const projects = [
    {
      name: "Dhaka Elevated Pedestrian Bridge",
      images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"]
    },
    {
      name: "River Link Infrastructure",
      images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"]
    }
  ];

  return (
    <ProjectCategory 
      categoryName="Bridge Projects" 
      description="Infrastructure with architectural ambition. Our bridge and civil projects combine engineering precision with design sensibility."
      projects={projects}
    />
  );
}
