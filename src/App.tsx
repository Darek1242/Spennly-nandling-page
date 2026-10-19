import React, { useState, useEffect } from "react";
import { LandingPage } from "./components/LandingPage";
import { PrivacyPolicy } from "./components/PrivacyPolicy";
import { TermsOfService } from "./components/TermsOfService";
import { CookiePolicy } from "./components/CookiePolicy";

export default function App() {
  const getCleanPath = () => {
    if (typeof window === "undefined") return "/";
    const path = window.location.pathname.toLowerCase().replace(/\/+$/, "");
    return path === "" ? "/" : path;
  };

  const [currentPath, setCurrentPath] = useState<string>(getCleanPath());

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(getCleanPath());
      window.scrollTo(0, 0);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== "undefined") {
      window.history.pushState({}, "", path);
      setCurrentPath(path.toLowerCase().replace(/\/+$/, "") || "/");
      window.scrollTo(0, 0);
    }
  };

  // Routing
  if (
    currentPath === "/polityka-prywatnosci" ||
    currentPath.includes("polityka-prywatnosci")
  ) {
    return <PrivacyPolicy onNavigate={navigate} />;
  }

  if (currentPath === "/regulamin" || currentPath.includes("regulamin")) {
    return <TermsOfService onNavigate={navigate} />;
  }

  if (
    currentPath === "/polityka-cookies" ||
    currentPath.includes("polityka-cookies")
  ) {
    return <CookiePolicy onNavigate={navigate} />;
  }

  return <LandingPage onNavigate={navigate} />;
}
