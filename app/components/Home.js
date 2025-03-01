"use client";
import Heroe from "./Hero";
import Impact from "./Impact";
import Mission from "./Mission";
import Faq from "./Faq"; // added import statement for Faq component
export default function Example() {
  return (
    <div>
      <Heroe />
     
      <Mission/>

      <Impact/>
      <Faq/> 
    </div>
  );
}
