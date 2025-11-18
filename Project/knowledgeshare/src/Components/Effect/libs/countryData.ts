import { Country } from './getCountry'

export enum Countries {
  Japan = 'Japan',
  Paris = 'Paris',
  USA = 'USA',
}

export const countries: Country[] = [
  {
    name: Countries.Japan,
    imageUrl:
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Japan scenery',
    description: 'Japan is a country in East Asia.',
  },
  {
    name: Countries.Paris,
    imageUrl:
      'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=2373&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Paris scenery',
    description: 'Paris is a city in France.',
  },
  {
    name: Countries.USA,
    imageUrl:
      'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'USA scenery',
    description: 'USA is a country in North America.',
  },
]
