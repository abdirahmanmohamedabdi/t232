"use client";
import Hero from "./Hero";
import Heroe from "./Hero";
import Impact from "./Impact";
import Mission from "./Mission";
import Story from "./";
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