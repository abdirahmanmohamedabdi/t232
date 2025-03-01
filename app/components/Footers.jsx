import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#212245] text-white py-12">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Mustaqbal Women and Youth</h3>
          <p className="text-sm">Empowering communities through digital education in North Eastern Kenya.</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            {["About Us", "Our Programs", "Get Involved", "News", "Contact"].map((link, index) => (
              <li key={index}>
                <Link href={`/${link.toLowerCase().replace(/\s+/g, "-")}`} className="hover:underline">
                  {link}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
          {/* Add social media icons/links here */}
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
          <p className="text-sm mb-2">Stay updated with our latest news and events.</p>
          <form className="flex">
            <input type="email" placeholder="Your email" className="p-2 w-full text-[#212245]" />
            <button
              type="submit"
              className="bg-[#64C6C4] text-[#212245] px-4 hover:bg-opacity-90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-white/20 text-center">
        <p>&copy; {new Date().getFullYear()} Mustaqbal Women and Youth. All rights reserved.</p>
      </div>
    </div>
  </footer>
  );
}