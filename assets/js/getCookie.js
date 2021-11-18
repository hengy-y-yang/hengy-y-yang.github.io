function getCookie(key) {
  key = key + "=";
  let cookies = decodeURIComponent(document.cookie).split("; ");

  let i, ii, result;
  for (i = 0; i < cookies.length; i++) {
    for (ii = 0; ii < key.length; ii++) {
      if (key[ii] != cookies[i][ii]) {
        break;
      } else if (ii == key.length - 1) {
        result = cookies[i].substring(key.length);
      }
    }
  }

  return result;
}
