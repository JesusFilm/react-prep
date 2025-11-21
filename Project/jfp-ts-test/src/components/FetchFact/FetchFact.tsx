export async function FetchFact(): Promise<string> {
  const res = await fetch('https://meowfacts.herokuapp.com/')
  const data = await res.json()

  return data.data[0]
}
