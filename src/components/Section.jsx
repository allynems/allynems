import { motion } from "framer-motion";

export default function Section({ title, children }) {
  return (
    <motion.section
      className="bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-semibold border-b pb-2 mb-4">{title}</h2>
      {children}
    </motion.section>
  );
}
