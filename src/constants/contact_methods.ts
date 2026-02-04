type ContactMethod = {
  name: string
  value: string
  link: string
  type: 'direct' | 'external'
}

export const CONTACT_METHODS: ContactMethod[] = [
  {
    name: 'Teléfono',
    value: '312 679 92 35',
    link: 'tel:3126799235',
    type: 'direct',
  },
  {
    name: 'WhatsApp',
    value: '+57 312 6799235',
    link: 'https://wa.me/573126799235',
    type: 'direct',
  },
  {
    name: 'Correo',
    value: 'comercial@freshjacuzzis.com',
    link: 'mailto:comercial@freshjacuzzis.com',
    type: 'direct',
  },
  {
    name: 'Instagram',
    value: '@jacuzzis_fresh',
    link: 'https://www.instagram.com/jacuzzis_fresh/',
    type: 'external',
  },
  {
    name: 'Facebook',
    value: 'Fresh HidroJacuzz',
    link: 'https://www.facebook.com/profile.php?id=61555844768663',
    type: 'external',
  },
]
