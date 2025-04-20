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
                {/* <Link
                  href="/get-involved"
                  className="inline-flex items-center px-6 py-3.5 text-white bg-[#212245] hover:bg-[#2d2e5f] rounded-full font-medium transition-all shadow-md hover:shadow-lg"
                >
                  <HandHeart className="w-5 h-5 mr-2" />
                  Get Involved
                </Link> */}
                <Link
                  href="/#Mission"
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
      
    </FadeIn>
  );
}