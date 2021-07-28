export async function fetchCatFacts (amount = 1) {
  const url = 'https://catfact.ninja/facts?limit=34&max_length=140'
  const response = await window.fetch(url)
  return response.json()
}
