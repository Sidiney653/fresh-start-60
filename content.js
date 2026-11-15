const hoy = new Date().toLocaleDateString('es');
export const content = {
  offerBar: `OFERTA ESPECIAL DISPONIBLE SOLO HOY ${hoy}`,
  hero: {
    badge: 'INGLÉS MAPEADO — GUÍA VISUAL DE 60 PÁGINAS',
    titleBefore: 'Aprende y repasa inglés con ',
    titleEmphasis: 'mapas mentales',
    titleAfter: '',
    subtitle: [
      ['Fundamentos, gramática, vocabulario y situaciones cotidianas con '],
      ['explicaciones ilustradas, ejemplos en español y ejercicios prácticos', true],
      ['.']
    ],
    bullets: [
      'Entiende cada tema en una sola página, sin explicaciones largas.',
      'Ve la estructura, el ejemplo y la traducción al mismo tiempo.',
      'Cada página trae un ejercicio con respuestas: practicas y te corriges sin profesor.'
    ],
    amplitude: 'Desde los pronombres y el verbo To Be hasta viajes, trabajo y salud: consulta en el celular, la computadora o impreso.'
  },
  pain: {
    title: 'Aprender inglés',
    emphasis: 'no tiene que ser complicado.',
    bridge: [
      ['Quien avanza con el inglés estudia con '],
      ['temas organizados, ejemplos claros y práctica constante.', true]
    ]
  },
  pains: [
    'Explicaciones confusas',
    'Mucha teoría y poca práctica',
    'Olvidas lo que estudiaste',
    'Poco tiempo para estudiar',
    'No sabes por dónde empezar',
    'Material desorganizado'
  ],
  mechanism: [
    ['Observa', 'Comprende el tema de forma visual, en un mapa.'],
    ['Lee', 'Consulta los ejemplos en inglés con la traducción al español.'],
    ['Practica y corrige', 'Haz el ejercicio de la página y confirma tus respuestas al instante.'],
    ['Repasa', 'Vuelve al mapa para reforzar lo aprendido.']
  ],
  mechanismClose: 'Observa, lee, practica y repasa: cada tema en una página.',
  gallery: [[new URL('./pagina-01.webp', import.meta.url).href, 'Página 1'],[new URL('./pagina-02.webp', import.meta.url).href, 'Página 2'],[new URL('./pagina-03.webp', import.meta.url).href, 'Página 3'],[new URL('./pagina-04.webp', import.meta.url).href, 'Página 4'],[new URL('./pagina-05.webp', import.meta.url).href, 'Página 5'],[new URL('./pagina-06.webp', import.meta.url).href, 'Página 6'],[new URL('./pagina-07.webp', import.meta.url).href, 'Página 7'],[new URL('./pagina-08.webp', import.meta.url).href, 'Página 8']],
  topicsSection: {
    eyebrow: 'QUÉ VAS A APRENDER',
    title: 'Todo lo que vas a dominar, tema por tema',
    lead: '57 páginas de contenido: del verbo To Be al Present Perfect, más el vocabulario que usas todos los días.'
  },
  topics: [
    ['Fundamentos', ['Pronombres personales', 'To Be: afirmativa, negativa y preguntas', 'Respuestas cortas con To Be', 'A, an y the', 'Singular y plural', 'This, that, these, those', 'Posesivos', 'Posesión con \'s', 'Have y has', 'There is y there are', 'Adjetivos', 'Números', 'Días, meses y fechas', '¿Qué hora es?']],
    ['Gramática', ['Present simple: rutinas, negativas y preguntas', 'He, she, it: la S del verbo', 'Frecuencia', 'Present continuous', '¿Rutina o ahora?', 'Contables e incontables', 'Some y any', 'Much, many y a lot of', 'A few y a little', 'Comparativos y superlativos', 'Pasado de To Be', 'Pasado: verbos regulares e irregulares', 'Past simple: negativas y preguntas', 'Futuro con going to y will', 'Present perfect']],
    ['Comunicación', ['Palabras interrogativas', 'Preposiciones de lugar', 'In, on y at en el tiempo', 'Can y can\'t', 'Imperativo: instrucciones', 'Conecta tus ideas', 'Orden de las palabras']],
    ['Vocabulario', ['Familia y relaciones', 'Verbos de la rutina', 'Dentro de casa', 'Comida y bebida', 'Ropa y colores', 'Trabajo y estudio', 'Lugares en la ciudad', 'Transporte', 'Viajes', 'Salud: pide ayuda', '¿Cómo te sientes?']]
  ],
  benefitsSection: {
    summary: 'Todas las páginas siguen la misma organización, así siempre sabes dónde encontrar la estructura, el ejemplo y el ejercicio.'
  },
  benefits: [
    '60 páginas visuales de inglés esencial.',
    'Fundamentos: pronombres, To Be, artículos, plurales, números, fechas y horas.',
    'Gramática: presente, pasado, futuro, comparativos y Present Perfect.',
    'Vocabulario: familia, casa, ropa, comida, trabajo, viajes y salud.',
    'Comunicación: preguntas, respuestas y frases cotidianas.',
    'Ejemplos en inglés con traducción al español.',
    'Cada página trae un ejercicio con respuestas: practicas y te corriges sin profesor.',
    '4 bonos de conversación, errores comunes, práctica diaria y mensajes.'
  ],
  audiences: [
    ['Estás empezando desde cero', 'Construye una base sólida con estructuras esenciales, sin explicaciones complicadas.'],
    ['Tienes poco tiempo', 'Consulta una página, repasa un tema y practica sin pasar horas estudiando.'],
    ['Aprendes mejor de forma visual', 'Esquemas, ilustraciones y ejemplos en lugar de páginas llenas de teoría.'],
    ['Ya estudiaste y olvidaste', 'Repasa cada tema rápido y recupera lo que ya sabías.'],
    ['Quieres usar el inglés en el día a día', 'Frases y vocabulario para viajes, trabajo y situaciones reales.'],
    ['Estudias solo, sin profesor', 'Cada ejercicio trae sus respuestas para que te corrijas al instante.']
  ],
  bonuses: [
    { image: new URL('./bono-1.webp', import.meta.url).href, number: 'BONO 01', title: 'Habla desde el primer día', text: 'Diálogos ilustrados para cafeterías, tiendas, restaurantes, hoteles, aeropuertos y el trabajo, con traducción al español.', gain: 'Practica conversaciones reales desde el inicio.', value: 'US$ 9' },
    { image: new URL('./bono-2.webp', import.meta.url).href, number: 'BONO 02', title: 'No caigas en estas trampas', text: 'Palabras que confunden, traducciones literales y errores frecuentes de quienes hablan español, con ejercicios y respuestas.', gain: 'Evita los errores más comunes al hablar inglés.', value: 'US$ 9' },
    { image: new URL('./bono-3.webp', import.meta.url).href, number: 'BONO 03', title: 'Reto de 21 días', text: 'Un plan de actividades breves para saber qué estudiar y cómo practicar cada día, siguiendo tu progreso.', gain: 'Convierte el aprendizaje en un hábito diario.', value: 'US$ 9' },
    { image: new URL('./bono-4.webp', import.meta.url).href, number: 'BONO 04', title: 'Mensajes listos en inglés', text: 'Modelos para WhatsApp, correo electrónico y situaciones profesionales: presentarte, pedir información, confirmar citas y más.', gain: 'Escribe en inglés con seguridad en situaciones reales.', value: 'US$ 9' }
  ],
  offer: { noTrick: 'Pago único. Sin mensualidad. Sin suscripción.' },
  included: [
    'Inglés Mapeado: 60 páginas visuales',
    'Ejemplos en inglés con traducción al español',
    'Ejercicios con respuestas en cada página',
    'Consulta en el celular, la computadora o impreso',
    'Habla desde el primer día',
    'No caigas en estas trampas',
    'Reto de 21 días',
    'Mensajes listos en inglés'
  ],
  faqs: [
    ['¿Necesito saber inglés para utilizarlo?', 'No. El material comienza con los fundamentos y avanza por estructuras, vocabulario y situaciones de uso.'],
    ['¿El material está en español?', 'Sí. Las explicaciones y el contenido de apoyo están pensados para quienes hablan español y aprenden inglés.'],
    ['¿Es un curso en video?', 'No. Inglés Mapeado es un material digital visual con explicaciones, ejemplos y ejercicios.'],
    ['¿Cómo sé si respondí bien los ejercicios?', 'Cada página trae las respuestas del ejercicio. Practicas y te corriges solo, sin necesidad de profesor.'],
    ['¿Puedo estudiar desde el celular?', 'Sí. Puedes abrirlo en el celular, la computadora o imprimirlo.'],
    ['¿Los bonos están incluidos?', 'Sí. Con el kit completo recibes Inglés Mapeado y los cuatro bonos.'],
    ['¿El pago es mensual?', 'No. Es un único pago, con acceso de por vida.'],
    ['¿Cómo recibo el material?', 'Después de la confirmación del pago, recibirás en tu correo las instrucciones de acceso.'],
    ['¿Tengo garantía?', 'Sí. Tienes 7 días de garantía. Si el material no cumple tus expectativas, puedes solicitar el reembolso.']
  ],
  closing: {
    eyebrow: 'TU INGLÉS ESTÁ A UN CLIC',
    titleBefore: 'Aprende y repasa inglés con ',
    titleEmphasis: 'mapas mentales',
    titleAfter: ''
  }
};
