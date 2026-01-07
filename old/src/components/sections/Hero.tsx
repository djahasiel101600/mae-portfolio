import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback } from "../ui/avatar";

import { Mail, MapPin, Clock, Sparkles } from "lucide-react";

export function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const contactItems = [
    {
      icon: Mail,
      text: "wmaebusano@email.com",
      href: "mailto:wmaebusano@email.com",
    },
    { icon: MapPin, text: "Philippines" },
    { icon: Clock, text: "Open to Full-time or Part-time Remote Work" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20"
      aria-labelledby="hero-heading"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={{
              initial: {},
              animate: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {" "}
            {/* Avatar */}
            <motion.div {...fadeInUp} className="flex justify-center mb-6">
              <Avatar className="w-32 h-32 border-4 border-primary/20 shadow-2xl">
                <AvatarFallback className="bg-linear-to-br from-primary to-secondary text-white text-4xl font-bold">
                  MB
                </AvatarFallback>
              </Avatar>
            </motion.div>
            <motion.h1
              {...fadeInUp}
              id="hero-heading"
              className="text-5xl md:text-7xl font-bold text-primary mb-4"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Mae Busano
            </motion.h1>
            <motion.p
              {...fadeInUp}
              className="text-xl md:text-2xl text-foreground font-medium mb-6"
            >
              Virtual Assistant | Administrative & Data Support Specialist
            </motion.p>
            <motion.p
              {...fadeInUp}
              className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              Detail-oriented and reliable professional with strong experience
              in administrative support, data organization, and report
              preparation. Committed to delivering organized, accurate, and
              efficient remote support.
            </motion.p>
            {/* Contact Info */}
            <motion.div
              {...fadeInUp}
              className="flex flex-wrap justify-center gap-4 mb-10"
            >
              {contactItems.map((item, index) =>
                item.href ? (
                  <a
                    key={index}
                    href={item.href}
                    className="flex items-center gap-2 px-4 py-2 bg-card/70 backdrop-blur-sm rounded-full border border-border/50 hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </a>
                ) : (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 bg-card/70 backdrop-blur-sm rounded-full border border-border/50"
                  >
                    <item.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm">{item.text}</span>
                  </div>
                )
              )}
            </motion.div>
            {/* CTA Buttons */}
            <motion.div
              {...fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Button
                size="lg"
                onClick={() =>
                  document
                    .querySelector("#contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-base group"
              >
                <Sparkles className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
                Work With Me
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document
                    .querySelector("#skills")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="text-base"
              >
                View My Skills
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
