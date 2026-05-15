import ProjectCategory from "../project-category";

export default function IndustrialSteelBuildings() {
  const projects = [
    { name: "Jong Hyun Hi-Tech", location: "Mongla EPZ", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "Enam Food & Beverage Industries Ltd.", location: "Savar", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Lucerne Cocoa & Chocolate Products", location: "Gazipur", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"] },
    { name: "TK Food & Beverage Factory", location: "Narayanganj", images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"] },
    { name: "Vintage Denim Studio", location: "Ishwardi EPZ", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-4.png", "/images/project-6.png"] },
    { name: "Nitol Royal Denim Ltd.", location: "Kalia Chapra, Kishoregonj", images: ["/images/project-3.png", "/images/project-5.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Self Innovation", location: "Gazipur", images: ["/images/project-1.png", "/images/project-4.png", "/images/project-6.png", "/images/project-7.png"] },
    { name: "Seiko Processing Plant", location: "Cumilla EPZ", images: ["/images/project-2.png", "/images/project-3.png", "/images/project-5.png", "/images/project-8.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Industrial Steel Buildings"
      description="Engineered for performance, designed with purpose. Our industrial steel structures combine structural integrity with architectural consideration — delivering facilities built to last across Bangladesh's manufacturing heartlands."
      projects={projects}
    />
  );
}
