import { Twitter, Linkedin, Users } from "lucide-react";
import Link from "next/link";

const people = [
  {
    name: "Anna Grabowski",
    role: "Social Impact Professional",
    imageUrl: "/anna.jpeg",
    bio: "Anna Grabowski is a dedicated social impact professional with extensive experience in refugee resettlement and programming, education, child and youth mental health and psychosocial support (MHPSS), and sustainable food systems. With a background in program management, grantmaking, and stakeholder engagement, Anna has successfully led initiatives that enhance organizational effectiveness, foster strategic partnerships, and drive systemic change. Anna is committed to creating sustainable solutions that empower vulnerable communities. Passionate about equity, inclusion, innovation, and cross-sector collaboration, she is dedicated to advocating for impactful, community-driven change.",
    twitterUrl: "https://twitter.com/annagrabowski",
    linkedinUrl: "https://www.linkedin.com/in/annagrabowski/",
  },
  {
    name: "Mohamed Osman",
    role: "Technology and Business Advisor",
    imageUrl: "/Mohamed.jpg",
    bio: "Mohamed Osman is a strategic and results-driven Technology and Business Advisor with over 15 years of experience in delivering complex technology projects, digital and business transformations, and scaling start-ups. With experience in the private sector and development and humanitarian space, Mohamed brings innovation and expertise in end-to-end project execution, stakeholder engagement, and ensuring on-time, within-budget delivery.",
    twitterUrl: "https://twitter.com/mohamedosman",
    linkedinUrl: "https://www.linkedin.com/in/mohamedosman/",
  },
  {
    name: "Ahmed Mohamed",
    role: "Full Stack Developer",
    imageUrl: "/team/member3.jpg",
    bio: "Ahmed Mohamed is a full stack web developer specializing in building responsive, user-friendly applications. With expertise in both front-end and back-end technologies, Ahmed creates seamless digital experiences from concept to deployment.",
    twitterUrl: "https://twitter.com/ahmedmohamed",
    linkedinUrl: "https://www.linkedin.com/in/ahmedmohamed/",
  },
];

export default function TeamPage() {
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
            <Users className="w-4 h-4" />
            <span>Our People</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white drop-shadow-lg">Our Team</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mt-4">
            Meet the dedicated individuals behind Mustaqbal who are committed to creating positive change
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-4">Leadership Team</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our team brings together diverse expertise and a shared passion for empowering marginalized communities
            through digital education and technology.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {people.map((person) => (
            <TeamMember key={person.name} person={person} />
          ))}
        </div>
      </div>
    </div>
  );
}

function TeamMember({ person }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all border border-[#64C6C4]/10">
      <div className="h-64 overflow-hidden">
        <img
          src={person.imageUrl || "/placeholder.svg?height=400&width=400"}
          alt={person.name}
          className="w-full h-full object-cover object-center transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-[#212245]">{person.name}</h3>
        <p className="text-[#64C6C4] font-medium mb-4">{person.role}</p>
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{person.bio}</p>
        <div className="flex space-x-3">
          <a
            href={person.twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 hover:text-[#1DA1F2] hover:bg-slate-100 rounded-full transition-colors"
            aria-label={`${person.name}'s Twitter`}
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
            href={person.linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 text-slate-600 hover:text-[#0077B5] hover:bg-slate-100 rounded-full transition-colors"
            aria-label={`${person.name}'s LinkedIn`}
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}

function ValueCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all border border-[#64C6C4]/10">
      <h3 className="text-xl font-semibold text-[#212245] mb-3 flex items-center">
        <div className="bg-[#64C6C4]/20 p-2 rounded-lg mr-3">
          <div className="w-5 h-5 flex items-center justify-center text-[#212245] font-bold">{title.charAt(0)}</div>
        </div>
        {title}
      </h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}