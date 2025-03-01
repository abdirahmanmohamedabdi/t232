import React from 'react';

export default function OurStory() {
  return (
    <div className="bg-[#F5F8FF]">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-center px-6"
        style={{ backgroundImage: "url('/path-to-hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-6xl font-extrabold text-white drop-shadow-lg">Our Story</h1>
          <p className="text-xl text-white max-w-2xl mx-auto mt-4">
            Discover the journey of Mustaqbal, a movement of hope, empowerment, and progress.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-20 space-y-20">
        <ContentSection
          title="Our History"
          content="Mustaqbal was founded with a vision to tackle digital and economic inequalities faced by women and youth in marginalized communities. Our journey is driven by the desire to create meaningful, lasting change for those underserved."
        />

        <ContentSection
          title="Why Mustaqbal Was Founded"
          content="Mustaqbal exists to bridge gaps in education, technology, and leadership opportunities for marginalized women and youth, particularly in North Eastern Kenya. By addressing barriers to progress, we strive to break the cycle of poverty through education, resources, and advocacy."
        />

        <ImageBanner imageUrl="/impact.jpg" altText="Impacting lives through education and empowerment" />

        <ContentSection
          title="2024: Expanding Our Reach"
          content="By 2024, Mustaqbal expanded its advocacy for gender equality and youth leadership, launching programs focused on economic empowerment, social justice, and community-driven solutions. These initiatives continue to inspire broader societal changes."
        />

        <ContentSection
          title="Our Mission"
          content="Empowering marginalized communities in Nairobi and North Eastern Kenya by equipping them with digital education and technology. Our commitment is to create opportunities for women and youth to learn, innovate, and achieve financial independence."
        />

        <ContentSection
          title="Our Vision"
          content="To build an inclusive digital society where women and youth have the tools to thrive. We believe that equitable access to technology and digital skills is transformative and can drive socio-economic progress."
        />

        <GoalsSection />
      </div>
    </div>
  );
}

function ContentSection({ title, content }) {
  return (
    <div className="bg-white p-10 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold text-[#212245] mb-4">{title}</h2>
      <p className="text-lg text-slate-700 leading-relaxed">{content}</p>
    </div>
  );
}

function ImageBanner({ imageUrl, altText }) {
  return (
    <div 
      className="w-full h-96 bg-cover bg-center rounded-xl shadow-lg"
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      <div className="w-full h-full bg-black bg-opacity-40 flex items-center justify-center">
        <p className="text-white text-2xl font-semibold drop-shadow-lg text-center max-w-3xl">{altText}</p>
      </div>
    </div>
  );
}

function GoalsSection() {
  return (
    <div className="bg-[#212245] text-white p-12 rounded-lg shadow-lg">
      <h2 className="text-4xl font-semibold mb-6 text-center">Our Key Goals</h2>
      <ul className="list-disc pl-6 space-y-4 text-lg">
        <li>Empower Women & Youth: Provide essential digital skills for better job opportunities and quality of life.</li>
        <li>Bridge the Digital Divide: Ensure access to technology and education in underserved regions.</li>
        <li>Promote Economic Growth: Enable individuals to innovate, learn, and achieve financial stability.</li>
        <li>Foster Inclusion: Reduce inequalities by ensuring equal digital opportunities.</li>
        <li>Support Sustainable Development: Leverage digital literacy to break poverty cycles.</li>
      </ul>
    </div>
  );
}