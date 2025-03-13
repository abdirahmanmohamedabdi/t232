import { Calendar, MapPin, Users } from "lucide-react"
import Link from "next/link"

export default function HistoryPage() {
  return (
    <div className="bg-[#F5F8FF] font-font min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/placeholder.svg?height=1000&width=2000')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#212245]/80 to-[#212245]/60"></div>
        <div className="relative z-10 max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#64C6C4]/30 text-white text-sm font-medium mb-6 backdrop-blur-sm">
            <Calendar className="w-4 h-4" />
            <span>Our Journey</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Our History</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4">
            The story of how Mustaqbal began and evolved to empower communities
          </p>
        </div>
      </div>

      {/* Timeline Indicator */}
      <div className="container mx-auto px-6 py-8">
        <div className="flex items-center justify-center space-x-4 text-[#212245]">
          <div className="flex items-center">
            <Calendar className="w-5 h-5 mr-2" />
            <span className="font-medium">Founded with purpose</span>
          </div>
          <div className="h-0.5 w-12 bg-[#64C6C4]"></div>
          <div className="flex items-center">
            <MapPin className="w-5 h-5 mr-2" />
            <span className="font-medium"> Kenya</span>
          </div>
          <div className="h-0.5 w-12 bg-[#64C6C4]"></div>
          <div className="flex items-center">
            <Users className="w-5 h-5 mr-2" />
            <span className="font-medium">Empowering communities</span>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-12 space-y-12 max-w-4xl">
        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#212245] mb-4 relative inline-block">
            Our History
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#64C6C4] rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            Mustaqbal was founded with a clear vision: to address the growing digital and economic inequalities faced by
            women and youth in marginalized communities. Our story is one of hope, empowerment, and progress—a journey
            driven by the desire to create meaningful change for those who have been historically underserved.
          </p>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#212245] mb-4 relative inline-block">
            Why Mustaqbal Was Founded
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#64C6C4] rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            Mustaqbal was founded to bridge the gap in access to education, technology, and leadership opportunities for
            women and youth in marginalized communities, particularly in  Kenya. These areas face
            significant barriers that limit individuals' ability to thrive, and Mustaqbal seeks to break the cycle of
            poverty and inequality by providing essential resources, education, and advocacy to create lasting change.
          </p>
        </div>

        <div className="relative w-full h-80 rounded-xl shadow-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-[#212245]/80 to-transparent z-10"></div>
          <img
            src="/history.jpg?height=800&width=1600"
            alt="Mustaqbal's journey through the years"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center p-6">
            <p className="text-white text-2xl font-semibold drop-shadow-lg text-center max-w-3xl">
              Empowering communities through digital education since our founding
            </p>
          </div>
        </div>

        <div className="bg-white p-8 md:p-10 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/10">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#212245] mb-4 relative inline-block">
            2024: Expanding Our Reach
            <div className="absolute -bottom-2 left-0 w-1/3 h-1 bg-[#64C6C4] rounded-full"></div>
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mt-6">
            By 2024, Mustaqbal expanded its impact through advocacy campaigns for gender equality and youth leadership
            programs, focusing on economic empowerment, social justice, and community-driven solutions. These
            initiatives have helped inspire broader societal changes while empowering individuals to take charge of
            their futures.
          </p>
        </div>

        {/* Navigation to other sections */}
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <Link
            href="/our-story/team"
            className="inline-flex items-center justify-center px-6 py-3 bg-white border border-[#64C6C4]/30 hover:bg-[#64C6C4]/10 rounded-full text-[#212245] font-medium transition-all shadow-md hover:shadow-lg"
          >
            Meet Our Team
          </Link>
          <Link
            href="/our-story/mission"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#212245] hover:bg-[#2d2e5f] rounded-full text-white font-medium transition-all shadow-md hover:shadow-lg"
          >
            Explore Our Mission
          </Link>
        </div>
      </div>
    </div>
  )
}

