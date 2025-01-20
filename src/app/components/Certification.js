export default function Certification() {
  return (
    <section className="bg-white p-12">
      <hr className="py-12 md:p-8" />
      <div className="container mx-auto text-center ">
        <h2 className="font-bebas-neue text-4xl tracking-wider text-gray-800">
          Certified By
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 mx-auto max-w-5xl px-4">
        <div className="flex justify-center items-center">
          <img
            src="/assets/Cert_1.png"
            alt="Certification 1"
            className="h-auto max-h-20 w-52"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/Cert_2.png"
            alt="Certification 2"
            className="h-auto max-h-20 w-52"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/Cert_3.png"
            alt="Certification 3"
            className="h-auto max-h-20 w-52"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/Cert_4.png"
            alt="Certification 4"
            className="h-auto max-h-20"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/Cert_5.png"
            alt="Certification 5"
            className="h-auto max-h-20"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/Cert_6.jpg"
            alt="Certification 6"
            className="h-auto max-h-20"
          />
        </div>
        <div className="flex justify-center items-center">
          <img
            src="/assets/Cert_7.jpg"
            alt="Certification 7"
            className="h-auto max-h-20"
          />
        </div>
      </div>
    </section>
  );
}
