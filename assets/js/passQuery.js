function passQuery() {
  window.location = `./results.html?query=${
    document.getElementById("searchstuff").value
  }`;
}
