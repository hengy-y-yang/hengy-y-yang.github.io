function random3() {
  getCards().then((cards) => {
    let a = Math.floor(Math.random() * cards.length),
      b = Math.floor(Math.random() * cards.length),
      c = Math.floor(Math.random() * cards.length);

    a = Math.floor(Math.random() * cards.length);

    while (b == a) {
      b = Math.floor(Math.random() * cards.length);
    }

    while (c == a || c == b) {
      c = Math.floor(Math.random() * cards.length);
    }

    makeCard(cards[a], 0);
    makeCard(cards[b], 1);
    makeCard(cards[c], 2);
  });
}
