const API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=150'
const container = document.querySelector('.pokemon-list');
const teamList = document.querySelector('.team-list');
const teamContainer = document.querySelector('.team-container');
let myTeam = []

async function renderPokemon() {
    const { data } = await axios.get(API_URL);
    for (let [index, pokemon] of data.results.entries()) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const span = document.createElement('span');
        const button = document.createElement('button');
        button.innerText = 'Add To Team'

        button.addEventListener('click', () => {
            if (myTeam.length < 6) {
                pokemon.index = index + 1;
                myTeam.push(pokemon)
                teamContainer.classList.remove('d-none')
                renderTeam();
            }
        })

        image.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`);
        span.innerText = `${pokemon.name}`;
        div.classList.add('pokemon');
        div.appendChild(image);
        div.appendChild(span);
        div.appendChild(button);

        container.appendChild(div);
    }
}

function renderTeam() {
    teamList.innerHTML = ''
    for (let pokemon of myTeam) {
        const div = document.createElement('div');
        const image = document.createElement('img');
        const span = document.createElement('span');
        const button = document.createElement('button')
        button.innerText = 'Delete'

        button.addEventListener('click', () => {
            myTeam = myTeam.filter(filteredPokemon => pokemon.index !== filteredPokemon.index)
            if (myTeam.length === 0) {
                teamContainer.classList.add('d-none')
            }
            div.remove();
        })

        image.setAttribute('src', `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.index}.png`);
        span.innerText = `${pokemon.name}`;
        div.classList.add('pokemon');
        div.appendChild(image);
        div.appendChild(span);
        div.appendChild(button);

        teamList.appendChild(div);
    }
}

renderPokemon();