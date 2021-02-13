const readMore = document.getElementById("read");
readMore.addEventListener("click", scrollDown);

function scrollDown() {
    var elmnt = document.getElementById("red-cars");
    elmnt.scrollIntoView();
  }