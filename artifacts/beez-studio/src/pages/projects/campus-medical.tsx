import ProjectCategory from "../project-category";

export default function CampusMedical() {
  const projects = [
    { name: "Student Dormitory", location: "Padma Cantonment, Jajira", images: ["/images/project-1.png", "/images/project-2.png", "/images/project-3.png", "/images/project-4.png"] },
    { name: "Ashiyan Medical College", location: "Barua, Khilkhet, Dhaka", images: ["/images/project-5.png", "/images/project-6.png", "/images/project-7.png", "/images/project-8.png"] },
  ];

  return (
    <ProjectCategory
      categoryName="Campus & Medical Projects"
      description="Educational and healthcare environments require sensitivity to their users. We design campus and medical facilities that support learning, healing, and community — built to serve Bangladesh's institutions for generations."
      projects={projects}
    />
  );
}
