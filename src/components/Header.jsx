import { useState } from "react";

export default function Header({ name, title, dark, setDark }) {
  const [open, setOpen] = useState(false);

  return (
    <header className="flex items-center justify-between relative">
      <div>
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">{title}</p>
      </div>
      <div className="space-x-2 flex items-center">
        <a href="https://allynems.github.io/index.html" class="btn"><img src="https://allynems.github.io/img/kindpng_804195.png" alt="" width="25" height="20" class="inline"/></a>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {dark ? "Light" : "Dark"}
        </button>

        {/* Dropdown para download */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
          >
            Download CV ▾
          </button>
          {open && (
            <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-md">
              <a
                href="/public/CV_resume_allyne_PORT.pdf"
                download
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                📄 CV em Português
              </a>
              <a
                href="/public/CV_resume_allyne_ENG.pdf"
                download
                className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                📄 CV in English
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
