"use client";

import React, { useState } from "react";
import works from "../../data/works.json";
import links from "../../data/links.json";

function filenameToTitle(filename: string) {
  const name = filename.replace(/\.[^.]+$/, "");
  // Replace punctuation and parentheses, then title-case
  return name
    .replace(/\(|\)|\.|_|-/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .split(" ")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

export default function Works() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section id="works" className="py-20 bg-background" aria-labelledby="works-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 id="works-heading" className="text-4xl md:text-5xl font-bold text-primary mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
            Portfolio — Canva Works
          </h2>
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            A selection of design work created in Canva. Click any item to view it larger. Visit my profiles to see more.
          </p>
          <div className="mt-4 flex justify-center gap-3 text-sm">
            <a href={links.linkedin} target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
            <a href={links.onlinejobs} target="_blank" rel="noreferrer" className="underline">OnlineJobs.ph</a>
            <a href={links.indeed} target="_blank" rel="noreferrer" className="underline">Indeed</a>
            <a href={links.facebook} target="_blank" rel="noreferrer" className="underline">Facebook</a>
            <a href={links.instagram} target="_blank" rel="noreferrer" className="underline">Instagram</a>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {works.map((w, i) => {
            const src = `/works/${encodeURIComponent(w.file)}`;
            const title = filenameToTitle(w.file);
            return (
              <button
                key={i}
                onClick={() => setActive(src)}
                className="group overflow-hidden rounded-lg shadow-sm border hover:shadow-lg transition-all bg-card"
                aria-label={`Open ${title}`}
              >
                <img src={src} alt={title} className="w-full h-40 object-cover group-hover:scale-105 transition-transform" />
                <div className="p-2 text-left">
                  <div className="text-sm font-medium text-foreground truncate">{title}</div>
                </div>
              </button>
            );
          })}
        </div>

        {active && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
            <div className="max-w-[90vw] max-h-[90vh]">
              <img src={active} alt={active} className="max-w-full max-h-full rounded shadow-2xl" />
            </div>
            <button
              className="absolute top-6 right-6 rounded-full bg-white text-black p-2 shadow-lg"
              onClick={() => setActive(null)}
              aria-label="Close">
              Close
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
