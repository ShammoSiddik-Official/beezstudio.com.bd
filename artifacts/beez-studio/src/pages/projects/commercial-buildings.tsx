import ProjectCategory from "../project-category";

export default function CommercialBuildings() {
  const projects = [
    { name: "Arong", location: "Rajshahi", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "Bible Society", location: "New Eskaton Road, Dhaka", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Bangladesh Auto Corporation Ltd.", location: "Mogbazar, Dhaka", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"] },
    { name: "Olympia Plaza", location: "Savar", images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"] },
    { name: "Abedin Group", location: "Badda Link Road, Dhaka", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-4.png", "/images/project-6.png"] },
    { name: "Hatirjhil Palace", location: "Hatirjhil, Dhaka", images: ["/images/project-3.png", "/images/project-5.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Khulna Shipyard Cafeteria", location: "Khulna", images: ["/images/project-1.png", "/images/project-4.png", "/images/project-6.png", "/images/project-7.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Commercial Buildings"
      description="From corporate headquarters to mixed-use developments, our commercial portfolio reflects the ambitions of Bangladesh's growing business landscape — structures that serve commerce while elevating the urban fabric."
      projects={projects}
    />
  );
}
