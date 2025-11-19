import { Countries, countries } from './countryData'

export interface Country {
  name: Countries
  imageUrl: string
  alt: string
  description: string
}

export async function getCountry(name: Countries): Promise<Country | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(countries.find((country) => country.name === name) ?? null)
    }, 1000)
  })
}
