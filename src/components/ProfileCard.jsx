import { motion } from "framer-motion";
import { Linkedin, Github, Mail } from "lucide-react";

export default function ProfileCard({ data }) {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 text-center flex flex-col items-center space-y-4"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <img
        src={data.profileImage}
        alt=""
        className="w-32 h-32 rounded-full border-4 border-indigo-500 shadow-lg"
      />
      <h2 className="text-2xl font-semibold">{data.name}</h2>
      <p className="text-gray-600 dark:text-gray-300">{data.summary}</p>
      <div className="flex space-x-6 mt-4">
        <a href={data.contacts.linkedin} target="_blank" rel="noreferrer">
          <Linkedin className="w-6 h-6 hover:text-indigo-500 transition" />
        </a>
        <a href={data.contacts.github} target="_blank" rel="noreferrer">
          <Github className="w-6 h-6 hover:text-gray-800 dark:hover:text-gray-100 transition" />
        </a>
        <a href={`mailto:${data.contacts.email}`}>
          <Mail className="w-6 h-6 hover:text-red-500 transition" />
        </a>
      </div>
    </motion.div>
  );
}
