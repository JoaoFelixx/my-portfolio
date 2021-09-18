export const useFetch = async (URL, options) => {
  try {
    const jsonData = await fetch(URL, options)
    const data = await jsonData.json();

    return await data

  } catch (error) {
    console.error(error)
  }
} 