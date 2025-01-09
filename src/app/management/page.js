import Navbar from "../components/Navbar2";
import Footer from "../components/Footer";
import Team from "../components/Team";
import HeroSection from "../components/HeroSection";

export default function ManagementPage() {
  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* HeroSection */}
      <HeroSection title="Management" backgroundImage="/assets/1541.jpg" />

      {/* Content */}
      <section id="about" className="bg-gray-100">
        <div className="container mx-auto text-center md:py-24 pt-20 pb-12 p-6">
          <h1 className="font-bebas-neue md:text-6xl text-4xl">
            Our Legacy of Maritime Excellence
          </h1>
          <p className="text-lg py-4 px-4 md:px-20">
            Since our incorporation in 1987, Ship & Shore Group has stood as a
            cornerstone of excellence in the Nigerian maritime industry,
            leveraging over three decades of expertise. Our management team
            drives our mission of delivering exceptional maritime solutions,
            underpinned by innovation, safety, and quality.
          </p>
          {/* Two-column layout with 7/12 and 5/12 proportions */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
            {/* Column 1: Occupies 7/12 */}
            <div className="md:col-span-5">
              <img src="/assets/1542.jpg" />
            </div>
            {/* Column 2: Occupies 5/12 */}
            <div className="md:col-span-7 flex flex-col h-full">
              <h2 className="font-bebas-neue text-2xl text-start mb-2">
                Empowering Maritime Excellence Through Tailored Solutions
              </h2>
              <div className="text-base text-justify mb-6">
                <p>
                  With a legacy spanning over three decades, we have solidified
                  our position as pioneers and leaders in the Nigerian shipping
                  industry. Our journey is marked by groundbreaking
                  achievements, unwavering dedication to excellence, and a
                  steadfast commitment to advancing the maritime sector.
                </p>
                <h4 className="font-bebas-neue text-2xl mt-6 mb-2">
                  Key Milestones and Achievements
                </h4>
                <ul className="list-disc pl-6">
                  <li>
                    Trailblazers in Safety and Quality: We were the first
                    company in Nigeria and the entire West African sub-region to
                    achieve ISM certification by Lloyd’s Register, London. This
                    milestone underscores our dedication to upholding
                    international safety and quality standards in all our
                    operations.
                  </li>
                  <li>
                    <strong>Pioneers in Coastal Logistics: </strong>
                    Our company has been at the forefront of supplying the
                    Nigerian National Petroleum Corporation (NNPC) with coastal
                    vessels and tugboats, facilitating seamless petroleum
                    product movement, lightering operations, and berthing
                    services across the nation.
                  </li>
                  <li>
                    <strong>Longstanding Strategic Partnerships: </strong>
                    Since 1998, we have been proud partners in a Joint Bunkering
                    Agreement with NNPC, providing marine fuels, including
                    Automotive Gas Oil (AGO) and Low Pour Fuel Oil (LPFO), to
                    nominated vessels.
                  </li>
                </ul>
                <h4 className="text-md font-semibold mt-6 mb-2">
                  Excellence in Compliance and Industry Expertise:
                </h4>
                <p>
                  Our expertise extends to navigating the complex maritime legal
                  and regulatory landscape, ensuring full compliance with
                  standards set by leading agencies, including:
                </p>
                <ul className="list-disc pl-6">
                  <li>
                    <strong>NIMASA</strong> (Nigerian Maritime Administration
                    and Safety Agency)
                  </li>
                  <li>
                    <strong>NPA</strong> (Nigerian Ports Authority)
                  </li>
                  <li>
                    <strong>NDPRA</strong> (Nigerian Downstream Petroleum
                    Regulatory Authority)
                  </li>
                  <li>
                    <strong>NUPRC</strong> (Nigerian Upstream Petroleum
                    Regulatory Commission)
                  </li>
                  <li>
                    <strong>IMO</strong> (International Maritime Organization)
                  </li>
                  <li>
                    <strong>ISPS</strong> (International Ship and Port Facility
                    Security Code)
                  </li>
                </ul>
                <p className="mt-4">
                  By maintaining rigorous adherence to these regulations, we
                  continue to deliver unparalleled service, setting benchmarks
                  for operational excellence and reliability.
                </p>
                <p className="mt-4">
                  At Ship & Shore Group, our unwavering focus on innovation,
                  compliance, and customer-centric solutions positions us as a
                  trusted partner in driving Nigeria's maritime industry
                  forward.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Team />
      <Footer />
    </div>
  );
}
