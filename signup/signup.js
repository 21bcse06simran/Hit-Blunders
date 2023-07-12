const email = document.getElementById("email");
const uname = document.getElementById("name");
const mob = document.getElementById("mob");
const pass = document.getElementById("password");
const button = document.getElementById("signup");

button.addEventListener("click", () => {
    console.log("Data received");
  const dataobj = {
    email: email.value,
    name: uname.value,
    mob: mob.value,
    password: pass.value,
  };
  alert(
        "Account created successfully"
      );
      window.location.replace(`../signin/signin.html`);
    });

