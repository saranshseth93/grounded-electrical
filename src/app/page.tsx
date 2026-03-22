import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { WhyUs } from "@/components/why-us";
import { Areas } from "@/components/areas";
import { Reviews } from "@/components/reviews";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  name: "Grounded Electrical",
  description:
    "Licensed electrician servicing Melbourne's northern suburbs. Powerpoints, switchboard upgrades, LED lighting, safety inspections.",
  telephone: "+61400123456",
  email: "matt@groundedelectrical.com.au",
  url: "https://groundedelectrical.com.au",
  areaServed: [
    "Wollert",
    "Epping",
    "South Morang",
    "Craigieburn",
    "Mernda",
    "Doreen",
    "Mill Park",
    "Lalor",
    "Thomastown",
    "Bundoora",
    "Reservoir",
    "Preston",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wollert",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "47",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "12:00",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Areas />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
