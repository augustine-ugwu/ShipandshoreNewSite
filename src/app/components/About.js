export default function About() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto text-center md:py-24 pt-20 pb-12 p-6">
        <h2 className="font-bebas-neue text-2xl mb-8">WHO WE ARE</h2>
        <h1 className="font-bebas-neue md:text-6xl text-4xl">
          We Offer Agency, Facility & Shipping Services
        </h1>
        <p className="text-lg py-4 px-4 md:px-20">
          Step into the world of seamless logistics and efficient transportation
          with our comprehensive range of maritime services. We provide and
          charter vessels for the coastal transportation of petroleum products,
          crude oil, and its derivatives, ensuring timely and reliable delivery
          of your cargo.
        </p>
        {/* Two-column layout with 7/12 and 5/12 proportions */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12">
          {/* Column 1: Occupies 7/12 */}
          <div className="md:col-span-7">
            <img src="/assets/1542.jpg" />
          </div>
          {/* Column 2: Occupies 5/12 */}
          <div className="md:col-span-5 flex flex-col h-full">
            <h2 className="font-bebas-neue text-2xl text-start mb-2">
              Brief about us
            </h2>
            <p className="text-base text-justify mb-6">
              Ship & Shore Services Limited has been very active and a major
              player in the Nigerian Shipping/Oil & Gas industry. Following the
              need for transportation of petroleum products by the Nigerian
              National Petroleum Corporation (NNPC) in the early 1990, the
              company was one of the pioneer that supplied the NNPC coastal
              vessel on charter for the transportation of refined petroleum
              products AGO, LPFO and PMS from the refineries at Portharcourt and
              Warri and also lightering import vessels through Ship to Ship
              (STS) transfer and discharge at storage facilities in the Lagos
              area. Over the years- 35 years, the company has had the privilege
              of providing vessels and tugboats to the Nigerian National
              Petroleum Corporation (NNPC). Ship & Shore Services Limited based
              on her pedigree, technical and professional experience in
              bunkering and vessel chartering/operations has been privileged to
              charter vessels as well as the only company awarded a bunkering
              contract of supplying NNPC vessels consistently for over 20 years.
            </p>
            <button className="self-start mt-auto inline-flex items-center gap-2 text-sm font-semibold text-white bg-gray-800 px-4 py-2 rounded hover:bg-gray-600 group transition duration-300">
              <a href="/services" className="flex items-center">
                <span>Read More</span>
                <span className="transform group-hover:translate-x-1 transition duration-300 pl-2">
                  →
                </span>
              </a>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
