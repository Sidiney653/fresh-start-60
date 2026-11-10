const levels = [
{code:'A1',name:'Fundação',count:'50 Mapas',full:'Fundação do Inglês',objective:'Ensinar o aluno a reconhecer palavras essenciais, montar frases curtas, fazer perguntas básicas e se comunicar em situações simples.',groups:[
['Fundamentos','Alfabeto em inglês; Soletração; Pronúncia das letras; Números de 0 a 20; Números de 20 a 100; Números grandes; Dias da semana; Meses do ano; Datas; Horas; Cores; Símbolos e sinais comuns'],
['Estruturas essenciais','Pronomes pessoais; Pronomes objeto; Adjetivos possessivos; Pronomes possessivos; Verbo To Be: afirmativo; Verbo To Be: negativo; Verbo To Be: perguntas; Contrações com To Be; Artigos A, An e The; Singular e plural; This, That, These e Those; There Is e There Are'],
['Vocabulário básico','Família; Pessoas; Profissões; Países; Nacionalidades; Partes da casa; Objetos da casa; Objetos pessoais; Comidas; Bebidas; Frutas; Animais; Partes do corpo; Roupas; Clima; Emoções; Adjetivos básicos; Verbos essenciais'],
['Comunicação','Cumprimentos; Apresentações pessoais; Perguntas com What, Where, Who e How; Frases com I Am; Frases com You Are; Frases com He, She, We e They; Frases de sobrevivência; Revisão geral A1']]},
{code:'A2',name:'Construção',count:'55 Mapas',full:'Construção de Frases',objective:'Ajudar o aluno a falar sobre rotina, preferências, habilidades, passado básico e planos.',groups:[
['Presente e rotina','Simple Present: usos; Simple Present: afirmativo; Simple Present: negativo; Simple Present: perguntas; Do e Does; Don’t e Doesn’t; Terceira pessoa com S; Advérbios de frequência; Rotina da manhã; Rotina de trabalho e estudo; Rotina da noite; Hábitos semanais'],
['Verbos e estruturas','Have e Has; Like, Love e Hate; Want e Need; Can e Can’t; Habilidades; Pedidos com Can; Imperativo; Let’s; Some e Any; Much e Many; A Lot Of; How Much e How Many; Substantivos contáveis e incontáveis; Preposições de lugar; Preposições de tempo; In, On e At'],
['Passado e futuro inicial','Simple Past com To Be; Was e Were; Verbos regulares no passado; Verbos irregulares básicos; Did e Didn’t; Perguntas no passado; Going To; Planos futuros; Will para decisões simples'],
['Vocabulário e situações','Lugares da cidade; Direções; Meios de transporte; Compras; Preços e dinheiro; Restaurante; Hotel; Aeroporto; Saúde básica; Farmácia; Hobbies; Esportes; Música e filmes'],
['Comunicação prática','Fazendo convites; Aceitando e recusando convites; Pedindo informações; Mini conversas A2; Revisão geral A2']]},
{code:'B1',name:'Independente',count:'55 Mapas',full:'Inglês Independente',objective:'Permitir que o aluno converse sobre experiências, acontecimentos, opiniões, planos e problemas cotidianos.',groups:[
['Tempos verbais','Revisão do Simple Present; Revisão do Simple Past; Present Continuous; Past Continuous; Simple Past x Past Continuous; Present Perfect: introdução; Have You Ever; Ever e Never; Already e Yet; Since e For; Present Perfect x Simple Past; Going To x Will; Present Continuous para futuro; Future Time Expressions'],
['Estruturas intermediárias','Comparativos; Superlativos; As…As; Too e Enough; Should e Shouldn’t; Must e Mustn’t; Have To e Don’t Have To; May e Might; First Conditional; Zero Conditional; Relative Pronouns Who, Which e That; Gerúndio após verbos; Infinitivo com To; Used To; Question Tags'],
['Comunicação e fluidez','Como dar opinião; Como pedir opinião; Como concordar; Como discordar educadamente; Como explicar motivos; Como contar histórias; Sequenciadores de história; Como descrever experiências; Como falar sobre problemas; Como dar conselhos; Como fazer sugestões; Como pedir esclarecimentos; Frases para ganhar tempo; Como manter uma conversa; Small Talk'],
['Vocabulário contextual','Trabalho e carreira; Educação; Tecnologia; Internet e redes sociais; Viagens e turismo; Saúde e bem-estar; Meio ambiente; Relacionamentos; Erros comuns do nível B1; Revisão geral B1']]},
{code:'B2',name:'Natural',count:'55 Mapas',full:'Inglês Natural',objective:'Desenvolver fluência, naturalidade, compreensão de textos mais complexos e comunicação profissional.',groups:[
['Gramática intermediária-avançada','Present Perfect Continuous; Past Perfect; Past Perfect Continuous; Future Continuous; Future Perfect; Tempos narrativos; Second Conditional; Third Conditional; Mixed Conditionals; Passive Voice no presente; Passive Voice no passado; Passive Voice com modais; Reported Speech; Reported Questions; Reported Commands; Gerund x Infinitive; Causative Have e Get; Wish e If Only'],
['Inglês natural','Phrasal Verbs com Get; Phrasal Verbs com Take; Phrasal Verbs com Make; Phrasal Verbs com Put; Phrasal Verbs com Look; Phrasal Verbs com Turn; Phrasal Verbs com Bring; Phrasal Verbs com Come; Collocations com Make e Do; Collocations com Take e Have; Expressões idiomáticas comuns; Linking Words; Conectores de contraste; Conectores de causa e consequência; Intensificadores; Hedging: como suavizar afirmações'],
['Comunicação avançada','Argumentando uma opinião; Apresentando vantagens e desvantagens; Especulando; Fazendo hipóteses; Persuadindo alguém; Negociando; Interrompendo educadamente; Retomando uma conversa; Explicando ideias complexas; Debates em inglês; Apresentações em inglês'],
['Inglês profissional','Reuniões; E-mails profissionais; Entrevistas de emprego; Currículo e LinkedIn; Atendimento ao cliente; Trabalho remoto; Networking; Falsos cognatos avançados; Erros comuns do nível B2; Revisão geral B2']]},
{code:'C1',name:'Avançado',count:'50 Mapas',full:'Inglês Avançado',objective:'Ensinar precisão, flexibilidade, vocabulário sofisticado e comunicação acadêmica ou profissional.',groups:[
['Estruturas avançadas','Inversão após expressões negativas; Inversão com Hardly e Barely; Cleft Sentences; Emphasis com Do; Participle Clauses; Reduced Relative Clauses; Advanced Passive Voice; Reporting Verbs; Modal Verbs no passado; Dedução no presente; Dedução no passado; Unreal Past; Advanced Conditionals; Subjunctive em inglês'],
['Precisão de vocabulário','Verbos formais; Adjetivos sofisticados; Advérbios avançados; Collocations acadêmicas; Collocations profissionais; Phrasal Verbs avançados; Idioms avançados; Binomials: safe and sound; Word Families; Prefixos avançados; Sufixos avançados; Formação de palavras; Palavras facilmente confundidas; Nuances entre sinônimos'],
['Construção de discurso','Conectores acadêmicos; Introdução de argumentos; Desenvolvimento de argumentos; Contra-argumentos; Conclusões fortes; Como reformular uma ideia; Como exemplificar; Como resumir; Como generalizar com cautela; Como expressar certeza e dúvida; Coesão textual; Coerência textual'],
['Aplicações','Escrita acadêmica; Relatórios profissionais; Propostas comerciais; Apresentações executivas; Debates avançados; Comunicação diplomática; Análise de dados em inglês; Notícias e linguagem jornalística; Erros comuns do nível C1; Revisão geral C1']]},
{code:'C2',name:'Domínio',count:'45 Mapas',full:'Domínio do Inglês',objective:'Trabalhar sutilezas, registros, persuasão, interpretação e comunicação próxima à de um usuário altamente proficiente.',groups:[
['Nuance e precisão','Diferenças sutis entre sinônimos; Conotação positiva e negativa; Linguagem literal x figurativa; Ambiguidade em inglês; Ironia; Sarcasmo; Eufemismos; Understatement; Overstatement; Implicatura; Tom e intenção; Escolha lexical precisa'],
['Estilo e registro','Inglês formal; Inglês informal; Inglês acadêmico; Inglês jornalístico; Inglês jurídico básico; Inglês corporativo; Inglês literário; Mudança de registro; Comunicação diplomática; Linguagem politicamente sensível; Linguagem inclusiva; Variações entre inglês britânico e americano'],
['Retórica e argumentação','Recursos retóricos; Persuasão avançada; Estrutura de discursos; Storytelling avançado; Analogias e metáforas; Refutação de argumentos; Falácias lógicas em inglês; Debate formal; Negociação de alto nível; Respostas diplomáticas'],
['Produção avançada','Síntese de informações; Paráfrase avançada; Resumos executivos; Crítica e avaliação; Análise de textos; Escrita persuasiva; Apresentações de alto impacto; Entrevistas complexas; Humor e jogos de palavras; Erros de alta proficiência; Revisão final C2']]}
];
const levelContainer=document.getElementById('levels');
const detail=document.getElementById('level-detail');
function renderLevel(index){
 const level=levels[index];
 document.querySelectorAll('.level-card').forEach((card,i)=>card.classList.toggle('active',i===index));
 detail.innerHTML='<h3>Nível '+level.code+' — '+level.full+' · '+level.count.toLowerCase()+'</h3><p class="level-objective"><b>Objetivo:</b> '+level.objective+'</p><div class="topic-groups">'+level.groups.map(group=>'<section class="topic-group"><h4>'+group[0]+'</h4><p>'+group[1].split('; ').join(' · ')+'</p></section>').join('')+'</div>';
}
if(levelContainer){
 levelContainer.innerHTML=levels.map((level,i)=>'<button class="level-card" type="button" data-level="'+i+'"><span class="level-code">'+level.code+'</span><b>'+level.name+'</b><small>'+level.count+'</small></button>').join('');
 levelContainer.querySelectorAll('.level-card').forEach(card=>card.addEventListener('click',()=>renderLevel(Number(card.dataset.level))));
 renderLevel(0);
}
const toast=document.getElementById('purchase-toast');
if(toast){
 const close=toast.querySelector('button');
 close?.addEventListener('click',()=>toast.classList.add('hidden'));
 window.setTimeout(()=>toast.classList.add('hidden'),6500);
}
document.querySelectorAll('a[href="#oferta"]').forEach(link=>link.addEventListener('click',()=>{if(toast)toast.classList.add('hidden')}));
const year=document.getElementById('year');
if(year)year.textContent=new Date().getFullYear();

