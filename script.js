const WHATSAPP_NUMBER = "5531998929423";

const money = n => n.toLocaleString('pt-BR', {
  style: 'currency',
  currency: 'BRL'
});

// As imagens estão na raiz do GitHub.
// Remove "PELICULAS/" ou "CAPINHAS/" quando existir.
const img = p => p.split('/').pop();

const products = [

  // PELÍCULAS TRANSFORMAÇÃO
  {
    id: 1,
    name: 'Película Transformação',
    model: 'iPhone 13 Pro Max',
    price: 24.90,
    stock: 1,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_02.jpg'
  },
  {
    id: 2,
    name: 'Película Transformação',
    model: 'iPhone 14 Pro / 15 Pro',
    price: 24.90,
    stock: 3,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_02.jpg'
  },
  {
    id: 3,
    name: 'Película Transformação',
    model: 'iPhone 14 Pro Max / 15 Pro Max',
    price: 24.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_02.jpg'
  },

  // PELÍCULA TRASEIRA CERÂMICA
  {
    id: 4,
    name: 'Película Traseira Cerâmica',
    model: 'iPhone 15',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_05.jpg'
  },
  {
    id: 5,
    name: 'Película Traseira Cerâmica',
    model: 'iPhone 15 Pro Max',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_05.jpg'
  },
  {
    id: 6,
    name: 'Película Traseira Cerâmica',
    model: 'iPhone 16',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_05.jpg'
  },
  {
    id: 7,
    name: 'Película Traseira Cerâmica',
    model: 'iPhone 16 Pro Max',
    price: 9.90,
    stock: 3,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_05.jpg'
  },
  {
    id: 8,
    name: 'Película Traseira Cerâmica',
    model: 'iPhone 17',
    price: 9.90,
    stock: 4,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_05.jpg'
  },
  {
    id: 9,
    name: 'Película Traseira Cerâmica',
    model: 'iPhone 17 Pro Max',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_05.jpg'
  },

  // PELÍCULA CÂMERA
  {
    id: 10,
    name: 'Película Câmera de Vidro',
    model: 'iPhone 13 Pro / Pro Max',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_07.jpg'
  },
  {
    id: 11,
    name: 'Película Câmera de Vidro',
    model: 'iPhone 14 Pro / Pro Max',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_07.jpg'
  },
  {
    id: 12,
    name: 'Película Câmera de Vidro',
    model: 'iPhone 15 Pro / Pro Max',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_07.jpg'
  },
  {
    id: 13,
    name: 'Película Câmera de Vidro',
    model: 'iPhone 16 / 17',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_07.jpg'
  },
  {
    id: 14,
    name: 'Película Câmera de Vidro',
    model: 'iPhone 17 Pro Max',
    price: 9.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_07.jpg'
  },

  // PRIVACIDADE
  {
    id: 15,
    name: 'Película Privacidade Cerâmica',
    model: 'iPhone 13 Pro Max',
    price: 14.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_04.jpg'
  },
  {
    id: 16,
    name: 'Película Privacidade Cerâmica',
    model: 'iPhone 14 Pro Max',
    price: 14.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_04.jpg'
  },
  {
    id: 17,
    name: 'Película Privacidade Cerâmica',
    model: 'iPhone 15',
    price: 14.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_04.jpg'
  },
  {
    id: 18,
    name: 'Película Privacidade Cerâmica',
    model: 'iPhone 15 Pro Max',
    price: 14.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_04.jpg'
  },
  {
    id: 19,
    name: 'Película Privacidade Cerâmica',
    model: 'iPhone 16',
    price: 14.90,
    stock: 3,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_04.jpg'
  },
  {
    id: 20,
    name: 'Película Privacidade Cerâmica',
    model: 'iPhone 16 Pro Max',
    price: 14.90,
    stock: 3,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_04.jpg'
  },
  {
    id: 21,
    name: 'Película Privacidade Cerâmica',
    model: 'iPhone 17',
    price: 14.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_04.jpg'
  },
  {
    id: 22,
    name: 'Película Privacidade Cerâmica',
    model: 'iPhone 17 Pro Max',
    price: 14.90,
    stock: 2,
    category: 'peliculas iphone',
    image: 'PELICULAS/referencia_pelicula_04.jpg'
  },

  // XIAOMI
  {
    id: 23,
    name: 'Película Xiaomi',
    model: 'Poco X8 Pro Max',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_01.jpg'
  },
  {
    id: 24,
    name: 'Película Xiaomi',
    model: 'Redmi 10C / 12C / A3 / Poco C55 / C40',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_01.jpg'
  },
  {
    id: 25,
    name: 'Película Xiaomi',
    model: 'Redmi Note 10/10S/11/11S/12S/Poco M5s/M4 Pro',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_01.jpg'
  },

  // PELÍCULA VIDRO XIAOMI
  {
    id: 26,
    name: 'Película Vidro',
    model: 'Poco M7',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_03.jpg'
  },
  {
    id: 27,
    name: 'Película Vidro',
    model: 'Poco X7 Pro',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_03.jpg'
  },
  {
    id: 28,
    name: 'Película Vidro',
    model: 'Poco X8 Pro',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_03.jpg'
  },
  {
    id: 29,
    name: 'Película Vidro',
    model: 'Redmi A5',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_03.jpg'
  },
  {
    id: 30,
    name: 'Película Vidro',
    model: 'Redmi Note 13',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_03.jpg'
  },
  {
    id: 31,
    name: 'Película Vidro',
    model: 'Redmi Note 14',
    price: 9.90,
    stock: 2,
    category: 'peliculas xiaomi',
    image: 'PELICULAS/referencia_pelicula_03.jpg'
  },

  // PELÍCULA VIDRO MOTOROLA
  {
    id: 32,
    name: 'Película Vidro',
    model: 'Moto G55',
    price: 9.90,
    stock: 2,
    category: 'peliculas motorola',
    image: 'PELICULAS/referencia_pelicula_06.jpg'
  },
  {
    id: 33,
    name: 'Película Vidro',
    model: 'Moto G75',
    price: 9.90,
    stock: 2,
    category: 'peliculas motorola',
    image: 'PELICULAS/referencia_pelicula_06.jpg'
  },

  // CAPINHA ANTISHOCK
  {
    id: 34,
    name: 'Capinha Antishock',
    model: 'Diversos modelos',
    price: 9.90,
    stock: 100,
    category: 'capinhas',
    image: 'CAPINHAS/referencia_capinha_04.jpg'
  },

  // MAGSAFE
  {
    id: 35,
    name: 'Capinha MagSafe',
    model: 'iPhone 13 Pro Max',
    price: 19.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 36,
    name: 'Capinha MagSafe',
    model: 'iPhone 14',
    price: 19.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 37,
    name: 'Capinha MagSafe',
    model: 'iPhone 14 Pro Max',
    price: 19.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 38,
    name: 'Capinha MagSafe',
    model: 'iPhone 15',
    price: 19.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 39,
    name: 'Capinha MagSafe',
    model: 'iPhone 15 Pro Max',
    price: 19.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 40,
    name: 'Capinha MagSafe',
    model: 'iPhone 16',
    price: 21.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 41,
    name: 'Capinha MagSafe',
    model: 'iPhone 16 Pro Max',
    price: 21.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 42,
    name: 'Capinha MagSafe',
    model: 'iPhone 17',
    price: 24.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 43,
    name: 'Capinha MagSafe',
    model: 'iPhone 17 Pro Max',
    price: 24.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },
  {
    id: 44,
    name: 'Capinha MagSafe',
    model: 'iPhone 18 Pro Max',
    price: 29.90,
    stock: 2,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_03.jpg'
  },

  // SILICONE
  {
    id: 45,
    name: 'Capinha Silicone',
    model: 'iPhone 13',
    price: 19.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 46,
    name: 'Capinha Silicone',
    model: 'iPhone 13 Pro Max',
    price: 19.90,
    stock: 2,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 47,
    name: 'Capinha Silicone',
    model: 'iPhone 14',
    price: 19.90,
    stock: 2,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 48,
    name: 'Capinha Silicone',
    model: 'iPhone 14 Pro Max',
    price: 19.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 49,
    name: 'Capinha Silicone',
    model: 'iPhone 15',
    price: 19.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 50,
    name: 'Capinha Silicone',
    model: 'iPhone 15 Pro Max',
    price: 19.90,
    stock: 2,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 51,
    name: 'Capinha Silicone',
    model: 'iPhone 16',
    price: 21.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 52,
    name: 'Capinha Silicone',
    model: 'iPhone 16 Pro Max',
    price: 21.90,
    stock: 2,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 53,
    name: 'Capinha Silicone',
    model: 'iPhone 17',
    price: 24.90,
    stock: 2,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },
  {
    id: 54,
    name: 'Capinha Silicone',
    model: 'iPhone 17 Pro Max',
    price: 24.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_05.jpg'
  },

  // SILICONE LARANJA
  {
    id: 55,
    name: 'Capinha Silicone Laranja',
    model: 'iPhone 17 Pro Max',
    price: 29.90,
    stock: 3,
    category: 'capinhas iphone',
    image: 'CAPINHAS/referencia_capinha_06.jpg'
  },

  // SAMSUNG
  {
    id: 56,
    name: 'Capinha Silicone',
    model: 'Galaxy A26',
    price: 14.90,
    stock: 2,
    category: 'capinhas samsung',
    image: 'CAPINHAS/referencia_capinha_01.jpg'
  },
  {
    id: 57,
    name: 'Capinha Silicone',
    model: 'Galaxy A56',
    price: 14.90,
    stock: 2,
    category: 'capinhas samsung',
    image: 'CAPINHAS/referencia_capinha_01.jpg'
  },
  {
    id: 58,
    name: 'Capinha Silicone',
    model: 'Galaxy S25',
    price: 17.90,
    stock: 2,
    category: 'capinhas samsung',
    image: 'CAPINHAS/referencia_capinha_01.jpg'
  }

];

