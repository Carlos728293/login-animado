const background = document.querySelector(".background")

for (let i = 0; i < 100; i++) {
    const aleatorio = Math.floor(Math.random() * 20)
    const span = document.createElement("span")
    span.style.setProperty('--n', aleatorio);

    background.appendChild(span)
}
