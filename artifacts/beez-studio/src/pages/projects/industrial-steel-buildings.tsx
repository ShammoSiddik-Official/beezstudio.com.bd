import ProjectCategory from "../project-category";

export default function IndustrialSteelBuildings() {
  const projects = [
    {
      name: "Jong Hyun Hi-Tech",
      location: "Mongla EPZ",
      images: [
        "@assets/1_9_-_Photo_1779055743790.jpg",
        "@assets/1_5_-_Photo_1779055743790.jpg",
        "@assets/1_3_-_Photo_1779055743790.jpg",
        "@assets/2_12_-_Photo_1779055743791.jpg",
      ],
    },
    {
      name: "Enam Food & Beverage Industries Ltd.",
      location: "Savar",
      images: [
        "@assets/1_4_-_Photo_1779055743791.jpg",
        "@assets/1_1_-_Photo_1779055743791.jpg",
        "@assets/1_2_-_Photo_1779055743791.jpg",
        "@assets/1_7_-_Photo_1779055743792.jpg",
      ],
    },
    {
      name: "Lucerne Cocoa & Chocolate Products",
      location: "Gazipur",
      images: [
        "@assets/1_4 - Photo.jpg",
        "@assets/1_5_-_Photo_1779055743790.jpg",
        "@assets/1_3_-_Photo_1779055743790.jpg",
        "@assets/2_12_-_Photo_1779055743791.jpg",
      ],
    },
    {
      name: "TK Food & Beverage Factory",
      location: "Narayanganj",
      images: [
        "@assets/1_4_-_Photo_1779055743791.jpg",
        "@assets/1_1_-_Photo_1779055743791.jpg",
        "@assets/1_2_-_Photo_1779055743791.jpg",
        "@assets/1_7_-_Photo_1779055743792.jpg",
      ],
    },
    {
      name: "Vintage Denim Studio",
      location: "Ishwardi EPZ",
      images: [
        "@assets/1_9_-_Photo_1779055743790.jpg",
        "@assets/1_5_-_Photo_1779055743790.jpg",
        "@assets/1_3_-_Photo_1779055743790.jpg",
        "@assets/2_12_-_Photo_1779055743791.jpg",
      ],
    },
    {
      name: "Nitol Royal Denim Ltd.",
      location: "Kalia Chapra, Kishoregonj",
      images: [
        "@assets/1_4_-_Photo_1779055743791.jpg",
        "@assets/1_1_-_Photo_1779055743791.jpg",
        "@assets/1_2_-_Photo_1779055743791.jpg",
        "@assets/1_7_-_Photo_1779055743792.jpg",
      ],
    },
    {
      name: "Self Innovation",
      location: "Gazipur",
      images: [
        "@assets/1_9_-_Photo_1779055743790.jpg",
        "@assets/1_5_-_Photo_1779055743790.jpg",
        "@assets/1_3_-_Photo_1779055743790.jpg",
        "@assets/2_12_-_Photo_1779055743791.jpg",
      ],
    },
    {
      name: "Seiko Processing Plant",
      location: "Cumilla EPZ",
      images: [
        "@assets/1_4_-_Photo_1779055743791.jpg",
        "@assets/1_1_-_Photo_1779055743791.jpg",
        "@assets/1_2_-_Photo_1779055743791.jpg",
        "@assets/1_7_-_Photo_1779055743792.jpg",
      ],
    },
  ];

  return (
    <ProjectCategory
      categoryName="Industrial Steel Buildings"
      description="Engineered for performance, designed with purpose. Our industrial steel structures combine structural integrity with architectural consideration — delivering facilities built to last across Bangladesh's manufacturing heartlands."
      projects={projects}
    />
  );
}
