const container = document.querySelector('.container');
const form = document.querySelector('#searchForm');
const searchInput = document.querySelector('.search');

form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } }
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    makeImages(res.data)
    form.elements.query.value = '';
})

const makeImages = (shows) => {
    container.innerHTML = "";

    for (let result of shows) {
        if (result.show.image) {
            const img = document.createElement('IMG');
            const div = document.createElement('div');
            img.src = result.show.image.medium;
            div.classList.add('show');
            div.appendChild(img);
            
            container.appendChild(div);
        }
    }

    searchInput.focus();
}