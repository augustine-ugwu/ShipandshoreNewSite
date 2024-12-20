// src/components/Hero.js
export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: "url(/path-to-image.jpg)" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to Ship & Shore Services
        </h1>
        <p className="text-lg md:text-2xl mb-8">
          Your Trusted Partner in Maritime Solutions
        </p>
        <a
          href="#services"
          className="bg-primary text-white px-6 py-3 rounded hover:bg-secondary">
          Explore Our Services
        </a>
      </div>
    </section>
  );
}
