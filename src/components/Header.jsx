import './styles.css'

export default function Header({ name, title, darkMode, setDark, open, setOpen }) {

  return (
    <div
      className="w-full py-4 px-6 md:px-12 gradient-box shadow"
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-white">{name}</h1>
          {/*<p className="text-lg opacity-90 mt-1">{title}</p>*/}
        </div>
        <div className='button-box'>
          <a href="https://allynems.github.io/" class="btn"><img src="kindpng_804195.png" alt="" width="25" height="20" class="inline"/></a>
          <button className="btn"
            onClick={() => setDark(!darkMode)}
          >
            {darkMode ? "☀️ Light" : "🌙 Dark"}
          </button>

          {/* Dropdown para download */}
          <div className="relative">
            <button className="btn"
              onClick={() => setOpen(!open)}
            >
              Download CV ▾
            </button>
              {open && (
                <div 
                  className="absolute right-0 mt-2 w-44 bg-white dark:bg-gray-800 shadow-lg rounded-md flex flex-col">
                  <a
                    href="CV_resume_allyne_PORT.pdf"
                    download
                    className="block w-full text-left text-gray-900 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 "
                  >
                    📄 CV em Português
                  </a>
                  <a
                    href="CV_resume_allyne_ENG.pdf"
                    download
                    className="block w-full text-left text-gray-900 px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    📄 CV in English
                  </a>
                </div>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
