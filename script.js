const main = document.querySelector(".body-main");
const toggleBtn = document.querySelector(".toggle-light");
const heroSection = document.querySelector(".hero-section");
const sectionTwo = document.querySelector(".section-2");
const sectionVision = document.querySelector(".section-vision");
const sectionThree = document.querySelector(".section-3");
const sectionMusic = document.querySelector(".section-music");
const sectionFour = document.querySelector(".section-4");
const sectionX = document.querySelector(".section-explore");
const footer = document.querySelector(".footer");
const header = document.querySelector(".header");
const card = document.querySelectorAll(".card");
const dark = document.querySelector(".toggle-dark");
const bar = document.querySelector("#img-3");
const cross = document.querySelector("#img-4");
const nav = document.querySelector(".navbar");
const mainSection = document.querySelector(".mainSection");
const row = document.querySelectorAll(".row-child");


toggleBtn.onclick = () => {
    main.classList.add("light")
    header.classList.add("even-section");
    heroSection.classList.add("even-section");
    sectionTwo.classList.add("odd-section");
    sectionVision.classList.add("even-section");
    sectionThree.classList.add("even-section");
    sectionMusic.classList.add("odd-section");
    sectionFour.classList.add("odd-section");
    sectionX.classList.add("even-section");
    footer.classList.add("odd-section");
    dark.style.display = "block";
    header.style.backgroundColor = "gray";
    toggleBtn.style.display = "none";


    card.forEach(k => {
    k.classList.add("card-light");
    })

    row.forEach(r => {
        r.classList.add("row-alt");
    })
}

dark.onclick = () => {
    main.classList.remove("light")
    header.classList.remove("even-section");
    heroSection.classList.remove("even-section");
    sectionTwo.classList.remove("odd-section");
    sectionVision.classList.remove("even-section");
    sectionThree.classList.remove("even-section");
    sectionMusic.classList.remove("odd-section");
    sectionFour.classList.remove("odd-section");
    sectionX.classList.remove("even-section");
    footer.classList.remove("odd-section");
    toggleBtn.style.display = "block";
    dark.style.display = "none";

    card.forEach(k => {
    k.classList.remove("card-light");
    })

    row.forEach(r => {
        r.classList.remove("row-alt");
    })
}

bar.onclick = () => {
    bar.style.display = "none";
    cross.style.display = "block";
    document.body.classList.add("nav-open");
}

cross.onclick = () => {
    cross.style.display = "none";
    bar.style.display = "block";
    document.body.classList.remove("nav-open")
}