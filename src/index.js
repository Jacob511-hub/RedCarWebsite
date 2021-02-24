const readMore = document.getElementById("read");
readMore.addEventListener("click", scrollDown);

function scrollDown() {
    const elmnt = document.getElementById("red-cars");
    elmnt.scrollIntoView();
  }