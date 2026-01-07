import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Card, CardContent } from "../ui/card";
import { Separator } from "../ui/separator";
import { CheckCircle, Package } from "lucide-react";

const m: any = motion;

export function Tools() {
  const tools = [
    "Microsoft Excel",
    "Microsoft Word",
    "Google Workspace",
    "Google Sheets",
    "Google Docs",
    "Gmail & Calendar",
    "Canva",
    "Communication Tools",
  ];

  const highlights = [
    "Microsoft Excel – data tracking, formulas, reports, data checking",
    "Microsoft Word – documentation and formatted reports",
    "Google Workspace – Sheets, Docs, Gmail, Drive, Calendar",
    "Canva – basic designs, presentations, simple layouts",
  ];

  return (
    <section id="tools" className="py-20 gradient-bg" aria-labelledby="tools-heading">
      <div className="container mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            id="tools-heading"
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Tools & Software
          </h2>
        </m.div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <Card className="overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center gap-2 mb-6">
                <Package className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-primary">
                  Software Proficiency
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {tools.map((tool, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    viewport={{ once: true }}
                  >
                    <Badge
                      variant="default"
                      className="text-sm px-5 py-2.5 cursor-default font-medium"
                    >
                      {tool}
                    </Badge>
                  </m.div>
                ))}
              </div>

              <Separator className="my-6" />

              <div className="space-y-4 mt-6">
                <h4 className="text-sm font-semibold text-primary mb-4">
                  Detailed Expertise
                </h4>
                {highlights.map((highlight, index) => (
                  <m.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-accent/50 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <p className="text-sm text-foreground">{highlight}</p>
                  </m.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </m.div>
      </div>
    </section>
  );
}
