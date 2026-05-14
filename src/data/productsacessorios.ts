export interface Product {
  name: string;
  link: string;
}

export const productsAcessorios: Record<string, Product> = {
  "Afiador de Brocas Vonder 095: Prático e Portátil": {
    name: "Afiador de Brocas Vonder 095: Prático e Portátil",
    link: "https://meli.la/2kcBMQb"
  },
  "afiador Carbografite (modelo 012537612)": {
    name: "afiador Carbografite (modelo 012537612)",
    link: "https://meli.la/1dGWPcj"
  },
  "afiador multifuncional Nagano NAM65": {
    name: "afiador multifuncional Nagano NAM65",
    link: "https://meli.la/174mmwC"
  },
  "pesquisa afiador de brocas worker": {
    name: "afiador de brocas worker",
    link: "https://meli.la/2Gv1Vnb"
  },
  "Afiadora de Brocas Elétrico Rocast 49.0003": {
    name: "Afiadora de Brocas Elétrico Rocast 49.0003",
    link: "https://amzn.to/4u9YyNy"
  },
  "Afiador de Brocas Rocast para Furadeira 365,0001": {
    name: "Afiador de Brocas Rocast para Furadeira 365,0001",
    link: "https://meli.la/21oV3xN"
  },
  "Afiador de Brocas Amolador Lorben GT6222": {
    name: "Afiador de Brocas Amolador Lorben GT6222",
    link: "https://amzn.to/4wr1kPX"
  },
  "Afiador de Brocas Sparta 9123055": {
    name: "Afiador de Brocas Sparta 9123055",
    link: "https://meli.la/18CNkP2"
  }
};

export type ProductAcessoriosId = keyof typeof productsAcessorios;
