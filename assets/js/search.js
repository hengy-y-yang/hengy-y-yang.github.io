//const CARD_STYLES = "border-radius: 1rem;"

let results = 0;

function getQuery() {
  let i,
    url = window.location.href,
    pastQuestion = false,
    result = "";

  for (i = 0; i < url.length; i++) {
    if (pastQuestion == true) {
      result += url[i];
    }
    if (url[i] == "=") pastQuestion = true;
  }

  console.log(result);
  return result;
}

function search(keyword) {
  getCards().then((cards) => {
    for (let i = 0; i < cards.length; i++) {
      for (let ii = 0, j = 0; ii < cards[i].name.length; ii++) {
        if (
          cards[i].name[ii] != keyword[j] &&
          cards[i].name[ii].charCodeAt() != keyword[j].charCodeAt() - 32
        ) {
          j = 0;
          continue;
        } else if (j == keyword.length - 1) {
          makeCard(cards[i], results);
          results++;
          ii = cards[i].name.length;
        }
        j++;
      }
    }

    if (results == 0)
      document.querySelector(
        "#cardcontainer"
      ).innerHTML = `<div style="text-align: center; padding: 10rem"><img src="https://www.pinclipart.com/picdir/big/208-2084500_ask-magnifying-glass-question-mark-clipart.png" alt="Huh? " style="width:16.12903rem; height:10rem;"></img><b style="font-family: 'Calibri'; font-size: 5rem; color: darkgrey">Sorry, but we couldn't find any results with those keywords.</b></div>`;
  });
}
