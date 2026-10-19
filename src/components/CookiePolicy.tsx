import React, { useEffect } from "react";
import { Logo } from "./Logo";
import { ArrowLeft, Cookie } from "lucide-react";

interface CookiePolicyProps {
  onNavigate?: (path: string) => void;
}

export const CookiePolicy: React.FC<CookiePolicyProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Polityka Cookies – Spennly";
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string,
  ) => {
    if (onNavigate && path.startsWith("/")) {
      e.preventDefault();
      onNavigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-800 flex flex-col font-sans selection:bg-emerald-500 selection:text-white">
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="flex items-center gap-2 hover:opacity-90 transition-opacity"
            title="Powrót do strony głównej"
          >
            <Logo size="sm" />
          </a>

          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-slate-600 hover:text-emerald-600 transition-colors bg-slate-100 hover:bg-slate-200/80 px-3 py-1.5 rounded-lg"
          >
            <ArrowLeft className="w-4 h-4" />
            Wróć do strony głównej
          </a>
        </div>
      </header>

      <main className="grow max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-4">
            <Cookie className="w-4 h-4 text-emerald-600" />
            Informacja o plikach cookies
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Polityka cookies Spennly
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-xs sm:text-sm text-slate-500">
            <span>
              <strong>Wersja:</strong> 1.0
            </span>
            <span>•</span>
            <span>
              <strong>Data wejścia w życie:</strong> 19 października 2026 r.
            </span>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              1. Czym są pliki cookies?
            </h2>
            <p>
              Pliki cookies (tzw. ciasteczka) to małe pliki tekstowe zapisywane
              na urządzeniu końcowym Użytkownika podczas przeglądania serwisu
              Spennly (https://spennly.pl).
            </p>
          </section>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              2. Do czego używamy plików cookies?
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Niezbędne (techniczne):</strong> Umożliwiają utrzymanie
                sesji zalogowanego Użytkownika, bezpieczne uwierzytelnianie
                przez Supabase Auth oraz prawidłowe działanie płatności Stripe.
              </li>
              <li>
                <strong>Funkcjonalne:</strong> Zapamiętywanie preferencji
                interfejsu (np. preferowany widok, stan zakładek).
              </li>
              <li>
                <strong>Analityczne:</strong> Pomagają nam zrozumieć, jak
                Użytkownicy korzystają ze strony i ulepszać aplikację.
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              3. Zarządzanie plikami cookies
            </h2>
            <p>
              Możesz w każdej chwili zmienić ustawienia dotyczące cookies w
              swojej przeglądarce internetowej. Wyłączenie niezbędnych plików
              cookies może jednak utrudnić lub uniemożliwić poprawne logowanie.
            </p>
          </section>

          <hr className="border-slate-100" />

          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              4. Kontakt
            </h2>
            <p>
              W razie pytań prosimy o kontakt:{" "}
              <a
                href="mailto:app.spennly@gmail.com"
                className="text-emerald-600 font-bold hover:underline"
              >
                app.spennly@gmail.com
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-4">
            <a
              href="/polityka-prywatnosci"
              onClick={(e) => handleLinkClick(e, "/polityka-prywatnosci")}
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Polityka prywatności
            </a>
            <span>•</span>
            <a
              href="/regulamin"
              onClick={(e) => handleLinkClick(e, "/regulamin")}
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Regulamin
            </a>
          </div>

          <a
            href="/"
            onClick={(e) => handleLinkClick(e, "/")}
            className="text-emerald-600 hover:underline"
          >
            ← Wróć do spennly.pl
          </a>
        </div>
      </main>

      <footer className="w-full bg-[#f2f3ff] border-t border-slate-200/80 py-6 text-center text-xs text-slate-400 mt-auto">
        <p>© 2026 Spennly. Wszelkie prawa zastrzeżone.</p>
      </footer>
    </div>
  );
};
