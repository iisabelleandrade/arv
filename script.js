document.getElementById('card-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obter os valores dos campos
    const name = document.getElementById('name').value;
    const number = document.getElementById('number').value.replace(/\s+/g, '').replace(/(\d{4})(?=\d)/g, '$1 '); // Formata o número
    const expiry = document.getElementById('expiry').value;

    // Atualizar os dados do cartão
    document.getElementById('card-name').innerText = name || 'NOME DO TITULAR';
    document.getElementById('card-number').innerText = number || '**** **** **** ****';
    document.getElementById('card-expiry').innerText = expiry || 'MM/AA';
});
