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

// $(document).ready(function () {
//   function loadData() {
//     get method 2 differant waye
//     get(url, callbackfunction)
//     $("#setVal").load("index.html", function (responseText, statusText, xhttp) {
//       console.log(responseText);
//       console.log(statusText);
//     });
//     $.get("index.html", function (data, status) {
//       console.log(data, status);
//     });
//     post(url,data, callbackfunction)
//     $.post(
//       "process.php",
//       {
//         username: "Sumon",
//         phone: "01509857437",
//       },
//       function (data, status) {
//         console.log(data, status);
//       }
//     );
//     $.ajax({
//       url: "data.html",
//       success: function (data) {
//         $("#setVal").html(data);
//         alert(data);
//       },
//     });
//     $.ajax({
//       url: "data.html",
//       type: "get",
//       async: false,
//       success: function (data) {
//         alert(data);
//       },
//     });
//     $.ajax({
//       url: "process.php",
//       type: "post",
//       data: {
//         phone: "017465827934",
//         username: "Naeem",
//       },
//       async: false,
//       success: function (data) {
//         alert(data);
//       },
//     });

//     $("#setVal").load("text.txt");
//   }
// });

// function loadData() {
//   $("#setVal").load("text.txt");
// }

// $(document).ready(function () {
//   $("button").click(function () {
//     $("#setVal").load("text.txt");
//   });
// });

// $(document).ready(function () {
//   $("button").click(function () {
//     $.get("text.txt", function (data, status) {
//       $("#setVal").html(data);
//     });
//   });
// });

$(document).ready(function () {
  $("button").click(function () {
    $.post(
      "process.php",
      {
        name: "Sumon",
        phone: "4357983475",
      },
      function (data, status) {
        console.log(status);

        $("#setVal").html(data);
      }
    );
  });
});

