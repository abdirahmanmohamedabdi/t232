import Image from "next/image";

const programs = [
  {
    title: "Digital Transformation for Education and Youth",
    description: `Summer Digital Transformation Camp: Our flagship pilot initiative offers an immersive experience for children and youth with hands-on workshops on coding, AI, internet safety, assistive technology, leadership development, and career mentorship.\nTech for Education: We provide schools in rural and underserved areas with cutting-edge e-learning tools and digital resource libraries, including virtual tutoring and STEM workshops.\nYouth Leadership and Civic Engagement: Equips young people with digital tools to become effective leaders and advocates, featuring digital advocacy workshops, hackathons, and platforms connecting youth with policymakers.`,
  },
  {
    title: "Regional Expansion and Community Engagement",
    description: `Regional Expansion in North Eastern Kenya & Dadaab: Expanding digital literacy programs into underserved regions, integrating assistive technology, and setting up mobile tech labs in refugee camps.\nICT Hub Development: Building a regional ICT hub in Garissa to serve as a digital innovation center, offering high-speed internet, workstations, and training programs.\nAgricultural Innovation Through Technology: Supports rural farmers with mobile technology for crop management and market access, creating an online agricultural marketplace.`,
  },
  {
    title: "Health and Well-being",
    description: `Health and Telemedicine: Provides remote consultations, mobile health education, and digital training for community health workers to ensure quality healthcare in remote areas.\nDigital Safety and Cybersecurity: Educates communities on safe and responsible technology use, focusing on data protection and preventing cybercrime.`,
  },
  {
    title: "Infrastructure Development for Sustainable Digital Solutions",
    description: `Digital Infrastructure Development: Expands internet access by installing Wi-Fi in schools and community centers, partnering with telecom providers, and distributing refurbished devices.\nGreen Tech and Sustainability: Focuses on using digital tools to address climate challenges, promoting solar-powered education hubs and supporting green tech startups.`,
  },
];

export default function ProgramsSection() {
  return (
    <div className="bg-[#F5F8FF]">
      {/* Hero Section */}
      <div className="relative bg-[#64C6C4] h-96 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">Our Programs</h1>
          <p className="text-xl text-white max-w-2xl mx-auto mt-4">
            Empowering communities through technology and innovation.
          </p>
        </div>
      </div>

      {/* Program Descriptions */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-4xl font-bold text-[#212245] mb-4">Digital Transformation for Education and Youth</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Our flagship pilot initiative, the Summer Digital Transformation Camp, offers an immersive experience for children and youth. Participants engage in hands-on workshops on coding, AI, internet safety, assistive technology for children with disabilities, leadership development, and career mentorship with tech professionals. This program allows us to test and refine our digital curriculum while empowering the next generation of digital leaders.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            We are transforming education in rural and underserved areas by providing schools with cutting-edge e-learning tools and digital resource libraries. Our initiatives also include virtual tutoring and hands-on STEM workshops, designed to inspire and equip students with the skills needed to succeed in the digital world.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            Our Youth Leadership and Civic Engagement program equips young people with the digital tools and skills they need to become effective leaders and advocates in their communities. We offer digital advocacy workshops, online communication training, hackathons to develop community solutions, and platforms that connect youth with policymakers and civic leaders.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#212245] mb-4">Regional Expansion and Community Engagement</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            We are expanding our digital literacy programs into underserved regions, such as North Eastern Kenya and Dadaab, providing essential training for students, teachers, and communities. Through this initiative, we integrate assistive technology for children with disabilities, set up mobile tech labs in refugee camps, and offer leadership and mentorship to youth. We also engage with local stakeholders to ensure sustainable community development.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            In Garissa, we are building a regional ICT hub that will serve as a digital innovation and entrepreneurship center. The hub will provide high-speed internet, workstations, and training programs in coding, AI, and digital entrepreneurship. This initiative will also offer mentorship and incubation space for local startups, fostering a thriving digital ecosystem.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            Our agricultural innovation program supports rural farmers, particularly women and youth, by providing mobile technology to improve crop management, market access, and financial literacy. We also support the creation of an online agricultural marketplace, connecting farmers to resources and markets that enhance their productivity and income.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#212245] mb-4">Health and Well-being</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Access to healthcare is a fundamental right, and through our telemedicine program, we provide remote consultations, mobile health education, and digital training for community health workers. This program ensures that quality healthcare reaches even the most remote areas, including rural communities and refugee camps.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            In today’s digital world, ensuring safe and responsible use of technology is crucial. Our Digital Safety and Cybersecurity program educates communities, especially youth and women, on how to navigate the digital space securely. We provide training on data protection, digital safety best practices, and ways to prevent cybercrime.
          </p>
        </div>

        <div>
          <h2 className="text-4xl font-bold text-[#212245] mb-4">Infrastructure Development for Sustainable Digital Solutions</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            We are committed to improving digital connectivity in underserved regions by expanding internet access. Our infrastructure development program installs Wi-Fi access points in schools and community centers, partners with telecom providers for affordable digital services, and distributes refurbished laptops and tablets to students, ensuring that all individuals have the tools they need to succeed in the digital age.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            Harnessing technology for a sustainable future, our Green Tech and Sustainability program focuses on using digital tools to address climate challenges. We promote solar-powered digital education hubs, climate monitoring technologies, and waste management solutions, while also supporting green tech startups that foster environmental sustainability.
          </p>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-4xl font-bold text-[#212245] mb-4">Empowering Communities, Transforming Lives</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Each of our programs is designed to create lasting change and equip individuals with the knowledge, resources, and opportunities to thrive in a rapidly changing digital world. Whether through education, healthcare, agriculture, or infrastructure, our work is built on the belief that access to technology can empower individuals and entire communities, enabling them to build a more inclusive, sustainable future.
          </p>
        </div>
      </div>
    </div>
  );
}