let cart = JSON.parse(localStorage.getItem('henrikCart') || '[]');

let activeFilter = 'todos';

const grid = document.getElementById('productGrid');
const search = document.getElementById('search');

function save() {
  localStorage.setItem('henrikCart', JSON.stringify(cart));
  renderCart();
}

function filtered() {
  const q = search.value.trim().toLowerCase();

  return products.filter(p =>
    (activeFilter === 'todos' || p.category.includes(activeFilter)) &&
    (!q || (p.name + ' ' + p.model).toLowerCase().includes(q))
  );
}

function render() {

  const list = filtered();

  document.getElementById('resultCount').textContent =
    `${list.length} ${list.length === 1 ? 'produto' : 'produtos'}`;

  grid.innerHTML = list.map(p => `

    <article class="product">

      <div class="photo">

        <span class="tag">
          ${p.stock > 0 ? 'DISPONÍVEL' : 'ESGOTADO'}
        </span>

        <img
          src="${img(p.image)}"
          alt="${p.name} ${p.model}"
          loading="lazy"
        >

      </div>

      <div class="product-body">

        <h3>${p.name}</h3>

        <div class="model">
          ${p.model}
        </div>

        <div class="price">
          ${money(p.price)}
        </div>

        <div class="stock">
          ${p.stock}
          ${p.stock === 1 ? 'unidade disponível' : 'unidades disponíveis'}
        </div>

        <div class="actions">

          <button
            class="add"
            onclick="add(${p.id})"
          >
            Adicionar
          </button>

          <button
            class="details"
            onclick="details(${p.id})"
          >
            Detalhes
          </button>

        </div>

      </div>

    </article>

  `).join('') || `
    <div class="empty">
      Nenhum produto encontrado.
    </div>
  `;
}

