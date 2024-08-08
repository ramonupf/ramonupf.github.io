document.addEventListener('DOMContentLoaded', (event) => {
    loadTableData();
    showSuccessMessage("previous products");
});

const cart = []

function addRow(){
    const productName = document.getElementById('productName').value;
    const price = parseFloat(document.getElementById('price').value);
    const quantity = parseInt(document.getElementById('quantity').value);

    if (productName && !isNaN(price) && !isNaN(quantity)) {
        const amount = price * quantity;
        const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
        const newRow = table.insertRow();

        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = productName;
        cell2.innerHTML = price.toFixed(2); // Ensures the price is displayed with two decimal places
        cell3.innerHTML = quantity;
        cell4.innerHTML = amount.toFixed(2); // Ensures the amount is displayed with two decimal places

        // Add product to cart array
        cart.push({
            productName,
            price,
            quantity,
            amount
        });

        // Store the cart array in local storage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Clear the input fields
        document.getElementById('productName').value = '';
        document.getElementById('price').value = '';
        document.getElementById('quantity').value = '';
        
        //success message
        showSuccessMessage(productName);
    } else {
        alert('Please fill out all fields with valid values');
    }
}

function showSuccessMessage(product_name){
    const successMessage = document.getElementById('successMessage');
    let message = `Added ${product_name} successfully!`
    successMessage.textContent = message;
    successMessage.style.display = 'block';
    setTimeout(() => { successMessage.style.display = 'none';}, 2000);
}

function loadTableData() {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];

    storedCart.forEach(item => {
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell(0);
        const cell2 = newRow.insertCell(1);
        const cell3 = newRow.insertCell(2);
        const cell4 = newRow.insertCell(3);

        cell1.innerHTML = item.productName;
        cell2.innerHTML = item.price.toFixed(2);
        cell3.innerHTML = item.quantity;
        cell4.innerHTML = item.amount.toFixed(2);

        // Add item to cart array
        cart.push(item);
    });
}

function clearCart() {
    // Clear the cart array
    cart.length = 0;

    // Clear the table body
    const table = document.getElementById('productTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    // Remove the cart data from local storage
    localStorage.removeItem('cart');
}