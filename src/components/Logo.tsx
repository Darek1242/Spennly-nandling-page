import React, { useState } from "react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  scale?: number;
  useVector?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = "",
  size = "md",
  scale,
  useVector = false,
}) => {
  const [logoSrc, setLogoSrc] = useState("/Image/Spennly_logo.png");
  const [useSvgFallback, setUseSvgFallback] = useState(useVector);

  const hotlinkUrl =
    "https://lh3.googleusercontent.com/aida/AEtjO1XDYvffO8PwtsH1_h-xZdP3qByCR3D1LIdgjeLsjFibaiSn3NlX1c5J--G5LwugGaS8oxYDjW5H-zarfx92QbSRF9yLXJoXMAJis_7EINt10L476NF39eaNwZPlCgpMm6UznC8zE2rFKXIrUiv49jpZz8sIyoDNaN8K7kFKuaiWgMoa08wPY2BMJMyq2ir22o73BYDHsFAUimKpeoRY1eB5Um2nvKVS3RvdbTWIWsoJCxxpAeuQYoy8w-3K";

  // Responsywne wymiary kontenera: na telefonie dopasowane, na desktopie powiększone
  const sizeConfig = {
    sm: {
      container: "h-8 sm:h-[34px] w-[110px] sm:w-[130px]",
      imgClass: "scale-[2.0] sm:scale-[2.2]",
      vectorBox: "w-7 h-7 sm:w-8 sm:h-8",
      vectorIcon: "w-3.5 h-3.5 sm:w-4 sm:h-4",
      vectorText: "text-base sm:text-lg",
    },
    md: {
      container: "h-9 sm:h-[46px] w-[125px] sm:w-[175px]",
      imgClass: "scale-[2.2] sm:scale-[2.5]",
      vectorBox: "w-8 h-8 sm:w-9 sm:h-9",
      vectorIcon: "w-4 h-4 sm:w-5 sm:h-5",
      vectorText: "text-lg sm:text-xl",
    },
    lg: {
      container: "h-11 sm:h-[56px] w-[160px] sm:w-[210px]",
      imgClass: "scale-[2.4] sm:scale-[2.8]",
      vectorBox: "w-9 h-9 sm:w-11 sm:h-11",
      vectorIcon: "w-5 h-5 sm:w-6 sm:h-6",
      vectorText: "text-xl sm:text-2xl",
    },
  }[size];

  const handleLogoError = () => {
    if (logoSrc === "/Image/Spennly_logo.png") {
      setLogoSrc("/image/Spennly_logo.png");
    } else if (logoSrc === "/image/Spennly_logo.png") {
      setLogoSrc(hotlinkUrl);
    } else {
      setUseSvgFallback(true);
    }
  };

  return (
    <div className={`relative flex items-center select-none ${className}`}>
      {!useSvgFallback ? (
        /* Kontener z przycięciem pustych marginesów - responsywny, nie ucina przycisków na telefonie */
        <div
          className={`shrink-0 overflow-hidden flex items-center justify-start ${sizeConfig.container}`}
        >
          <img
            src={logoSrc}
            alt="Spennly Logo"
            referrerPolicy="no-referrer"
            style={{
              height: "100%",
              width: "auto",
              maxWidth: "none",
              transformOrigin: "left center",
              ...(scale ? { transform: `scale(${scale})` } : {}),
            }}
            className={`block select-none pointer-events-none origin-left ${!scale ? sizeConfig.imgClass : ""}`}
            onError={handleLogoError}
          />
        </div>
      ) : (
        /* Wektorowe logo SVG + czysty tekst (100% ostre, 0 pustych marginesów) */
        <div className="flex items-center gap-2 sm:gap-2.5 shrink-0">
          <div
            className={`rounded-xl bg-[#00a859] flex items-center justify-center text-white shadow-xs shrink-0 ${sizeConfig.vectorBox}`}
          >
            <svg
              className={`${sizeConfig.vectorIcon} fill-current`}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5c0 .83-.67 1.5-1.5 1.5h-3c-.83 0-1.5-.67-1.5-1.5V15h2v1h2v-2h-3c-.83 0-1.5-.67-1.5-1.5v-2c0-.83.67-1.5 1.5-1.5h3c.83 0 1.5.67 1.5 1.5V11h-2v-1h-2v2h3c.83 0 1.5.67 1.5 1.5v3z" />
            </svg>
          </div>
          <span
            className={`font-extrabold tracking-tight text-[#131b2e] ${sizeConfig.vectorText}`}
          >
            Spennly
          </span>
        </div>
      )}
    </div>
  );
};
