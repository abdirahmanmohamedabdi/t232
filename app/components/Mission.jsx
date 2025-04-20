import { BookOpen, Globe, Users, Lightbulb, ArrowRight } from "lucide-react"
import Link from "next/link"
import FadeIn from "./fadein-wrapper"

export default function OurMission() {
  return (
    <FadeIn>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-4">Our Mission</h2>
            <p className="text-lg text-slate-600">
              At Mustaqbal, our mission is to empower marginalized communities in  Kenya by providing them with the digital education and technology they need to succeed. We are committed to creating opportunities for women and youth to learn, innovate, and earn by building critical digital skills that bridge the gap between poverty and sustainable development. Through our programs, we aim to equip individuals with the tools to thrive in a digital world, unlocking new opportunities for economic empowerment and social advancement.
            </p>
            <p className="text-lg text-slate-600 mt-4">
              Mustaqbal is dedicated to empowering marginalized communities  Kenya through digital education and technology. Our mission is to provide women and youth with the skills, knowledge, and opportunities to learn, innovate, and earn, bridging the gap between poverty and sustainable development. By equipping individuals with essential digital skills, we aim to foster economic empowerment, social inclusion, and long-term progress in underserved regions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img
                src="/class.jpg"
                alt="Digital education in action"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-[#212245]">Empowering Through Digital Literacy and Integrity</h3>
              <p className="text-slate-600">
                Our primary goal is to establish an ICT model campus (Tech Hub) that will serve as a beacon of digital
                empowerment and integrity in the region. Through this initiative, we aim to:
              </p>
              <ul className="space-y-4">
                {[
                  "Provide access to high-speed internet and modern computer facilities",
                  "Offer comprehensive digital skills training programs",
                  "Foster innovation and entrepreneurship in the local community",
                  "Create opportunities for remote work and digital businesses",
                  "Promote mental health and community well-being",
                ].map((item, index) => (
                  <li key={index} className="flex items-start">
                    <ArrowRight className="w-5 h-5 text-[#64C6C4] mr-2 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                icon: BookOpen,
                title: "Digital Literacy",
                description: "Comprehensive training in basic computer skills, internet navigation, and digital tools.",
              },
              {
                icon: Globe,
                title: "Global Connectivity",
                description: "Bridging geographical barriers through high-speed internet access and online resources.",
              },
              {
                icon: Users,
                title: "Community Engagement",
                description:
                  "Fostering a collaborative learning environment and promoting peer-to-peer knowledge sharing, with a focus on mental health and community well-being.",
              },
              {
                icon: Lightbulb,
                title: "Innovation Hub",
                description:
                  "Encouraging creativity and problem-solving through technology-driven projects and initiatives.",
              },
            ].map((item, index) => (
              <div key={index} className="bg-[#F5F8FF] p-6 rounded-lg">
                <div className="w-12 h-12 bg-[#64C6C4] rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-[#212245] mb-2">{item.title}</h4>
                <p className="text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

         
        </div>
      </section>
    </FadeIn>
  )
}
