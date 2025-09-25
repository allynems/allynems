export default function Header({ name, title, dark, setDark }) {
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
          className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-indigo-600 transition"
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
                  href="../public/CV_resume_allyne_PORT.pdf"
                  download
                  className="block w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  📄 CV em Português
                </a>
                <a
                  href="../public/CV_resume_allyne_ENG.pdf"
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
