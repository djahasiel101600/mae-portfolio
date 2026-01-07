import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Badge } from "../ui/badge";
import { Monitor, Database, UserCheck, CheckCircle, Star } from "../../../old/node_modules/lucide-react/dist/lucide-react";

export function Skills() {
  const skills = [
    {
      id: "admin",
      icon: Monitor,
      title: "Administrative & Office Support",
      description: "Comprehensive administrative capabilities",
      items: [
        "Administrative & Back-Office Support",
        "Email and Task Coordination",
        "Report and Document Preparation",
        "Research and Documentation",
      ],
    },
    {
      id: "data",
      icon: Database,
      title: "Data Management",
      description: "Expert data handling and organization",
      items: [
        "Data Entry, Validation, and Organization",
        "Spreadsheet Management (Excel & Google Sheets)",
        "Basic Bookkeeping Support",
        "Attention to Detail and Quality Checking",
      ],
    },
    {
      id: "professional",
      icon: UserCheck,
      title: "Professional Strengths",
      description: "Core professional competencies",
      items: [
        "Time Management and Task Prioritization",
        "Works independently with minimal supervision",
        "Research-first mindset before asking questions",
        "Calm and organized when handling multiple tasks",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-20 bg-background" aria-labelledby="skills-heading">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            id="skills-heading"
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Core Skills
          </h2>
        </motion.div>

        {/* Desktop View - Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="hidden md:grid md:grid-cols-3 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full hover:scale-105 transition-transform duration-300 border-t-4 border-t-primary/30 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <skill.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                    </div>
                    <Badge variant="secondary" className="gap-1">
                      <Star className="w-3 h-3" />
                      Core Skill
                    </Badge>
                  </div>
                  <CardTitle className="text-primary text-xl">
                    {skill.title}
                  </CardTitle>
                  <CardDescription className="text-xs">
                    {skill.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {skill.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Mobile View - Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="md:hidden"
        >
          <Tabs defaultValue="admin" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-6">
              {skills.map((skill) => (
                <TabsTrigger
                  key={skill.id}
                  value={skill.id}
                  className="text-xs"
                >
                  <skill.icon className="w-4 h-4 mr-1" />
                  <span className="hidden sm:inline">
                    {skill.title.split(" ")[0]}
                  </span>
                </TabsTrigger>
              ))}
            </TabsList>
            {skills.map((skill) => (
              <TabsContent key={skill.id} value={skill.id}>
                <Card className="border-t-4 border-t-primary/30">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <skill.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="gap-1">
                        <Star className="w-3 h-3" />
                        Core Skill
                      </Badge>
                    </div>
                    <CardTitle className="text-primary">
                      {skill.title}
                    </CardTitle>
                    <CardDescription>{skill.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {skill.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-secondary mt-0.5 shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
