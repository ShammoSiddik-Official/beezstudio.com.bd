import ProjectCategory from "../project-category";

export default function ResidentialHotel() {
  const projects = [
    { name: "3 Star Residential Hotel", location: "Gazipur", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "Cadet Island Apartment City", location: "Purbachal", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Hotel International", location: "Progoti Soroni, Dhaka", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Residential Hotels"
      description="Hospitality architecture that delivers comfort, operational efficiency, and an experience worth returning to. Each project reflects an understanding that a guest's environment shapes their entire stay."
      projects={projects}
    />
  );
}
