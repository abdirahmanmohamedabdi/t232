import { Mail, Phone, Clock, Send, MessageSquare, ArrowRight } from "lucide-react"
import Link from "next/link"

const contactInfo = [
  {
    icon: <Mail className="w-6 h-6 text-blue-600" />,
    title: "Email",
    details: "info@mustaqbal.org",
    action: "mailto:info@mustaqbal.org",
    actionText: "Send Email",
  },
  {
    icon: <Phone className="w-6 h-6 text-blue-600" />,
    title: "Phone",
    details: "+254 700 000 000",
    action: "tel:+254700000000",
    actionText: "Call Us",
  },
  {
    icon: <Clock className="w-6 h-6 text-blue-600" />,
    title: "Hours",
    details: "Monday-Friday: 9AM-5PM",
    action: null,
    actionText: null,
  },
]

export default function ContactPage() {
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
              <MessageSquare className="w-4 h-4" />
              <span>We'd Love to Hear From You</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight tracking-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed">
              Have questions about our programs or want to get involved? We're here to help. Reach out to us using any
              of the methods below.
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {contactInfo.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-8 text-center">
              <div className="bg-blue-100 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#212245] mb-2">{item.title}</h3>
              <p className="text-slate-600 mb-4">{item.details}</p>
              {item.action && (
                <a
                  href={item.action}
                  className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center gap-1"
                >
                  {item.actionText}
                  <ArrowRight className="w-4 h-4" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="max-w-3xl mx-auto mb-20">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-[#212245] mb-6">Send Us a Message</h2>
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
                <label htmlFor="subject" className="text-sm font-medium text-slate-700">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select a subject
                  </option>
                  <option value="general">General Inquiry</option>
                  <option value="volunteer">Volunteering</option>
                  <option value="donate">Donations</option>
                  <option value="partnership">Partnership</option>
                  <option value="programs">Programs</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="How can we help you?"
                  rows={5}
                  className="w-full px-3 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 flex items-center justify-center"
              >
                Send Message
                <Send className="w-4 h-4 ml-2" />
              </button>
            </form>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="bg-[#212245] py-20 text-white rounded-xl">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-lg text-white/80 leading-relaxed mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter to receive updates about our programs, events, and impact stories.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white/10 border border-white/20 text-white placeholder:text-white/50 flex-grow px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="bg-white text-[#212245] hover:bg-white/90 px-6 py-3 rounded-md font-medium transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* CTA Section */}
      
     
      </div>
    </div>
  )
}

