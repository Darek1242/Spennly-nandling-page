import React, { useEffect } from "react";
import { Logo } from "./Logo";
import { ArrowLeft, FileText, Mail, ExternalLink } from "lucide-react";

interface TermsOfServiceProps {
  onNavigate?: (path: string) => void;
}

export const TermsOfService: React.FC<TermsOfServiceProps> = ({
  onNavigate,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Regulamin serwisu – Spennly";
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
            <FileText className="w-4 h-4 text-emerald-600" />
            Zasady korzystania z usługi
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Regulamin serwisu Spennly
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
          {/* 1. Postanowienia ogólne */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                1
              </span>
              Postanowienia ogólne
            </h2>
            <p>
              Niniejszy Regulamin określa zasady korzystania z aplikacji
              internetowej Spennly (dalej: „Serwis”), dostępnej pod adresem{" "}
              <a
                href="https://spennly.pl"
                className="text-emerald-600 font-semibold hover:underline"
              >
                https://spennly.pl
              </a>
              .
            </p>
            <p>
              Właścicielem i operatorem Serwisu jest{" "}
              <strong>Dariusz Milczanowski</strong> (dalej: „Operator”).
            </p>
            <div className="bg-slate-50 rounded-xl p-4 border border-slate-200/60 inline-flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs text-slate-500 font-medium">Kontakt:</p>
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

          {/* 2. Definicje */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                2
              </span>
              Definicje
            </h2>
            <ul className="space-y-2">
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <strong>Aplikacja</strong> – serwis internetowy Spennly służący
                do zarządzania finansami osobistymi.
              </li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <strong>Użytkownik</strong> – osoba fizyczna korzystająca z
                Aplikacji.
              </li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <strong>Konto</strong> – indywidualne konto Użytkownika w
                Aplikacji.
              </li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <strong>Portfel</strong> – wirtualna przestrzeń do grupowania
                wydatków.
              </li>
              <li className="p-3 bg-slate-50 rounded-xl border border-slate-200/60">
                <strong>Premium</strong> – płatna wersja Aplikacji odblokowująca
                dodatkowe funkcje, w tym wiele portfeli.
              </li>
            </ul>
          </section>

          <hr className="border-slate-100" />

          {/* 3. Rodzaje usług */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                3
              </span>
              Rodzaje usług
            </h2>
            <p>Serwis oferuje:</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl border border-slate-200 bg-white">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-slate-100 text-slate-700 mb-2">
                  Plan Free
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Wersja bezpłatna
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  1 portfel, podstawowe raporty.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-emerald-200 bg-emerald-50/40">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 mb-2">
                  Plan Premium
                </span>
                <h3 className="font-bold text-slate-900 text-base">
                  Wersja Premium
                </h3>
                <p className="text-sm text-slate-600 mt-2">
                  Nielimitowane portfele, zaawansowane raporty, eksport danych.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-slate-100" />

          {/* 4. Rejestracja i konto */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                4
              </span>
              Rejestracja i konto
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>
                Aby korzystać z Aplikacji, Użytkownik musi założyć Konto,
                podając adres e-mail i ustawiając hasło.
              </li>
              <li>
                Użytkownik jest odpowiedzialny za zachowanie poufności hasła.
              </li>
              <li>
                Użytkownik może usunąć Konto w dowolnym momencie poprzez
                ustawienia konta lub kontakt z Operatorem.
              </li>
            </ol>
          </section>

          <hr className="border-slate-100" />

          {/* 5. Płatności i subskrypcje */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                5
              </span>
              Płatności i subskrypcje
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>
                Płatności za wersję Premium obsługiwane są przez Stripe (
                <a
                  href="https://stripe.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-600 hover:underline"
                >
                  https://stripe.com
                </a>
                ).
              </li>
              <li>
                Ceny Premium są podane na stronie cennika i wyrażone w PLN.
              </li>
              <li>
                Subskrypcja Premium odnawia się automatycznie co miesiąc/rok,
                chyba że Użytkownik anuluje subskrypcję przed datą odnowienia.
              </li>
              <li>
                Użytkownik może anulować subskrypcję w dowolnym momencie poprzez
                panel Stripe lub kontakt z Operatorem.
              </li>
            </ol>
          </section>

          <hr className="border-slate-100" />

          {/* 6. Prawo odstąpienia od umowy */}
          <section className="space-y-4">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                6
              </span>
              Prawo odstąpienia od umowy
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>
                Użytkownik będący konsumentem ma prawo odstąpić od umowy w ciągu
                14 dni od jej zawarcia, bez podania przyczyny.
              </li>
              <li>
                <strong>Wyjątek:</strong> Prawo odstąpienia nie przysługuje w
                odniesieniu do treści cyfrowych dostarczanych natychmiast po
                zakupie, jeśli Użytkownik wyraził uprzednią zgodę na rozpoczęcie
                świadczenia i przyjął do wiadomości utratę prawa odstąpienia
                (art. 38 ust. 1 pkt 13 ustawy o prawach konsumenta).
              </li>
              <li>
                Aby skorzystać z wyjątku, Użytkownik musi zaznaczyć odpowiedni
                checkbox podczas zakupu Premium.
              </li>
              <li>
                Potwierdzenie zawarcia umowy wraz z informacją o utracie prawa
                odstąpienia zostanie przesłane na adres e-mail Użytkownika.
              </li>
            </ol>
          </section>

          <hr className="border-slate-100" />

          {/* 7. Odpowiedzialność */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                7
              </span>
              Odpowiedzialność
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>
                Operator dokłada starań, aby Aplikacja działała poprawnie, ale
                nie gwarantuje nieprzerwanej dostępności.
              </li>
              <li>
                Operator nie odpowiada za utratę danych wynikłą z winy
                Użytkownika (np. udostępnienie hasła).
              </li>
              <li>
                Operator nie odpowiada za skutki finansowe decyzji podejmowanych
                przez Użytkownika na podstawie danych z Aplikacji.
              </li>
            </ol>
          </section>

          <hr className="border-slate-100" />

          {/* 8. Zmiany Regulaminu */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                8
              </span>
              Zmiany Regulaminu
            </h2>
            <ol className="list-decimal pl-6 space-y-2 text-slate-700">
              <li>
                Operator może zmienić Regulamin, informując Użytkowników
                e-mailem z 14-dniowym wyprzedzeniem.
              </li>
              <li>
                Dalsze korzystanie z Aplikacji po wejściu w życie zmian oznacza
                akceptację nowego Regulaminu.
              </li>
            </ol>
          </section>

          <hr className="border-slate-100" />

          {/* 9. Prawo właściwe */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                9
              </span>
              Prawo właściwe
            </h2>
            <p>
              Niniejszy Regulamin podlega prawu polskiemu. W sprawach
              nieuregulowanych zastosowanie mają przepisy Kodeksu cywilnego i
              ustawy o prawach konsumenta.
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 10. Kontakt */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                10
              </span>
              Kontakt
            </h2>
            <p>
              W sprawach dotyczących Regulaminu:{" "}
              <a
                href="mailto:app.spennly@gmail.com"
                className="text-emerald-600 font-bold hover:underline"
              >
                app.spennly@gmail.com
              </a>
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 11. Polityka prywatności */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                11
              </span>
              Polityka prywatności
            </h2>
            <p>
              Pełna informacja o przetwarzaniu danych osobowych znajduje się w
              Polityce prywatności:{" "}
              <a
                href="/polityka-prywatnosci"
                onClick={(e) => handleLinkClick(e, "/polityka-prywatnosci")}
                className="text-emerald-600 font-bold hover:underline"
              >
                https://spennly.pl/polityka-prywatnosci
              </a>
            </p>
          </section>

          <hr className="border-slate-100" />

          {/* 12. Informacja o Stripe */}
          <section className="space-y-3">
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 flex items-center gap-2">
              <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-800 inline-flex items-center justify-center text-xs font-bold">
                12
              </span>
              Informacja o Stripe
            </h2>
            <p>
              Płatności w Serwisie obsługiwane są przez Stripe. Zasady
              przetwarzania danych przez Stripe opisuje jego Polityka
              prywatności:{" "}
              <a
                href="https://stripe.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 font-semibold hover:underline inline-flex items-center gap-1"
              >
                https://stripe.com/privacy{" "}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </p>
          </section>
        </div>

        {/* Dolna nawigacja */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500 pt-4 border-t border-slate-200">
          <div className="flex items-center gap-4">
            <a
              href="/polityka-prywatnosci"
              onClick={(e) => handleLinkClick(e, "/polityka-prywatnosci")}
              className="text-slate-600 hover:text-emerald-600 transition-colors"
            >
              Zobacz Politykę prywatności →
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
