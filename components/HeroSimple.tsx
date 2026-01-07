import React from "react";

export default function HeroSimple() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center gradient-bg relative overflow-hidden pt-20" aria-labelledby="hero-heading">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" aria-hidden="true"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" aria-hidden="true"></div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="w-32 h-32 border-4 border-primary/20 shadow-2xl rounded-full flex items-center justify-center bg-primary/10">
              <span className="text-4xl font-bold text-white">MB</span>
            </div>
          </div>

          <h1 id="hero-heading" className="text-5xl md:text-7xl font-bold text-primary mb-4" style={{fontFamily: "'Playfair Display', serif"}}>
            Mae Busano
          </h1>

          <p className="text-xl md:text-2xl text-foreground font-medium mb-6">Virtual Assistant | Administrative & Data Support Specialist</p>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">Detail-oriented and reliable professional with strong experience in administrative support, data organization, and report preparation. Committed to delivering organized, accurate, and efficient remote support.</p>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <a href="mailto:wmaebusano@email.com" className="flex items-center gap-2 px-4 py-2 bg-card/70 backdrop-blur-sm rounded-full border border-border/50">📧 <span className="text-sm">wmaebusano@email.com</span></a>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/70 backdrop-blur-sm rounded-full border border-border/50">📍 <span className="text-sm">Philippines</span></div>
            <div className="flex items-center gap-2 px-4 py-2 bg-card/70 backdrop-blur-sm rounded-full border border-border/50">⏰ <span className="text-sm">Open to Full-time or Part-time Remote Work</span></div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-white rounded-lg">Work With Me</button>
            <button className="px-6 py-3 border border-border rounded-lg">View My Skills</button>
          </div>
        </div>
      </div>
    </section>
  );
}
