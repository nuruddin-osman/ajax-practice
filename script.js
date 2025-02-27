function loadData() {
  const xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      $(".container01").text(this.responseText); //request pathiye je result asbe
    }
  };
  xhttp.open("GET", "text.txt"); //je jayga theke data nibo
  xhttp.send(); //request ti send korte hobe
}

//jQuery AJAX.......
function loadData() {
  $.get("text.txt", function (data) {
    $(".container01").text(data); // ডাটা আসার পর সেটা দেখাবো
  }).fail(function () {
    console.log("Error loading data.");
  });
}
