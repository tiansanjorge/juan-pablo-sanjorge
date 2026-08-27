import { NavBar } from "./NavBar";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { BsWhatsapp } from "react-icons/bs";
import { useEffect, useRef, useState } from "react";

export const UserLayout = () => {
  const location = useLocation();
  const [videoSectionReached, setVideoSectionReached] = useState(false);
  const [fabOverPrimary, setFabOverPrimary] = useState(false);
  const fabRef = useRef(null);

  useEffect(() => {
    if (location.pathname !== "/") return;

    setVideoSectionReached(false);
    let section;
    let rafId;
    let ticking = false;
    let cancelled = false;

    const checkPosition = () => {
      ticking = false;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      setVideoSectionReached(rect.top <= window.innerHeight * 0.5);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(checkPosition);
      }
    };

    const trySetup = () => {
      if (cancelled) return;
      section = document.querySelector(".enfoque-section");
      if (!section) {
        rafId = requestAnimationFrame(trySetup);
        return;
      }
      checkPosition();
      window.addEventListener("scroll", onScroll, { passive: true });
    };
    trySetup();

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [location.pathname]);

  const showWhatsappFab =
    location.pathname !== "/contact" &&
    (location.pathname !== "/" || videoSectionReached);

  useEffect(() => {
    const WAVE_HEIGHT = 70;
    let rafId;
    let ticking = false;

    const checkOverlap = () => {
      ticking = false;
      const fab = fabRef.current;
      if (!fab) return;
      const fabRect = fab.getBoundingClientRect();
      const fabCenter = fabRect.top + fabRect.height / 2;
      const sections = document.querySelectorAll(".section-primary");
      let overlapping = false;
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const top = section.classList.contains("section-wave-top")
          ? rect.top - WAVE_HEIGHT
          : rect.top;
        if (fabCenter >= top && fabCenter <= rect.bottom) {
          overlapping = true;
        }
      });
      setFabOverPrimary(overlapping);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        rafId = requestAnimationFrame(checkOverlap);
      }
    };

    checkOverlap();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [location.pathname, showWhatsappFab]);

  return (
    <div className="d-flex flex-column justify-content-between">
      <NavBar />
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
      <Footer />
      <AnimatePresence>
        {showWhatsappFab && (
          <motion.a
            key="whatsapp-fab"
            ref={fabRef}
            className={`whatsapp-fab${
              fabOverPrimary ? " whatsapp-fab--contrast" : ""
            }`}
            href="https://wa.link/7staf4"
            target="_blank"
            rel="noreferrer"
            aria-label="Enviar WhatsApp"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <BsWhatsapp />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  );
};
