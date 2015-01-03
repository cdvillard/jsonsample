//Building a list

//Pulling the JSON data down and identifying it as "data"
$.getJSON('http://www.stellarbiotechnologies.com/media/press-releases/json?callback=callback', function(data) {

  //Setting up an Ordered List
  var output = "<ol id='list'>";

  //Loading items
  for (var i = 0; i < data.news.length; i++) {
    output +=
      "<li>" +
      data.news[i].title +
      "</li>" +
      "<dd>" +
      data.news[i].published +
      "</dd>";
  }

  //Tying up the ordered list
  output += "</ol>";

  //Spitting the data into the HTML.
  document.getElementById("appholder").innerHTML = output;

  //Display the first 40 li and dd items and hide the rest.
  $("#list li, dd").slice(40).hide();

  //Notes the next 20 items in the list.
  var mincount = 20;
  var maxcount = 40;

  //Fades in the next 20 items in the list within 400px of the bottom of the document.
  $(document).scroll(function() {
    if ($(window).scrollTop() + $(window).height() >= $(document).height() - 10) {
      $("#list li, dd").slice(mincount, maxcount).fadeIn(1200);
      mincount = mincount + 20;
      maxcount = maxcount + 20;
    }
  });
});