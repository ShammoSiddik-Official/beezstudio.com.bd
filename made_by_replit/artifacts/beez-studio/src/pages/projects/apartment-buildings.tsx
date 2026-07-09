import ProjectCategory from "../project-category";

export default function ApartmentBuildings() {
  const projects = [
    { name: "Hasina Residence (G+6)", location: "Durgapur, Cumilla", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "Samir Residence (G+6)", location: "Meradia, Dhaka", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Asif Residence (G+7)", location: "Dhaka", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"] },
    { name: "Bhuiyan Housing (G+7)", location: "Dhaka", images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"] },
    { name: "Plot-L39, Road-08 (G+8)", location: "Meradia, Dhaka", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-4.png", "/images/project-6.png"] },
    { name: "G+9 Storied Apartment", location: "Aftabnagar, Dhaka", images: ["/images/project-3.png", "/images/project-5.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Block-A, Plot-5/6 (G+12)", location: "Chandrima Model Town", images: ["/images/project-1.png", "/images/project-4.png", "/images/project-6.png", "/images/project-7.png"] },
    { name: "Makka Tower (G+13)", location: "Cumilla", images: ["/images/project-2.png", "/images/project-3.png", "/images/project-5.png", "/images/project-8.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Apartment Buildings"
      description="Multi-family residential architecture that balances density with livability — creating communities, not just units. From modest G+6 blocks to landmark G+13 towers, every project is a home for families who deserve quality."
      projects={projects}
    />
  );
}
