const inputNombre = document.getElementById("caja")
const botonBuscar = document.getElementById("buscar")
const botonRandom = document.getElementById("random");

const audioPokemon = document.getElementById("audioPokemon")
const imagenPokemon = document.getElementById("imagenPokemon")
const idPokemon = document.getElementById("idPokemon")

const saludPokemon = document.getElementById("saludPokemon")
const ataquePokemon = document.getElementById("ataquePokemon")
const defensaPokemon = document.getElementById("defensaPokemon")
const velocidadPokemon = document.getElementById("velocidadPokemon")
const ataqueEspecialPokemon = document.getElementById("ataqueEspecialPokemon")
const defensaEspecialPokemon = document.getElementById("defensaEspecialPokemon")

async function buscarPokemon() {

    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/" + inputNombre.value)
    const infoPokemon = await respuesta.json()

    audioPokemon.src = infoPokemon.cries.latest
    imagenPokemon.src = infoPokemon.sprites.other["official-artwork"].front_default
    idPokemon.innerHTML = "#" + infoPokemon.id

    saludPokemon.innerHTML = infoPokemon.stats[0].base_stat
    ataquePokemon.innerHTML = infoPokemon.stats[1].base_stat
    defensaPokemon.innerHTML = infoPokemon.stats[2].base_stat
    velocidadPokemon.innerHTML = infoPokemon.stats[3].base_stat
    ataqueEspecialPokemon.innerHTML = infoPokemon.stats[4].base_stat
    defensaEspecialPokemon.innerHTML = infoPokemon.stats[5].base_stat

}

botonBuscar.addEventListener("click", e => {
    e.preventDefault()
    buscarPokemon()
})

botonRandom.addEventListener("click", e => {
    e.preventDefault();
    const idAleatorio = Math.floor(Math.random() * 1010) + 1;
    inputNombre.value = idAleatorio;
    buscarPokemon();
});