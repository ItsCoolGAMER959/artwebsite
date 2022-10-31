window.addEventListener("load", function () {
  const form = document.getElementById("my-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data
    });
  });
});
$("form").on("submit", function (e) {
  e.preventDefault();
  $(".child").remove();
  $(".child2").show();
});
let firstName = document.getElementsByName("First Name")[0].value;
function formChanged() {
  firstName = document.getElementsByName("First Name")[0].value;
}
document.getElementById("greeting").innerHTML = firstName
