import { useEffect } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

export default function App() {
  useEffect(() => {
    const canTrack = () => typeof window.gtag === "function";

    const getPagePath = () =>
      `${window.location.pathname}${window.location.search}${window.location.hash}`;

    const trackEvent = (eventName, params = {}) => {
      if (!canTrack()) {
        return;
      }

      window.gtag("event", eventName, {
        page_path: getPagePath(),
        page_title: document.title,
        page_location: window.location.href,
        ...params,
      });
    };

    const trackPageView = () => trackEvent("page_view");

    const seenSections = new Set();

    const trackSectionView = (sectionName) => {
      if (!sectionName || seenSections.has(sectionName)) {
        return;
      }

      seenSections.add(sectionName);
      trackEvent("section_view", { section_name: sectionName });
    };

    const trackClick = (event) => {
      const target = event.target.closest("[data-ga-event]");
      if (!target) {
        return;
      }

      const eventName = target.dataset.gaEvent || "cta_click";
      const label = target.dataset.gaLabel;
      const destination =
        target.getAttribute("href") || target.dataset.gaDestination;

      trackEvent(eventName, {
        ...(label ? { label } : {}),
        ...(destination ? { destination } : {}),
      });
    };

    trackPageView();

    // Track SPA-style navigation when hash changes.
    window.addEventListener("hashchange", trackPageView);
    window.addEventListener("popstate", trackPageView);

    document.addEventListener("click", trackClick);

    const sectionElements = Array.from(
      document.querySelectorAll("[data-ga-section]"),
    );

    let sectionObserver;

    if (typeof window.IntersectionObserver === "function") {
      sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) {
              return;
            }

            trackSectionView(entry.target.dataset.gaSection);
          });
        },
        { threshold: 0.5 },
      );

      sectionElements.forEach((section) => sectionObserver.observe(section));
    }

    return () => {
      window.removeEventListener("hashchange", trackPageView);
      window.removeEventListener("popstate", trackPageView);
      document.removeEventListener("click", trackClick);
      if (sectionObserver) {
        sectionObserver.disconnect();
      }
    };
  }, []);

  return (
    <>
      <Nav />
      <main>
        <Hero />
        {/* About anchor — scrolls to experience */}
        <div id="about" />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}
