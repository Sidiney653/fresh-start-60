// CARROSSEL DE MAPAS

const slides = [...document.querySelectorAll('.preview')];
const dots = [...document.querySelectorAll('.dots button')];

let current = 0;

function showSlide(n) {
  current = (n + slides.length) % slides.length;

  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === current);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('on', i === current);
  });
}

document.querySelector('.prev')
  .addEventListener('click', () => showSlide(current - 1));

document.querySelector('.next')
  .addEventListener('click', () => showSlide(current + 1));

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => showSlide(i));
});

// CARROSSEL AUTOMATICO
setInterval(() => {
  showSlide(current + 1);
}, 4500);

// ABAS DE CONTEUDO

const topics = [
  {
    title: 'Fundamentos do inglês',
    desc: 'Uma base visual para estudar conceitos essenciais.',
    items: [
      'Pronomes e artigos',
      'Verbo To Be',
      'Estrutura de frases',
      'Perguntas e respostas simples'
    ]
  },
  {
    title: 'Gramática essencial',
    desc: 'Revisões para compreender a construção das frases.',
    items: [
      'Simple Present',
      'Simple Past',
      'Formas negativas',
      'Perguntas comuns'
    ]
  },
  {
    title: 'Vocabulário do dia a dia',
    desc: 'Palavras e expressões organizadas por contexto.',
    items: [
      'Família e rotina',
      'Comidas e bebidas',
      'Trabalho e estudos',
      'Viagens e lugares'
    ]
  },
  {
    title: 'Conversação prática',
    desc: 'Tópicos para começar a formar frases e se expressar.',
    items: [
      'Saudações',
      'Apresentações',
      'Perguntas úteis',
      'Situações cotidianas'
    ]
  }
];

document.querySelectorAll('.topic').forEach((button, i) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.topic').forEach((item) => {
      item.classList.remove('selected');
    });

    button.classList.add('selected');

    const topic = topics[i];

    document.getElementById('topic-panel').innerHTML = `
      <h3>${topic.title}</h3>
      <p>${topic.desc}</p>
      <ul>
        ${topic.items.map(item => `<li>${item}</li>`).join('')}
      </ul>
    `;
  });
});

// CHECKOUT
// Coloque aqui o link real do seu checkout.

const CHECKOUT_URL = '';

const checkout = document.getElementById('checkout-btn');

if (CHECKOUT_URL) {
  checkout.href = CHECKOUT_URL;
  checkout.removeAttribute('aria-disabled');
  checkout.textContent = 'QUERO ADQUIRIR AGORA →';
} else {
  checkout.addEventListener('click', (event) => {
    event.preventDefault();
  });
}
