import Navbar from "@/components/Navbar";
import PreachingHero from "@/components/PreachingHero";
import WatchLive from "@/components/WatchLive";
import WelcomePastor from "@/components/WelcomePastor";
import StaffStrip from "@/components/StaffStrip";
import ScriptureBanner from "@/components/ScriptureBanner";
import ServiceTimes from "@/components/ServiceTimes";
import FirstTimeVisitor from "@/components/FirstTimeVisitor";
import AboutMission from "@/components/AboutMission";
import WhatWeBelieve from "@/components/WhatWeBelieve";
import Testimonies from "@/components/Testimonies";
import LatestSermon from "@/components/LatestSermon";
import UpcomingEvents from "@/components/UpcomingEvents";
import MinistriesPreview from "@/components/MinistriesPreview";
import PlanOfSalvation from "@/components/PlanOfSalvation";
import Missionaries from "@/components/Missionaries";
import Give from "@/components/Give";
import PhotoGallery from "@/components/PhotoGallery";
import MapAddress from "@/components/MapAddress";
import PrayerRequest from "@/components/PrayerRequest";
import ChatPastor from "@/components/ChatPastor";
import MobileFriendly from "@/components/MobileFriendly";
import Footer from "@/components/Footer";

const churchSchema = {
  "@context": "https://schema.org",
  "@type": "Church",
  name: "Independent KJV Baptist Church",
  alternateName: "Independent Baptist Church",
  url: "https://example.com",
  logo: "https://example.com/logo.png",
  image: "https://example.com/og-image.jpg",
  description:
    "A Bible-believing, King James Bible Independent Baptist church. Sunday worship at 10:30 AM, Wednesday Bible study at 7:00 PM.",
  telephone: "+1-555-555-0100",
  email: "office@example.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "123 Church Street",
    addressLocality: "Anytown",
    addressRegion: "ST",
    postalCode: "00000",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Sunday",
      opens: "09:30",
      closes: "19:30",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Wednesday",
      opens: "19:00",
      closes: "20:30",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(churchSchema) }}
      />
      <Navbar />
      <main>
        <PreachingHero />
        <WatchLive />
        <WelcomePastor />
        <StaffStrip />
        <ScriptureBanner />
        <ServiceTimes />
        <FirstTimeVisitor />
        <AboutMission />
        <WhatWeBelieve />
        <Testimonies />
        <LatestSermon />
        <UpcomingEvents />
        <MinistriesPreview />
        <PlanOfSalvation />
        <Missionaries />
        <Give />
        <PhotoGallery />
        <MapAddress />
        <PrayerRequest />
        <ChatPastor />
        <MobileFriendly />
      </main>
      <Footer />
    </>
  );
}