function add(id) {

  const p = products.find(x => x.id === id);

  const item = cart.find(x => x.id === id);

  if (item) {

    if (item.qty < p.stock) {
      item.qty++;
    }

  } else {

    cart.push({
      id,
      qty: 1
    });

  }

  save();

  openCart();
}

function change(id, d) {

  const item = cart.find(x => x.id === id);

  const p = products.find(x => x.id === id);

  if (!item) return;

  item.qty += d;

  if (item.qty <= 0) {

    cart = cart.filter(x => x.id !== id);

  } else if (item.qty > p.stock) {

    item.qty = p.stock;

  }

  save();
}

function renderCart() {

  const box = document.getElementById('cartItems');

  let total = 0;

  let count = 0;

  if (!cart.length) {

    box.innerHTML = `
      <div class="empty">
        Seu carrinho está vazio.
        <br>
        Adicione produtos para montar seu pedido.
      </div>
    `;

  } else {

    box.innerHTML = cart.map(i => {

      const p = products.find(x => x.id === i.id);

      total += p.price * i.qty;

      count += i.qty;

      return `

        <div class="cart-item">

          <img
            src="${img(p.image)}"
            alt=""
          >

          <div>

            <h4>${p.name}</h4>

            <small>${p.model}</small>

            <div class="qty">

              <button onclick="change(${p.id},-1)">
                −
              </button>

              <b>${i.qty}</b>

              <button onclick="change(${p.id},1)">
                +
              </button>

            </div>

          </div>

          <div>

            <b>
              ${money(p.price * i.qty)}
            </b>

            <button
              class="remove"
              onclick="change(${p.id},-${i.qty})"
            >
              remover
            </button>

          </div>

        </div>

      `;

    }).join('');

  }

  document.getElementById('cartTotal').textContent = money(total);

  document.getElementById('cartCount').textContent = count;
}

