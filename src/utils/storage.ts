export const getItem = (key: string) => {
  try {
    return JSON.parse(localStorage.getItem(key) || "[]")
  } catch (e) {
    console.log('Error getting data from localStorage', e)
    return null
  }
}

export const setItem = (key: string, data: any) => {
  try {
    localStorage.setItem(key, JSON.stringify(data))
  } catch (e) {
    console.log('Error saving data to localStorage', e)
  }
}