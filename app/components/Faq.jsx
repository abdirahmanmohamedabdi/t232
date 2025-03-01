import { useState } from 'react';

export default function Faq() {
  const faqs = [
    {
      question: "What is Mustaqbal Women and Youth?",
      answer: "Mustaqbal Women and Youth is an organization dedicated to bridging the digital divide and empowering communities throughout Kenya through technology and education.",
    },
    {
      question: "How can I get involved?",
      answer: "You can get involved by joining our programs, volunteering, or supporting us through donations. Visit our 'Get Involved' page for more details.",
    },
    {
      question: "What programs do you offer?",
      answer: "We offer a variety of programs focused on digital literacy, entrepreneurship, and community engagement. Our programs are designed to equip individuals with the skills needed to thrive in a digital world.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#212245] mb-8">Frequently Asked Questions</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left py-4 focus:outline-none flex justify-between items-center"
      >
        <span className="text-lg font-medium text-[#212245]">{question}</span>
        <span className="text-lg">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && (
        <div className="pb-4 text-gray-600">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
}