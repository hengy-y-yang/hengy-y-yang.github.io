function important() {
  getCards().then((cards) => {
    let i, unimportant;

    for (i = 0, unimportant = 0; i < cards.length; i++) {
      if (cards[i].tag == "important") {
        makeCard(cards[i], i - unimportant);
      } else unimportant++;
    }
  });
}
