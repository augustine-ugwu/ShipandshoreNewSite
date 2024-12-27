import React from "react";

const Team = () => {
  // Sample team data (replace with actual data)
  const teamMembers = [
    {
      name: "Prince A. A. Ademiluyi",
      position: "Chairman",
      image: "/assets/Image4.jpg",
    },
    {
      name: "Alh. Mohammed Rehman",
      position: "Director",
      image: "/assets/Image3.jpeg",
    },
    {
      name: "Mr. Tousif Mohammed Paracha",
      position: "Director",
      image: "/assets/Image5.jpg",
    },
    {
      name: "Hon. MD Abubakar IGP Retired",
      image: "/assets/Image6.jpg",
    },
    {
      name: "Mr. Luqman Mamuda",
      position: "Director",
      image: "/assets/Image1.jpeg",
    },
    {
      name: "Mr. Jerry O. Omughell",
      position: "General Manager - Finance/Admin",
      image: "/assets/Image8.jpeg",
    },
    {
      name: "Dr. G. Akisanya",
      image: "/assets/Avatar.jpeg",
    },
    {
      name: "Barrister G.T. J. Ademola",
      image: "/assets/Avatar.jpeg",
    },
    {
      name: "Mr. Iftikhar Ahmed",
      position: "COO (Chief Operating Officer)",
      image: "/assets/Image2.jpeg",
    },
    {
      name: "Captain Stephen Sobaeh",
      position: "(Master Marine) - Crew Manager",
      image: "/assets/Avatar.jpeg",
    },
    {
      name: "Captain Malik A Khan",
      position: "(Master Mariner) - (DPA)",
      image: "/assets/Image9.jpeg",
    },
    {
      name: "Mr. Pervez Anwar",
      position: "Marine Engineer",
      image: "/assets/Avatar.jpeg",
    },
  ];

  return (
    <section id="team" className="bg-white py-24 md:py-32">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 p-6">
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
