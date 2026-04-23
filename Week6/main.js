document.getElementById("pink").addEventListener("click", setPink);
function setPink() {
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "var(--blossom-pink)";
    document.querySelector("#header-container").style.transition = "background-color 0.5s ease-in-out";
    document.querySelector("#header-container").style.backgroundColor = "var(--blossom-hue)";
    const nodeList = document.querySelectorAll(".title-container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList[i].style.backgroundColor = "var(--blossom-hue)";
    }
    const nodeList2 = document.querySelectorAll(".buttons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList2[i].style.backgroundColor = "var(--blossom-pink)";
    }
}

document.getElementById("yellow").addEventListener("click", setYellow);
function setYellow() {
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "var(--moon-yellow)";
    document.querySelector("#header-container").style.transition = "background-color 0.5s ease-in-out";
    document.querySelector("#header-container").style.backgroundColor = "var(--moon-hue)";
    const nodeList = document.querySelectorAll(".title-container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList[i].style.backgroundColor = "var(--moon-hue)";
    }
    const nodeList2 = document.querySelectorAll(".buttons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList2[i].style.backgroundColor = "var(--moon-yellow)";
    }
}

document.getElementById("green").addEventListener("click", setGreen);
function setGreen() {
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "var(--mint-green)";
    document.querySelector("#header-container").style.transition = "background-color 0.5s ease-in-out";
    document.querySelector("#header-container").style.backgroundColor = "var(--mint-hue)";
    const nodeList = document.querySelectorAll(".title-container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList[i].style.backgroundColor = "var(--mint-hue)";
    }
    const nodeList2 = document.querySelectorAll(".buttons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList2[i].style.backgroundColor = "var(--mint-green)";
    }
}

document.getElementById("blue").addEventListener("click", setBlue);
function setBlue() {
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "var(--plave-blue)";
    document.querySelector("#header-container").style.transition = "background-color 0.5s ease-in-out";
    document.querySelector("#header-container").style.backgroundColor = "var(--plave-hue)";
    const nodeList = document.querySelectorAll(".title-container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList[i].style.backgroundColor = "var(--plave-hue)";
    }
    const nodeList2 = document.querySelectorAll(".buttons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList2[i].style.backgroundColor = "var(--plave-blue)";
    }
}


document.getElementById("base-pink").addEventListener("click", setBasePink);
function setBasePink() {
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "var(--blossom-pink)";
    const nodeList2 = document.querySelectorAll(".buttons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList2[i].style.backgroundColor = "var(--blossom-pink)";
    }
}

document.getElementById("base-yellow").addEventListener("click", setBaseYellow);
function setBaseYellow() {
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "var(--moon-yellow)";
    const nodeList2 = document.querySelectorAll(".buttons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList2[i].style.backgroundColor = "var(--moon-yellow)";
    }
}

document.getElementById("base-green").addEventListener("click", setBaseGreen);
function setBaseGreen() {
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "var(--mint-green)";
    const nodeList2 = document.querySelectorAll(".buttons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList2[i].style.backgroundColor = "var(--mint-green)";
    }
}

document.getElementById("base-blue").addEventListener("click", setBaseBlue);
function setBaseBlue() {
    document.body.style.transition = "background-color 0.5s ease-in-out";
    document.body.style.backgroundColor = "var(--plave-blue)";
    const nodeList2 = document.querySelectorAll(".buttons");
    for (let i = 0; i < nodeList2.length; i++) {
        nodeList2[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList2[i].style.backgroundColor = "var(--plave-blue)";
    }
}

document.getElementById("accent-pink").addEventListener("click", setAccentPink);
function setAccentPink() {
    document.querySelector("#header-container").style.transition = "background-color 0.5s ease-in-out";
    document.querySelector("#header-container").style.backgroundColor = "var(--blossom-hue)";
    const nodeList = document.querySelectorAll(".title-container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList[i].style.backgroundColor = "var(--blossom-hue)";
    }
}

document.getElementById("accent-yellow").addEventListener("click", setAccentYellow);
function setAccentYellow() {
    document.querySelector("#header-container").style.transition = "background-color 0.5s ease-in-out";
    document.querySelector("#header-container").style.backgroundColor = "var(--moon-hue)";
    const nodeList = document.querySelectorAll(".title-container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList[i].style.backgroundColor = "var(--moon-hue)";
    }
}

document.getElementById("accent-green").addEventListener("click", setAccentGreen);
function setAccentGreen() {
    document.querySelector("#header-container").style.transition = "background-color 0.5s ease-in-out";
    document.querySelector("#header-container").style.backgroundColor = "var(--mint-hue)";
    const nodeList = document.querySelectorAll(".title-container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList[i].style.backgroundColor = "var(--mint-hue)";
    }
}

document.getElementById("accent-blue").addEventListener("click", setAccentBlue);
function setAccentBlue() {
    document.querySelector("#header-container").style.transition = "background-color 0.5s ease-in-out";
    document.querySelector("#header-container").style.backgroundColor = "var(--plave-hue)";
    const nodeList = document.querySelectorAll(".title-container");
    for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].style.transition = "background-color 0.9s ease-in-out";
        nodeList[i].style.backgroundColor = "var(--plave-hue)";
    }
}
