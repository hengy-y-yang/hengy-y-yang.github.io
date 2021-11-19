function showInput(name, picture, text) {
  for (i = 0; i < text.length; i++) {
    if (text[i] == "*")
      text = text.substring(0, i) + "'" + text.substring(i + 1);
  }

  document.querySelector("#input-name").innerHTML = name;
  document.querySelector("#input-picture").src = picture;
  document.querySelector("#input-text").innerHTML = text;
  $("#input-result").modal();
}
