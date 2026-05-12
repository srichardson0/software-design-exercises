const canvas = document.getElementById('canvas');
const checkoutBtn = document.getElementById('checkout-btn');
const resetMsg = document.getElementById('reset-msg');
const cartCounter = document.getElementById('cart-counter');
const floorHint = document.getElementById('floor-hint');

let products = [];
let cardCount = 0;
let cart = [];
let lastSpawnPos = { x: -1000, y: -1000 };
let isResetting = false;
let hintHidden = false;

const SPAWN_DISTANCE = 80;
const CHECKOUT_THRESHOLD = 60;

const fonts = ['"Playfair Display", serif', '"Impact", sans-serif', '"Caveat", cursive', 'sans-serif'];
const bgColors = ['#fff8f0', '#fdfd96', '#ffb7b2', '#c1e1c1', 'transparent', '#ffffff'];

async function init() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=300');
        const data = await response.json();
        products = data.products;
    } catch (error) {
        console.error("Failed to load DummyJSON", error);
    }
}

function updateCounter() {
    if (!cartCounter) return;
    const n = cart.length;
    cartCounter.textContent = `${n} item${n === 1 ? '' : 's'} in your hands`;
    if (n > 0 && n <= CHECKOUT_THRESHOLD) {
        cartCounter.style.color = '#d00';
    } else if (n > CHECKOUT_THRESHOLD) {
        cartCounter.style.color = '#000';
        cartCounter.style.background = '#ff0';
    }
}

function hideHintOnce() {
    if (hintHidden || !floorHint) return;
    hintHidden = true;
    floorHint.classList.add('gone');
}

function spawnCard(x, y) {
    if (products.length === 0 || isResetting) return;

    const product = products[Math.floor(Math.random() * products.length)];
    cardCount++;
    cart.push({
        title: product.title,
        price: product.price,
        thumbnail: product.thumbnail,
    });
    updateCounter();

    const rot = (Math.random() * 30) - 15;
    const width = Math.floor(Math.random() * 160) + 90;
    const font = fonts[Math.floor(Math.random() * fonts.length)];
    const bg = bgColors[Math.floor(Math.random() * bgColors.length)];
    const isPortrait = Math.random() > 0.5;
    const borderRadius = Math.random() > 0.5 ? '0px' : `${Math.floor(Math.random() * 40) + 15}px`;

    const wrapper = document.createElement('div');
    wrapper.className = 'card-wrapper';
    wrapper.style.left = `${x - (width / 2)}px`;
    wrapper.style.top = `${y - (width / 2)}px`;
    wrapper.style.zIndex = cardCount;
    wrapper.style.animationDelay = `-${Math.random() * 5}s`;

    const inner = document.createElement('div');
    inner.className = 'card-inner';
    inner.style.transform = `rotate(${rot}deg)`;
    inner.style.width = `${width}px`;
    inner.style.backgroundColor = bg;
    inner.style.borderRadius = borderRadius;
    if (bg === 'transparent') inner.style.boxShadow = 'none';

    const img = document.createElement('img');
    img.src = product.thumbnail;
    img.className = 'card-image';
    img.style.maxHeight = isPortrait ? '180px' : '90px';

    const price = document.createElement('div');
    price.innerText = `$${product.price}`;
    price.style.fontFamily = font;
    price.style.fontSize = `${Math.floor(Math.random() * 20) + 14}px`;
    price.style.marginTop = '8px';
    price.style.fontWeight = 'bold';

    const addBtn = document.createElement('button');
    addBtn.className = 'card-add-btn';
    addBtn.innerText = 'Add to Cart';
    addBtn.style.fontFamily = font;
    addBtn.style.animationDelay = `-${Math.random() * 2}s`;
    addBtn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        cart.push({
            title: product.title,
            price: product.price,
            thumbnail: product.thumbnail,
        });
        updateCounter();
        const nx = x + (Math.random() * 240 - 120);
        const ny = y + (Math.random() * 240 - 120);
        spawnCard(
            Math.max(60, Math.min(window.innerWidth - 60, nx)),
            Math.max(60, Math.min(window.innerHeight - 60, ny))
        );
    });

    const labelContainer = document.createElement('div');
    labelContainer.className = 'label-container';

    const label = document.createElement('div');
    label.className = 'product-label';
    label.innerText = (product.title || '').substring(0, 20) + '...';

    labelContainer.appendChild(label);
    inner.appendChild(img);
    inner.appendChild(price);
    inner.appendChild(addBtn);
    wrapper.appendChild(inner);
    wrapper.appendChild(labelContainer);
    canvas.appendChild(wrapper);

    if (cardCount > CHECKOUT_THRESHOLD) {
        checkoutBtn.classList.add('visible');
    }
}

document.addEventListener('mousemove', (e) => {
    hideHintOnce();
    const dist = Math.hypot(e.clientX - lastSpawnPos.x, e.clientY - lastSpawnPos.y);
    if (dist > SPAWN_DISTANCE) {
        spawnCard(e.clientX, e.clientY);
        lastSpawnPos = { x: e.clientX, y: e.clientY };
    }
});

checkoutBtn.addEventListener('click', () => {
    if (isResetting) return;
    isResetting = true;
    checkoutBtn.classList.remove('visible');
    EVERMORE.setCart(cart);
    resetMsg.classList.add('visible');
    setTimeout(() => {
        EVERMORE.fadeNavigate('checkout.html', 500);
    }, 700);
});

init();
