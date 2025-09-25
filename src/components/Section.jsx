import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      className="my-8 p-6 rounded-xl shadow bg-white dark:bg-gray-800"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4 text-gray-900 dark:text-gray-100">{title}</h2>
      {children}
    </motion.section>
  );
}
