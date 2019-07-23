export default {
  __dangerouslyDisableSanitizers: ['script'],
  meta: [
    {
      content: 'ie=edge',
      'http-equiv': 'x-ua-compatible'
    }
  ],
  script: [
    {
      innerHTML: JSON.stringify(
        {
          '@context': 'http://schema.org',
          '@type': 'Person',
          address: {
            '@type': 'PostalAddress',
            addressLocality: 'Rennes, France',
            postalCode: 'F-35000'
          },
          email: 'mailto:kevin@marrec.io',
          image: 'https://marrec.io/img/me.jpg',
          jobTitle: 'Full-stack Developer',
          name: 'Kevin Marrec',
          sameAs: [
            'https://twitter.com/K_Marrec',
            'https://github.com/kevinmarrec',
            'https://www.linkedin.com/in/kevinmarrec'
          ],
          telephone: '+33 659096371',
          url: 'https://marrec.io'
        }),
      type: 'application/ld+json'
    }
  ]
}
