"use client"
import { useState } from 'react';

const footerNavigation = {
 
  solutions: [
    { name: "Home", href: "/" },
    { name: "Our Mission", href: "/#Mission" },
    { name: "About Us", href: "/#Story" },
   
 
  ],
  support: [
   
    { name: 'Contact', href: '/Contact' },
   
  
  ],
  company: [
    { name: 'About', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Jobs', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partners', href: '#' },
  ],
  legal: [
    { name: 'Claim', href: '#' },
    { name: 'Policy', href: '#' },
    { name: 'Terms', href: '#' },
  ],
};

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle the subscription logic here
    console.log('Subscribed with:', email);
  };

  return (
    <footer className="bg-warm-gray-900 font-font" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8 xl:col-span-1">
            <img
              className="h-12"
              src="/wow.png"
              alt="Company name"
            />
            <p className="text-warm-gray-400 text-base">
            Empowering Futures, Transforming Communities
            </p>
           
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 xl:mt-0 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">Solutions</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.solutions.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-warm-gray-200 tracking-wider uppercase">Support</h3>
                <ul role="list" className="mt-4 space-y-4">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-base text-warm-gray-400 hover:text-warm-gray-300">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              
             
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-warm-gray-700 pt-8">
          <p className="text-base text-warm-gray-400 xl:text-center">
            &copy; 2025 Mustaqbal, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
