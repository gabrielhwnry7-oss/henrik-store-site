const WHATSAPP_NUMBER = "5531998929423";

const img = p => p;

const products = [
  {id:1,name:'Película Transformação',model:'iPhone 13 Pro Max',price:24.90,stock:1,category:'peliculas iphone',image:'referencia_capinha_09.jpg'},
  {id:2,name:'Película Transformação',model:'iPhone 14 Pro / 15 Pro',price:24.90,stock:3,category:'peliculas iphone',image:'referencia_capinha_09.jpg'},
  {id:3,name:'Película Transformação',model:'iPhone 14 Pro Max / 15 Pro Max',price:24.90,stock:2,category:'peliculas iphone',image:'referencia_capinha_09.jpg'},

  {id:4,name:'Película Traseira Cerâmica',model:'iPhone 15',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_05.jpg'},
  {id:5,name:'Película Traseira Cerâmica',model:'iPhone 15 Pro Max',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_05.jpg'},
  {id:6,name:'Película Traseira Cerâmica',model:'iPhone 16',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_05.jpg'},
  {id:7,name:'Película Traseira Cerâmica',model:'iPhone 16 Pro Max',price:9.90,stock:3,category:'peliculas iphone',image:'referencia_pelicula_05.jpg'},
  {id:8,name:'Película Traseira Cerâmica',model:'iPhone 17',price:9.90,stock:4,category:'peliculas iphone',image:'referencia_pelicula_05.jpg'},
  {id:9,name:'Película Traseira Cerâmica',model:'iPhone 17 Pro Max',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_05.jpg'},

  {id:10,name:'Película Câmera de Vidro',model:'iPhone 13 Pro / Pro Max',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_08.jpg'},
  {id:11,name:'Película Câmera de Vidro',model:'iPhone 14 Pro / Pro Max',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_08.jpg'},
  {id:12,name:'Película Câmera de Vidro',model:'iPhone 15 Pro / Pro Max',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_08.jpg'},
  {id:13,name:'Película Câmera de Vidro',model:'iPhone 16 / 17',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_08.jpg'},
  {id:14,name:'Película Câmera de Vidro',model:'iPhone 17 Pro Max',price:9.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_08.jpg'},

  {id:15,name:'Película Privacidade Cerâmica',model:'iPhone 13 Pro Max',price:14.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_04.jpg'},
  {id:16,name:'Película Privacidade Cerâmica',model:'iPhone 14 Pro Max',price:14.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_04.jpg'},
  {id:17,name:'Película Privacidade Cerâmica',model:'iPhone 15',price:14.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_04.jpg'},
  {id:18,name:'Película Privacidade Cerâmica',model:'iPhone 15 Pro Max',price:14.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_04.jpg'},
  {id:19,name:'Película Privacidade Cerâmica',model:'iPhone 16',price:14.90,stock:3,category:'peliculas iphone',image:'referencia_pelicula_04.jpg'},
  {id:20,name:'Película Privacidade Cerâmica',model:'iPhone 16 Pro Max',price:14.90,stock:3,category:'peliculas iphone',image:'referencia_pelicula_04.jpg'},
  {id:21,name:'Película Privacidade Cerâmica',model:'iPhone 17',price:14.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_04.jpg'},
  {id:22,name:'Película Privacidade Cerâmica',model:'iPhone 17 Pro Max',price:14.90,stock:2,category:'peliculas iphone',image:'referencia_pelicula_04.jpg'},

  {id:23,name:'Película Xiaomi',model:'Poco X8 Pro Max',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_01.jpg'},
  {id:24,name:'Película Xiaomi',model:'Redmi 10C / 12C / A3 / Poco C55 / C40',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_01.jpg'},
  {id:25,name:'Película Xiaomi',model:'Redmi Note 10/10S/11/11S/12S/Poco M5s/M4 Pro',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_01.jpg'},

  {id:26,name:'Película Vidro',model:'Poco M7',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_03.jpg'},
  {id:27,name:'Película Vidro',model:'Poco X7 Pro',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_03.jpg'},
  {id:28,name:'Película Vidro',model:'Poco X8 Pro',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_03.jpg'},
  {id:29,name:'Película Vidro',model:'Redmi A5',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_03.jpg'},
  {id:30,name:'Película Vidro',model:'Redmi Note 13',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_03.jpg'},
  {id:31,name:'Película Vidro',model:'Redmi Note 14',price:9.90,stock:2,category:'peliculas xiaomi',image:'referencia_pelicula_03.jpg'},

  {id:32,name:'Película Vidro',model:'Moto G55',price:9.90,stock:2,category:'peliculas motorola',image:'referencia_pelicula_06.jpg'},
  {id:33,name:'Película Vidro',model:'Moto G75',price:9.90,stock:2,category:'peliculas motorola',image:'referencia_pelicula_06.jpg'},

  {id:34,name:'Capinha Antishock',model:'iPhone',price:9.90,stock:33,category:'capinhas iphone',image:'referencia_capinha_02.jpg'},

  {id:35,name:'Capinha MagSafe',model:'iPhone 13 Pro Max',price:19.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:36,name:'Capinha MagSafe',model:'iPhone 14',price:19.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:37,name:'Capinha MagSafe',model:'iPhone 14 Pro Max',price:19.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:38,name:'Capinha MagSafe',model:'iPhone 15',price:19.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:39,name:'Capinha MagSafe',model:'iPhone 15 Pro Max',price:19.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:40,name:'Capinha MagSafe',model:'iPhone 16',price:21.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:41,name:'Capinha MagSafe',model:'iPhone 16 Pro Max',price:21.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:42,name:'Capinha MagSafe',model:'iPhone 17',price:24.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:43,name:'Capinha MagSafe',model:'iPhone 17 Pro Max',price:24.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
  {id:44,name:'Capinha MagSafe',model:'iPhone 18 Pro Max',price:29.90,stock:2,category:'capinhas iphone',image:'referencia_capinha_03.jpg'},
    {id:45,name:'Capinha Silicone',model:'iPhone 13',price:19.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:46,name:'Capinha Silicone',model:'iPhone 13 Pro Max',price:19.90,stock:2,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:47,name:'Capinha Silicone',model:'iPhone 14',price:19.90,stock:2,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:48,name:'Capinha Silicone',model:'iPhone 14 Pro Max',price:19.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:49,name:'Capinha Silicone',model:'iPhone 15',price:19.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:50,name:'Capinha Silicone',model:'iPhone 15 Pro Max',price:19.90,stock:2,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:51,name:'Capinha Silicone',model:'iPhone 16',price:21.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:52,name:'Capinha Silicone',model:'iPhone 16 Pro Max',price:21.90,stock:2,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:53,name:'Capinha Silicone',model:'iPhone 17',price:24.90,stock:2,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},
  {id:54,name:'Capinha Silicone',model:'iPhone 17 Pro Max',price:24.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_05.jpg'},

  {id:55,name:'Capinha Silicone Laranja',model:'iPhone 17 Pro Max',price:29.90,stock:3,category:'capinhas iphone',image:'referencia_capinha_06.jpg'},

  {id:56,name:'Capinha Silicone',model:'Galaxy A26',price:14.90,stock:2,category:'capinhas samsung',image:'referencia_capinha_01.jpg'},
  {id:57,name:'Capinha Silicone',model:'Galaxy A56',price:14.90,stock:2,category:'capinhas samsung',image:'referencia_capinha_01.jpg'},
  {id:58,name:'Capinha Silicone',model:'Galaxy S25',price:17.90,stock:2,category:'capinhas samsung',image:'referencia_capinha_01.jpg'},

  {id:59,name:'Capinha Antishock',model:'Motorola',price:9.90,stock:33,category:'capinhas motorola',image:'referencia_capinha_07.jpg'},
  {id:60,name:'Capinha Antishock',model:'Xiaomi',price:9.90,stock:33,category:'capinhas xiaomi',image:'referencia_capinha_08.jpg'}
];

let cart = JSON.parse(localStorage.getItem('henrikCart')) || [];
let activeFilter = 'todos';
let searchTerm = '';

function formatPrice(value) {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
}

function saveCart() {
  localStorage.setItem('henrikCart', JSON.stringify(cart));
}

function getFilteredProducts() {
  return products.filter(p => {
    const matchesFilter =
      activeFilter === 'todos' ||
      p.category.includes(activeFilter);

    const text =
      `${p.name} ${p.model} ${p.category}`.toLowerCase();

    const matchesSearch =
      text.includes(searchTerm.toLowerCase());

    return matchesFilter && matchesSearch;
  });
}

function renderProducts() {
  const container =
    document.querySelector('#products') ||
    document.querySelector('.products') ||
    document.querySelector('#productGrid');

  if (!container) return;

  const filtered = getFilteredProducts();

  container.innerHTML = filtered.map(p => `
    <article class="product-card">
      <div class="product-image">
        <img src="${img(p.image)}" alt="${p.name} ${p.model}" loading="lazy">
      </div>

      <div class="product-info">
        <h3>${p.name}</h3>
        <p class="model">${p.model}</p>
        <p class="price">${formatPrice(p.price)}</p>
        <p class="stock">Estoque: ${p.stock}</p>

        <button
          class="add-to-cart"
          onclick="addToCart(${p.id})"
          ${p.stock <= 0 ? 'disabled' : ''}
        >
          ${p.stock > 0 ? 'Adicionar ao carrinho' : 'Sem estoque'}
        </button>
      </div>
    </article>
  `).join('');

  const count =
    document.querySelector('#productCount') ||
    document.querySelector('.product-count');

  if (count) {
    count.textContent = `${filtered.length} produtos`;
  }
}

function addToCart(id) {
  const product = products.find(p => p.id === id);

  if (!product || product.stock <= 0) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    if (existing.quantity >= product.stock) {
      alert('Quantidade máxima disponível em estoque.');
      return;
    }

    existing.quantity++;
  } else {
    cart.push({
      id: product.id,
      quantity: 1
    });
  }

  saveCart();
  renderCart();
  updateCartCount();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  saveCart();
  renderCart();
  updateCartCount();
}

function changeQuantity(id, change) {
  const item = cart.find(i => i.id === id);
  const product = products.find(p => p.id === id);

  if (!item || !product) return;

  item.quantity += change;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  if (item.quantity > product.stock) {
    item.quantity = product.stock;
    alert('Quantidade máxima disponível em estoque.');
  }

  saveCart();
  renderCart();
  updateCartCount();
}

function getCartTotal() {
  return cart.reduce((total, item) => {
    const product = products.find(p => p.id === item.id);

    if (!product) return total;

    return total + product.price * item.quantity;
  }, 0);
}

function updateCartCount() {
  const count = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const elements = document.querySelectorAll(
    '#cartCount, .cart-count, [data-cart-count]'
  );

  elements.forEach(el => {
    el.textContent = count;
  });
}function renderCart() {
  const container =
    document.querySelector('#cartItems') ||
    document.querySelector('.cart-items');

  const totalElement =
    document.querySelector('#cartTotal') ||
    document.querySelector('.cart-total');

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <p>Seu carrinho está vazio.</p>
      </div>
    `;

    if (totalElement) {
      totalElement.textContent = formatPrice(0);
    }

    return;
  }

  container.innerHTML = cart.map(item => {
    const product = products.find(p => p.id === item.id);

    if (!product) return '';

    const subtotal = product.price * item.quantity;

    return `
      <div class="cart-item">
        <img
          src="${img(product.image)}"
          alt="${product.name}"
        >

        <div class="cart-item-info">
          <h4>${product.name}</h4>
          <p>${product.model}</p>
          <strong>${formatPrice(product.price)}</strong>

          <div class="quantity-controls">
            <button onclick="changeQuantity(${product.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${product.id}, 1)">+</button>
          </div>
        </div>

        <div class="cart-item-right">
          <strong>${formatPrice(subtotal)}</strong>
          <button
            class="remove-item"
            onclick="removeFromCart(${product.id})"
          >
            Remover
          </button>
        </div>
      </div>
    `;
  }).join('');

  if (totalElement) {
    totalElement.textContent = formatPrice(getCartTotal());
  }
}

function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert('Seu carrinho está vazio.');
    return;
  }

  let message = 'Olá! Quero fazer um pedido na Henrik Store.%0A%0A';

  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);

    if (!product) return;

    const subtotal = product.price * item.quantity;

    message +=
      `• ${product.name} - ${product.model}%0A` +
      `  Quantidade: ${item.quantity}%0A` +
      `  Valor: ${formatPrice(subtotal)}%0A%0A`;
  });

  message += `Total: ${formatPrice(getCartTotal())}%0A%0A`;
  message += 'Aguardo informações para finalizar o pedido.';

  const url =
    `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

  window.open(url, '_blank');
}

function setupFilters() {
  const buttons = document.querySelectorAll(
    '[data-filter], .filter-btn, .category-btn'
  );

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const filter =
        button.dataset.filter ||
        button.dataset.category ||
        button.getAttribute('data-category');

      if (!filter) return;

      activeFilter = filter.toLowerCase();

      buttons.forEach(btn => {
        btn.classList.remove('active');
      });

      button.classList.add('active');

      renderProducts();
    });
  });
}

function setupSearch() {
  const search =
    document.querySelector('#search') ||
    document.querySelector('#searchInput') ||
    document.querySelector('.search-input');

  if (!search) return;

  search.addEventListener('input', event => {
    searchTerm = event.target.value;
    renderProducts();
  });
}

function setupCartButtons() {
  const openButtons = document.querySelectorAll(
    '#openCart, .open-cart, [data-open-cart]'
  );

  const closeButtons = document.querySelectorAll(
    '#closeCart, .close-cart, [data-close-cart]'
  );

  const cartElement =
    document.querySelector('#cart') ||
    document.querySelector('.cart-sidebar') ||
    document.querySelector('.cart-modal');

  openButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (cartElement) {
        cartElement.classList.add('open');
      }
    });
  });

  closeButtons.forEach(button => {
    button.addEventListener('click', () => {
      if (cartElement) {
        cartElement.classList.remove('open');
      }
    });
  });
}

function setupCheckout() {
  const buttons = document.querySelectorAll(
    '#checkoutWhatsApp, .checkout-whatsapp, [data-checkout]'
  );

  buttons.forEach(button => {
    button.addEventListener('click', checkoutWhatsApp);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  renderCart();
  updateCartCount();
  setupFilters();
  setupSearch();
  setupCartButtons();
  setupCheckout();
});
