function makeCard(card, order) {
  var cardcode = `<div class="card card">`;
  cardcode += `<img src="${card.picture}" class="card-img-top cardpicture" style="margin-left: auto; margin-right: auto;" alt="${card.name}">`;
  cardcode += '<div class="card-body">';
  cardcode += `<a href="${card.picture}" style="font-size: 0.7rem; line-height: 0.7rem; text-align: center">Image Source</a>`;
  cardcode += `<h5 class="card-title" style="font-family: Trebuchet MS">${card.name}</h5>`;
  cardcode += `<p class="card-text" style="font-family: Trebuchet MS">${card.description}</p>`;
  console.log(card.tag);

  let i;

  if (card.tag != "" && card.tag != "important") {
    cardcode += `<button type="button" class="btn btn-warning" onclick="showInput('${card.name}', '${card.picture}', '${card.tag}')" style="font-family: Trebuchet MS">Take a Look</button>`;
  } else
    cardcode += `<button type="button" class="btn btn-warning" data-toggle="modal" data-target="#${card.link}" style="font-family: Trebuchet MS">Take a Look</button>`;
  cardcode += "</div></div>";
  if (order % 3 == 0) {
    document.querySelector(
      "#cardcontainer"
    ).innerHTML += `<div class="d-flex justify-content-center section" id="section_${
      order / 3
    }"></div>`;
  }

  document.querySelector(`#section_${Math.floor(order / 3)}`).innerHTML +=
    cardcode;

  console.log(card);
}
