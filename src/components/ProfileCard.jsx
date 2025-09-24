import { Github, Linkedin, Mail } from "lucide-react";

export default function ProfileCard({ data, dark }) {
  return (
    <div
      className={
        dark
          ? "bg-gray-800 p-6 rounded-2xl shadow-lg"
          : "bg-white p-6 rounded-2xl shadow-lg"
      }
    >
      <div className="flex flex-col items-center text-center space-y-4">
        <img
          src={data.profileImage}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-md"
        />
        <h2 className="text-2xl font-semibold">{data.name}</h2>
        <p className="text-gray-500 dark:text-gray-300">{data.summary}</p>

        <div className="flex space-x-6 mt-2">
          <a href={data.contacts.linkedin} target="_blank" rel="noreferrer">
            <Linkedin className="w-6 h-6 hover:text-blue-600" />
          </a>
          <a href={data.contacts.github} target="_blank" rel="noreferrer">
            <Github className="w-6 h-6 hover:text-gray-800 dark:hover:text-gray-200" />
          </a>
          <a href={`mailto:${data.contacts.email}`}>
            <Mail className="w-6 h-6 hover:text-red-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
