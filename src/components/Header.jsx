export default function Header({ name, title, dark, setDark, open, setOpen }) {

  return (
    <div
      className="w-full py-12 px-6 md:px-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white"
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold">{name}</h1>
          {/*<p className="text-lg opacity-90 mt-1">{title}</p>*/}
        </div>
        <button
          onClick={() => setDark(!dark)}
          className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          {darkMode ? "☀️ Light" : "🌙 Dark"}
        </button>
        <script src="./script.js"></script>

        {/* Dropdown para download */}
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="px-3 py-1 rounded bg-primary text-white hover:bg-green-600 transition"
          >
            Download CV ▾
          </button>
            {open && (
              <div className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-md flex flex-col z-50">
                <a
                  href="CV_resume_allyne_PORT.pdf"
                  download
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  📄 CV em Português
                </a>
                <a
                  href="CV_resume_allyne_ENG.pdf"
                  download
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  📄 CV in English
                </a>
              </div>
            )}
        </div>
      </div>
    </div>
  );
}
