$(document).ready(function(){

  $("#btn-submit").click(function(){
    function getUserData(){
      let user ={
        username: $("#username").val(),
        password: $("#password").val()
      };
      $("#form")[0].reset();
      return user;
    }
    function storeDataToLocalStorage(){
        if(!localStorage.getItem("user")){
          localStorage.setItem("user",JSON.stringify(getUserData()));
        }
        else{
          localStorage.removeItem("user");
          localStorage.setItem("user",JSON.stringify(getUserData()));
        }
    }
    function sendData(){
      let xhr = new XMLHttpRequest();
      let data = JSON.stringify(getUserData());
      xhr.open("POST","http://localhost:4000/storedata",true);
      xhr.setRequestHeader("Content-Type","application/json");
      xhr.send(data);
    }
    storeDataToLocalStorage();
    window.location.href="display_data.html"


  });
});