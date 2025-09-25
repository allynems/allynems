import { useState } from "react";
import sampleData from "./sampleData";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Section from "./components/Section";
import SectionItem from "./components/SectionItem";

function App() {
  const [dark, setDark] = useState(false);
  const [open, setOpen] = useState(false); // ✅ Estado do dropdown

  return (
    <div
      className={"min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 flex flex-col items-center justify-center space-y-4 transition-colors"
      }
    >
      <div className="max-w-3xl mx-auto p-8 space-y-8">
        <Header
          name={"About me"}
          title={sampleData.title}
          dark={dark}
          setDark={setDark}
          open={open}
          setOpen={setOpen}
        />

        <ProfileCard data={sampleData} dark={dark} />

        <main id="cv" className="space-y-6">
          <Section title="Experience">
            {sampleData.experience.map((exp, i) => (
              <SectionItem
                key={i}
                heading={exp.role}
                subheading={`${exp.company} • ${exp.period} • ${exp.location}`}
                details={exp.details}
              />
            ))}
          </Section>

          <Section title="Education">
            {sampleData.education.map((ed, i) => (
              <SectionItem
                key={i}
                heading={ed.degree}
                subheading={`${ed.institution} • ${ed.period}`}
              />
            ))}
          </Section>

          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {sampleData.skills.map((s, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-blue-100 dark:bg-blue-800 rounded-full text-sm"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Projects">
            {sampleData.projects.map((p, i) => (
              <SectionItem
                key={i}
                heading={p.title}
                subheading={p.description}
              />
            ))}
          </Section>

        </main>
      </div>
    </div>
  );
}

export default App;