import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { Mail, MessageSquare, CalendarCheck, Heart, Send } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSubmitSuccess(null);
    setSubmitError(null);

    try {
      const res = await fetch("/api/send-contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(`Server error ${res.status} ${text}`);
      }

      setSubmitSuccess("Message sent — thanks! I'll get back to you soon.");
      setFormData({ name: "", email: "", message: "" });
    } catch (err: any) {
      console.error("Contact send error:", err);
      setSubmitError(
        "Failed to send message via server. Opening mail client as fallback."
      );
      const mailtoLink = `mailto:mae.busano@email.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0A%0AFrom: ${formData.email}`;
      window.location.href = mailtoLink;
    } finally {
      setSubmitting(false);
    }
  };

  const commitmentItems = [
    {
      icon: MessageSquare,
      title: "Communication",
      description:
        "Consistently checks emails and messages for updates and maintains clear, professional communication.",
    },
    {
      icon: CalendarCheck,
      title: "Reliability",
      description:
        "Values deadlines, organization, and delivers work with attention to detail and accuracy.",
    },
    {
      icon: Heart,
      title: "Commitment",
      description:
        "Open to long-term, trust-based working relationships built on mutual respect and clear expectations.",
    },
  ];

  return (
    <section id="contact" className="py-20 gradient-bg">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2
            className="text-4xl md:text-5xl font-bold text-primary mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Availability & Commitment
          </h2>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="mb-8">
              <CardContent className="pt-8">
                <p className="text-center text-lg text-muted-foreground mb-8">
                  I'm dedicated to building trust-based working relationships
                  and delivering consistent, reliable support. My work ethic is
                  built on organization, clear communication, and respect for
                  deadlines.
                </p>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  {commitmentItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div className="mb-4 flex justify-center">
                        <div className="p-4 bg-primary/10 rounded-full">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold text-primary mb-2">
                        {item.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Card className="overflow-hidden">
              <CardHeader className="text-center bg-linear-to-br from-primary/10 via-secondary/5 to-transparent">
                <CardTitle className="text-3xl">Let's Connect</CardTitle>
                <CardDescription className="text-base">
                  Send me a message and I'll get back to you soon
                </CardDescription>
              </CardHeader>
              <Separator />
              <CardContent className="pt-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {submitSuccess && (
                    <div className="text-sm text-emerald-600 text-center mb-4">
                      {submitSuccess}
                    </div>
                  )}
                  {submitError && (
                    <div className="text-sm text-destructive text-center mb-4">
                      {submitError}
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell me about your project or how I can help you..."
                      value={formData.message}
                      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={5}
                    />
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto group"
                      disabled={submitting}
                    >
                      <Send className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {submitting ? "Sending..." : "Send Message"}
                    </Button>
                    <Button
                      type="button"
                      size="lg"
                      variant="outline"
                      className="w-full sm:w-auto group"
                      onClick={() =>
                        (window.location.href = "mailto:mae.busano@email.com")
                      }
                    >
                      <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                      Email Directly
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
