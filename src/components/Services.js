// src/components/Services.js
const services = [
  {
    title: "Vessel Chartering",
    description:
      "Providing and chartering vessels for coastal transportation of petroleum products, crude oil, and derivatives.",
    icon: "/icons/vessel-chartering.svg",
  },
  {
    title: "Marine Logistics",
    description:
      "Offering comprehensive marine logistics solutions tailored to client needs.",
    icon: "/icons/marine-logistics.svg",
  },
  {
    title: "Tugboat Operations",
    description:
      "Operating a fleet of tugboats to assist in various maritime operations.",
    icon: "/icons/tugboat-operations.svg",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 bg-white shadow-md rounded-lg hover:shadow-lg transition">
              <img
                src={service.icon}
                alt={`${service.title} icon`}
                className="mx-auto mb-4 h-16 w-16"
              />
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
