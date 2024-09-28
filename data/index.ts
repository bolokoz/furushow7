export const navbarData = {
  homeTitle: 'Furushow',
}

export const footerData = {
  author: 'yvfb',
  aboutAuthor: 'cg ms br',
  authorInterest: 'prog, civil eng, musik',
  aboutTheSite: 'whats the point right',
}

export const homePage = {
  title: 'furushowz',
  description: 'meu anti alzheimer',
}

export const blogsPage = {
  title: 'Notas e obs',
  description: 'Tentativa de organizar informacoes',
}

export const categoryPage = {
  title: 'Categories',
  description: 'tags',
}

export const aboutPage = {
  title: 'about furushow',
  description: 'vc eh como vc',
  aboutMe: 'e eu como vc',
}

export const seoData = {
  description: 'furushow site',
  ogTitle: 'furushow',
  twitterDescription: 'notas e obs ',
  image: 'https://res.cloudinary.com/dmecmyphj/image/upload/v1673548905/nuxt-blog/cover_ntgs6u.webp',
  mySite: 'https://furushow7.vercel.app',
  twitterHandle: '@boloko',
  mailAddress: 'boloko@gmail.com',
}

export const siteMetaData = [
  {
    name: 'description',
    content: seoData.description,
  },
  // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
  { property: 'og:site_name', content: seoData.mySite },
  { property: 'og:type', content: 'website' },
  {
    property: 'og:url',
    content: seoData.mySite,
  },
  {
    property: 'og:title',
    content: seoData.ogTitle,
  },
  {
    property: 'og:description',
    content: seoData.description,
  },
  {
    property: 'og:image',
    content: seoData.image,
  },
  // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
  { name: 'twitter:site', content: seoData.twitterHandle },
  { name: 'twitter:card', content: 'summary_large_image' },
  {
    name: 'twitter:url',
    content: seoData.mySite,
  },
  {
    name: 'twitter:title',
    content: seoData.ogTitle,
  },
  {
    name: 'twitter:description',
    content: seoData.twitterDescription,
  },
  {
    name: 'twitter:image',
    content: seoData.image,
  },
]
