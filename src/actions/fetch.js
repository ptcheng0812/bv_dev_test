export async function  fetchData() {
  const response = await fetch("https://binary-vision.s3.eu-west-2.amazonaws.com/discoveries.json")
  return response.json()
}
