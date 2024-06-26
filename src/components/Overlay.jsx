import { Scroll, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useState } from "react";

const Section = (props) => {
  return (
    <section
      className={`h-screen flex flex-col justify-center p-10 ${
        props.right ? "items-end" : "items-start"
      }`}
      style={{
        opacity: props.opacity,
      }}
    >
      <div className="w-[90%] sm:w-[50%] flex items-center justify-center">
        <div className="w-full">
          <div className="bg-white  rounded-lg px-8 py-12">
            {props.children}
          </div>
        </div>
      </div>
    </section>
  );
};

export const Overlay = () => {
  const scroll = useScroll();
  const [opacityFirstSection, setOpacityFirstSection] = useState(1);
  const [opacitySecondSection, setOpacitySecondSection] = useState(1);
  const [opacityLastSection, setOpacityLastSection] = useState(1);

  useFrame(() => {
    setOpacityFirstSection(1 - scroll.range(0, 1 / 3));
    setOpacitySecondSection(scroll.curve(1 / 3, 1 / 3));
    setOpacityLastSection(scroll.range(2 / 3, 1 / 3));
  });

  return (
    <Scroll html>
      <div class="w-screen">
        <Section opacity={opacityFirstSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Hello, I'm Pei Ying
          </h1>
          <p className="text-gray-500">Welcome & nice to meet you</p>
          <p className="mt-3">As aspiring IT graduate, my career actually begun as Procurement Analyst.</p>
          <p className="mt-3">I self-learned <b>C# ASP.net IIS</b> and my app helped company <b>cost-saving 1mil</b>.</p>
          <p className="mt-3">Embracing my passion, I switched career as <b>UI/UX developer</b> and picked up <b>WPF, MVC and Pencil</b>.</p>
          <p className="mt-3">Next I stepped up as DevOps <b>Senior Full-stack developer</b>.</p>
          <ul className="leading-9 pt-3">
            <li className="animate-pulse duration-500">🧑‍💻 <a href="https://www.linkedin.com/in/hoopeiying/">Linkedin</a></li>
          </ul>
          <p className="animate-bounce  mt-6">↓ Scroll to see more</p>
        </Section>
        <Section right opacity={opacitySecondSection}>
          <h1 className="font-semibold font-serif text-2xl">
            Skillsets 🔥
          </h1>
          <p className="mt-3">
            <b>Frontend 🚀</b>
          </p>
          <p className="leading-9">
            Angular | Ionic | React Native| ReactJS | ViteJS | Tailwind
          </p>
          <p className="mt-3">
            <b>Backend 🔬</b>
          </p>
          <p className="leading-9">
            NodeJS | C# .net core | Microsoft SQL | Oracle SQL | Java | IIS | Apigee | Azure | Unix Bash Command | Apache Nifi | GCP | Splunk | PowerBI | Tableau 
          </p>
          <p className="mt-3">
            <b>Other 🧑‍💻</b>
          </p>
          <p className="leading-9">
            Agile Scrum | TDD | Kanban TFS | Confluence | CI/CD Azure
          </p>
          <p className="animate-bounce  mt-6">↓ Scroll to see more</p>
        </Section>
        <Section opacity={opacityLastSection}>
          <h1 className="font-semibold font-serif text-2xl">
            🧑‍🏫 Latest Project
          </h1>
          <p className="text-gray-500">
            AI is my new interest, and I'm always learning. 
          </p>
          <ul className="leading-9 pt-3">
            <li><a href="https://github.com/denisehoo/LearningProject">Cubator - [React Native Expo]</a></li>
          </ul>
        </Section>
      </div>
    </Scroll>
  );
};
