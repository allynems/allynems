export default function SectionItem({ heading, subheading, details }) {
  return (
    <div className="mb-4">
      {heading && <h3 className="font-bold">{heading}</h3>}
      {subheading && (
        <p className="text-sm text-gray-500 dark:text-gray-400">{subheading}</p>
      )}
      {details && (
        <ul className="list-disc list-inside mt-2 space-y-1">
          {details.map((d, i) => (
            <li key={i}>{d}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
