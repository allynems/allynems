export default function Header({ name, title, dark, setDark, exportPDF }) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-4xl font-bold">{name}</h1>
        <p className="text-lg text-gray-500 dark:text-gray-300">{title}</p>
      </div>
      <div className="space-x-2">
        <a href="https://allynems.github.io/index.html" class="btn"><img src="https://allynems.github.io/img/kindpng_804195.png" alt="" width="25" height="20" class="inline"/></a>
        <button
          onClick={() => setDark(!dark)}
          className="px-3 py-1 rounded bg-blue-500 text-white hover:bg-blue-600"
        >
          {dark ? "Light" : "Dark"}
        </button>
        <button
          onClick={exportPDF}
          className="px-3 py-1 rounded bg-green-500 text-white hover:bg-green-600"
        >
          Exportar PDF
        </button>
      </div>
    </header>
  );
}
