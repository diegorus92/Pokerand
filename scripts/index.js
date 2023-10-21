var pokemonList = [
    {
        name:"Bulbasaur",
        type: "Plant Poison",
        hp: 318,
        power: 1,
        image:"assets/images/bulbasaur.png"
    },
    {
        name:"Pikachu",
        type: "Thunder",
        hp: 320,
        power: 25,
        image:"assets/images/pikachu.png"
    },
    {
        name:"Mankey",
        type: "Fighting",
        hp: 305,
        power: 56,
        image:"assets/images/mankey.png"
    },
    {
        name:"Charizard",
        type: "Fire Flying",
        hp: 534,
        power: 6,
        image:"assets/images/charizard.png"
    },
    {
        name:"Sandshrew",
        type: "Ground",
        hp: 300,
        power: 27,
        image:"assets/images/sandshrew.png"
    },
    {
        name:"Geodude",
        type: "Rock Ground",
        hp: 100,
        power: 300,
        image:"assets/images/geodude.png"
    },
    {
        name:"Caterpie",
        type: "Bug",
        hp: 195,
        power: 10,
        image:"assets/images/caterpie.png"
    },
    {
        name:"Gastly",
        type: "Poision Ghost",
        hp: 310,
        power: 92,
        image:"assets/images/gastly.png"
    },
    {
        name:"Magnemite",
        type: "Thunder Steel",
        hp: 325,
        power: 81,
        image:"assets/images/magnemite.png"
    },
    {
        name:"Abra",
        type: "Psychic",
        hp: 310,
        power: 63,
        image:"assets/images/abra.png"
    },
    {
        name:"Dewgong",
        type: "Water Ice",
        hp: 475,
        power: 87,
        image:"assets/images/dewgong.png"
    },
    {
        name:"Dratini",
        type: "Dragon",
        hp: 300,
        power: 147,
        image:"assets/images/dratini.png"
    },
    {
        name:"Umbreon",
        type: "Dark",
        hp: 525,
        power: 197,
        image:"assets/images/umbreon.png"
    },
    {
        name:"Clefairy",
        type: "Fairy",
        hp: 323,
        power: 35,
        image:"assets/images/clefairy.png"
    },
    {
        name:"Charmander",
        type: "Fire",
        hp: 309,
        power: 7,
        image:"assets/images/charmander.png"
    },
    {
        name:"Eevee",
        type: "Normal",
        hp: 325,
        power: 133,
        image:"assets/images/eevee.png"
    },
    {
        name:"Squirtle",
        type: "Water",
        hp: 314,
        power: 7,
        image:"assets/images/squirtle.png"
    },
    {
        name:"Pidgey",
        type: "Normal",
        hp: 251,
        power: 16,
        image:"assets/images/pidgey.png"
    },
]

function indexRandom(list){
    return Math.floor(Math.random() * list.length);
}

//modify this for alter text color of pokemon types
function checkType(type){
    let card;
    switch(type){
        case "Earth":
            card = document.getElementById("card");
            card.style.backgroundColor = "brown";
            console.log(card);
            break;
        case "Fire":
            card = document.getElementById("card");
            card.style.backgroundColor = "orange";
            break;
        case "Plant":
            card = document.getElementById("card");
            card.style.backgroundColor = "green";
            break;
        case "Thunder":
            card = document.getElementById("card");
            card.style.backgroundColor = "yellow";
            break;
        case "Water":
            card = document.getElementById("card");
            card.style.backgroundColor = "blue";
            break;
        default:
            card = document.getElementById("card");
            card.style.backgroundColor = "gray";
    }
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
    
    //checkType(pokemon.type);
    
    document.getElementById("type").innerHTML = pokemon.type;
    document.getElementById("health").innerHTML = pokemon.hp;
    document.getElementById("power").innerHTML = pokemon.power;
}

document.getElementById("random-button").addEventListener("click", function(){showPokemonSelected(pokemonList);});
