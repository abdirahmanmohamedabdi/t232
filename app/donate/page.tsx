"use client"

import { DollarSign, Heart, Send, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function DonationForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    message: "",
    contactPreference: "email",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert("Thank you for your interest in donating! We will contact you soon.")
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      amount: "",
      message: "",
      contactPreference: "email",
    })
  }

  return (
    <div className="bg-white font-font rounded-2xl shadow-lg p-8 md:p-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-rose-100 p-3 rounded-full">
          <Heart className="w-6 h-6 text-rose-600" />
        </div>
        <h3 className="text-2xl  font-bold text-[#212245]">Support Our Mission</h3>
      </div>

      <p className="text-slate-600 mb-8 leading-relaxed">
        Your donation helps us expand our reach and impact in underserved communities. Fill out this form, and our team
        will contact you with more information about how you can contribute.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-slate-700">
              Full Name <span className="text-rose-500">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#64C6C4] focus:border-[#64C6C4]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-slate-700">
              Email Address <span className="text-rose-500">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="your@email.com"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#64C6C4] focus:border-[#64C6C4]"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-slate-700">
              Phone Number
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+254 700 000 000"
              className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#64C6C4] focus:border-[#64C6C4]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="amount" className="text-sm font-medium text-slate-700">
              Donation Amount
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <DollarSign className="w-5 h-5 text-slate-400" />
              </div>
              <input
                id="amount"
                name="amount"
                type="text"
                value={formData.amount}
                onChange={handleChange}
                placeholder="Amount you wish to donate"
                className="w-full pl-12 px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#64C6C4] focus:border-[#64C6C4]"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Preferred Contact Method</label>
          <div className="flex flex-wrap gap-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="email"
                checked={formData.contactPreference === "email"}
                onChange={handleChange}
                className="w-4 h-4 text-[#64C6C4] border-slate-300 focus:ring-[#64C6C4]"
              />
              <span className="ml-2 text-slate-700">Email</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="phone"
                checked={formData.contactPreference === "phone"}
                onChange={handleChange}
                className="w-4 h-4 text-[#64C6C4] border-slate-300 focus:ring-[#64C6C4]"
              />
              <span className="ml-2 text-slate-700">Phone</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                name="contactPreference"
                value="either"
                checked={formData.contactPreference === "either"}
                onChange={handleChange}
                className="w-4 h-4 text-[#64C6C4] border-slate-300 focus:ring-[#64C6C4]"
              />
              <span className="ml-2 text-slate-700">Either</span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-slate-700">
            Message (Optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Tell us about why you're interested in supporting our mission"
            className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#64C6C4] focus:border-[#64C6C4]"
          ></textarea>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <button
            type="submit"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#212245] hover:bg-[#2d2e5f] text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Submit Donation Interest
            <Send className="w-4 h-4 ml-2" />
          </button>
          <a
            href="/donate"
            className="inline-flex items-center justify-center px-6 py-3 bg-rose-600 hover:bg-rose-700 text-white font-medium rounded-full transition-colors shadow-md hover:shadow-lg"
          >
            Donate Now
            <ArrowRight className="w-4 h-4 ml-2" />
          </a>
        </div>
      </form>
    </div>
  )
}

