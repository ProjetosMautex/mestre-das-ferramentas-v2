export interface Product {
  name: string;
  link: string;
}

export const productsmartele: Record<string, Product> = {
  "Martelete Perfurador Bosch GBH 2-24 D": {
    name: "Martelete Perfurador Bosch GBH 2-24 D",
    link: "https://meli.la/2qtnN5F"
  },
  "Martelete Perfurador Rompedor Vonder Mpv 620": {
    name: "Martelete Perfurador Rompedor Vonder Mpv 620",
    link: "https://meli.la/2zT3cbu"
  },
  "Martelete Perfurador Dewalt D25133K": {
    name: "Martelete Perfurador Dewalt D25133K",
    link: "https://meli.la/1DRfMQt"
  },
  "Martelete Makita HR2470": {
    name: "Martelete Makita HR2470",
    link: "https://meli.la/325wJaF"
  },
  "WAP EMPR900K": {
    name: "WAP EMPR900K",
    link: "https://meli.la/2frTWMP"
  },
  "Vonder MPV 1500": {
    name: "Vonder MPV 1500",
    link: "https://meli.la/2NvKT2D"
  },
  "Martelete Elétrico MAKITA HR2630X15": {
    name: "Martelete Elétrico MAKITA HR2630X15",
    link: "https://meli.la/2UjEtG8"
  },
  "Martelete Rotativo 12V SEM Bateria SDS 14mm Makita HR140DZ": {
    name: "Martelete Rotativo 12V SEM Bateria SDS 14mm Makita HR140DZ",
    link: "https://meli.la/1X2k9Sh"
  },
  "Martelete Rompedor Nakasaki NK2603 960w": {
    name: "Martelete Rompedor Nakasaki NK2603 960w",
    link: "https://meli.la/24kLXyt"
  },
  "Martelete Rotativo Nakasaki NK-2603PRO 1200w": {
    name: "Martelete Rotativo Nakasaki NK-2603PRO 1200w",
    link: "https://meli.la/2SpBs5q"
  },
  "Martelete Rompedor Nakasaki Professional 1600W": {
    name: "Martelete Rompedor Nakasaki Professional 1600W",
    link: "https://meli.la/1rWt1bA"
  },
  "Martelete Rotativo Rompedor Nakasaki DW205 1600w": {
    name: "Martelete Rotativo Rompedor Nakasaki 1600w",
    link: "https://meli.la/2smS2Qr"
  },
  // nunca atualizar
  "Martelete Pneumático MXT-1510R Maxx Tools": {
    name: "Martelete Pneumático MXT-1510R Maxx Tools",
    link: "https://meli.la/2oAwoYD"
  },
  "Martelete Pneumático Rebarbador Longo 3.500BPM LDR2 PDR PRO-310": {
    name: "Martelete Pneumático Rebarbador Longo 3.500BPM LDR2 PDR PRO-310",
    link: "https://amzn.to/4uvT1jB"
  },
  "MARTELETE REBARBADOR PNEUMATICO ENCAIXE SEXTAVADO 10MM - M7": {
    name: "MARTELETE REBARBADOR PNEUMATICO ENCAIXE SEXTAVADO 10MM - M7",
    link: "https://amzn.to/4aujYwT"
  },
  "Martelete Pneumático Profissional – Curso 150mm com Cinzéis Redondos": {
    name: "Martelete Pneumático Profissional – Curso 150mm com Cinzéis Redondos",
    link: "https://amzn.to/43pRSPA"
  },
  "Martelete Pneumático Chiaperini CH-M 19": {
    name: "Martelete Pneumático Chiaperini CH-M 19",
    link: "https://meli.la/1ZF4N9j"
  },
  "Martelete Rompedor Furadeira 2200w Sds Plus Cmaleta Dobevi": {
    name: "Martelete Rompedor Furadeira 2200w Sds Plus Cmaleta Dobevi",
    link: "https://meli.la/2mP1Fx7"
  },
  "Óculos 3m Securefit Sf 100 Antiembaçante Lente Incolor": {
    name: "Óculos 3m Securefit Sf 100 Antiembaçante Lente Incolor",
    link: "https://meli.la/2WoFmi2"
  },
  "Graxa Alto Teor Grafite P Martelete Porta De Enrrolar 250g": {
    name: "Graxa Alto Teor Grafite P Martelete Porta De Enrrolar 250g",
    link: "https://meli.la/1YQCVaJ"
  }
};

export type ProductId = keyof typeof productsmartele;
