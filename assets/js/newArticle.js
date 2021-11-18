function newArticle() {
  let name = document.querySelector("#name").value,
    description = document.querySelector("#description").value,
    picture = document.querySelector("#picture").value,
    text = document.querySelector("#text").value,
    order;

  if (name.length > 50 || description.length > 115) {
    document.querySelector("#js-submit").innerHTML =
      'Too many characters!<i class="fa fa-arrow-right"></i>';
  } else {
    order = getCookie("order");
    if (order == undefined) {
      document.cookie = 'order=0; path="/"';
      order = 0;
    } else {
      order++;
      document.cookie = `order=${order}; path="/"`;
    }

    document.cookie = `name${order}=${name}; path="/"`;
    document.cookie = `description${order}=${description}; path="/"`;
    document.cookie = `picture${order}=${picture}; path="/"`;
    document.cookie = `text${order}=${text}; path="/"`;

    document.querySelector("#js-submit").innerHTML =
      "Success! Going to latest News";

    window.location = "./latest.html";
    // document.cookie = `name=${name}; path="./important.html"`;
    // document.cookie = `description=${description}; path="./important.html"`;
    // document.cookie = `picture=${picture}; path="./important.html"`;
    // document.cookie = `text=${text}; path="./important.html"`;

    // document.cookie = `name=${name}; path="./latest.html"`;
    // document.cookie = `description=${description}; path="./latest.html"`;
    // document.cookie = `picture=${picture}; path="./latest.html"`;
    // document.cookie = `text=${text}; path="./latest.html"`;

    // document.cookie = `name=${name}; path="./results.html"`;
    // document.cookie = `description=${description}; path="./results.html"`;
    // document.cookie = `picture=${picture}; path="./results.html"`;
    // document.cookie = `text=${text}; path="./results.html"`;
  }
}
