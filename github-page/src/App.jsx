    import React, { useState, useEffect, useRef } from "react";
    import jsPDF from "jspdf";
    import html2canvas from "html2canvas";

    const sampleData = {
      name: "Allyne dos Santos",
      headline: "Product Manager | Data & Offshore Systems",
      about:
        "Product-minded engineer with experience building algorithms and digital products for offshore energy. Skilled in product strategy and technical delivery.",
      experience: [
        {
          title: "Senior Product Engineer",
          company: "Deep Seed Solutions",
          time: "2023 - Present",
          location: "Rio de Janeiro, Brazil",
          bullets: [
            "Developed OFFA, an evolutionary algorithm to screen field architectures",
            "Led product discovery with Aker BP and Karoon Energy"
          ]
        }
      ],
      education: [
        { degree: "MSc Petroleum Engineering", school: "Federal University", time: "2017 - 2019" }
      ],
      skills: ["Product Management", "Python", "Optimization", "Stakeholder Mgmt"],
      projects: [
        { name: "OFFA (Optimal & Flexible Field Architecture)", desc: "MVP evolutionary algorithm for field concept screening." }
      ],
      contact: { email: "allyne@example.com", linkedin: "https://www.linkedin.com/in/allyne-dos-santos" }
    };

    export default function App() {
      const [data, setData] = useState(sampleData);
      const [theme, setTheme] = useState("light");
      const cvRef = useRef(null);

      useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
      }, [theme]);

      const downloadPDF = async () => {
        const element = cvRef.current;
        const canvas = await html2canvas(element, { scale: 2, useCORS: true, logging: false });
        const imgData = canvas.toDataURL("image/png");

        const pdf = new jsPDF("p", "mm", "a4");
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

        if (pdfHeight <= pdf.internal.pageSize.getHeight()) {
          pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        } else {
          let remainingHeight = canvas.height;
          const pageHeightPx = (canvas.width * pdf.internal.pageSize.getHeight()) / pdfWidth;
          let offsetY = 0;
          while (remainingHeight > 0) {
            const pageCanvas = document.createElement("canvas");
            pageCanvas.width = canvas.width;
            pageCanvas.height = Math.min(pageHeightPx, remainingHeight);
            const ctx = pageCanvas.getContext("2d");
            ctx.drawImage(canvas, 0, offsetY, canvas.width, pageCanvas.height, 0, 0, canvas.width, pageCanvas.height);
            const pageData = pageCanvas.toDataURL("image/png");
            if (offsetY > 0) pdf.addPage();
            pdf.addImage(pageData, "PNG", 0, 0, pdfWidth, (pageCanvas.height * pdfWidth) / pageCanvas.width);
            remainingHeight -= pageCanvas.height;
            offsetY += pageCanvas.height;
          }
        }

        pdf.save("curriculum.pdf");
      };

      return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 p-6">
          <div className="max-w-4xl mx-auto">
            <header className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold">{data.name}</h1>
                <p className="text-sm text-gray-500 dark:text-gray-300">{data.headline}</p>
              </div>
              <div className="flex gap-2">
                <button onClick={() => setTheme(t => t === 'light' ? 'dark' : 'light')} className="px-3 py-1 rounded border bg-white dark:bg-gray-800">Toggle {theme === 'light' ? 'Dark' : 'Light'}</button>
                <button onClick={downloadPDF} className="px-3 py-1 rounded bg-blue-600 text-white">Exportar PDF</button>
              </div>
            </header>

            <main ref={cvRef} className="bg-white dark:bg-gray-800 p-6 rounded shadow">
              <section>
                <h2 className="text-xl font-semibold mb-2">Sobre</h2>
                <p className="text-sm text-gray-700 dark:text-gray-200">{data.about}</p>
              </section>

              <section className="mt-6">
                <h3 className="font-semibold">Experiência</h3>
                <div className="mt-3 space-y-4">
                  {data.experience.map((e, i) => (
                    <div key={i} className="p-3 border rounded bg-gray-50 dark:bg-gray-900">
                      <div className="font-semibold">{e.title}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">{e.company} • {e.time} • {e.location}</div>
                      <ul className="mt-2 list-disc list-inside text-sm text-gray-700 dark:text-gray-200">
                        {e.bullets.map((b, bi) => <li key={bi}>{b}</li>)}
                      </ul>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-6 grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold">Educação</h3>
                  <div className="mt-2 text-sm">
                    {data.education.map((ed, i) => (
                      <div key={i} className="mb-2">
                        <div className="font-semibold">{ed.degree}</div>
                        <div className="text-xs text-gray-600 dark:text-gray-300">{ed.school} • {ed.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold">Skills</h3>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {data.skills.map((s, i) => <span key={i} className="text-xs px-2 py-1 border rounded">{s}</span>)}
                  </div>
                </div>
              </section>

              <section className="mt-6">
                <h3 className="font-semibold">Projetos</h3>
                <div className="mt-2 space-y-2 text-sm">
                  {data.projects.map((p, i) => (
                    <div key={i} className="p-2 border rounded bg-gray-50 dark:bg-gray-900">
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs text-gray-600 dark:text-gray-300">{p.desc}</div>
                    </div>
                  ))}
                </div>
              </section>

              <section className="mt-6">
                <h3 className="font-semibold">Contact</h3>
                <div className="text-sm">{data.contact.email} • <a href={data.contact.linkedin} target="_blank" rel="noreferrer">{data.contact.linkedin}</a></div>
              </section>
            </main>
          </div>
        </div>
      );
    }
