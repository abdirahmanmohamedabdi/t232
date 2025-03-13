import { ArrowRight, BookOpen, Users, Target, History, Sparkles, Heart, Clock, Award } from "lucide-react";
import FadeIn from "../components/fadein-wrapper";
import Link from "next/link";

export default function OurStoryPage() {
  return (
    <div className="bg-[#F5F8FF] font-font min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/placeholder.svg?height=1000&width=2000')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#212245]/80 to-[#212245]/60"></div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg">Our Story</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4">
            Discover the journey of Mustaqbal, a movement of hope, empowerment, and progress.
          </p>
        </div>
      </div>

      {/* Navigation Cards */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto -mt-20 relative z-20">
          <StoryCard
            title="Our History"
            description="Learn about how Mustaqbal was founded and our journey to address digital and economic inequalities."
            link="/our-story/history"
            icon={<History className="w-12 h-12 text-[#64C6C4]" />}
          />
          <StoryCard
            title="Our Team"
            description="Meet the dedicated individuals behind Mustaqbal who are committed to creating positive change."
            link="/our-story/team"
            icon={<Users className="w-12 h-12 text-[#64C6C4]" />}
          />
          <StoryCard
            title="Our Mission"
            description="Discover our mission to empower communities through digital education and technology."
            link="/our-story/mission"
            icon={<Target className="w-12 h-12 text-[#64C6C4]" />}
          />
        </div>

        {/* Brief Overview */}
        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-6">
            Empowering Communities Through Digital Education
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Mustaqbal was founded with a clear vision: to address the growing digital and economic inequalities faced by
            women and youth in marginalized communities. Our story is one of hope, empowerment, and progress—a journey
            driven by the desire to create meaningful change for those who have been historically underserved.
          </p>
          <p className="text-lg text-slate-600 mb-8">
            By 2024, Mustaqbal expanded its impact through advocacy campaigns for gender equality and youth leadership
            programs, focusing on economic empowerment, social justice, and community-driven solutions. These
            initiatives have helped inspire broader societal changes while empowering individuals to take charge of
            their futures.
          </p>
          <Link
            href="/get-involved"
            className="inline-flex items-center px-6 py-3.5 text-white bg-[#212245] hover:bg-[#2d2e5f] rounded-full font-medium transition-all shadow-md hover:shadow-lg"
          >
            Get Involved
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}

function StoryCard({ title, description, link, icon }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all border border-[#64C6C4]/10 h-full flex flex-col">
      <div className="flex items-center justify-center h-48 bg-[#F5F8FF]">
        {icon}
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-[#212245] mb-3">{title}</h3>
        <p className="text-slate-600 mb-6 flex-grow">{description}</p>
        <Link
          href={link}
          className="inline-flex items-center text-[#212245] font-medium hover:text-[#64C6C4] transition-colors"
        >
          Learn More
          <ArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}