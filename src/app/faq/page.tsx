import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { faqs } from "@/lib/site";

export const metadata: Metadata = { title: "Frequently Asked Questions", description: "Answers about visa consultancy, customized international holidays, Europe travel and consultations with Naresh Gadhiya.", alternates: { canonical: "/faq" } };

export default function FaqPage() {
  const categories = [...new Set(faqs.map((faq) => faq.category))];
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <PageHero eyebrow="Useful answers" title="Frequently Asked Questions" description="Practical answers about visa preparation, personalized holidays, bookings and working with Naresh Gadhiya." />
      <section className="section section-soft">
        <div className="shell faq-layout">
          <aside className="faq-guide">
            <p className="eyebrow">Browse by topic</p>
            <h2>Plan with fewer unknowns.</h2>
            <p>These answers provide general guidance. Visa rules, availability and supplier terms can change, so discuss your specific circumstances before acting.</p>
            <nav aria-label="FAQ topics">
              {categories.map((category) => <a key={category} href={`#${category.toLowerCase().replaceAll(" ", "-").replace("&", "and")}`}>{category}</a>)}
            </nav>
          </aside>
          <div className="faq-groups">
            {categories.map((category) => (
              <section className="faq-group" id={category.toLowerCase().replaceAll(" ", "-").replace("&", "and")} key={category}>
                <p className="eyebrow gold">{category}</p>
                {faqs.filter((faq) => faq.category === category).map((faq) => (
                  <details key={faq.question}>
                    <summary>{faq.question}</summary>
                    <p>{faq.answer}</p>
                  </details>
                ))}
              </section>
            ))}
          </div>
        </div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    </>
  );
}
