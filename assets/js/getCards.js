async function getCards() {
  const res = await fetch("../../cards.json");
  const resJson = await res.json();

  let i, ii, rn;

  for (i = 0; i <= getCookie("order"); i++) {
    rn = {
      name: getCookie(`name${i}`),
      description: getCookie(`description${i}`),
      picture: getCookie(`picture${i}`),
      link: `${i}a`,
      tag: getCookie(`text${i}`),
    };

    for (ii = 0; ii < rn.tag.length; ii++) {
      if (rn.tag[ii] == "'")
        rn.tag = rn.tag.substring(0, ii) + "*" + rn.tag.substring(ii + 1);
    }

    console.log(rn);
    resJson.push(rn);
  }

  return resJson;
}
