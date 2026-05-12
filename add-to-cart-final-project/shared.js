const EVERMORE = (() => {
    const CART_KEY = 'evermore_cart';
    const HISTORY_KEY = 'evermore_history_count';
    const CHECKOUT_KEY = 'evermore_checkout_count';
    const SPEND_KEY = 'evermore_total_spend';

    function safeRead(key, fallback) {
        try {
            const v = localStorage.getItem(key);
            return v == null ? fallback : JSON.parse(v);
        } catch {
            return fallback;
        }
    }

    function safeWrite(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch {}
    }

    function getCart() {
        return safeRead(CART_KEY, []);
    }

    function setCart(items) {
        safeWrite(CART_KEY, items);
    }

    function clearCart() {
        try { localStorage.removeItem(CART_KEY); } catch {}
    }

    function commitCheckout() {
        const cart = getCart();
        const total = cart.reduce((sum, item) => sum + (Number(item.price) || 0), 0);
        safeWrite(HISTORY_KEY, (safeRead(HISTORY_KEY, 0) || 0) + cart.length);
        safeWrite(CHECKOUT_KEY, (safeRead(CHECKOUT_KEY, 0) || 0) + 1);
        safeWrite(SPEND_KEY, Number(((safeRead(SPEND_KEY, 0) || 0) + total).toFixed(2)));
        return { items: cart, total };
    }

    function getStats() {
        return {
            items: safeRead(HISTORY_KEY, 0) || 0,
            checkouts: safeRead(CHECKOUT_KEY, 0) || 0,
            spend: safeRead(SPEND_KEY, 0) || 0,
        };
    }

    function resetStats() {
        [CART_KEY, HISTORY_KEY, CHECKOUT_KEY, SPEND_KEY].forEach(k => {
            try { localStorage.removeItem(k); } catch {}
        });
    }

    function renderStats() {
        const s = getStats();
        const itemsEl = document.getElementById('stat-items');
        const checkoutsEl = document.getElementById('stat-checkouts');
        const spendEl = document.getElementById('stat-spend');
        const noteEl = document.getElementById('stats-note');
        const resetBtn = document.getElementById('stats-reset');

        if (itemsEl) itemsEl.textContent = s.items;
        if (checkoutsEl) checkoutsEl.textContent = s.checkouts;
        if (spendEl) spendEl.textContent = '$' + Number(s.spend).toFixed(2);

        if (noteEl) {
            if (s.checkouts === 0) {
                noteEl.textContent = 'you have not bought anything yet. that will change.';
            } else if (s.checkouts < 3) {
                noteEl.textContent = 'a small haul. the floor is still waiting.';
            } else if (s.spend < 1000) {
                noteEl.textContent = 'a familiar rhythm. you know the way back to the floor.';
            } else {
                noteEl.textContent = 'this is the shape of the feeling. it is bigger than you thought.';
            }
        }

        if (resetBtn) {
            resetBtn.onclick = () => {
                resetStats();
                renderStats();
            };
        }
    }

    function fadeNavigate(href, ms = 600) {
        document.body.classList.add('fading-out');
        setTimeout(() => { window.location.href = href; }, ms);
    }

    document.addEventListener('DOMContentLoaded', () => {
        requestAnimationFrame(() => document.body.classList.add('ready'));
    });

    return {
        getCart, setCart, clearCart,
        commitCheckout, getStats, resetStats, renderStats,
        fadeNavigate,
    };
})();
