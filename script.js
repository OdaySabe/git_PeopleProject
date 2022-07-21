const source = $("#displayTemplate").html();
const temp = Handlebars.compile(source);
let resultGroub = { items: [] };

const doHandle = function (theResult) {
  const newHTML = temp(theResult);
  console.log(resultGroub);
  $("#displayResults").empty();
  $("#displayResults").append(newHTML);
};
const returnNameEmail = function (data) {
  for (obj of data.results) {
    resultGroub.items.push({
      name: `${obj.name.title} ${obj.name.first} ${obj.name.last}`,
      email: obj.email,
    });
    doHandle(resultGroub);
  }
};
$("#addNew").on("click", function () {
  $.ajax({
    url: "https://randomuser.me/api/",
    dataType: "json",
    success: returnNameEmail,
  });
});
