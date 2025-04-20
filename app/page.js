import Mission from "./components/Mission";

import Hero from "./components/Hero";
export default function HomePage() {
  return (
    <div>
      <section id="home">
       <Hero/>
      </section>
      <section id="Mission">
        <Mission />
      </section>
      <section id="Story">
        <Story />
      </section>
    </div>
  );
}