/* Carrossel de páginas: percorre todas as imagens automaticamente e permite controle manual */
const reducedMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function activateCarouselImages(carousel){
 carousel.querySelectorAll('img').forEach(img=>{img.loading='eager';img.decoding='async';});
}
document.querySelectorAll('.preview-carousel').forEach((carousel)=>{
 const track=carousel.querySelector('.preview-track');
 const imgs=Array.from(carousel.querySelectorAll('.preview-track img'));
 const next=carousel.querySelector('.preview-next');
 const prev=carousel.querySelector('.preview-prev');
 if(!track||!imgs.length)return;
 let current=0;
 let interval=null;
 const update=()=>{track.style.transform='translate3d(-'+(current*100)+'%,0,0)'};
 const go=(step)=>{current=(current+step+imgs.length)%imgs.length;update()};
 const stop=()=>{if(interval){clearInterval(interval);interval=null}};
 const start=()=>{stop();if(!reducedMotion&&imgs.length>1&&!document.hidden)interval=setInterval(()=>go(1),3500)};
 next?.addEventListener('click',()=>{go(1);start()});
 prev?.addEventListener('click',()=>{go(-1);start()});
 carousel.addEventListener('mouseenter',stop);
 carousel.addEventListener('mouseleave',start);
 carousel.addEventListener('focusin',stop);
 carousel.addEventListener('focusout',start);
 const observer=new IntersectionObserver(entries=>{
  if(entries.some(entry=>entry.isIntersecting)){activateCarouselImages(carousel);observer.disconnect();}
 },{rootMargin:'250px'});
 observer.observe(carousel);
 start();
 document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
});

