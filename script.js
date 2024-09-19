async function fetchProducts() {
    const response = await fetch('products.json');
    const products = await response.json();
    return products;
}

function displayItems(filteredItems) {
    const container = document.getElementById('items-container');
    container.innerHTML = '';

    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        itemDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Preço: ${item.price}</p>
            <a href="${item.url}" target="_blank">Ver Mais</a>
        `;

        // Evento de clique para a imagem, redirecionando para o mesmo link do "Ver Mais"
        const imgElement = itemDiv.querySelector('img');
        imgElement.addEventListener('click', () => {
            window.open(item.url, '_blank');
        });

        container.appendChild(itemDiv);
    });
}

document.getElementById('search').addEventListener('input', async (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const products = await fetchProducts();
    const filteredItems = products.filter(item => 
        item.name.toLowerCase().includes(searchTerm)
    );
    displayItems(filteredItems);
});

// Inicializa a exibição dos itens
fetchProducts().then(displayItems);