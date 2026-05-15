import ProjectCategory from "../project-category";

export default function LandscapeProjects() {
  const projects = [
    { name: "Shalbon Eco Resort", location: "Gazipur", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "Australian International School", location: "Dhaka", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Roof Top Garden", location: "Padma Cantonment, Jajira", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"] },
    { name: "Officer's Club Grounds", location: "Padma Cantonment, Jajira", images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"] },
    { name: "Pond Area Development", location: "Padma Cantonment, Jajira", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-4.png", "/images/project-6.png"] },
    { name: "Mongla Resort Grounds", location: "Mongla", images: ["/images/project-3.png", "/images/project-5.png", "/images/project-7.png", "/images/project-8.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Landscape Projects"
      description="Outdoor environments that extend architecture into the natural world — green spaces, resort grounds, and institutional landscapes designed for people. We bring ecological sensitivity and spatial intelligence to every site we shape."
      projects={projects}
    />
  );
}
