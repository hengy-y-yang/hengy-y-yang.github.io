async function getCards() {
  const res = await fetch("../../cards.json");
  const resJson = await res.json();

  let i, rn;

  for (i = 0; i <= getCookie("order"); i++) {
    rn = {
      name: getCookie(`name${i}`),
      description: getCookie(`description${i}`),
      picture: getCookie(`picture${i}`),
      link: `${i}a`,
      tag: getCookie(`text${i}`),
    };
    console.log(rn);
    resJson.push(rn);
  }

  return resJson;
}
