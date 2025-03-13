import {
  Laptop,
  Users,
  HeartPulse,
  Leaf,
  Code,
  GraduationCap,
  Building2,
  Wifi,
  ArrowRight,
  ShieldCheck,
  Tractor,
  Globe,
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const programs = [
  {
    id: "digital-transformation",
    title: "Digital Transformation for Education and Youth",
    icon: <Laptop className="w-8 h-8 text-white" />,
    color: "bg-blue-600",
    image: "/transformation.jpg?height=600&width=800",
    subprograms: [
      {
        title: "Summer Digital Transformation Camp",
        description:
          "Our flagship pilot initiative, the Summer Digital Transformation Camp, offers an immersive experience for children and youth. Participants engage in hands-on workshops on coding, AI, internet safety, assistive technology for children with disabilities, leadership development, and career mentorship with tech professionals. This program allows us to test and refine our digital curriculum while empowering the next generation of digital leaders.",
        icon: <Code className="w-6 h-6 text-blue-600" />,
      },
      {
        title: "Tech for Education",
        description:
          "We are transforming education in rural and underserved areas by providing schools with cutting-edge e-learning tools and digital resource libraries. Our initiatives also include virtual tutoring and hands-on STEM workshops, designed to inspire and equip students with the skills needed to succeed in the digital world.",
        icon: <GraduationCap className="w-6 h-6 text-blue-600" />,
      },
      {
        title: "Youth Leadership and Civic Engagement",
        description:
          "Our Youth Leadership and Civic Engagement program equips young people with the digital tools and skills they need to become effective leaders and advocates in their communities. We offer digital advocacy workshops, online communication training, hackathons to develop community solutions, and platforms that connect youth with policymakers and civic leaders.",
        icon: <Users className="w-6 h-6 text-blue-600" />,
      },
    ],
  },
  {
    id: "regional-expansion",
    title: "Regional Expansion and Community Engagement",
    icon: <Globe className="w-8 h-8 text-white" />,
    color: "bg-[#64C6C4]",
    image: "/community.jpg?height=600&width=800",
    subprograms: [
      {
        title: "Regional Expansion in North Eastern Kenya & Dadaab",
        description:
          "We are expanding our digital literacy programs into underserved regions, such as North Eastern Kenya and Dadaab, providing essential training for students, teachers, and communities. Through this initiative, we integrate assistive technology for children with disabilities, set up mobile tech labs in refugee camps, and offer leadership and mentorship to youth. We also engage with local stakeholders to ensure sustainable community development.",
        icon: <Globe className="w-6 h-6 text-[#64C6C4]" />,
      },
      {
        title: "ICT Hub Development",
        description:
          "In Garissa, we are building a regional ICT hub that will serve as a digital innovation and entrepreneurship center. The hub will provide high-speed internet, workstations, and training programs in coding, AI, and digital entrepreneurship. This initiative will also offer mentorship and incubation space for local startups, fostering a thriving digital ecosystem.",
        icon: <Building2 className="w-6 h-6 text-[#64C6C4]" />,
      },
      {
        title: "Agricultural Innovation Through Technology",
        description:
          "Our agricultural innovation program supports rural farmers, particularly women and youth, by providing mobile technology to improve crop management, market access, and financial literacy. We also support the creation of an online agricultural marketplace, connecting farmers to resources and markets that enhance their productivity and income.",
        icon: <Tractor className="w-6 h-6 text-[#64C6C4]" />,
      },
    ],
  },
  {
    id: "health-wellbeing",
    title: "Health and Well-being",
    icon: <HeartPulse className="w-8 h-8 text-white" />,
    color: "bg-rose-600",
    image: "/health.jpg?height=600&width=800",
    subprograms: [
      {
        title: "Health and Telemedicine",
        description:
          "Access to healthcare is a fundamental right, and through our telemedicine program, we provide remote consultations, mobile health education, and digital training for community health workers. This program ensures that quality healthcare reaches even the most remote areas, including rural communities and refugee camps.",
        icon: <HeartPulse className="w-6 h-6 text-rose-600" />,
      },
      {
        title: "Digital Safety and Cybersecurity",
        description:
          "In today's digital world, ensuring safe and responsible use of technology is crucial. Our Digital Safety and Cybersecurity program educates communities, especially youth and women, on how to navigate the digital space securely. We provide training on data protection, digital safety best practices, and ways to prevent cybercrime.",
        icon: <ShieldCheck className="w-6 h-6 text-rose-600" />,
      },
    ],
  },
  {
    id: "infrastructure",
    title: "Infrastructure Development for Sustainable Digital Solutions",
    icon: <Wifi className="w-8 h-8 text-white" />,
    color: "bg-[#212245]",
    image: "/wifi.jpg?height=600&width=800",
    subprograms: [
      {
        title: "Digital Infrastructure Development",
        description:
          "We are committed to improving digital connectivity in underserved regions by expanding internet access. Our infrastructure development program installs Wi-Fi access points in schools and community centers, partners with telecom providers for affordable digital services, and distributes refurbished laptops and tablets to students, ensuring that all individuals have the tools they need to succeed in the digital age.",
        icon: <Wifi className="w-6 h-6 text-[#212245]" />,
      },
      {
        title: "Green Tech and Sustainability",
        description:
          "Harnessing technology for a sustainable future, our Green Tech and Sustainability program focuses on using digital tools to address climate challenges. We promote solar-powered digital education hubs, climate monitoring technologies, and waste management solutions, while also supporting green tech startups that foster environmental sustainability.",
        icon: <Leaf className="w-6 h-6 text-[#212245]" />,
      },
    ],
  },
]

export default function ProgramsPage() {
  return (
    <div className="bg-[#F5F8FF] min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#212245] to-[#64C6C4] py-24 md:py-36">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-20 top-20 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay blur-3xl"></div>
          <div className="absolute right-0 top-40 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay blur-3xl"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
              <Laptop className="w-4 h-4" />
              <span>Empowering Through Technology</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Our Programs
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              At Mustaqbal, we believe in empowering communities through technology, providing the tools and resources
              necessary to thrive in the digital age.
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-slate-700 leading-relaxed">
            Our initiatives are designed to create sustainable change across education, health, agriculture, leadership,
            and infrastructure. Through innovative programs, we work to bridge the digital divide, especially in
            underserved regions, and foster inclusive growth that benefits everyone.
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-[#212245] mt-8 mb-4">
            Core Programs That Drive Our Mission
          </h2>
        </div>
      </div>

      {/* Program Categories */}
      <div className="container mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {programs.map((program) => (
            <a
              key={program.id}
              href={`#${program.id}`}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 text-center group"
            >
              <div
                className={`${program.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                {program.icon}
              </div>
              <h3 className="text-xl font-bold text-[#212245] mb-3 group-hover:text-blue-600 transition-colors">
                {program.title}
              </h3>
              <p className="text-sm text-slate-500 group-hover:text-slate-700 transition-colors">Click to learn more</p>
            </a>
          ))}
        </div>

        {/* Detailed Program Sections */}
        {programs.map((program) => (
          <section key={program.id} id={program.id} className="mb-32 scroll-mt-24">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <div
                  className={`${program.color} w-20 h-20 rounded-full flex items-center justify-center mb-8 shadow-lg`}
                >
                  {program.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-6 leading-tight">{program.title}</h2>
                <p className="text-lg text-slate-600 leading-relaxed">
                  Our {program.title.toLowerCase()} initiatives create lasting impact through innovative approaches and
                  community engagement.
                </p>
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <div className="relative h-72 md:h-80 w-full">
                  <Image
                    src={program.image || "/placeholder.svg?height=600&width=800"}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {program.subprograms.map((subprogram, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all p-8 border border-gray-100 h-full flex flex-col"
                >
                  <div className="bg-gray-50 w-14 h-14 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    {subprogram.icon}
                  </div>
                  <h3 className="text-xl font-bold text-[#212245] mb-4">{subprogram.title}</h3>
                  <p className="text-slate-600 leading-relaxed flex-grow">{subprogram.description}</p>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Conclusion Section */}
        <div className="bg-white rounded-xl shadow-xl p-10 md:p-16 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-8 leading-tight">
            Empowering Communities, Transforming Lives
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Each of our programs is designed to create lasting change and equip individuals with the knowledge,
            resources, and opportunities to thrive in a rapidly changing digital world.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl mx-auto">
            Join us in making a difference. Together, we can bridge the digital divide and create a world where
            everyone, regardless of their background or location, has the opportunity to succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#212245] hover:bg-[#2d2e5f] rounded-full text-white font-semibold transition-all shadow-md hover:shadow-lg text-lg"
            >
              Get Involved
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#64C6C4] hover:bg-[#50b5b3] rounded-full text-white font-semibold transition-all shadow-md hover:shadow-lg text-lg"
            >
              Donate
            </Link>
            <Link
              href="/our-story"
              className="inline-flex items-center justify-center px-8 py-4 bg-white border border-[#64C6C4]/30 hover:bg-[#64C6C4]/10 rounded-full text-[#212245] font-semibold transition-all shadow-md hover:shadow-lg text-lg"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

