import ProjectCategory from "../project-category";

export default function InteriorsDesign() {
  const projects = [
    { name: "VVIP Officers Mess", location: "Sheikh Russel Cantonment, Jajira", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "Shalbon Eco Resort Hotel", location: "Rajendrapur, Dhaka–Mymensingh Highway", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Metro Housing", location: "Basila, Mohammadpur, Dhaka", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-5.png", "/images/project-7.png"] },
    { name: "Trust Bank", location: "Gulshan-2, Dhaka", images: ["/images/project-2.png", "/images/project-4.png", "/images/project-6.png", "/images/project-8.png"] },
    { name: "British Council Office & Exam Venue", location: "Sylhet", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-4.png", "/images/project-6.png"] },
    { name: "Commercial Height", location: "Kishoreganj", images: ["/images/project-3.png", "/images/project-5.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Ahang Interior", location: "Dhaka", images: ["/images/project-1.png", "/images/project-4.png", "/images/project-5.png", "/images/project-8.png"] },
    { name: "Dhaka University Library", location: "Dhaka", images: ["/images/project-2.png", "/images/project-3.png", "/images/project-6.png", "/images/project-7.png"] },
    { name: "Dr. Lutfor Rahman Home", location: "Gulshan-2, Dhaka", images: ["/images/project-1.png", "/images/project-3.png", "/images/project-6.png", "/images/project-8.png"] },
    { name: "Trade Center", location: "Mogbazar, Dhaka", images: ["/images/project-2.png", "/images/project-4.png", "/images/project-5.png", "/images/project-7.png"] },
    { name: "Paramount Office", location: "Gulshan, Dhaka", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-5.png", "/images/project-6.png"] },
    { name: "Dekko Group Office", location: "Dhanmondi, Dhaka", images: ["/images/project-3.png", "/images/project-4.png", "/images/project-7.png", "/images/project-8.png"] },
    { name: "Sylhet Mosque Interior", location: "Sylhet", images: ["/images/project-1.png", "/images/project-5.png", "/images/project-6.png", "/images/project-8.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Interiors Design"
      description="Interior environments crafted to complement the architecture — material-honest, spatially considered, and unmistakably refined. From government facilities to corporate headquarters, every interior tells a story of purpose and craft."
      projects={projects}
    />
  );
}
