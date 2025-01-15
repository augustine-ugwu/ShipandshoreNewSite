import Footer from "../components/Footer";
import Navbar from "../components/Navbar2";
import HeroSection from "../components/HeroSection";

export default function ServicesPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="Our Services" backgroundImage="/assets/1543.jpg" />

      {/* Main Section */}
      <div className="text-center bg-white px-4 md:px-32 py-32">
        <h2 className="font-bebas-neue text-2xl mb-8">
          Explore the wide range of services we offer to meet your needs.
        </h2>
        <h1 className="font-bebas-neue text-5xl md:text-6xl text-gray-800 tracking-wide text-center mb-6">
          Our Services at Ship&Shore Group
        </h1>
        <p className="text-lg px-4 mb-12">
          Our core services are structured around Shipping, Agency, and Facility
          Services, each tailored to meet the demands of our clients while
          ensuring safety, efficiency, and compliance with both local and
          international maritime standards.
        </p>

        {/* Services Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {/* Shipping Services */}
          <div className="text-center">
            <img
              src="/assets/shipping.svg"
              alt="Shipping Services"
              className="w-24 h-24 mt-12 mx-auto mb-4"
            />
            <h3 className="font-bebas-neue text-2xl mb-4">Shipping Services</h3>
            <p className="text-gray-700">
              With deep expertise in the maritime industry, our shipping
              services are at the forefront of petroleum product transportation
              and vessel chartering. We provide vessels to the Nigerian National
              Petroleum Corporation (NNPC) for transporting refined petroleum
              products from refineries in Warri and Port Harcourt to key ports
              across Nigeria, including Lagos, Warri, and Calabar. Our range of
              vessels, including Medium Range (MR) tankers and Very Large
              Coastal Vessels (VLCC), is chartered to meet specific market
              demands for coastal transportation and product storage. In
              addition, our tugboats facilitate berthing, unberthing, mooring
              operations, and Ship-to-Ship (STS) transfers at various harbors
              and jetties within Nigeria. As pioneers in bunkering operations,
              we specialize in supplying marine fuels such as AGO and LPFO to
              NNPC and other vessels operating within the West African
              sub-region.
            </p>
            <hr className="mt-16 block md:hidden" />
          </div>

          {/* Agency Services */}
          <div className="text-center">
            <img
              src="/assets/agency.svg"
              alt="Agency Services"
              className="w-24 h-24 mt-12 mx-auto mb-4"
            />
            <h3 className="font-bebas-neue text-2xl mb-4">Agency Services</h3>
            <p className="text-gray-700">
              Our agency services are designed to ensure seamless maritime
              operations for clients locally and internationally. We offer
              professional crewing and manning services for vessels, tugboats,
              and offshore operations. As part of our commitment to the growth
              of Nigeria’s maritime sector, we provide sea-time training to
              develop skilled Nigerian seafarers, equipping them with the
              expertise needed for international standards. In addition to human
              capital development, we act as a reliable agency for chartered
              vessels, ensuring compliance with maritime regulations enforced by
              authorities such as NIMASA, NPA, and IMO. Our expertise ensures
              operational support that keeps our clients’ businesses running
              smoothly.
            </p>
            <hr className="mt-16 block md:hidden" />
          </div>

          {/* Facility Services */}
          <div className="text-center">
            <img
              src="/assets/facility.svg"
              alt="Facility Services"
              className="w-24 h-24 mt-12 mx-auto mb-4"
            />
            <h3 className="font-bebas-neue text-2xl mb-4">Facility Services</h3>
            <p className="text-gray-700">
              We maintain robust partnerships and operational excellence to
              support the global maritime industry. Through our brokerage
              partnerships with international shipping and brokerage firms, we
              offer efficient and effective vessel management solutions. Our
              approach to logistics includes expanding into inland
              transportation, leveraging heavy-duty trucks from our sister
              company, National Trucks Manufacturers Ltd, to transport dry cargo
              and marine fuels across Nigeria.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src="/assets/1543.jpg"
          alt="About Us Background"
          className="w-full h-[90vh] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>

        {/* Text Content */}
        <div className="absolute inset-0 md:p-20 p-6 md:pt-40 pt-16">
          {/* Heading */}
          <h1 className="font-bebas-neue text-white text-4xl md:text-8xl uppercase">
            About Ship & Shore Services Limited
          </h1>

          {/* Paragraph */}
          <p className="text-white text-justify mt-4 md:text-xl leading-relaxed">
            Since our incorporation in 1987, Ship & Shore Services Limited has
            grown to become a trusted name in Nigeria’s shipping and oil & gas
            sectors. Over the years, we have pioneered many industry
            advancements, including being the first company in Nigeria and West
            Africa to receive ISM certification from Lloyds Register, London—a
            testament to our commitment to safety and quality. Our track record
            includes supplying NNPC coastal vessels and tugboats for over 30
            years, facilitating petroleum product transportation and
            Ship-to-Ship operations. In 1998, we entered a Joint Bunkering
            Agreement with NNPC, ensuring a consistent supply of marine fuel to
            nominated vessels. Furthermore, our Joint Venture with Redstar Oil &
            Gas has enabled us to successfully barge and transport crude oil to
            FPSO vessels. In collaboration with NIDAS Marine Ltd, a subsidiary
            of NNPC, we recently established a long-term bunkering agreement for
            marine fuel supply. To further diversify, we have expanded our
            operations into the upstream petroleum sector and inland logistics.
            At Ship & Shore Services Limited, we are dedicated to maintaining
            our leadership position in the maritime industry by delivering
            innovative solutions, upholding safety standards, and fostering
            sustainable growth.
          </p>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
