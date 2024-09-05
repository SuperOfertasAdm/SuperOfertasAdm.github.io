const items = [
    {
        name: "Kit Garrafa Térmica Vacuum Bottle Inox 500ml + 3 Xícaras",
        price: "R$ 26,97",
        image: "https://down-br.img.susercontent.com/file/br-11134207-7r98o-lnodtakj4r0s75",
        url: "https://s.shopee.com.br/AKHPu5KVGy"
    },
    {
        name: "Produto 2",
        price: "R$ 200,00",
        image: "https://via.placeholder.com/150",
        url: "https://link-para-produto-2.com"
    },
    {
        name: "Produto 3",
        price: "R$ 200,00",
        image: "https://via.placeholder.com/150",
        url: "https://link-para-produto-2.com"
    },
    {
        name: "Produto 4",
        price: "R$ 200,00",
        image: "https://via.placeholder.com/150",
        url: "https://link-para-produto-2.com"
    },
    {
        name: "Produto 4",
        price: "R$ 200,00",
        image: "https://via.placeholder.com/150",
        url: "https://link-para-produto-2.com"
    },
    {
        name: "Produto 4",
        price: "R$ 200,00",
        image: "https://via.placeholder.com/150",
        url: "https://link-para-produto-2.com"
    },
    {
        name: "Produto 4",
        price: "R$ 200,00",
        image: "https://via.placeholder.com/150",
        url: "https://link-para-produto-2.com"
    },
    {
        name: "Produto 4",
        price: "R$ 200,00",
        image: "https://via.placeholder.com/150",
        url: "https://link-para-produto-2.com"
    }
    
    
    
    
    
    // Adicione mais produtos aqui
];

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

        container.appendChild(itemDiv);
    });
}

document.getElementById('search').addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredItems = items.filter(item => 
        item.name.toLowerCase().includes(searchTerm)
    );
    displayItems(filteredItems);
});

displayItems(items);