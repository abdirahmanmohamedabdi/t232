import Image from "next/image"

const people = [
  {
    name: 'Anna Grabowski',
    role: '',
    imageUrl: '/anna.jpeg',
    bio: 'Anna Grabowski is a dedicated social impact professional with extensive experience in refugee resettlement and programming, education, child and youth mental health and psychosocial support (MHPSS), and sustainable food systems. With a background in program management, grantmaking, and stakeholder engagement, Anna has successfully led initiatives that enhance organizational effectiveness, foster strategic partnerships, and drive systemic change. Anna is committed to creating sustainable solutions that empower vulnerable communities. Passionate about equity, inclusion, innovation, and cross-sector collaboration, she is dedicated to advocating for impactful, community-driven change.',
    twitterUrl: 'https://twitter.com/annagrabowski',
    linkedinUrl: 'https://www.linkedin.com/in/annagrabowski/',
  },
  {
    name: 'Mohamed Osman',
    role: '',
    imageUrl: '/Mohamed.jpg',
    bio: 'Mohamed Osman is a strategic and results-driven Technology and Business Advisor with over 15 years of experience in delivering complex technology projects, digital and business transformations, and scaling start-ups. With experience in the private sector and development and humanitarian space, Mohamed brings innovation and expertise in end-to-end project execution, stakeholder engagement, and ensuring on-time, within-budget delivery.',
    twitterUrl: 'https://twitter.com/mohamedosman',
    linkedinUrl: 'https://www.linkedin.com/in/mohamedosman/',
  },
  {
    name: 'Ahmed Mohamed',
    role: '',
    imageUrl: '/team/member3.jpg',
    bio: '.',
    twitterUrl: 'https://twitter.com/ahmedmohamed',
    linkedinUrl: 'https://www.linkedin.com/in/ahmedmohamed/',
  },
]

export default function About() {
  return (
    <div className="bg-[#F5F8FF]">
      {/* Hero Section */}
      <div className="relative bg-[#64C6C4] h-96 flex items-center justify-center text-center px-6">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">About Us</h1>
          <p className="text-xl text-white max-w-2xl mx-auto mt-4">
            Empowering communities through technology and innovation.
          </p>
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-4 py-16 space-y-12">
        <div>
          <h2 className="text-4xl font-bold text-[#212245] mb-4">Our Story</h2>
          <p className="text-lg text-slate-700 leading-relaxed">
            Mustaqbal Women and Youth was born out of a vision to bridge the digital divide in Kenya. Founded in 2023 by a group of passionate technologists and educators, our organization aims to empower marginalized communities through digital literacy and skills training.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            We recognized that in today's rapidly evolving digital landscape, access to technology and digital skills is not just a luxury, but a necessity for economic empowerment and social progress. Our founders, having witnessed firsthand the transformative power of technology, were determined to bring these opportunities to communities that have been historically underserved.
          </p>
          <p className="text-lg text-slate-700 leading-relaxed mt-4">
            Today, Mustaqbal Women and Youth stands as a beacon of hope and progress in  Kenya. We are committed to our mission of creating a digitally empowered community where every individual, regardless of their background, has the skills and opportunities to thrive in the modern world.
          </p>
        </div>

        {/* Team Section */}
        <div>
          <h2 className="text-4xl font-bold text-[#212245] mb-4">Meet Our Team</h2>
          <div className="overflow-x-auto">
            <ul role="list" className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
              {people.map((person) => (
                <li key={person.name} className="flex-none w-full md:w-80">
                  <div className="space-y-4">
                    <div className="aspect-w-3 aspect-h-2">
                      <Image className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt={person.name} width={300} height={200} />
                    </div>
                    <div className="text-lg leading-6 font-medium space-y-1">
                      <h3>{person.name}</h3>
                      <p className="text-indigo-600">{person.role}</p>
                    </div>
                    <div className="text-lg">
                      <p className="text-gray-500">{person.bio}</p>
                    </div>

                    <ul role="list" className="flex space-x-5">
                      <li>
                        <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">Twitter</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a href={person.linkedinUrl} className="text-gray-400 hover:text-gray-500">
                          <span className="sr-only">LinkedIn</span>
                          <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
