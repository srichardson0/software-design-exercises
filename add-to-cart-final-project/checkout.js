const cart = EVERMORE.getCart();
const itemsEl = document.getElementById('receipt-items');
const totalEl = document.getElementById('receipt-total');
const countEl = document.getElementById('item-count');
const dateEl = document.getElementById('receipt-date');

dateEl.textContent = new Date().toLocaleString();

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str == null ? '' : String(str);
    return div.innerHTML;
}

if (!cart || cart.length === 0) {
    const li = document.createElement('li');
    li.className = 'r-empty';
    li.textContent = 'you walked across the floor without grabbing a thing. unusual.';
    itemsEl.appendChild(li);
    EVERMORE.commitCheckout();
    EVERMORE.clearCart();
} else {
    let i = 0;
    let total = 0;
    const PRINT_DELAY = Math.max(35, Math.min(120, Math.floor(2500 / cart.length)));

    function printNext() {
        if (i >= cart.length) {
            EVERMORE.commitCheckout();
            EVERMORE.clearCart();
            return;
        }
        const item = cart[i];
        const price = Number(item.price) || 0;
        total += price;

        const li = document.createElement('li');
        const title = (item.title || 'unnamed object').substring(0, 28);
        li.innerHTML = `
            <span class="r-title">${escapeHtml(title)}</span>
            <span class="r-dots"></span>
            <span class="r-price">$${price.toFixed(2)}</span>
        `;
        itemsEl.appendChild(li);
        totalEl.textContent = '$' + total.toFixed(2);
        countEl.textContent = i + 1;
        li.scrollIntoView({ behavior: 'smooth', block: 'end' });
        i++;
        setTimeout(printNext, PRINT_DELAY);
    }

    printNext();
}
