import React, { useState } from "react";
import { Logo } from "./Logo";

export const LandingPage: React.FC = () => {
  const LOGIN_URL = "https://app.spennly.pl/auth";
  const SIGNUP_URL = "https://app.spennly.pl/auth?mode=signup";
  const APP_URL = SIGNUP_URL;

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Twoje ostre grafiki z folderu Public/Image/
  const [dashboardSrc, setDashboardSrc] = useState("/Image/ekran_glowny.png");
  const [categoriesSrc, setCategoriesSrc] = useState(
    "/Image/kategorie_podzial_wydatkow.png",
  );
  const [reportsSrc, setReportsSrc] = useState("/Image/raporty.png");

  const fallbackDashboard =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAX2kYstIk6PRaAY7qgqRFVUyLaiKsveGySBDguHeCOWfeJluxYJb4_LgFI3QkI0J_dq5EQSHyHWRV8kDTYN3qazhLZWsxt6-JmHm4R02i1O4snndy86qKFLDXD2gEwx9DASkcM15Q7GIJxASkfg89I2_yTBZAc003X14HwdL4mfprv7mHorQe5dSWJi7j0yM11wIkR8P1ACtQZCAIlRTvWwS6SGVIW4eh12uJfDEg77X-Vs6GklswQm8-D251ZY0ordG4";

  const fallbackCategories =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDu6oGbUDY-5LK4I_m-0DF1raJZzwX-RAyN6kO_FbpyyuyENknh2jAeGZMmf16A2v43wrHEtrqp4FyqQ1AKtlZqD_wIF1pt97mDoDxOO8fFu99rmuwa339zGwXwOmJM-Z0ianqmUcHXDbHnfR2Qj-F9oGWJUjVs8KjhWISyCWOtH0CTzG8J7pOSkVjAx-REhEG_F9VlgIY6wSsqRKs8Y4Ibj9qDF9W8SMVHIJ1R_NyhF8-Faun_Dy1mbnAFS0oXr1Ralvs";

  const fallbackReports =
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB4o2AceVwgMmnwp8aLUxGkh6juFAIuRIJtMtbIkbHKDtccYDFPab87WIg9kkVle_tU7V1Rj_eqkRUA36uPlqrMqeoqKm6-jLZ-YfFVyGwz2rvkSpCt7Q_klokQIFzyKNoYhb7I6fqLeEfg2a2zSElKjK9WzT-WNbt8U7lJElP75cVkjQSCnPyBcPOyc75K1aQzdHhmYhm4Aemo20NkAutRIskr_f88iJwAHYfdpAuNE67znfkDIwtObHNMvJSUStQe28s";

  const faqItems = [
    {
      q: "Czy Spennly jest darmowe?",
      a: "Tak, plan darmowy z 1 portfelem jest w 100% bezpłatny na zawsze i nie wymaga podawania karty płatniczej.",
    },
    {
      q: "Czym różni się Free od Premium?",
      a: "W planie Free masz 1 portfel na codzienne wydatki. Premium pozwala tworzyć osobne portfele na firmę, dom, wyjazdy czy samochód oraz oferuje zaawansowane raporty.",
    },
    {
      q: "Czy mogę korzystać ze Spennly na telefonie?",
      a: "Tak, aplikacja jest w pełni responsywna i świetnie działa w przeglądarce każdego smartfona, tabletu oraz komputera.",
    },
    {
      q: "Czy Spennly łączy się z moim bankiem?",
      a: "Nie. Spennly celowo opiera się na ręcznym zapisywaniu wydatków. Właśnie ta 3-sekundowa chwila uważności przy płaceniu kartą pozwala realnie zauważyć, gdzie idą pieniądze i zmienić nawyki finansowe.",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-[#faf8ff] text-[#131b2e] selection:bg-emerald-100 selection:text-emerald-900 font-sans">
      {/* 1. TOP NAVIGATION HEADER */}
      {/* 1. TOP NAVIGATION HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[#faf8ff]/90 backdrop-blur-xl border-b border-black/[0.04]">
        <div className="h-16 sm:h-20 max-w-[1200px] mx-auto px-2.5 sm:px-6 lg:px-8 flex items-center justify-between gap-1 sm:gap-4">
          {/* Brand Logo */}
          <a href="#" className="flex items-center cursor-pointer shrink-0">
            <Logo size="md" />
          </a>

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a
              href="#funkcje"
              className="hover:text-[#00a859] transition-colors"
            >
              Funkcje
            </a>
            <a
              href="#jak-dziala"
              className="hover:text-[#00a859] transition-colors"
            >
              Jak działa
            </a>
            <a
              href="#cennik"
              className="hover:text-[#00a859] transition-colors"
            >
              Cennik
            </a>
            <a href="#faq" className="hover:text-[#00a859] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Actions - Redirect to app.spennly.pl */}
          <div className="flex items-center gap-1 sm:gap-3 shrink-0">
            <a
              href={LOGIN_URL}
              className="text-xs sm:text-sm font-semibold text-slate-700 hover:text-black px-1.5 sm:px-3 py-1.5 sm:py-2 whitespace-nowrap transition-colors"
            >
              Zaloguj się
            </a>
            <a
              href={SIGNUP_URL}
              className="inline-flex items-center justify-center whitespace-nowrap text-xs sm:text-sm font-bold bg-[#00a859] hover:bg-[#008f4c] text-white px-2.5 min-[380px]:px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full shadow-[0_2px_10px_rgba(0,168,89,0.25)] hover:shadow-[0_4px_16px_rgba(0,168,89,0.35)] active:scale-95 transition-all"
            >
              Zarejestruj się
            </a>
          </div>
        </div>
      </header>

      {/* MAIN CONTAINER */}
      <main className="w-full pt-16 sm:pt-20">
        {/* 2. HERO SECTION */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-16">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-6">
              <span className="w-2 h-2 rounded-full bg-[#00a859]"></span>
              CODZIENNE WYDATKI
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-[56px] lg:leading-[64px] font-extrabold text-[#131b2e] max-w-4xl tracking-tight">
              Każdy wydatek ma znaczenie. <br className="hidden md:inline" />
              Zacznij go zauważać.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl mt-5 leading-relaxed">
              Zapisuj codzienne zakupy w kilka sekund i zobacz pełny obraz
              swoich codziennych finansów.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <a
                href={APP_URL}
                className="w-full sm:w-auto inline-flex items-center justify-center text-sm sm:text-base font-bold bg-[#00a859] hover:bg-[#008f4c] text-white px-8 py-3.5 rounded-full shadow-[0_10px_25px_-5px_rgba(0,168,89,0.35)] active:scale-95 transition-all"
              >
                Zacznij za darmo →
              </a>
              <a
                href="#jak-dziala"
                className="w-full sm:w-auto inline-flex items-center justify-center text-sm sm:text-base font-semibold bg-white border border-slate-200 text-[#131b2e] px-8 py-3.5 rounded-full shadow-xs hover:bg-slate-50 active:scale-95 transition-all"
              >
                Zobacz, jak działa
              </a>
            </div>

            <p className="text-xs text-slate-400 font-medium mt-3">
              1 portfel za darmo • bez karty płatniczej
            </p>

            {/* SCREENSHOT CENTRUM: Wyświetla Twój plik ekran_glowny.png */}
            <div className="w-full max-w-5xl mt-12 bg-white rounded-3xl p-2 sm:p-3 border border-slate-200 shadow-[0_20px_50px_-10px_rgba(19,27,46,0.08)] overflow-hidden">
              <div className="h-8 px-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-3 h-3 rounded-full bg-[#27c93f]"></span>
                </div>
                <div className="text-[11px] font-bold text-slate-400 tracking-wider uppercase">
                  APLIKACJA SPENNLY • PANEL GŁÓWNY
                </div>
                <div className="w-12"></div>
              </div>
              <img
                src={dashboardSrc}
                alt="Aplikacja Spennly - Panel główny"
                className="w-full h-auto object-cover object-top block rounded-b-2xl"
                loading="eager"
                onError={() => {
                  if (dashboardSrc === "/Image/ekran_glowny.png") {
                    setDashboardSrc("/image/ekran_glowny.png");
                  } else if (dashboardSrc === "/image/ekran_glowny.png") {
                    setDashboardSrc(fallbackDashboard);
                  }
                }}
              />
            </div>
          </div>
        </section>

        {/* 3. SEKCJA PROBLEMU */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
              ŚWIADOMOŚĆ FINANSOWA
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight mb-8">
              Płacenie jest niewidzialne.
            </h2>

            <div className="w-full max-w-3xl bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-5">
                CODZIENNE TRANSAKCJE
              </span>
              <div className="flex flex-wrap items-center justify-center gap-3">
                <span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 font-extrabold text-base sm:text-lg text-[#131b2e] shadow-xs">
                  47,80 zł
                </span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 font-extrabold text-base sm:text-lg text-[#131b2e] shadow-xs">
                  19,90 zł
                </span>
                <span className="text-slate-300 font-bold">•</span>
                <span className="px-5 py-2.5 rounded-full bg-slate-50 border border-slate-200 font-extrabold text-base sm:text-lg text-[#131b2e] shadow-xs">
                  32,00 zł
                </span>
              </div>
              <p className="text-base sm:text-lg text-slate-600 font-medium mt-6 mb-6 max-w-lg mx-auto leading-relaxed">
                Pojedynczo niewiele znaczą. Pod koniec miesiąca mogą oznaczać
                setki złotych.
              </p>
              <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-[#00a859] text-sm sm:text-base font-bold px-5 py-2.5 rounded-full">
                <span className="material-symbols-outlined text-[18px]">
                  check_circle
                </span>
                Spennly pomaga Ci je zauważyć.
              </div>
            </div>
          </div>
        </section>

        {/* 4. PROSTY PROCES */}
        <section
          className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20"
          id="jak-dziala"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
              PROSTY PROCES
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight">
              Jak działa Spennly?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col items-start hover:-translate-y-1 transition-transform">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#00a859] text-white text-base font-extrabold mb-6 shadow-sm">
                01
              </span>
              <h3 className="text-xl font-bold text-[#131b2e] mb-2">Płacisz</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Wydajesz pienidze.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col items-start hover:-translate-y-1 transition-transform">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#00a859] text-white text-base font-extrabold mb-6 shadow-sm">
                02
              </span>
              <h3 className="text-xl font-bold text-[#131b2e] mb-2">
                Zapisujesz
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Otwierasz aplikację i zapisujesz wydatek.
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 border border-slate-200/90 shadow-sm flex flex-col items-start hover:-translate-y-1 transition-transform">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-2xl bg-[#00a859] text-white text-base font-extrabold mb-6 shadow-sm">
                03
              </span>
              <h3 className="text-xl font-bold text-[#131b2e] mb-2">Widzisz</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Kontrolujesz swoje wydatki.
              </p>
            </div>
          </div>
        </section>

        {/* 5. FUNKCJA 1: Kategorie */}
        <section
          className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20"
          id="funkcje"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
                KROK PO ZAKUPIE
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight mb-4">
                Dodaj wydatek w kilka sekund
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Bez skomplikowanych formularzy i zbędnych pól. Zapisujesz
                wydatek zaraz po zakupie, zanim o nim zapomnisz.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00a859] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[20px]">
                      bolt
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-[#131b2e] mb-1">
                    Błyskawiczny wpis
                  </h4>
                  <p className="text-xs text-slate-500">
                    Minimalistyczny formularz, który nie odciąga Twojej uwagi.
                  </p>
                </div>
                <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#00a859] flex items-center justify-center mb-3">
                    <span className="material-symbols-outlined text-[20px]">
                      category
                    </span>
                  </div>
                  <h4 className="font-bold text-base text-[#131b2e] mb-1">
                    Własne kategorie
                  </h4>
                  <p className="text-xs text-slate-500">
                    Dopasowane dokładnie do Twojego indywidualnego stylu życia.
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 bg-white rounded-3xl p-2 sm:p-3 border border-slate-200 shadow-xl overflow-hidden">
              <div className="h-7 px-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Kategorie i dodawanie wydatku
                </span>
                <div className="w-8"></div>
              </div>
              <img
                src={categoriesSrc}
                alt="Kategorie i dodawanie wydatku w Spennly"
                className="w-full h-auto object-cover rounded-b-2xl block"
                onError={() => {
                  if (
                    categoriesSrc === "/Image/kategorie_podzial_wydatkow.png"
                  ) {
                    setCategoriesSrc("/image/kategorie_podzial_wydatkow.png");
                  } else if (
                    categoriesSrc === "/image/kategorie_podzial_wydatkow.png"
                  ) {
                    setCategoriesSrc(fallbackCategories);
                  }
                }}
              />
            </div>
          </div>
        </section>

        {/* 6. FUNKCJA 2: Raporty */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 bg-white rounded-3xl p-2 sm:p-3 border border-slate-200 shadow-xl order-2 lg:order-1 overflow-hidden">
              <div className="h-7 px-4 bg-slate-50 border-b border-slate-100 flex items-center justify-between rounded-t-2xl">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></span>
                </div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                  Raporty i wykresy kołowe
                </span>
                <div className="w-8"></div>
              </div>
              <img
                src={reportsSrc}
                alt="Raporty i wykresy kołowe w Spennly"
                className="w-full h-auto object-cover rounded-b-2xl block"
                onError={() => {
                  if (reportsSrc === "/Image/raporty.png") {
                    setReportsSrc("/image/raporty.png");
                  } else if (reportsSrc === "/image/raporty.png") {
                    setReportsSrc(fallbackReports);
                  }
                }}
              />
            </div>

            <div className="lg:col-span-6 flex flex-col items-start text-left order-1 lg:order-2">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
                CZYTELNE ZESTAWIENIA
              </span>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight mb-4">
                Poznaj prawdziwą strukturę swoich wydatków
              </h2>
              <p className="text-base text-slate-600 leading-relaxed mb-8">
                Sprawdź wydatki według kategorii, kwot i procentów. Wystarczy
                rzut oka, by zrozumieć strukturę swojego budżetu.
              </p>
              <div className="flex flex-col gap-3.5 w-full">
                {[
                  "Szybkie dodawanie wydatków",
                  "Własne kategorie",
                  "Zapisywanie wpływów",
                  "Raporty i wykresy kołowe",
                  "Wiele portfeli w Premium",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-emerald-100 text-[#00a859] flex items-center justify-center shrink-0">
                      <span className="material-symbols-outlined text-[16px] font-bold">
                        check
                      </span>
                    </span>
                    <span className="text-sm font-semibold text-[#131b2e]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 7. ELASTYCZNOŚĆ */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="max-w-4xl mx-auto text-center bg-white rounded-3xl p-8 lg:p-14 border border-slate-200 shadow-sm">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
              ELASTYCZNOŚĆ
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight mb-3">
              Jeden portfel wystarczy na start.
            </h2>
            <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto mb-8 leading-relaxed">
              A jeśli chcesz oddzielić dom, firmę, samochód czy podróże — możesz
              utworzyć kolejne.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              {[
                { name: "Dom", icon: "🏠" },
                { name: "Firma", icon: "💼" },
                { name: "Samochód", icon: "🚗" },
                { name: "Podróż", icon: "🏖️" },
                { name: "Wspólne", icon: "🤝" },
              ].map((w) => (
                <a
                  key={w.name}
                  className="px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 text-sm font-bold text-[#131b2e] shadow-xs hover:border-[#00a859] hover:bg-emerald-50/50 hover:-translate-y-0.5 transition-all cursor-pointer"
                >
                  <span className="mr-1.5">{w.icon}</span>
                  <span>{w.name}</span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* 8. CENNIK */}
        <section
          className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20"
          id="cennik"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
              CENNIK
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight mb-3">
              Prosty wybór, przejrzyste zasady
            </h2>
            <p className="text-base text-slate-600 max-w-lg">
              Jeden portfel na start. Wiele portfeli, gdy potrzebujesz więcej.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Karta FREE */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                    FREE
                  </span>
                </div>
                <div className="mb-6">
                  <span className="text-4xl font-extrabold text-[#131b2e]">
                    0 zł
                  </span>
                  <span className="text-sm text-slate-500 font-medium">
                    {" "}
                    / na zawsze
                  </span>
                </div>
                <p className="text-sm text-slate-600 mb-6">
                  Idealny na początek, by wyrobić zdrowy nawyk zapisywania
                  codziennych wydatków.
                </p>
                <div className="space-y-3 pt-4 border-t border-slate-100">
                  {[
                    "1 portfel",
                    "Wydatki i wpływy",
                    "Własne kategorie",
                    "Podstawowe raporty",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2.5 text-sm font-semibold text-[#131b2e]"
                    >
                      <span className="material-symbols-outlined text-[#00a859] text-[18px]">
                        check
                      </span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Karta PREMIUM */}
            <div className="bg-white rounded-3xl p-8 border-2 border-[#00a859] shadow-xl relative flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-[#00a859] text-xs font-bold uppercase tracking-wider">
                    PREMIUM
                  </span>
                  <span className="text-xs bg-[#00a859] text-white px-3 py-1 rounded-full font-bold">
                    Najpopularniejszy
                  </span>
                </div>
                <h3 className="text-xl font-extrabold text-[#131b2e] mb-1">
                  Więcej portfeli. Więcej porządku.
                </h3>
                <p className="text-xs font-bold text-[#00a859] mb-6 flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]">
                    verified
                  </span>
                  Wszystkie funkcje Free + nielimitowane portfele
                </p>

                {/* Zestawienie cenowe bez kropek i przełączania */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <span className="text-xs font-bold text-slate-800">
                      1 miesiąc
                    </span>
                    <span className="text-sm font-bold text-[#131b2e]">
                      11,99 zł
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div>
                      <span className="text-xs font-bold text-slate-800">
                        3 miesiące
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        ≈ 10,00 zł / mies.
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[#131b2e]">
                      29,99 zł
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div>
                      <span className="text-xs font-bold text-slate-800">
                        6 miesięcy
                      </span>
                      <span className="text-[11px] text-slate-400 block">
                        ≈ 8,33 zł / mies.
                      </span>
                    </div>
                    <span className="text-sm font-bold text-[#131b2e]">
                      49,99 zł
                    </span>
                  </div>

                  <div className="flex items-center justify-between p-3.5 rounded-xl bg-emerald-50/70 border border-[#00a859]/50 shadow-xs">
                    <div>
                      <div className="flex items-center gap-1.5">
                        <span className="text-xs font-extrabold text-[#131b2e]">
                          12 miesięcy
                        </span>
                        <span className="text-[10px] bg-[#00a859] text-white px-2 py-0.5 rounded-full font-bold">
                          Najlepsza oferta
                        </span>
                      </div>
                      <span className="text-[11px] text-[#00a859] block font-bold mt-0.5">
                        ≈ 6,67 zł / mies. • Najniższy koszt
                      </span>
                    </div>
                    <span className="text-base font-extrabold text-[#00a859]">
                      79,99 zł
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 9. FAQ */}
        <section
          className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-20"
          id="faq"
        >
          <div className="flex flex-col items-center text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
              FAQ
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#131b2e] tracking-tight">
              Wszystko, co warto wiedzieć
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 border border-slate-200/90 shadow-xs transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between cursor-pointer text-left"
                  >
                    <h3 className="font-bold text-base sm:text-lg text-[#131b2e] pr-4">
                      {item.q}
                    </h3>
                    <span
                      className={`material-symbols-outlined text-slate-400 transition-transform ${isOpen ? "rotate-180 text-[#00a859]" : ""}`}
                    >
                      expand_more
                    </span>
                  </button>
                  {isOpen && (
                    <p className="text-sm text-slate-600 mt-4 leading-relaxed pt-3 border-t border-slate-100">
                      {item.a}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* 10. FINAL CTA BANNER */}
        <section className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="max-w-5xl mx-auto bg-[#00a859] rounded-3xl p-8 sm:p-14 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute -top-12 -left-12 w-48 h-48 bg-white/10 rounded-full blur-2xl pointer-events-none" />
            <h2 className="text-2xl sm:text-4xl lg:text-[44px] font-extrabold tracking-tight mb-4">
              Świadome finanse zaczynają się od jednego kliknięcia
            </h2>
            <p className="text-sm sm:text-base text-emerald-100 max-w-xl mx-auto mb-8 leading-relaxed">
              Sprawdź Spennly za darmo i zacznij świadomie kontrolować swoje
              codzienne wydatki.
            </p>
            <div>
              <a
                href={APP_URL}
                className="inline-flex items-center justify-center text-sm sm:text-base font-extrabold bg-white text-[#006d38] px-10 py-4 rounded-full shadow-lg hover:bg-slate-50 active:scale-95 transition-all cursor-pointer"
              >
                Zacznij za darmo
              </a>
            </div>
            <p className="text-xs text-emerald-200 mt-4 font-medium">
              1 portfel za darmo • bez karty płatniczej
            </p>
          </div>
        </section>
      </main>

      {/* 11. FOOTER */}
      <footer className="w-full bg-[#f2f3ff] border-t border-slate-200/80">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-6 border-b border-slate-200">
            <div className="flex items-center gap-2">
              <Logo size="sm" height={46} />
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-600">
              <a href={APP_URL} className="hover:text-black transition-colors">
                Polityka Prywatności
              </a>
              <a href={APP_URL} className="hover:text-black transition-colors">
                Regulamin
              </a>
              <a href={APP_URL} className="hover:text-black transition-colors">
                Bezpieczeństwo
              </a>
              <a href={APP_URL} className="hover:text-black transition-colors">
                Kontakt
              </a>
            </div>
          </div>

          <div className="pt-6 text-center text-xs text-slate-400">
            <p>© 2026 Spennly. Wszelkie prawa zastrzeżone.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};
