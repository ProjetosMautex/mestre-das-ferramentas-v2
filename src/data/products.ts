// src/data/products.ts
export const products = {
  "parafusadeira-bosch-gsb-185-li": {
    name: "Parafusadeira Bosch GSB 185-LI",
    link: "https://meli.la/1tb3Sr1"
  },
  "parafusadeira-wap-bpf-12k3": {
    name: "Parafusadeira WAP BPF 12K3",
    link: "https://meli.la/2M7NSp8"
  },
  "parafusadeira-dewalt-dcd7781d2": {
    name: "Parafusadeira DeWalt DCD7781D2",
    link: "https://amzn.to/4cr6bsV"
  },
  "parafusadeira-vonder-pfv-012i": {
    name: "Parafusadeira Furadeira Vonder Pfv 012i 12 V",
    link: "https://meli.la/1THhmaL"
  },
  "parafusadeira-bosch-gsr-1000": {
    name: "Parafusadeira Furadeira Bosch GSR 1000",
    link: "https://amzn.to/4d3DiTK"
  },
  "parafusadeira-black-decker-ld12": {
    name: "Parafusadeira Furadeira Black & Decker LD12",
    link: "https://amzn.to/4rN1qi5"
  },
  "bosch-gsr-7-14-e-400w": {
    name: "Bosch GSR 7-14 E 400W",
    link: "https://meli.la/21mxKp9"
  },
  "black-decker-kc4815b": {
    name: "Black Decker KC4815B",
    link: "https://amzn.to/46Ja8W7"
  },
  "bosch-go-bivolt": {
    name: "Bosch Go Bivolt",
    link: "https://meli.la/113bGg1"
  },
  "WAP K21 ID01": {
    name: "WAP K21 ID01",
    link: "https://meli.la/2W5ukrx"
  },
  "makita-impacto": {
    name: "Makita Impacto",
    link: "https://amzn.to/4aRjS35"
  },
  "mondial-fpf-05": {
    name: "Mondial FPF-05",
    link: "https://amzn.to/4sl5A0q"
  }
};

export type ProductId = keyof typeof products;