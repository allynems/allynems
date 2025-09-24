export default function Section({ title, children }) {
  return (
    <section className="mb-6">
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      {children}
    </section>
  );
}
