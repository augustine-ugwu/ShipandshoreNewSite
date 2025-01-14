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
      <div className="pb-20 bg-grey mx-auto text-center">
        <Team />
      </div>
      <div className="pb-20 mx-auto text-center">
        <h1 className="font-bebas-neue md:text-6xl text-4xl">
          Leading with Expertise and Vision
        </h1>
        <p className="text-lg py-4 px-4 md:px-32 mb-8">
          At Ship & Shore Services Limited, our management team stands at the
          helm of a legacy built on over 35 years of excellence in Nigeria’s
          maritime industry. Through strategic leadership, innovative thinking,
          and a deep understanding of the shipping sector, our management drives
          the company’s mission to deliver exceptional services while fostering
          growth in the Nigerian maritime ecosystem. From pioneering the supply
          of coastal vessels to revolutionizing ship-to-ship operations, the
          management at Ship & Shore Services Limited has been instrumental in
          shaping the company’s storied legacy. Guided by a vision of
          excellence, the team continues to lead with integrity, driving the
          company towards greater heights in the ever-evolving maritime sector.
        </p>
      </div>
      <Footer />
    </div>
  );
}
