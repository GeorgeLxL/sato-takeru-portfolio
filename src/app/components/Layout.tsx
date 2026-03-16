import { useEffect, useRef } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import Sparkles from "./Sparkles";
import MouseRipple from "./MouseRipple";
import CursorTail from "./CursorTail";
import { AnimatePresence, motion } from "motion/react";

const ROUTE_ORDER = ["/", "/about", "/experience", "/skills", "/education", "/works"];
const WHEEL_THRESHOLD = 30;
const EDGE_TRIGGER_DISTANCE = 120;
const NAVIGATION_COOLDOWN_MS = 700;
const EDGE_TOLERANCE_PX = 2;

function normalizePath(pathname: string) {
  if (pathname.length > 1 && pathname.endsWith("/")) {
    return pathname.slice(0, -1);
  }
  return pathname;
}

function isInteractiveTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  const tag = target.tagName.toLowerCase();
  return (
    tag === "input" ||
    tag === "textarea" ||
    tag === "select" ||
    target.isContentEditable
  );
}

function isAtTop() {
  return window.scrollY <= EDGE_TOLERANCE_PX;
}

function isAtBottom() {
  const scrollTop = window.scrollY;
  const viewportHeight = window.innerHeight;
  const pageHeight = document.documentElement.scrollHeight;
  return scrollTop + viewportHeight >= pageHeight - EDGE_TOLERANCE_PX;
}

export default function Layout() {
  const navigate = useNavigate();
  const location = useLocation();
  const isCooldownRef = useRef(false);
  const cooldownTimerRef = useRef<number | null>(null);
  const edgeScrollRef = useRef(0);
  const prevPathRef = useRef(location.pathname);

  const getDirection = () => {
    const currentIndex = ROUTE_ORDER.indexOf(normalizePath(location.pathname));
    const prevIndex = ROUTE_ORDER.indexOf(normalizePath(prevPathRef.current));
    prevPathRef.current = location.pathname;
    return currentIndex > prevIndex ? 1 : -1;
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const onWheel = (event: WheelEvent) => {
      if (isInteractiveTarget(event.target)) return;
      if (Math.abs(event.deltaY) < WHEEL_THRESHOLD) return;
      if (isCooldownRef.current) return;

      const currentPath = normalizePath(location.pathname);
      const currentIndex = ROUTE_ORDER.indexOf(currentPath);
      if (currentIndex === -1) return;

      const scrollingDown = event.deltaY > 0;
      const allowNavigation = scrollingDown ? isAtBottom() : isAtTop();
      if (!allowNavigation) {
        edgeScrollRef.current = 0;
        return;
      }

      if ((edgeScrollRef.current > 0 && !scrollingDown) || (edgeScrollRef.current < 0 && scrollingDown)) {
        edgeScrollRef.current = 0;
      }
      edgeScrollRef.current += event.deltaY;

      if (scrollingDown && edgeScrollRef.current < EDGE_TRIGGER_DISTANCE) return;
      if (!scrollingDown && edgeScrollRef.current > -EDGE_TRIGGER_DISTANCE) return;

      const nextIndex =
        scrollingDown
          ? Math.min(currentIndex + 1, ROUTE_ORDER.length - 1)
          : Math.max(currentIndex - 1, 0);

      if (nextIndex === currentIndex) return;

      event.preventDefault();
      isCooldownRef.current = true;
      edgeScrollRef.current = 0;
      navigate(ROUTE_ORDER[nextIndex]);

      cooldownTimerRef.current = window.setTimeout(() => {
        isCooldownRef.current = false;
      }, NAVIGATION_COOLDOWN_MS);
    };

    window.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      window.removeEventListener("wheel", onWheel);
      if (cooldownTimerRef.current !== null) {
        window.clearTimeout(cooldownTimerRef.current);
        cooldownTimerRef.current = null;
      }
      isCooldownRef.current = false;
    };
  }, [location.pathname, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      <Sparkles />
      <MouseRipple />
      <CursorTail />
      <Header />
      <AnimatePresence mode="wait" custom={getDirection()}>
        <motion.main
          key={location.pathname}
          custom={getDirection()}
          initial={(direction: number) => ({
            opacity: 0,
            x: direction > 0 ? 100 : -100,
            scale: 0.95,
            filter: "blur(10px)",
          })}
          animate={{ opacity: 1, x: 0, scale: 1, filter: "blur(0px)" }}
          exit={(direction: number) => ({
            opacity: 0,
            x: direction > 0 ? -100 : 100,
            scale: 0.95,
            filter: "blur(10px)",
          })}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}
