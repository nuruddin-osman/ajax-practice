function loadData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    $(".container01").text(this.responseText); //request pathiye je result asbe
  };
  xhttp.open("GET", "text.txt"); //je jayga theke data nibo
  xhttp.send(); //request ti send korte hobe
}
