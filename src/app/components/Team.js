import React from "react";

const Team = () => {
  const teamMembers = [
    {
      name: "Prince A. A. Ademiluyi",
      position: "Executive Director",
      image: "/assets/Image4.jpg",
    },
    {
      name: "Mr. Mohammed Rehman",
      position: "Executive Director",
      image: "/assets/Image3.jpeg",
    },
    {
      name: "Mr. Tousif Mohammed Paracha",
      position: "Executive Director",
      image: "/assets/Image5.jpg",
    },
    {
      name: "Mr. Emeka Dan Nzelu",
      position: "Director",
      image: "/assets/Image10.jpg",
    },
    {
      name: "Alhaji Nurudeen Tambaya",
      position: "Director",
      image: "/assets/Image11.jpeg",
    },
    {
      name: "Mr. Iftikhar Ahmed",
      position: "COO (Chief Operating Officer)",
      image: "/assets/Image2.jpeg",
    },
    {
      name: "Mr. Jerry O. Omughell",
      position: "GM Admin - Company Secretary",
      image: "/assets/Image8.jpeg",
    },
    {
      name: "Captain Abdullah Khan",
      position: "Master Mariner",
      image: "/assets/Image12.jpeg",
    },
    {
      name: "Mr. Khaqan Abbasi",
      position: "Technical Superintendent",
      image: "/assets/Image13.jpeg",
    },
  ];

  return (
    <section className="bg-white md:pt-32 pt-20 pb-12">
      <div className="container mx-auto text-center">
        <h2 className="font-bebas-neue text-2xl mb-8">Meet Our Team</h2>
        <h1 className="font-bebas-neue md:text-6xl text-4xl">
          You're in good company
        </h1>
        <p className="text-lg py-4 px-4 md:px-48 mb-8">
          Meet our amazing team, a group of dedicated individuals who bring
          unique skills and expertise to the table, working together to achieve
          our common goals and deliver exceptional results.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 p-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-member bg-white p-6 rounded-lg">
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="font-bebas-neue text-xl text-gray-800">
                {member.name}
              </h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
