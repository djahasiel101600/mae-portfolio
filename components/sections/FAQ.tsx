export default function FAQ() {
  return (
    <section id="faq" className="py-20 bg-background" aria-labelledby="faq-heading">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 id="faq-heading" className="text-4xl md:text-5xl font-bold text-primary mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h3 className="text-lg font-semibold">What services does Mae provide?</h3>
            <p className="text-sm text-muted-foreground">Administrative support, email and calendar management, data entry and spreadsheets, social media management, and content creation.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">How can I contact Mae?</h3>
            <p className="text-sm text-muted-foreground">Use the contact form on this site or email mae.busano@email.com to discuss availability and rates.</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Does Mae work remotely or on-site?</h3>
            <p className="text-sm text-muted-foreground">Mae is available for remote work (full-time or part-time) and can discuss on-site arrangements case-by-case.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
