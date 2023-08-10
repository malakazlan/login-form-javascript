
document.addEventListener("DOMContentLoaded", () => {
    const loginBtn = document.querySelector(".navbar ul li button");
    const loginForm = document.querySelector(".forms");

    loginBtn.addEventListener("click",()=>{
        loginForm.style.display = "block";

    })
});