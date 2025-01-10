const productForm = document.getElementById('productForm');
const productTable = document.getElementById('productTable').querySelector('tbody');
const userEmail = sessionStorage.getItem('activeUser'); // Identificar o usuário logado
const storageKey = `user_${userEmail}_products`; // Chave única para cada usuário
const products = new Map();

// Carregar produtos armazenados no localStorage
const savedProducts = JSON.parse(localStorage.getItem(storageKey)) || [];
savedProducts.forEach((product) => {
    addProductToTable(product.name, product.category, product.price, product.unit, product.stock, false);
});

function saveProducts() {
    const productArray = Array.from(products.values()).map((product) => ({
        name: product.name,
        category: product.category,
        price: product.price,
        unit: product.unit,
        stock: product.stock,
    }));
    localStorage.setItem(storageKey, JSON.stringify(productArray));
}

productForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('productName').value.trim();
    const category = document.getElementById('category').value.trim();
    const price = parseFloat(document.getElementById('price').value);
    const unit = document.getElementById('unit').value;
    const stock = parseInt(document.getElementById('stock').value);

    if (products.has(name)) {
        alert('Já existe um produto com este nome.');
        return;
    }

    addProductToTable(name, category, price, unit, stock, true);
    productForm.reset();
});

function addProductToTable(name, category, price, unit, stock, save = true) {
    const total = (price * stock).toFixed(2);

    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${name}</td>
        <td>${category}</td>
        <td>${price.toFixed(2)}</td>
        <td>${unit}</td>
        <td>${stock}</td>
        <td>${total}</td>
        <td class="actions">
            <button onclick="updateStock('${name}', -1)">-</button>
            <button onclick="editProduct('${name}')">Editar</button>
            <button onclick="updateStock('${name}', 1)">+</button>
            <button onclick="deleteProduct('${name}')">Excluir</button>
        </td>
    `;
    products.set(name, { row, name, category, price, unit, stock });
    productTable.appendChild(row);

    if (save) saveProducts();
}

function updateStock(name, delta) {
    const product = products.get(name);
    product.stock += delta;
    if (product.stock < 0) {
        product.stock = 0;
        alert('Estoque não pode ser negativo!');
    }
    const total = (product.price * product.stock).toFixed(2);
    product.row.cells[4].textContent = product.stock;
    product.row.cells[5].textContent = total;
    saveProducts();
}

function editProduct(name) {
    const product = products.get(name);
    const newName = prompt('Novo Nome do Produto:', product.name);
    if (newName && newName !== product.name && !products.has(newName)) {
        products.delete(product.name);
        product.name = newName;
        product.row.cells[0].textContent = newName;
        products.set(newName, product);
        saveProducts();
    } else if (products.has(newName)) {
        alert('Já existe um produto com este nome.');
    }
}

function deleteProduct(name) {
    if (confirm('Deseja realmente excluir este produto?')) {
        const product = products.get(name);
        productTable.removeChild(product.row);
        products.delete(name);
        saveProducts();
    }
}

function populateCategoryFilter() {
    const categories = new Set();

    products.forEach((product) => {
        categories.add(product.category);
    });

    const filterCategory = document.getElementById('filterCategory');
    
    filterCategory.innerHTML = '<option value="">Selecione uma opção</option>';

    categories.forEach((category) => {
        const option = document.createElement('option');
        option.value = category;
        option.textContent = category;
        filterCategory.appendChild(option);
    });
}

function filterByCategory() {
    const selectedCategory = document.getElementById('filterCategory').value;
    const searchQuery = document.getElementById('searchProduct').value.toLowerCase();
    
    products.forEach((product) => {
        const row = product.row;
        const matchesCategory = selectedCategory === "" || product.category === selectedCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery);

        if (matchesCategory && matchesSearch) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function searchProduct() {
    filterByCategory();
}

window.onload = function () {
    populateCategoryFilter();
};