/* Carrossel de depoimentos: mostra cada imagem inteira e avança sozinho */
document.querySelectorAll('.testimonial-carousel').forEach((carousel)=>{
 const track=carousel.querySelector('.testimonial-track');
 const cards=Array.from(carousel.querySelectorAll('.testimonial-card'));
 const next=carousel.querySelector('.testimonial-next');
 const prev=carousel.querySelector('.testimonial-prev');
 if(!track||!cards.length)return;
 let current=0;
 let interval=null;
 const go=(step)=>{
  current=(current+step+cards.length)%cards.length;
  track.scrollTo({left:cards[current].offsetLeft-track.offsetLeft,behavior:reducedMotion?'auto':'smooth'});
 };
 const stop=()=>{if(interval){clearInterval(interval);interval=null}};
 const start=()=>{stop();if(!reducedMotion&&cards.length>1&&!document.hidden)interval=setInterval(()=>go(1),4200)};
 next?.addEventListener('click',()=>{go(1);start()});
 prev?.addEventListener('click',()=>{go(-1);start()});
 carousel.addEventListener('mouseenter',stop);
 carousel.addEventListener('mouseleave',start);
 carousel.addEventListener('focusin',stop);
 carousel.addEventListener('focusout',start);
 const observer=new IntersectionObserver(entries=>{
  if(entries.some(entry=>entry.isIntersecting)){activateCarouselImages(carousel);observer.disconnect();}
 },{rootMargin:'250px'});
 observer.observe(carousel);
 track.addEventListener('scroll',()=>{
  const center=track.scrollLeft+track.clientWidth/2;
  let nearest=0,dist=Infinity;
  cards.forEach((card,i)=>{const d=Math.abs(card.offsetLeft+card.offsetWidth/2-center);if(d<dist){dist=d;nearest=i}});
  current=nearest;
 },{passive:true});
 start();
 document.addEventListener('visibilitychange',()=>document.hidden?stop():start());
});