function openCart() {

  document
    .getElementById('cart')
    .classList.add('open');

  document
    .getElementById('overlay')
    .classList.add('show');
}

function closeCart() {

  document
    .getElementById('cart')
    .classList.remove('open');

  document
    .getElementById('overlay')
    .classList.remove('show');
}

function details(id) {

  const p = products.find(x => x.id === id);

  document.getElementById('modalContent').innerHTML = `

    <div class="modal-content">

      <img
        class="modal-img"
        src="${img(p.image)}"
        alt="${p.name} ${p.model}"
      >

      <h2>
        ${p.name}
      </h2>

      <div class="model-list">

        <strong>Modelo:</strong>
        ${p.model}

        <br>

        <strong>Disponibilidade:</strong>
        ${p.stock} unidade(s)

      </div>

      <div class="modal-price">
        ${money(p.price)}
      </div>

      <button
        class="whatsapp-button"
        onclick="
          add(${p.id});
          document.getElementById('productModal').classList.remove('show')
        "
      >
        Adicionar ao carrinho
      </button>

    </div>

  `;

  document
    .getElementById('productModal')
    .classList.add('show');
}

document
  .querySelectorAll('.filter')
  .forEach(b => {

    b.onclick = () => {

      document
        .querySelectorAll('.filter')
        .forEach(x => x.classList.remove('active'));

      b.classList.add('active');

      activeFilter = b.dataset.filter;

      render();

    };

  });

search.addEventListener('input', render);

document
  .getElementById('openCart')
  .onclick = openCart;

document
  .getElementById('closeCart')
  .onclick = closeCart;

document
  .getElementById('overlay')
  .onclick = closeCart;

document
  .getElementById('closeModal')
  .onclick = () =>
    document
      .getElementById('productModal')
      .classList.remove('show');

document
  .getElementById('clearCart')
  .onclick = () => {

    cart = [];

    save();

  };

document
  .getElementById('checkout')
  .onclick = () => {

    if (!cart.length) {

      alert(
        'Adicione pelo menos um produto ao carrinho.'
      );

      return;

    }

    let total = 0;

    const lines = cart.map(i => {

      const p = products.find(x => x.id === i.id);

      total += p.price * i.qty;

      return `• ${i.qty}x ${p.name} — ${p.model} — ${money(p.price * i.qty)}`;

    });

    const text = `
Olá! Quero fazer um pedido na Henrik Store:

${lines.join('\n')}

Total: ${money(total)}

Aguardo confirmação da disponibilidade.
`;

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`,
      '_blank'
    );

  };

render();

renderCart();
