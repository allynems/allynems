export default function SectionItem({ heading, subheading, details }) {
  return (
    <div className="mb-4">
      {heading && <h3 className="text-xl font-medium text-gray-900 dark:text-gray-100">{heading}</h3>}
      {subheading && <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{subheading}</p>}
      {details && (
        <ul className="list-disc list-inside space-y-1 ml-4 text-gray-900 dark:text-gray-100">
          {details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      )}
    </div>
  );
}
