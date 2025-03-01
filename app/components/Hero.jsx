import { Heart, HandHeartIcon as HandHoldingHeart, School, Users } from "lucide-react"
import Link from "next/link"
import FadeIn from "./fadein-wrapper"
export default function Hero() {
  return (
    <FadeIn>
    <section className="relative min-h-screen bg-[#F5F8FF]">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-10 top-20 w-64 h-64 bg-[#64C6C4]/20 rounded-full mix-blend-multiply blur-xl"></div>
        <div className="absolute -right-10 top-40 w-64 h-64 bg-[#212245]/10 rounded-full mix-blend-multiply blur-xl"></div>
        <div className="absolute left-1/3 bottom-20 w-64 h-64 bg-[#64C6C4]/20 rounded-full mix-blend-multiply blur-xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#64C6C4]/20 text-[#212245] text-sm font-medium">
              <Heart className="w-4 h-4" />
              Launching Soon
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#212245] leading-tight">
              Empowering Communities Through <span className="text-[#64C6C4]">Digital Education</span> Across Kenya
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              We're preparing to transform lives in marginalized communities throughout Kenya by providing
              essential digital skills, fostering integrity, and promoting mental health and community well-being for a brighter future.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                href="/get-involved"
                className="inline-flex items-center px-6 py-3 text-white bg-[#212245] hover:bg-[#2d2e5f] rounded-full font-medium transition-colors"
              >
                <HandHoldingHeart className="w-5 h-5 mr-2" />
                Get Involved
              </Link>
              <Link
                href="/our-mission"
                className="inline-flex items-center px-6 py-3 text-[#212245] bg-[#64C6C4]/20 hover:bg-[#64C6C4]/30 rounded-full font-medium transition-colors"
              >
                Learn More
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center px-6 py-3 text-[#212245] bg-[#64C6C4]/20 hover:bg-[#64C6C4]/30 rounded-full font-medium transition-colors"
              >
                How we're making a difference
              </Link>
            </div>
          </div>

          {/* Right Column - Vision & Goals */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/class.jpg"
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
            <div className="absolute -left-8 top-10 bg-white p-4 rounded-xl shadow-lg max-w-[200px] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-[#64C6C4]/20 p-2 rounded-lg">
                  <School className="w-5 h-5 text-[#212245]" />
                </div>
                <div>
                  <p className="font-medium text-[#212245]">Digital Skills</p>
                  <p className="text-sm text-slate-500">Coming Soon</p>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 bottom-20 bg-white p-4 rounded-xl shadow-lg max-w-[200px] hidden md:block">
              <div className="flex items-center gap-3">
                <div className="bg-[#64C6C4]/20 p-2 rounded-lg">
                  <Users className="w-5 h-5 text-[#212245]" />
                </div>
                <div>
                  <p className="font-medium text-[#212245]">Target Communities</p>
                  <p className="text-sm text-slate-500">North Eastern Kenya</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </FadeIn>
  )
}
