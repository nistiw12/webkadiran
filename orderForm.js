document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const orderCode = document.getElementById('orderCode').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    const message = `Order Details:%0A- Nama: ${name}%0A- Kode Pesanan: ${orderCode}%0A- Bayar Melalui: ${paymentMethod}`;

    const whatsappURL = `https://wa.me/6285794430249?text=${message}`;
    
    window.open(whatsappURL, '_blank');
});
