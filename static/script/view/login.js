const loginButton = document.querySelector("#loginButton");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const inputUsername = document.querySelector("#inputUsername");
    const inputPassword = document.querySelector("#inputPassword");

    // console.log(inputUsername);
    // console.log(inputPassword);

    if (inputUsername.value == "admin" && inputPassword.value == "admin") {
        alert("You have successfully logged in.");
        window.location.href="catalog.html";
    } else {
        alert("You Suck!!!")
    }
})