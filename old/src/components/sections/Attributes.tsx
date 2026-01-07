import { motion } from "framer-motion";
import { Card, CardContent } from "../ui/card";
import {
  UserCheck,
  Search,
  ClipboardCheck,
  ListTodo,
  Lightbulb,
  Handshake,
} from "../../../old/node_modules/lucide-react/dist/lucide-react";

export function Attributes() {
  const attributes = [
    {
      icon: UserCheck,
      title: "Independent Worker",
      description:
        "Works independently with minimal supervision, taking initiative to complete tasks efficiently",
    },
    {
      icon: Search,
      title: "Research-Oriented",
      description:
        "Research-first mindset before asking questions, ensuring well-informed approaches",
    },
    {
      icon: ClipboardCheck,
      title: "Detail-Focused",
      description:
        "Reviews work carefully to prevent errors and maintain high quality standards",
    },
    {
      icon: ListTodo,
      title: "Organized Multitasker",
      description:
        "Calm and organized when handling multiple tasks and priorities",
    },
    {
      icon: Lightbulb,
      title: "Proactive Mindset",
      description:
        "Uses free time productively to prepare for future work and anticipate needs",
    },
    {
      icon: Handshake,
      title: "Honest & Transparent",
      description:
        "Honest and transparent when identifying and correcting mistakes",
    },
  ];

  return (
    <section id="attributes" className="py-20 gradient-bg" aria-labelledby="attributes-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            id="attributes-heading"
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Work Style & Strengths
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {attributes.map((attr, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="h-full text-center group hover:bg-linear-to-br hover:from-primary hover:to-secondary hover:text-primary-foreground transition-all duration-500 cursor-default overflow-hidden relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/0 to-secondary/0 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-500"></div>
                <CardContent className="pt-6 pb-6 flex flex-col items-center justify-center h-full relative z-10">
                  <div className="mb-4 p-4 bg-primary/10 group-hover:bg-white/20 rounded-full transition-all duration-300 group-hover:scale-110 ring-2 ring-primary/0 group-hover:ring-white/30">
                    <attr.icon className="w-10 h-10 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{attr.title}</h3>
                  <p className="text-sm text-foreground opacity-95 group-hover:opacity-100 transition-opacity">
                    {attr.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
