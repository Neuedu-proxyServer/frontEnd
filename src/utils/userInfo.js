export const setEmail = (email) => {
  localStorage.setItem('Email', email)
}
export const getEmail = () => {
  return localStorage.getItem('Email')
}
export const removeEmail = () => {
  localStorage.removeItem('Email')
}