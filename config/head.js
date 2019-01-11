export default {
  meta: [
    {
      'http-equiv': 'x-ua-compatible', content: 'ie=edge'
    },
    {
      name: 'google-site-verification', content: 'TyEvbo7__TYcHIZvYu4KCQAzPPLeBCK72mWLSIl7SEQ'
    }
  ],
  __dangerouslyDisableSanitizers: ['script'],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(
        {
          '@context': 'http://schema.org',
          '@type': 'Person',
          'address': {
            '@type': 'PostalAddress',
            'addressLocality': 'Rennes, France',
            'postalCode': 'F-35000'
          },
          'name': 'Kevin Marrec',
          'image': 'https://marrec.io/img/me.jpg',
          'email': 'mailto:contact@kevinmarrec.com',
          'telephone': '+33 659096371',
          'jobTitle': 'Full-stack Developer',
          'url': 'https://marrec.io',
          'sameAs': [
            'https://twitter.com/K_Marrec',
            'https://github.com/kevinmarrec',
            'https://www.linkedin.com/in/kevinmarrec'
          ]
        })
    }
  ]
}
