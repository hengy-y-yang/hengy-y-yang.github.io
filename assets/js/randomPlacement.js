function randomPlacement() {
  getCards().then((cards) => {
    let cardsleft = cards.length,
      n,
      i,
      ii,
      done = new Array(cardsleft);

    for (i = 0; i < cardsleft; i++) {
      done[i] = 0;
    }

    while (cardsleft > 0) {
      n = Math.floor(Math.random() * cardsleft);
      i = 0;
      ii = 0;

      while (i <= n) {
        if (done[ii] == 0) i++;
        if (i <= n) ii++;
      }

      // console.log(done);
      // console.log(n);
      // console.log(cards[ii]);
      makeCard(cards[ii], cards.length - cardsleft);
      done[ii] = 1;
      cardsleft--;
    }
  });
}
