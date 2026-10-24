import React, { useState, useEffect, useRef } from "react";

// Komponent ładujący zrzut ekranu (np. /image/step1.png),
// a w przypadku braku pliku wyświetlający estetyczną makietę jako fallback.
const StepVisual: React.FC<{
  imageSrc: string;
  altText: string;
  fallback: React.ReactNode;
}> = ({ imageSrc, altText, fallback }) => {
  const [imageError, setImageError] = useState(false);

  if (imageError) {
    return <>{fallback}</>;
  }

  return (
    <div className="w-full max-w-[340px] rounded-3xl overflow-hidden shadow-[0_16px_36px_rgba(19,27,46,0.12)] border border-slate-200/90 bg-white p-2.5 transition-all hover:shadow-[0_20px_40px_rgba(0,168,89,0.14)]">
      <img
        src={imageSrc}
        alt={altText}
        className="w-full h-auto rounded-2xl object-cover object-top block"
        onError={() => setImageError(true)}
      />
    </div>
  );
};

export const GuideSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Sprawdzamy, czy w URL jest #instrukcja
    if (window.location.hash === "#instrukcja") {
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="instrukcja"
      className="w-full py-20 relative overflow-hidden bg-gradient-to-b from-[#faf8ff] via-[#f4f3ff]/60 to-[#faf8ff]"
    >
      {/* Tło dekoracyjne */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-emerald-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-[#00a859] text-xs font-bold tracking-wider uppercase mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
            PRZEWODNIK PO APLIKACJI • JAK KORZYSTAĆ ZE SPENNLY
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-[#131b2e] tracking-tight leading-tight">
            Poznaj Spennly <span className="text-[#00a859]">krok po kroku</span>
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Zobacz, jak intuicyjnie zarządzać codziennymi finansami, rejestrować
            wydatki w kilka sekund i kontrolować budżet bez skomplikowanych
            tabel.
          </p>

          {/* SZYBKIE KAFELKI NAWIGACJI PO INSTRUKCJI */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mt-8">
            {[
              { id: "krok-nawigacja", label: "1. Nawigacja i Portfele" },
              {
                id: "krok-zarzadzanie",
                label: "2. Zarządzanie Portfelem (Ustawienia)",
              },
              {
                id: "krok-wplywy",
                label: "3. Wpływy, Kategorie i Dodawanie Wydatku",
              },
              { id: "krok-historia", label: "4. Edycja i Historia" },
              { id: "krok-raporty", label: "5. Raporty i Wykres Kołowy" },
            ].map((chip) => (
              <a
                key={chip.id}
                href={`#${chip.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-slate-700 hover:border-[#00a859] hover:text-[#00a859] hover:shadow-sm transition-all"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#00a859]"></span>
                {chip.label}
              </a>
            ))}
          </div>
        </div>

        {/* ========================================================= */}
        {/* KROK 1: GÓRNY PASEK, PRZEŁĄCZNIK WIDOKÓW I WYBÓR MIESIĄCA */}
        {/* ========================================================= */}
        <div
          id="krok-nawigacja"
          className="scroll-mt-28 py-12 border-t border-slate-200/70"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Opis kroków - Na mobile ZAWSZE NA GÓRZE (order-1), na desktopie po prawej (lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#00a859] uppercase">
                <span className="w-5 h-5 rounded-md bg-[#00a859] text-white flex items-center justify-center text-[10px]">
                  1
                </span>
                KROK 01 • NAWIGACJA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                Górny pasek, przełącznik widoków i wybór miesiąca
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pb-2">
                Pierwszy kontakt ze Spennly gwarantuje natychmiastową
                czytelność: w ułamku sekundy wiesz, w jakim portfelu jesteś i
                jaki stan finansów podsumowuje dany miesiąc.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    A
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Wybór portfela i ikona zębatki:
                    </strong>
                    Wybierasz aktywny portfel, a ikona zębatki obok otwiera
                    panel zaawansowanych ustawień i dodawania kolejnych
                    portfeli.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    B
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Przełącznik „Operacje” / „Raporty”:
                    </strong>
                    Jedno kliknięcie dzieli bieżące wprowadzanie wydatków od
                    analitycznych podsumowań i statystyk.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    C
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Szybka nawigacja po miesiącach:
                    </strong>
                    Wygodne strzałki pozwalają błyskawicznie sprawdzić budżet z
                    zeszłego miesiąca lub zaplanować kolejny.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    D
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Kolorowy wskaźnik bilansu:
                    </strong>
                    Zielony, gdy jesteś na plusie, lub czerwony, gdy w danym
                    miesiącu koszty przewyższają wpływy.
                  </div>
                </div>
              </div>
            </div>

            {/* Zdjęcie / Makieta - Na mobile ZAWSZE POD OPISEM (order-2), na desktopie po lewej (lg:order-1) */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center">
              <StepVisual
                imageSrc="/image/step1.png"
                altText="Krok 1 - Górny pasek nawigacji Spennly"
                fallback={
                  <div className="w-full max-w-[340px] bg-white rounded-3xl p-5 shadow-[0_12px_32px_rgba(19,27,46,0.08)] border border-slate-200/80">
                    <div className="flex items-center justify-between pb-3.5 mb-3.5 border-b border-slate-100">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800">
                        <span className="material-symbols-outlined text-sm text-slate-500">
                          account_balance_wallet
                        </span>
                        <span>Portfel 1</span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 text-xs font-bold cursor-pointer hover:bg-slate-200">
                        <span className="material-symbols-outlined text-base">
                          settings
                        </span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl mb-4 text-xs font-bold">
                      <div className="py-2 text-center rounded-lg bg-black text-white shadow-xs">
                        Operacje
                      </div>
                      <div className="py-2 text-center text-slate-600">
                        Raporty
                      </div>
                    </div>

                    <div className="flex items-center justify-between px-3 py-2 bg-slate-50 rounded-xl border border-slate-100 mb-3">
                      <span className="material-symbols-outlined text-slate-400 text-sm">
                        chevron_left
                      </span>
                      <span className="text-xs font-bold text-slate-800">
                        Październik 2026
                      </span>
                      <span className="material-symbols-outlined text-slate-400 text-sm">
                        chevron_right
                      </span>
                    </div>

                    <div className="p-3 bg-rose-50 border border-rose-100 rounded-xl text-center">
                      <div className="text-[10px] font-semibold text-rose-500 uppercase tracking-wider">
                        Bilans miesiąca
                      </div>
                      <div className="text-base font-extrabold text-rose-600 mt-0.5">
                        -750,00 PLN
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* KROK 2: POPUP USTAWIEŃ PORTFELA & OPCJA PREMIUM          */}
        {/* ========================================================= */}
        <div
          id="krok-zarzadzanie"
          className="scroll-mt-28 py-12 border-t border-slate-200/70"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Opis kroków - Na mobile ZAWSZE NA GÓRZE (order-1), na desktopie po lewej (lg:order-1) */}
            <div className="order-1 lg:order-1 lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#00a859] uppercase">
                <span className="w-5 h-5 rounded-md bg-[#00a859] text-white flex items-center justify-center text-[10px]">
                  2
                </span>
                KROK 02 • PORTFELE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                Popup ustawień portfela & opcja Premium
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pb-2">
                Pełna elastyczność: zarządzaj nazwami portfeli, twórz dedykowane
                przestrzenie (np. Osobisty, Firma, Wakacje) oraz z łatwością
                aktywuj nielimitowane możliwości konta.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100 text-[#00a859] flex items-center justify-center font-bold text-xs mb-2">
                    <span className="material-symbols-outlined text-base">
                      edit
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    Edycja nazwy portfela
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Zmień domyślną nazwę na dowolną (np. „Wspólne finanse”,
                    „Dom”, „Firma”), aby zachować perfekcyjny porządek.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center font-bold text-xs mb-2">
                    <span className="material-symbols-outlined text-base">
                      workspace_premium
                    </span>
                  </div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 mb-1">
                    Wieloportfelowość Premium
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Darmowa wersja zawiera 1 pełny portfel. Subskrypcja Premium
                    odblokowuje nielimitowaną liczbę portfeli i dodatkowe
                    raporty.
                  </p>
                </div>
              </div>

              <div className="p-3.5 bg-emerald-50/70 border border-emerald-200/60 rounded-xl flex items-center gap-3 text-xs text-slate-700">
                <span className="material-symbols-outlined text-emerald-600 text-lg shrink-0">
                  check_circle
                </span>
                <span>
                  Subskrypcją zarządzasz jednym kliknięciem poprzez bezpieczny
                  portal Stripe.
                </span>
              </div>
            </div>

            {/* Zdjęcie / Makieta - Na mobile ZAWSZE POD OPISEM (order-2), na desktopie po prawej (lg:order-2) */}
            <div className="order-2 lg:order-2 lg:col-span-5 flex justify-center">
              <StepVisual
                imageSrc="/image/step2.png"
                altText="Krok 2 - Zarządzanie portfelami w Spennly"
                fallback={
                  <div className="w-full max-w-[340px] bg-slate-900/40 p-4 rounded-3xl backdrop-blur-md">
                    <div className="bg-white rounded-2xl p-5 shadow-2xl border border-slate-200">
                      <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
                        <span className="text-xs font-bold text-slate-800">
                          Twoje Portfele
                        </span>
                        <span className="material-symbols-outlined text-slate-400 text-sm">
                          close
                        </span>
                      </div>

                      <div className="space-y-2 mb-4">
                        <div className="flex items-center justify-between px-3 py-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-50/30">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                            <span className="text-xs font-bold text-slate-800">
                              Portfel 1
                            </span>
                          </div>
                          <span className="material-symbols-outlined text-xs text-slate-400">
                            edit
                          </span>
                        </div>
                      </div>

                      <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-center mb-4">
                        <span className="text-[11px] font-bold text-amber-800 block">
                          Więcej niż 1 portfel?
                        </span>
                        <span className="text-[10px] text-amber-700">
                          Odblokuj wersję Premium
                        </span>
                      </div>

                      <button className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-xs font-bold shadow-md transition-all">
                        Kup Premium
                      </button>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* KROK 3: DODAWANIE ŚRODKÓW, KATEGORIE I REJESTRACJA WYDATKU */}
        {/* ========================================================= */}
        <div
          id="krok-wplywy"
          className="scroll-mt-28 py-12 border-t border-slate-200/70"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Opis kroków - Na mobile ZAWSZE NA GÓRZE (order-1), na desktopie po prawej (lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#00a859] uppercase">
                <span className="w-5 h-5 rounded-md bg-[#00a859] text-white flex items-center justify-center text-[10px]">
                  3
                </span>
                KROK 03 • FINANSE
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                Dodawanie środków, kategorie i rejestracja wydatku
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pb-2">
                Zaprojektowane pod maksymalną szybkość: wpisujesz kwotę,
                wybierasz kategorię i zatwierdzasz. Bez zbędnych formularzy i
                zbędnego klikania.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    A
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Wpływy i zasilenia portfela:
                    </strong>
                    Wypłata, przelew lub premia – wpisujesz kwotę i klikasz
                    zielony plus, aby powiększyć budżet.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    B
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Własne kategorie:
                    </strong>
                    Dostosuj listę kategorii pod swój styl życia. Możesz dodawać
                    własne grupy (np. Kawiarnie, Hobby, Dziecko).
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    C
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Ekspresowy wpis wydatku:
                    </strong>
                    Wprowadź kwotę, wybierz kategorię z listy i zatwierdź jednym
                    kliknięciem. Spennly od razu przelicza bilans.
                  </div>
                </div>
              </div>
            </div>

            {/* Zdjęcie / Makieta - Na mobile ZAWSZE POD OPISEM (order-2), na desktopie po lewej (lg:order-1) */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center">
              <StepVisual
                imageSrc="/image/step3.png"
                altText="Krok 3 - Wpływy i rejestracja wydatków"
                fallback={
                  <div className="w-full max-w-[340px] bg-white rounded-3xl p-5 shadow-[0_12px_32px_rgba(19,27,46,0.08)] border border-slate-200/80 space-y-4">
                    <div className="p-3 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="text-[11px] font-bold text-slate-700 mb-2 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-emerald-600 text-sm">
                          add_circle
                        </span>
                        Dodaj środki (wpływ)
                      </div>
                      <div className="flex gap-2">
                        <div className="flex-1 bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-400">
                          Kwota (PLN)
                        </div>
                        <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">
                          +
                        </div>
                      </div>
                    </div>

                    <div className="p-3.5 bg-slate-50/80 rounded-2xl border border-slate-100 space-y-2.5">
                      <div className="text-[11px] font-bold text-slate-700 flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-rose-500 text-sm">
                          remove_circle
                        </span>
                        Dodaj wydatek
                      </div>
                      <div className="bg-white px-2.5 py-1.5 rounded-lg border border-slate-200 text-xs text-slate-400">
                        Kwota (PLN)
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-white px-2 py-1.5 rounded-lg border border-slate-200 text-[11px] text-slate-600 flex justify-between items-center">
                          <span>Jedzenie</span>
                          <span className="text-[10px]">▼</span>
                        </div>
                        <div className="bg-white px-2 py-1.5 rounded-lg border border-slate-200 text-[11px] text-slate-600 text-center">
                          24.10.2026
                        </div>
                      </div>
                      <button className="w-full py-2 bg-[#00a859] text-white rounded-xl text-xs font-bold shadow-xs">
                        Zapisz wydatek
                      </button>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold text-slate-700 mb-2">
                        Kategorie tego portfela:
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {[
                          "Jedzenie",
                          "Mieszkanie",
                          "Transport",
                          "Zdrowie",
                          "+",
                        ].map((cat, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 bg-slate-100 text-slate-700 rounded-lg text-[10px] font-medium border border-slate-200"
                          >
                            {cat}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* KROK 4: HISTORIA OPERACJI, EDYCJA I USUWANIE WPISÓW        */}
        {/* ========================================================= */}
        <div
          id="krok-historia"
          className="scroll-mt-28 py-12 border-t border-slate-200/70"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Opis kroków - Na mobile ZAWSZE NA GÓRZE (order-1), na desktopie po lewej (lg:order-1) */}
            <div className="order-1 lg:order-1 lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#00a859] uppercase">
                <span className="w-5 h-5 rounded-md bg-[#00a859] text-white flex items-center justify-center text-[10px]">
                  4
                </span>
                KROK 04 • HISTORIA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                Historia operacji, edycja i usuwanie wpisów
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pb-2">
                Pomyliłeś kwotę lub kategorię? Żaden problem. Wszystkie
                transakcje możesz w każdej chwili edytować lub usunąć.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm">
                      format_list_bulleted
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Przejrzysta lista wydatków:
                    </strong>
                    Widzisz dokładną datę zakupu, przypisaną kategorię oraz
                    kwotę w PLN.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm">
                      edit
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Błyskawiczna edycja:
                    </strong>
                    Klikasz ołówek obok pozycji, poprawiasz kwotę lub kategorię
                    i zapisujesz zmiany.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-sm">
                      delete
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Usuwanie błędnych wpisów:
                    </strong>
                    Czerwona ikonka kosza pozwala bez śladu skasować omyłkowo
                    dodaną pozycję.
                  </div>
                </div>
              </div>
            </div>

            {/* Zdjęcie / Makieta - Na mobile ZAWSZE POD OPISEM (order-2), na desktopie po prawej (lg:order-2) */}
            <div className="order-2 lg:order-2 lg:col-span-5 flex justify-center">
              <StepVisual
                imageSrc="/image/step4.png"
                altText="Krok 4 - Historia transakcji i edycja"
                fallback={
                  <div className="w-full max-w-[340px] bg-white rounded-3xl p-5 shadow-[0_12px_32px_rgba(19,27,46,0.08)] border border-slate-200/80 space-y-3">
                    <div className="text-xs font-bold text-slate-800 pb-2 border-b border-slate-100">
                      Wydatki: 24.10.2026 (sobota)
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">
                          Jedzenie
                        </span>
                        <span className="text-[10px] text-slate-400">
                          14:20 • Supermarket
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-slate-900">
                          140,50 PLN
                        </span>
                        <span className="material-symbols-outlined text-xs text-slate-400 cursor-pointer hover:text-slate-700">
                          edit
                        </span>
                        <span className="material-symbols-outlined text-xs text-rose-400 cursor-pointer hover:text-rose-600">
                          delete
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <div>
                        <span className="text-xs font-bold text-slate-800 block">
                          Ubezpieczenie
                        </span>
                        <span className="text-[10px] text-slate-400">
                          09:15 • Polisa OC
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-extrabold text-slate-900">
                          120,00 PLN
                        </span>
                        <span className="material-symbols-outlined text-xs text-slate-400 cursor-pointer hover:text-slate-700">
                          edit
                        </span>
                        <span className="material-symbols-outlined text-xs text-rose-400 cursor-pointer hover:text-rose-600">
                          delete
                        </span>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* ========================================================= */}
        {/* KROK 5: RAPORTY, ELASTYCZNY ZAKRES DAT I WYKRES KOŁOWY    */}
        {/* ========================================================= */}
        <div
          id="krok-raporty"
          className="scroll-mt-28 py-12 border-t border-slate-200/70"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Opis kroków - Na mobile ZAWSZE NA GÓRZE (order-1), na desktopie po prawej (lg:order-2) */}
            <div className="order-1 lg:order-2 lg:col-span-7 space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs font-extrabold tracking-wider text-[#00a859] uppercase">
                <span className="w-5 h-5 rounded-md bg-[#00a859] text-white flex items-center justify-center text-[10px]">
                  5
                </span>
                KROK 05 • ANALITYKA
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#131b2e] tracking-tight">
                Raporty, elastyczny zakres dat i wykres kołowy
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed pb-2">
                Przejdź do zakładki „Raporty”, by w sekundę zobaczyć, dokąd tak
                naprawdę uciekają Twoje pieniądze. Koniec z domysłami na koniec
                miesiąca.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    A
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Własny zakres dat (od – do):
                    </strong>
                    Sprawdzaj wydatki z całego kwartału, pojedynczego tygodnia
                    urlopu albo minionego roku, kiedy potrzebujesz podsumowania.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    B
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Czytelny wykres kołowy i udziały %:
                    </strong>
                    Wykres automatycznie grupuje wydatki. Wiesz od razu, która
                    kategoria pochłania największą część Twojego portfela.
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200/80">
                  <div className="w-7 h-7 rounded-lg bg-emerald-50 text-[#00a859] flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                    C
                  </div>
                  <div className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-bold mb-0.5">
                      Szczegółowa lista pod wykresem:
                    </strong>
                    Pod wykresem otrzymujesz wyliczone sumy per kategoria wraz z
                    liczbą transakcji.
                  </div>
                </div>
              </div>
            </div>

            {/* Zdjęcie / Makieta - Na mobile ZAWSZE POD OPISEM (order-2), na desktopie po lewej (lg:order-1) */}
            <div className="order-2 lg:order-1 lg:col-span-5 flex justify-center">
              <StepVisual
                imageSrc="/image/step5.png"
                altText="Krok 5 - Raporty i wykres kołowy"
                fallback={
                  <div className="w-full max-w-[340px] bg-white rounded-3xl p-5 shadow-[0_12px_32px_rgba(19,27,46,0.08)] border border-slate-200/80 space-y-4">
                    <div className="grid grid-cols-2 p-1 bg-slate-100 rounded-xl text-xs font-bold">
                      <div className="py-2 text-center text-slate-600">
                        Operacje
                      </div>
                      <div className="py-2 text-center rounded-lg bg-black text-white shadow-xs">
                        Raporty
                      </div>
                    </div>

                    <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-center">
                      <div className="text-[10px] text-slate-500 font-semibold uppercase">
                        Zakres dat
                      </div>
                      <div className="text-xs font-bold text-slate-800 mt-0.5">
                        01.10.2026 — 31.10.2026
                      </div>
                    </div>

                    <div className="flex flex-col items-center py-2">
                      <div className="relative w-28 h-28">
                        <svg
                          viewBox="0 0 36 36"
                          className="w-full h-full -rotate-90"
                        >
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="transparent"
                            stroke="#f1f5f9"
                            strokeWidth="4"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="transparent"
                            stroke="#00a859"
                            strokeWidth="4"
                            strokeDasharray="45 100"
                            strokeDashoffset="0"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="transparent"
                            stroke="#3b82f6"
                            strokeWidth="4"
                            strokeDasharray="30 100"
                            strokeDashoffset="-45"
                          />
                          <circle
                            cx="18"
                            cy="18"
                            r="14"
                            fill="transparent"
                            stroke="#f59e0b"
                            strokeWidth="4"
                            strokeDasharray="25 100"
                            strokeDashoffset="-75"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                          <span className="text-[10px] text-slate-400 font-medium">
                            Suma
                          </span>
                          <span className="text-xs font-extrabold text-slate-800">
                            2 450 zł
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-center gap-3 mt-3 text-[10px] font-semibold text-slate-600">
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-[#00a859]"></span>
                          Jedzenie (45%)
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                          Dom (30%)
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                          Inne (25%)
                        </span>
                      </div>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </div>

        {/* DOLNY MINI-BLOK PORADY */}
      </div>
    </section>
  );
};
