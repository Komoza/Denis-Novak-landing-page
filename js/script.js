function activate_menu() {
    let header = document.getElementById("headerID");
    let burger = document.getElementById("burgerID");
    let close = document.getElementById("closeID");
    let lang = document.getElementById("langID");

    close.classList.add("showClose");
    close.classList.remove("hidelose");

    lang.classList.add("showLang");
    lang.classList.remove("hideLang");

    burger.classList.add("hideBurger");
    burger.classList.remove("showBurger");

    header.classList.add("headerActive");
}

function close_menu() {
    let header = document.getElementById("headerID");
    let burger = document.getElementById("burgerID");
    let close = document.getElementById("closeID");
    let lang = document.getElementById("langID");

    close.classList.remove("showClose");
    close.classList.add("hidelose");

    lang.classList.remove("showLang");
    lang.classList.add("hideLang");

    burger.classList.remove("hideBurger");
    burger.classList.add("showBurger");

    header.classList.remove("headerActive");   
}

function update_button(key) {
    let home = document.getElementById("homeID");
    let aboutMe = document.getElementById("aboutMeID");
    let skills = document.getElementById("skillsID");
    let portfolio = document.getElementById("portfolioID");
    let contacts = document.getElementById("contactsID"); 

    home.classList.remove("buttonActive");
    aboutMe.classList.remove("buttonActive");
    skills.classList.remove("buttonActive");
    portfolio.classList.remove("buttonActive");
    contacts.classList.remove("buttonActive");

    if (key == "home") {
        home.classList.add("buttonActive");
    };
    if (key == "aboutMe") {
        aboutMe.classList.add("buttonActive");
    };
    if (key == "skills") {
        skills.classList.add("buttonActive");
    };
    if (key == "portfolio") {
        portfolio.classList.add("buttonActive");
    };
    if (key == "contacts") {
        contacts.classList.add("buttonActive");
    };
    close_menu();
}

