$(document).ready(function () {
  getData();
});

function getData() {
  let localStorageData = localStorage.getItem("user");
  let userObj = JSON.parse(localStorageData);
  console.log(userObj);

  $("#username").text(userObj.username);
  $("#password").text(userObj.password);

}