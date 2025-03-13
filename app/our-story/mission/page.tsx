import { Heart, Globe, Shield, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MissionPage() {
  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/placeholder.svg?height=1000&width=2000')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#212245]/80 to-[#212245]/60"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#64C6C4]/30 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <Heart className="w-4 h-4" />
            <span>Our Purpose</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Our Mission</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4">
            Empowering communities through digital education and technology
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container mx-auto px-6 py-16 max-w-4xl">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#212245] mb-4 relative inline-block">
            Our Mission
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#64C6C4] rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            Mustaqbal is dedicated to empowering marginalized communities
            Kenya through digital education and technology. Our mission is to provide women and youth with the
            skills, knowledge, and opportunities to learn, innovate, and earn, bridging the gap between poverty
            and sustainable development. By equipping individuals with essential digital skills, we aim to foster
            economic empowerment, social inclusion, and long-term progress in underserved regions.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/10 mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#212245] mb-4 relative inline-block">
            Our Vision
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#64C6C4] rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            Our vision is to cultivate an inclusive digital society where women and youth have the empowerment
            and resources to flourish. We believe in the transformative power of equitable access to technology
            and digital skills, especially in underserved regions. By providing these essential tools, we aim to
            drive socio-economic progress and create a more inclusive and resilient society. At Mustaqbal, we see
            a future where digital empowerment leads to sustainable development, enabling every individual,
            regardless of their background, to reach their full potential and contribute to the growth of their
            communities.
          </p>
        </div>

        {/* Goals Section */}
        <div className="bg-[#212245] text-white p-8 md:p-12 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">Our Key Goals</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <GoalItem>
              Empower Women & Youth: Equip marginalized women and youth with digital skills to
              enhance their job opportunities and quality of life.
            </GoalItem>
            <GoalItem>
              Bridge the Digital Divide: Provide equitable access to technology and education in
              underserved regions to promote socio-economic progress.
            </GoalItem>
            <GoalItem>
              Promote Economic Empowerment: Enable individuals to innovate, learn, and achieve
              financial independence through digital skills.
            </GoalItem>
            <GoalItem>
              Foster Social Inclusion: Ensure equal access to digital opportunities, reducing inequality and
              empowering underserved communities.
            </GoalItem>
            <GoalItem className="md:col-span-2">
              Support Sustainable Development: Use digital literacy to break the cycle of poverty and
              foster long-term growth in marginalized areas.
            </GoalItem>
          </div>
        </div>

        {/* Impact Areas */}
        <h2 className="text-3xl font-bold text-[#212245] mb-8 text-center">Our Impact Areas</h2>
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ImpactCard
            icon={<Globe className="w-6 h-6 text-white" />}
            title="Digital Education"
            description="Providing essential digital skills training to women and youth in marginalized communities."
          />
          <ImpactCard
            icon={<Shield className="w-6 h-6 text-white" />}
            title="Economic Empowerment"
            description="Creating pathways to financial independence through digital skills and entrepreneurship."
          />
          <ImpactCard
            icon={<Heart className="w-6 h-6 text-white" />}
            title="Community Development"
            description="Fostering community-driven solutions and leadership for sustainable change."
          />
        </div>

        {/* Call to Action */}
        <div className="bg-[#64C6C4]/10 font-font rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-font font-bold text-[#212245] mb-4">Join Our Mission</h3>
          <p className="text-lg text-slate-600 mb-6">
            Be part of our journey to empower marginalized communities through digital education and technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/our-story/history"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#64C6C4]/30 hover:bg-[#64C6C4]/10 rounded-full text-[#212245] font-medium transition-all shadow-md hover:shadow-lg"
            >
              Our History
            </Link>
            <Link
              href="/our-story/team"
              className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#64C6C4]/30 hover:bg-[#64C6C4]/10 rounded-full text-[#212245] font-medium transition-all shadow-md hover:shadow-lg"
            >
              Meet Our Team
            </Link>
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#212245] hover:bg-[#2d2e5f] rounded-full text-white font-medium transition-all shadow-md hover:shadow-lg"
            >
              Get Involved
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function GoalItem({ children, className = "" }) {
  return (
    <div className={`bg-white/10 p-5 rounded-lg backdrop-blur-sm ${className}`}>
      <div className="flex items-start">
        <div className="bg-[#64C6C4] rounded-full p-1 mr-3 mt-1">
          <svg
            className="w-3 h-3 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <p className="text-white/90">{children}</p>
      </div>
    </div>
  );
}

function ImpactCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/10">
      <div className="bg-[#64C6C4] w-12 h-12 rounded-lg flex items-center justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-[#212245] mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}