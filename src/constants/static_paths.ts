import { loadEnv } from 'vite'

type StaticPath = string

const { PUBLIC_SITE_URL, PUBLIC_INDEXABLE } = loadEnv(process.env.NODE_ENV ?? '', process.cwd(), '')

export const DOMAIN_NAME: StaticPath = PUBLIC_SITE_URL
export const INDEXABLE: boolean = PUBLIC_INDEXABLE === 'true'

export const CTA_TARGET: StaticPath =
  'https://wa.me/573126799235?text=Hola%2C%20he%20descubierto%20su%20sitio%20web%20y%20me%20ha%20fascinado%20su%20oferta.%20Me%20gustaría%20cotizar%20un%20jacuzzi'
