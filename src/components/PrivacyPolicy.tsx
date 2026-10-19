import React, { useEffect } from "react";
import { Logo } from "./Logo";
import { ArrowLeft, ShieldCheck, Mail, ExternalLink } from "lucide-react";

interface PrivacyPolicyProps {
  onNavigate?: (path: string) => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onNavigate }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Polityka Prywatności – Spennly";
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
      {/* Pasek nawigacji u góry */}
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

      {/* Główna treść */}
      <main className="grow max-w-4xl mx-auto w-full px-4 sm:px-6 py-10 sm:py-14">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 mb-4">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            Dokument formalny RODO
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Polityka prywatności Spennly
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

        <div className="bg-white rounded-2xl border border-slate-200/80 p-6 sm:p-10 shadow-sm space-y-10 text-sm sm:text-base leading-relaxed text-slate-700">
          {/* 1. Administrator danych */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                1
              </span>
              Administrator danych
            </h2>
            <p>
              Administratorem danych osobowych jest{" "}
              <strong>Dariusz Milczanowski</strong> (dalej: „Administrator”).
            </p>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/60 inline-flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs text-slate-500 font-medium">
                  Kontakt w sprawach prywatności:
                </p>
                <a
                  href="mailto:app.spennly@gmail.com"
                  className="font-semibold text-emerald-600 hover:underline"
                >
                  app.spennly@gmail.com
                </a>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 2. Cele i podstawy prawne */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                2
              </span>
              Cele i podstawy prawne przetwarzania
            </h2>
            <div className="overflow-x-auto border border-slate-200 rounded-xl">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 text-slate-900 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-3 px-4">Cel przetwarzania</th>
                    <th className="py-3 px-4">Podstawa prawna</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-800">
                      Świadczenie usługi (rejestracja, przechowywanie wydatków)
                    </td>
                    <td className="py-3 px-4">Umowa – art. 6(1)(b) RODO</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-800">
                      Rozliczenia i obsługa subskrypcji
                    </td>
                    <td className="py-3 px-4">
                      Umowa + obowiązek prawny – art. 6(1)(b), (c) RODO
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-800">
                      Komunikacja e-mail (potwierdzenia, powiadomienia)
                    </td>
                    <td className="py-3 px-4">Umowa – art. 6(1)(b) RODO</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-800">
                      Bezpieczeństwo i zapobieganie nadużyciom
                    </td>
                    <td className="py-3 px-4">
                      Uzasadniony interes – art. 6(1)(f) RODO
                    </td>
                  </tr>
                  <tr className="hover:bg-slate-50/50">
                    <td className="py-3 px-4 font-medium text-slate-800">
                      Marketing (jeśli dotyczy)
                    </td>
                    <td className="py-3 px-4">Zgoda – art. 6(1)(a) RODO</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 3. Kategorie danych */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                3
              </span>
              Kategorie danych
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>Adres e-mail</li>
              <li>
                Hasło (w formie zaszyfrowanej – Administrator nie ma wglądu w
                hasło)
              </li>
              <li>Dane wydatków (kwoty, kategorie, daty, portfele)</li>
              <li>Adres IP i logi serwerowe</li>
              <li>Identyfikatory urządzeń (jeśli dotyczy)</li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 4. Odbiorcy danych */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                4
              </span>
              Odbiorcy danych
            </h2>
            <p>Dane mogą być przekazywane do:</p>
            <ul className="space-y-2.5">
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <div>
                  <strong>Stripe</strong> – obsługa płatności i subskrypcji (
                  <a
                    href="https://stripe.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline inline-flex items-center gap-0.5"
                  >
                    https://stripe.com/privacy{" "}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  )
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <div>
                  <strong>Supabase</strong> – hosting bazy danych i
                  uwierzytelnianie (
                  <a
                    href="https://supabase.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline inline-flex items-center gap-0.5"
                  >
                    https://supabase.com/privacy{" "}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  )
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <div>
                  <strong>Resend</strong> – wysyłka e-maili transakcyjnych (
                  <a
                    href="https://resend.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-600 hover:underline inline-flex items-center gap-0.5"
                  >
                    https://resend.com/privacy{" "}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  )
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-emerald-500 font-bold">•</span>
                <div>
                  <strong>Netlify</strong> – utrzymanie infrastruktury serwera
                </div>
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 5. Transfer danych poza EOG */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                5
              </span>
              Transfer danych poza EOG
            </h2>
            <p>
              Niektóre z powyższych podmiotów (np. Stripe, Supabase, Resend)
              mogą przetwarzać dane poza Europejskim Obszarem Gospodarczym.
              Transfer odbywa się na podstawie odpowiednich zabezpieczeń (np.
              Data Privacy Framework, standardowe klauzule umowne).
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 6. Okres przechowywania */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                6
              </span>
              Okres przechowywania
            </h2>
            <ul className="list-disc pl-6 space-y-1.5 text-slate-700">
              <li>
                <strong>Dane konta:</strong> do momentu usunięcia konta przez
                Użytkownika.
              </li>
              <li>
                <strong>Dane rozliczeniowe:</strong> 5 lat od zakończenia roku
                podatkowego (wymóg podatkowy).
              </li>
              <li>
                <strong>Logi serwerowe:</strong> 30 dni.
              </li>
              <li>
                <strong>Dane marketingowe:</strong> do momentu wycofania zgody.
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 7. Prawa użytkownika */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                7
              </span>
              Prawa użytkownika
            </h2>
            <p>Masz prawo do:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-xs sm:text-sm">
                <strong>Dostępu do danych</strong> (art. 15 RODO)
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-xs sm:text-sm">
                <strong>Sprostowania</strong> (art. 16 RODO)
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-xs sm:text-sm">
                <strong>Usunięcia</strong> („prawo do bycia zapomnianym”, art.
                17 RODO)
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-xs sm:text-sm">
                <strong>Ograniczenia przetwarzania</strong> (art. 18 RODO)
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-xs sm:text-sm">
                <strong>Przenoszenia danych</strong> (art. 20 RODO)
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200/60 rounded-xl text-xs sm:text-sm">
                <strong>Sprzeciwu</strong> (art. 21 RODO)
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 pt-2">
              Masz również prawo do cofnięcia zgody w dowolnym momencie (jeśli
              przetwarzanie opiera się na zgodzie).
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 8. Prawo skargi */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                8
              </span>
              Prawo skargi
            </h2>
            <p>
              Masz prawo wnieść skargę do Prezesa Urzędu Ochrony Danych
              Osobowych (UODO), jeśli uważasz, że przetwarzanie danych narusza
              RODO.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 9. Cookies */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                9
              </span>
              Cookies
            </h2>
            <p>Serwis może używać plików cookies w celu:</p>
            <ul className="list-disc pl-6 space-y-1 text-slate-700">
              <li>Utrzymania sesji i logowania (niezbędne).</li>
              <li>Analityki (jeśli dotyczy).</li>
              <li>Personalizacji (jeśli dotyczy).</li>
            </ul>
            <p className="pt-2">
              Szczegóły znajdują się w Polityce cookies:{" "}
              <a
                href="/polityka-cookies"
                onClick={(e) => handleLinkClick(e, "/polityka-cookies")}
                className="text-emerald-600 font-semibold hover:underline"
              >
                https://spennly.pl/polityka-cookies
              </a>
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 10. Zautomatyzowane podejmowanie decyzji */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                10
              </span>
              Zautomatyzowane podejmowanie decyzji
            </h2>
            <p>
              Serwis nie stosuje zautomatyzowanego podejmowania decyzji ani
              profilowania w rozumieniu art. 22 RODO.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 11. Kontakt */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                11
              </span>
              Kontakt
            </h2>
            <p>
              W sprawach danych osobowych:{" "}
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

        {/* Dolna nawigacja */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-4">
            <a
              href="/regulamin"
              onClick={(e) => handleLinkClick(e, "/regulamin")}
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Zobacz Regulamin serwisu →
            </a>
            <span>•</span>
            <a
              href="/polityka-cookies"
              onClick={(e) => handleLinkClick(e, "/polityka-cookies")}
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Polityka cookies
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
