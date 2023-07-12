const email = document.getElementById("email");
const pass = document.getElementById("password");
const button = document.getElementById("signin");

button.addEventListener("click", () => {
    if(true){
        alert("Logged in Successfully!");
        window.location.href = "../temp/index.html";
      } else {
        alert("You are not registered in!");
      }
    });