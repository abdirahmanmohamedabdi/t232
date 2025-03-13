import { Heart, HandHeart, School, Users, ArrowRight, Globe, Shield } from "lucide-react";
import Link from "next/link";
import FadeIn from "./fadein-wrapper";

export default function Hero() {
  return (
    <FadeIn>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#F5F8FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-20 w-96 h-96 bg-[#64C6C4]/15 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
          <div className="absolute right-0 top-40 w-96 h-96 bg-[#212245]/10 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/3 bottom-0 w-96 h-96 bg-[#64C6C4]/15 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Column - Main Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#64C6C4]/20 text-[#212245] text-sm font-medium shadow-sm">
                <Heart className="w-4 h-4 text-[#64C6C4]" />
                <span>Launching Soon</span>
              </div>

              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#212245] leading-tight">
                Empowering Communities Through{" "}
                <span className="text-[#64C6C4] relative">
                  Digital Education
                  <svg
                    className="absolute -bottom-2 left-0 w-full h-3 text-[#64C6C4]/30"
                    viewBox="0 0 200 8"
                    preserveAspectRatio="none"
                  >
                    <path d="M0,5 C50,0 150,0 200,5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>{" "}
                Across Kenya
              </h1>

              <p className="text-lg text-slate-600 max-w-xl">
                We're transforming lives in marginalized communities throughout Kenya by providing essential digital
                skills, fostering integrity, and promoting mental health and community well-being for a brighter future.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/get-involved"
                  className="inline-flex items-center px-6 py-3.5 text-white bg-[#212245] hover:bg-[#2d2e5f] rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                >
                  <HandHeart className="w-5 h-5 mr-2" />
                  Get Involved
                </Link>
                <Link
                  href="/our-story"
                  className="inline-flex items-center px-6 py-3.5 text-[#212245] bg-white border border-[#64C6C4]/30 hover:bg-[#64C6C4]/10 rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>

              {/* Impact Stats */}
            
            </div>

            {/* Right Column - Vision & Goals */}
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#212245]/20 to-transparent z-10"></div>
                <img
                  src="/pexels.jpeg"
                  alt="Vision for digital education in Kenya"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                />
                {/* Overlay Card */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#212245]/80 to-transparent p-6">
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-white text-sm mb-4">
                    To create a digitally empowered community where every individual has the skills, mental health support, and opportunities to
                    thrive in the modern world, fostering overall community well-being and integrity.
                  </p>
                </div>
              </div>

              {/* Floating Cards */}
            
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="bg-[#212245] text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/placeholder.svg?height=500&width=500')] bg-repeat opacity-5"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 relative inline-block">
              Bridging the Digital Divide
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-[#64C6C4]/70 rounded-full"></div>
            </h2>
            <p className="text-lg text-white/80">
              At Mustaqbal, our mission is to empower women and youth from marginalized communities, particularly in
               Kenya, by providing them with essential digital skills and access to technology.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all">
              <div className="bg-[#64C6C4] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <School className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Tech Literacy</h3>
              <p className="text-white/80">
                Equipping women with digital skills and knowledge needed to thrive in a digital world, enabling better
                job opportunities and improved quality of life.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all">
              <div className="bg-[#64C6C4] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Digital Access</h3>
              <p className="text-white/80">
                Providing equitable access to digital tools, education, and infrastructure for marginalized communities,
                including youth, women, and refugees.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/15 transition-all">
              <div className="bg-[#64C6C4] w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Youth Leadership</h3>
              <p className="text-white/80">
                Fostering leadership and civic engagement among young people to advocate for social change and develop
                innovative solutions for their communities.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/Programs"
              className="inline-flex items-center px-6 py-3 text-[#212245] bg-white hover:bg-[#64C6C4] rounded-full font-medium transition-colors shadow-md"
            >
              Explore Our Programs
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="bg-[#F5F8FF] py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-6 text-center">Our Impact Areas</h2>
            <p className="text-lg text-slate-600 text-center mb-12">
              Through our innovative programs, we're creating lasting change in these key areas:
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/20">
                <h3 className="text-xl font-semibold text-[#212245] mb-3 flex items-center">
                  <div className="bg-[#64C6C4]/20 p-2 rounded-lg mr-3">
                    <School className="w-5 h-5 text-[#212245]" />
                  </div>
                  Education Through Technology
                </h3>
                <p className="text-slate-600">
                  Integrating digital learning into schools, creating open-access educational resources, and offering
                  virtual mentorship programs to enhance learning outcomes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/20">
                <h3 className="text-xl font-semibold text-[#212245] mb-3 flex items-center">
                  <div className="bg-[#64C6C4]/20 p-2 rounded-lg mr-3">
                    <Users className="w-5 h-5 text-[#212245]" />
                  </div>
                  Digital Inclusion
                </h3>
                <p className="text-slate-600">
                  Improving digital access for persons with disabilities and promoting digital safety and cybersecurity
                  awareness across communities.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/20">
                <h3 className="text-xl font-semibold text-[#212245] mb-3 flex items-center">
                  <div className="bg-[#64C6C4]/20 p-2 rounded-lg mr-3">
                    <Globe className="w-5 h-5 text-[#212245]" />
                  </div>
                  E-Governance
                </h3>
                <p className="text-slate-600">
                  Strengthening e-governance and public services to improve transparency and civic participation in
                  local governance.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/20">
                <h3 className="text-xl font-semibold text-[#212245] mb-3 flex items-center">
                  <div className="bg-[#64C6C4]/20 p-2 rounded-lg mr-3">
                    <Shield className="w-5 h-5 text-[#212245]" />
                  </div>
                  Digital Entrepreneurship
                </h3>
                <p className="text-slate-600">
                  Creating a regional ICT hub to support digital entrepreneurship, coding education, and pathways to
                  employment for youth.
                </p>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                href="/Impact"
                className="inline-flex items-center px-6 py-3 text-white bg-[#212245] hover:bg-[#2d2e5f] rounded-full font-medium transition-colors shadow-md"
              >
                See Our Impact
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </FadeIn>
  );
}