var pokemonList = [
    {
        name:"Bulbasaur",
        type: "Plant",
        hp: 100,
        power: 50,
        image:"assets/images/bulbasaur.png"
    },
    {
        name:"Pikachu",
        type: "Thunder",
        hp: 100,
        power: 34,
        image:"assets/images/pikachu.png"
    },
    {
        name:"Charmander",
        type: "Fire",
        hp: 100,
        power: 55,
        image:"assets/images/charmander.png"
    },
    {
        name:"Eevee",
        type: "Earth",
        hp: 100,
        power: 35,
        image:"assets/images/eevee.png"
    },
    {
        name:"Squirtle",
        type: "Water",
        hp: 100,
        power: 35,
        image:"assets/images/squirtle.png"
    },
    {
        name:"chinchulin",
        type: "Fire",
        hp: 100,
        power: 55,
        image:"assets/images/sample.png"
    },
]

function indexRandom(list){
    return Math.floor(Math.random() * list.length);
}

function showPokemonSelected(list){
    let pokemon = list[indexRandom(list)];
    
    document.getElementById("pokemon-name").innerHTML = pokemon.name;
    let image = document.getElementById("pokemon-image");

    image.style.animationName = "showing";
    image.style.animationDuration = "3s";
    image.style.animationDirection = "right";
    image.setAttribute("src", pokemon.image);
    setTimeout(() => {image.style.animationName = ""}, 1000);
    
    document.getElementById("type").innerHTML = pokemon.type;
    document.getElementById("health").innerHTML = pokemon.hp;
    document.getElementById("power").innerHTML = pokemon.power;
}

document.getElementById("random-button").addEventListener("click", function(){showPokemonSelected(pokemonList);});
