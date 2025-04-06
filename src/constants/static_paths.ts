type StaticPath = string;

export const DOMAIN_NAME: StaticPath = import.meta.env.PROD
    ? "https://www.freshjacuzzis.com"
    : "http://localhost:4321";

console.log(DOMAIN_NAME);

export const CTA_TARGET: StaticPath =
    "https://wa.me/573126799235?text=Hola%2C%20he%20descubierto%20su%20sitio%20web%20y%20me%20ha%20fascinado%20su%20oferta.%20Me%20gustaría%20cotizar%20un%20jacuzzi";
