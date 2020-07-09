export default {
  __dangerouslyDisableSanitizers: ['script'],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify(
        {
          '@context': 'http://schema.org',
          '@type': 'Person',
          address: {
            '@type': 'PostalAddress',
            addressCountry: 'FR',
            addressLocality: 'Rennes',
            postalCode: '35000'
          },
          name: 'Kevin Marrec',
          image: 'https://marrec.io/img/me.jpg',
          email: 'mailto:kevin@marrec.io',
          telephone: '+33 659096371',
          jobTitle: 'Full-stack Developer',
          url: 'https://marrec.io',
          sameAs: [
            'https://twitter.com/K_Marrec',
            'https://github.com/kevinmarrec',
            'https://www.linkedin.com/in/kevinmarrec'
          ]
        })
    }
  ]
}
