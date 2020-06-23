const toCapitalize = (word) => (
  word.charAt(0).toUpperCase() + word.slice(1)
)

const urlify = (word) => (
  word.toLowerCase().replace(/ /g, '-').replace(/,/g, '')
)

export {
  toCapitalize,
  urlify
}