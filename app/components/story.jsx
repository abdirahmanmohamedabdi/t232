import { Twitter, Linkedin, Users, ArrowRight } from "lucide-react";
import FadeIn from "./fadein-wrapper";
import Link from "next/link";

const teamMembers = [
  {
    name: "Anna Grabowski",
    role: "Social Impact Professional",
    imageUrl: "/anna.jpeg",
    bio: "Anna Grabowski is a dedicated social impact professional with extensive experience in refugee resettlement and programming, education, child and youth mental health and psychosocial support (MHPSS), and sustainable food systems. With a background in program management, grantmaking, and stakeholder engagement, Anna has successfully led initiatives that enhance organizational effectiveness, foster strategic partnerships, and drive systemic change. Anna is committed to creating sustainable solutions that empower vulnerable communities. Passionate about equity, inclusion, innovation, and cross-sector collaboration, she is dedicated to advocating for impactful, community-driven change.",
   
  },
  {
    name: "Mohamed Osman",
    role: "Technology and Business Advisor",
    imageUrl: "/Mohamed.jpg",
    bio: "Mohamed Osman is a strategic and results-driven Technology and Business Advisor with over 15 years of experience in delivering complex technology projects, digital and business transformations, and scaling start-ups. With experience in the private sector and development and humanitarian space, Mohamed brings innovation and expertise in end-to-end project execution, stakeholder engagement, and ensuring on-time, within-budget delivery.",

  },
  {
    name: "Ahmed Mohamed",
  role: "Senior Full Stack Developer",
    imageUrl: "/ahmed.jpg",
    bio: "A highly skilled and versatile Senior Full Stack Developer with over a decade of experience building robust, scalable, and user-centric web and mobile applications. Proficient in front-end and back-end technologies including JavaScript, React, React Native, Node.js, and cloud platforms such as AWS and Firebase. Adept at leading development teams, architecting solutions, and translating business requirements into functional software. Known for writing clean, maintainable code and delivering projects that drive value and efficiency.",
   
  },
// 
];

export default function Story() {
  return (
    <FadeIn>
      {/* About Us Section */}
      <section className="relative bg-gradient-to-b from-[#F5F8FF] to-white overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -left-20 top-20 w-96 h-96 bg-[#64C6C4]/15 rounded-full mix-blend-multiply blur-3xl animate-blob"></div>
          <div className="absolute right-0 top-40 w-96 h-96 bg-[#212245]/10 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-2000"></div>
          <div className="absolute left-1/3 bottom-0 w-96 h-96 bg-[#64C6C4]/15 rounded-full mix-blend-multiply blur-3xl animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#64C6C4]/20 text-[#212245] text-sm font-medium shadow-sm">
              <Users className="w-4 h-4 text-[#64C6C4]" />
              <span>About Us</span>
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-[#212245] leading-tight">
              About Us
            </h1>

            <p className="text-lg text-slate-600 max-w-xl">
              Mustaqbal was founded with a vision to address the growing digital and economic inequalities faced by women and youth in marginalized communities. Our story is one of hope, empowerment, and progress—a journey driven by the desire to create meaningful change for those who have been historically underserved.
            </p>
          </div>

          {/* Team Members Section */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#212245] mb-8">Our Team Members</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
                  <div className="h-82 overflow-hidden">
                    <img
                      src={member.imageUrl || "/placeholder.svg?height=800&width=800"}
                      alt={member.name}
                      className="w-full h-full object-cover object-center transition-transform hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-[#212245]">{member.name}</h3>
                    <p className="text-[#64C6C4] font-medium mb-4">{member.role}</p>
                    <p className="text-slate-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <div className="bg-[#212245] text-white rounded-lg p-8 md:p-12">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Get in Touch with Us</h3>
          <p className="text-lg mb-8">
            We would love to hear from you! Whether you have questions, feedback, or want to get involved, feel free to reach out to us.
          </p>
          <Link
            href="/Contact"
            className="inline-flex items-center px-6 py-3 bg-[#64C6C4] hover:bg-[#5ab3b1] text-[#212245] font-medium rounded-full transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </FadeIn>
  );
}