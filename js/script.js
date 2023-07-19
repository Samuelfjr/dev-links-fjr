function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light");

    const image = document.querySelector("#profile img");
    const alt = document.querySelector("#profile img");

    if(html.classList.contains('light')) {
        image.setAttribute('src', './assets/profile-light.png');
        alt.setAttribute('alt', 'Foto do Samuel sorrindo, com barba, camiseta branca e óculos do meme "turn down for what".');    
    } else {
        image.setAttribute('src', './assets/profile.png');
        alt.setAttribute('alt', 'Foto do Samuel sorrindo, com barba e camiseta branca.');
    }
}