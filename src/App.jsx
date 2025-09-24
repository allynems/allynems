import { useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import sampleData from "./sampleData";

import Header from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import Section from "./components/Section";
import SectionItem from "./components/SectionItem";

function App() {
  const [dark, setDark] = useState(false);

  const exportPDF = () => {
    const input = document.getElementById("cv");
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("cv-Allyne_dos_Santos.pdf");
    });
  };

  return (
    <div
      className={
        dark
          ? "bg-gray-900 text-white min-h-screen"
          : "bg-gray-100 text-gray-900 min-h-screen"
      }
    >
      <div className="max-w-3xl mx-auto p-8 space-y-8">
        <Header
          name={sampleData.name}
          title={sampleData.title}
          dark={dark}
          setDark={setDark}
          exportPDF={exportPDF}
        />

        <ProfileCard data={sampleData} dark={dark} />

        <main id="cv" className="space-y-6">
          {/* Experiência */}
          <Section title="Work Experience">
            {sampleData.experience.map((exp, idx) => (
              <SectionItem
                key={idx}
                heading={exp.role}
                subheading={`${exp.company} • ${exp.period} • ${exp.location}`}
                details={exp.details}
              />
            ))}
          </Section>

          {/* Educação */}
          <Section title="Education">
            {sampleData.education.map((edu, idx) => (
              <SectionItem
                key={idx}
                heading={edu.degree}
                subheading={`${edu.institution} • ${edu.period}`}
              />
            ))}
          </Section>

          {/* Skills */}
          <Section title="Skills">
            <p>{sampleData.skills.join(" • ")}</p>
          </Section>

          {/* Projetos */}
          <Section title="Projetos">
            {sampleData.projects.map((proj, idx) => (
              <SectionItem
                key={idx}
                heading={proj.title}
                subheading={proj.description}
              />
            ))}
          </Section>
        </main>
      </div>
    </div>
  );
}

export default App;