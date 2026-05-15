import ProjectCategory from "../project-category";

export default function BungalowsCottages() {
  const projects = [
    { name: "Ambassador Residence", location: "Nikunjo, Dhaka", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "Bilkis Aktar Residence", location: "Kakrail, Dhaka", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "GE Triplex", location: "Jolshiri, Dhaka", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"] },
    { name: "Tamanna Residence", location: "Chitolmari, Bagerhat", images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"] },
    { name: "Dr. Rezaul Karim Residence", location: "Gulshan-2, Dhaka", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-4.png", "/images/project-6.png"] },
    { name: "Vacation House", location: "Tangail", images: ["/images/project-3.png", "/images/project-5.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Dohar Residence", location: "Dhaka", images: ["/images/project-1.png", "/images/project-4.png", "/images/project-6.png", "/images/project-7.png"] },
    { name: "Aronnaloy", location: "Najirpur, Barishal", images: ["/images/project-2.png", "/images/project-3.png", "/images/project-5.png", "/images/project-8.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Bungalows & Family Cottages"
      description="Private residences designed around how families actually live — intimate, functional, and deeply personal. From riverside retreats to urban villas, every home is as unique as the family it shelters."
      projects={projects}
    />
  );
}
