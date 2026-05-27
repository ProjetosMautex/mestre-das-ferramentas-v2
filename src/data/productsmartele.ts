export interface Product {
  name: string;
  link: string;
}

export const productsmartele: Record<string, Product> = {
  "Martelete Perfurador Bosch GBH 2-24 D": {
    name: "Martelete Perfurador Bosch GBH 2-24 D",
    link: "https://meli.la/19HZMZs"
  },
  "Martelete Perfurador Rompedor Vonder Mpv 620": {
    name: "Martelete Perfurador Rompedor Vonder Mpv 620",
    link: "https://meli.la/12cTqco"
  },
  "Martelete Perfurador Dewalt D25133K": {
    name: "Martelete Perfurador Dewalt D25133K",
    link: "https://meli.la/1DRfMQt"
  },
  "Martelete Makita HR2470": {
    name: "Martelete Makita HR2470",
    link: "https://meli.la/1hMkewE"
  },
  "WAP EMPR900K": {
    name: "WAP EMPR900K",
    link: "https://meli.la/32uzTZx"
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
  }
};

export type ProductId = keyof typeof productsmartele;
