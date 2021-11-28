export const formatGameType = str => {
  if(typeof str === 'string' || str instanceof String) {
    return str.split('_').join(' ')
  } else {
    return '';
  }
}