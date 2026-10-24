import React from "react";

export const InstallGuideSection: React.FC = () => {
  return (
    <section
      id="jak-zainstalowac"
      className="w-full py-20 bg-[#faf8ff] scroll-mt-20"
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* NAGŁÓWEK SEKCJI */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#131b2e] tracking-tight">
            Zainstaluj jako aplikację
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl">
            Dla wygody i najlepszego działania dodaj Spennly do ekranu głównego
            swojego telefonu.
          </p>
        </div>

        {/* DWIE KARTY: iOS i Android */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {/* KARTA 1: iOS (Safari / iPhone) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(19,27,46,0.04)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100/60 flex items-center justify-center text-indigo-600 shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  phone_iphone
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#131b2e]">
                iOS (Safari / iPhone)
              </h3>
            </div>

            <ol className="space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#00a859] font-bold text-base mr-3 shrink-0">
                  1.
                </span>
                <span>
                  Otwórz stronę Spennly w przeglądarce{" "}
                  <strong className="text-slate-900 font-bold">
                    Safari i kliknij w trzy pionowe kreski
                  </strong>
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00a859] font-bold text-base mr-3 shrink-0">
                  2.
                </span>
                <span>
                  Kliknij ikonę udostępnienia (kwadrat ze strzałką w górę na
                  dolnym pasku).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00a859] font-bold text-base mr-3 shrink-0">
                  3.
                </span>
                <span>
                  Wybierz{" "}
                  <strong className="text-slate-900 font-bold">
                    „Do ekranu początkowego”
                  </strong>{" "}
                  (Add to Home Screen).
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00a859] font-bold text-base mr-3 shrink-0">
                  4.
                </span>
                <span>
                  Kliknij{" "}
                  <strong className="text-slate-900 font-bold">„Dodaj”</strong>{" "}
                  w prawym górnym rogu. Ikona Spennly pojawi się na pulpicie.
                </span>
              </li>
            </ol>
          </div>

          {/* KARTA 2: Android (Chrome) */}
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-[0_10px_30px_rgba(19,27,46,0.04)] hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-2xl bg-indigo-50 border border-indigo-100/60 flex items-center justify-center text-indigo-600 shrink-0">
                <span className="material-symbols-outlined text-[22px]">
                  phone_android
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#131b2e]">
                Android (Chrome)
              </h3>
            </div>

            <ol className="space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
              <li className="flex items-start">
                <span className="text-[#00a859] font-bold text-base mr-3 shrink-0">
                  1.
                </span>
                <span>
                  Otwórz stronę Spennly w przeglądarce{" "}
                  <strong className="text-slate-900 font-bold">Chrome</strong>.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00a859] font-bold text-base mr-3 shrink-0">
                  2.
                </span>
                <span>
                  Kliknij ikonę{" "}
                  <strong className="text-slate-900 font-bold">
                    trzech pionowych kropek (Menu)
                  </strong>{" "}
                  w prawym górnym rogu ekranu.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00a859] font-bold text-base mr-3 shrink-0">
                  3.
                </span>
                <span>
                  Wybierz opcję{" "}
                  <strong className="text-slate-900 font-bold">
                    „Zainstaluj aplikację”
                  </strong>{" "}
                  lub{" "}
                  <strong className="text-slate-900 font-bold">
                    „Dodaj do ekranu głównego”
                  </strong>
                  .
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-[#00a859] font-bold text-base mr-3 shrink-0">
                  4.
                </span>
                <span>
                  Zatwierdź instalację. Aplikacja natychmiast pojawi się na
                  Twoim ekranie i w liście aplikacji.
                </span>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
