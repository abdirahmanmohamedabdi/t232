import {
    Handshake,
    Heart,
    Users,
    Building,
    GraduationCap,
    ArrowRight,
    Calendar,
    DollarSign,
    Briefcase,
    Share2,
  } from "lucide-react"
  import Link from "next/link"
  import Image from "next/image"
  
  const involvementOptions = [
    {
      title: "Volunteer",
      description: "Share your skills and time to support our programs in education, health, and community development.",
      icon: <Users className="w-6 h-6 text-white" />,
      color: "bg-blue-600",
      link: "#volunteer-form",
    },
    {
      title: "Donate",
      description: "Your financial support helps us expand our reach and impact in underserved communities.",
      icon: <Heart className="w-6 h-6 text-white" />,
      color: "bg-rose-600",
      link: "/donate",
    },
    {
      title: "Partner",
      description: "Organizations can collaborate with us on initiatives that align with our mission and values.",
      icon: <Handshake className="w-6 h-6 text-white" />,
      color: "bg-[#64C6C4]",
      link: "#partnership-form",
    },
    {
      title: "Spread the Word",
      description: "Help us raise awareness about our work by sharing our story with your network.",
      icon: <Share2 className="w-6 h-6 text-white" />,
      color: "bg-[#212245]",
      link: "#social-media",
    },
  ]
  
  const upcomingEvents = [
    {
      title: "Digital Literacy Workshop",
      date: "April 15, 2025",
      location: "Garissa ICT Hub",
      description: "Join us for a hands-on workshop teaching essential digital skills to community members.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Summer Tech Camp Registration",
      date: "May 1-30, 2025",
      location: "Online",
      description: "Registration opens for our annual Summer Digital Transformation Camp for youth ages 12-18.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Partner Networking Event",
      date: "June 10, 2025",
      location: "Nairobi",
      description: "Connect with other organizations and individuals passionate about digital empowerment.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]
  
  export default function GetInvolvedPage() {
    return (
      <div className="bg-[#F5F8FF] font-font min-h-screen">
        {/* Hero Section */}
        <div className="relative bg-gradient-to-r from-[#212245] to-[#64C6C4] py-24 md:py-36">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -left-20 top-20 w-96 h-96 bg-white/5 rounded-full mix-blend-overlay blur-3xl"></div>
            <div className="absolute right-0 top-40 w-96 h-96 bg-white/10 rounded-full mix-blend-overlay blur-3xl"></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-8 backdrop-blur-sm">
                <Handshake className="w-4 h-4" />
                <span>Join Our Mission</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
                Get Involved
              </h1>
              <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
                There are many ways to support our mission of empowering communities through technology. Find the
                opportunity that's right for you.
              </p>
            </div>
          </div>
        </div>
  
        {/* Ways to Get Involved */}
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-6">Ways to Get Involved</h2>
            <p className="text-lg text-slate-700 leading-relaxed">
              Whether you're looking to volunteer your time, make a donation, or partner with us, there are many ways to
              support our work and make a difference.
            </p>
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {involvementOptions.map((option, index) => (
              <a
                key={index}
                href={option.link}
                className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all p-8 text-center group h-full flex flex-col"
              >
                <div
                  className={`${option.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-[#212245] mb-3 group-hover:text-blue-600 transition-colors">
                  {option.title}
                </h3>
                <p className="text-slate-600 flex-grow">{option.description}</p>
                <div className="mt-4 text-blue-600 font-medium flex items-center justify-center gap-1 group-hover:gap-2 transition-all">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
  
        {/* Upcoming Events */}
      
      
        {/* Volunteer Form */}
        <div id="volunteer-form" className="container mx-auto px-6 py-20 scroll-mt-24">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-[#212245] mb-4">Volunteer With Us</h2>
                <p className="text-lg text-slate-600 mb-6">
                  Our volunteers are the backbone of our organization. Whether you have technical skills to share or
                  simply a passion for making a difference, we have opportunities for you.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <GraduationCap className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Teach digital literacy skills</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <Briefcase className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Provide professional mentorship</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="bg-blue-100 rounded-full p-1 mt-1">
                      <Building className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="text-slate-700">Support our administrative needs</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold text-[#212245] mb-6">Volunteer Application</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="first-name" className="text-sm font-medium text-slate-700">
                        First Name
                      </label>
                      <input
                        id="first-name"
                        type="text"
                        placeholder="First Name"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="last-name" className="text-sm font-medium text-slate-700">
                        Last Name
                      </label>
                      <input
                        id="last-name"
                        type="text"
                        placeholder="Last Name"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="interests" className="text-sm font-medium text-slate-700">
                      Areas of Interest
                    </label>
                    <textarea
                      id="interests"
                      placeholder="Tell us how you'd like to help"
                      rows={4}
                      className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Submit Application
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
  
        {/* Partnership Form */}
        <div id="partnership-form" className="bg-white py-20 scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="bg-[#64C6C4] w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                    <Handshake className="w-8 h-8 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-[#212245] mb-4">Partner With Us</h2>
                  <p className="text-lg text-slate-600 mb-6">
                    We believe in the power of collaboration. By partnering with organizations that share our vision, we
                    can create greater impact and reach more communities.
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-3">
                      <div className="bg-teal-100 rounded-full p-1 mt-1">
                        <Building className="w-4 h-4 text-[#64C6C4]" />
                      </div>
                      <span className="text-slate-700">Corporate partnerships</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-teal-100 rounded-full p-1 mt-1">
                        <GraduationCap className="w-4 h-4 text-[#64C6C4]" />
                      </div>
                      <span className="text-slate-700">Educational institutions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="bg-teal-100 rounded-full p-1 mt-1">
                        <Users className="w-4 h-4 text-[#64C6C4]" />
                      </div>
                      <span className="text-slate-700">NGOs and community organizations</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-[#F5F8FF] rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold text-[#212245] mb-6">Partnership Inquiry</h3>
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <label htmlFor="org-name" className="text-sm font-medium text-slate-700">
                        Organization Name
                      </label>
                      <input
                        id="org-name"
                        type="text"
                        placeholder="Organization Name"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-person" className="text-sm font-medium text-slate-700">
                        Contact Person
                      </label>
                      <input
                        id="contact-person"
                        type="text"
                        placeholder="Full Name"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="partner-email" className="text-sm font-medium text-slate-700">
                        Email
                      </label>
                      <input
                        id="partner-email"
                        type="email"
                        placeholder="your@organization.com"
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="partnership-type" className="text-sm font-medium text-slate-700">
                        Partnership Type
                      </label>
                      <textarea
                        id="partnership-type"
                        placeholder="Describe how you'd like to partner with us"
                        rows={4}
                        className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-[#64C6C4] text-white font-medium rounded-md hover:bg-[#50b5b3] transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
                    >
                      Submit Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        {/* Donation Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-rose-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
              <DollarSign className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-6">Support Our Work</h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-8 max-w-2xl mx-auto">
              Your donation helps us expand our reach and impact in underserved communities. Every contribution, no matter
              the size, makes a difference.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center justify-center px-8 py-4 bg-rose-600 hover:bg-rose-700 rounded-full text-white font-semibold transition-all shadow-md hover:shadow-lg text-lg"
            >
              Donate Now
              <Heart className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
  
        {/* Social Media Section */}
        <div id="social-media" className="bg-[#212245] py-20 text-white scroll-mt-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                <Share2 className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Spread the Word</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-12 max-w-2xl mx-auto">
                Help us raise awareness about our work by following us on social media and sharing our story with your
                network.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  Facebook
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                  Twitter
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                  </svg>
                  Instagram
                </a>
                <a
                  href="#"
                  className="inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white rounded-full text-white hover:bg-white/10 transition-colors"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                  </svg>
                  YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
  
        {/* CTA Section */}
        <div className="container mx-auto px-6 py-20">
          <div className="bg-white rounded-xl shadow-xl p-10 md:p-16 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-[#212245] mb-8 leading-tight">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-slate-700 leading-relaxed mb-12 max-w-3xl mx-auto">
              Join our community of volunteers, donors, and partners who are working together to bridge the digital divide
              and create a more equitable world.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#212245] hover:bg-[#2d2e5f] rounded-full text-white font-semibold transition-all shadow-md hover:shadow-lg text-lg"
              >
                Contact Us
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#64C6C4] hover:bg-[#50b5b3] rounded-full text-white font-semibold transition-all shadow-md hover:shadow-lg text-lg"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  