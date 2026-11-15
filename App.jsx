import { Children, cloneElement, useEffect, useRef, useState } from 'react';
import { AlertTriangle, ArrowLeft, ArrowRight, BadgeCheck, BookOpen, Brain, Check, ChevronLeft, ChevronRight, Clock3, CreditCard, FileCheck2, FileQuestion, Gift, Layers3, ListChecks, Mail, MonitorSmartphone, SearchCheck, ShieldCheck, Zap } from 'lucide-react';
import { content } from './content.js';
import { comercial } from './comercial.js';

const painIcons = [FileQuestion, AlertTriangle, Brain, Clock3, Layers3, MonitorSmartphone];
const mechanismIcons = [SearchCheck, BookOpen, AlertTriangle, ListChecks];

function CTA({ label = 'QUIERO ACCEDER AHORA', href = '#oferta' }) {
  return <a className="btn" href={href}>{label}<span aria-hidden="true">→</span></a>;
}

function SectionTitle({ children, lead }) {
  return <header className="section-title"><h2>{children}</h2>{lead && <p>{lead}</p>}</header>;
}

function ProductComposition({ compact = false }) {
  return <div className={`product-shot${compact ? ' product-shot--compact' : ''}`}>
    <img src="./assets/produto.webp" alt="Inglés Mapeado: guía visual y bonos"  loading={compact ? 'lazy' : undefined} fetchPriority={compact ? undefined : 'high'} />
  </div>;
}

function ScrollRail({ children, label, className = '', auto = false, interval = 2800 }) {
  const ref = useRef(null);
  const pausedRef = useRef(false);
  const visibleRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const normalizeTimerRef = useRef(null);
  const items = Children.toArray(children);
  const renderedItems = auto
    ? [...items, ...items.map((child, index) => cloneElement(child, { key: `loop-${index}`, 'aria-hidden': true }))]
    : items;

  const cycleWidth = () => {
    const rail = ref.current;
    if (!rail || rail.children.length <= items.length) return 0;
    return rail.children[items.length].offsetLeft - rail.children[0].offsetLeft;
  };

  const normalize = () => {
    const rail = ref.current;
    const width = cycleWidth();
    if (!rail || !width || rail.scrollLeft < width - 2) return;
    const snap = rail.style.scrollSnapType;
    rail.style.scrollSnapType = 'none';
    rail.style.scrollBehavior = 'auto';
    rail.scrollLeft -= width;
    requestAnimationFrame(() => { rail.style.scrollSnapType = snap; rail.style.scrollBehavior = ''; });
  };

  const pauseTemporarily = () => {
    pausedRef.current = true;
    window.clearTimeout(resumeTimerRef.current);
    resumeTimerRef.current = window.setTimeout(() => { pausedRef.current = false; }, 4200);
  };

  const scheduleNormalize = () => {
    window.clearTimeout(normalizeTimerRef.current);
    normalizeTimerRef.current = window.setTimeout(normalize, 1400);
  };

  const move = direction => {
    const rail = ref.current;
    if (!rail) return;
    pauseTemporarily();
    const width = cycleWidth();
    if (direction < 0 && width && rail.scrollLeft <= 2) rail.scrollLeft = width;
    rail.scrollBy({ left: direction * rail.clientWidth * .82, behavior: 'smooth' });
    scheduleNormalize();
  };

  useEffect(() => {
    if (!auto || !ref.current) return undefined;
    const rail = ref.current;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const observer = new IntersectionObserver(([entry]) => { visibleRef.current = entry.isIntersecting; }, { threshold: .18 });
    observer.observe(rail);
    const onScrollEnd = () => normalize();
    rail.addEventListener('scrollend', onScrollEnd);
    const timer = window.setInterval(() => {
      if (reduceMotion.matches || pausedRef.current || !visibleRef.current || document.hidden) return;
      const firstItem = rail.children[0];
      const secondItem = rail.children[1];
      const step = secondItem ? secondItem.offsetLeft - firstItem.offsetLeft : rail.clientWidth * .82;
      rail.scrollBy({ left: step, behavior: 'smooth' });
      scheduleNormalize();
    }, interval);
    return () => {
      observer.disconnect();
      rail.removeEventListener('scrollend', onScrollEnd);
      window.clearInterval(timer);
      window.clearTimeout(resumeTimerRef.current);
      window.clearTimeout(normalizeTimerRef.current);
    };
  }, [auto, interval, items.length]);

  return <div className={`rail-stage ${className}`}>
    <button type="button" className="rail-arrow rail-arrow--left" onClick={() => move(-1)} aria-label={`Ver anteriores en ${label}`}><ChevronLeft /></button>
    <div
      className={`rail${auto ? ' rail--loop' : ''}`}
      ref={ref}
      tabIndex="0"
      aria-label={label}
      onMouseEnter={() => { pausedRef.current = true; }}
      onMouseLeave={() => { pausedRef.current = false; }}
      onFocus={() => { pausedRef.current = true; }}
      onBlur={() => { pausedRef.current = false; }}
      onPointerDown={() => { pausedRef.current = true; }}
      onPointerUp={pauseTemporarily}
      onTouchEnd={pauseTemporarily}
    >{renderedItems}</div>
    <button type="button" className="rail-arrow rail-arrow--right" onClick={() => move(1)} aria-label={`Ver siguientes en ${label}`}><ChevronRight /></button>
  </div>;
}

function useMidnightCountdown() {
  const calculate = () => {
    const now = new Date();
    const end = new Date(now);
    end.setHours(23, 59, 59, 999);
    const seconds = Math.max(0, Math.floor((end - now) / 1000));
    return [Math.floor(seconds / 3600), Math.floor((seconds % 3600) / 60), seconds % 60].map(value => String(value).padStart(2, '0')).join(':');
  };
  const [time, setTime] = useState(calculate);
  useEffect(() => {
    const timer = window.setInterval(() => setTime(calculate()), 1000);
    return () => window.clearInterval(timer);
  }, []);
  return time;
}

export default function App() {
  const countdown = useMidnightCountdown();

  return <>
    <div className="offer-bar"><Zap size={14} aria-hidden="true" />{content.offerBar}</div>
    <main>
      <section className="hero"><div className="content content--860 hero-flow">
        <p className="hero-pill"><span aria-hidden="true" />{content.hero.badge}</p>
        <h1>{content.hero.titleBefore}<em>{content.hero.titleEmphasis}</em>{content.hero.titleAfter}</h1>
        <div className="hero-media"><img className="hero-mockup" src="./assets/hero-mockup.webp" alt="Páginas reales de Inglés Mapeado" width="1524" height="815" fetchPriority="high" /></div>
        <p className="hero-sub">{content.hero.subtitle.map(([text, emphasis], index) => emphasis ? <strong key={index}>{text}</strong> : <span key={index}>{text}</span>)}</p>
        <ul className="hero-bullets">{content.hero.bullets.map(item => <li key={item}><Check size={20}/><span>{item}</span></li>)}</ul>
        <CTA label="QUIERO VER EL MATERIAL" href="#previas" />
        <p className="amplitude-line">{content.hero.amplitude}</p>
      </div></section>

      <section className="section pain"><div className="content content--880 section-flow">
        <SectionTitle>{content.pain.title}<br/>{content.pain.emphasis}</SectionTitle>
        <div className="ornament" aria-hidden="true"><span /></div>
        <div className="pain-grid">{content.pains.map((item,index)=>{const Icon=painIcons[index];return <div className="pain-chip" key={item}><Icon size={18}/><span>{item}</span></div>})}</div>
        <p className="bridge">{content.pain.bridge.map(([text, emphasis], index) => emphasis ? <strong key={index}>{text}</strong> : <span key={index}>{text}</span>)}</p>
      </div></section>

      <section className="section section--tint gallery" id="previas"><div className="content content--1180 section-flow">
        <SectionTitle>Mira el material<br/>que vas a recibir</SectionTitle>
        <ScrollRail label="Páginas reales del material" className="gallery-rail" auto interval={2400}>{content.gallery.map(([src,title])=><figure className="gallery-card" key={title}><img src={src} alt={`${title} — página real`} loading="lazy"/></figure>)}</ScrollRail>
      </div></section>

      <section className="section topics"><div className="content content--1120 section-flow">
        <header className="section-title"><p className="eyebrow-small">{content.topicsSection.eyebrow}</p><h2>{content.topicsSection.title}</h2><p>{content.topicsSection.lead}</p></header>
        <div className="topics-grid">{content.topics.map(([group,items])=><article key={group}><h3>{group}<span>{items.length}</span></h3><ul>{items.map(item=><li key={item}><Check size={16}/><span>{item}</span></li>)}</ul></article>)}</div>
        <p className="topics-note"><BadgeCheck size={20}/><span><strong>Cada página trae un ejercicio con respuestas:</strong> practicas y te corriges sin profesor.</span></p>
        <CTA/>
      </div></section>

      <section className="section mechanism"><div className="content content--1120 section-flow">
        <SectionTitle>Cómo funciona cada página del material:</SectionTitle>
        <div className="mechanism-grid">{content.mechanism.map(([title,text],index)=>{const Icon=mechanismIcons[index];return <article key={title}><span className="mechanism-icon"><Icon size={25}/></span><h3>{title}</h3><p>{text}</p></article>})}</div>
        <p className="mechanism-close">{content.mechanismClose}</p><CTA/>
      </div></section>

      <section className="section mid-pitch"><div className="content content--1040 mid-pitch-grid">
        <div className="mid-pitch-media mid-pitch-media--generated"><img src="./assets/pagina-01.webp" alt="Portada de Inglés Mapeado" loading="lazy" /></div>
        <div className="mid-pitch-copy"><h2>¿Cuántas veces empezaste a estudiar inglés y lo dejaste por falta de claridad?</h2><p>Con los mapas, cada tema está organizado en una sola página: estructura, ejemplos, traducción y ejercicio. Abres, entiendes y practicas.</p><CTA /></div>
      </div></section>

      <section className="section audiences"><div className="content content--1040 section-flow">
        <SectionTitle>Este material es para ti si…</SectionTitle>
        <div className="audience-grid">{content.audiences.map(([title,text])=><article key={title}><span><Check size={17}/></span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </div></section>

      <section className="section section--tint receive"><div className="content content--1000 section-flow">
        <SectionTitle>Todo lo que necesitas para aprender inglés de forma visual, en un solo acceso.</SectionTitle>
        <div className="receive-media"><ProductComposition compact /></div>
        <article className="receive-card"><p className="access-badge">✦ 60 PÁGINAS VISUALES + {content.bonuses.length} BONOS</p><h3>Inglés Mapeado</h3><p>{content.benefitsSection.summary}</p><ul>{content.benefits.map(item=><li key={item}><Check size={20}/><span>{item}</span></li>)}</ul></article>
      </div></section>

      <section className="section bonuses"><div className="content content--980 section-flow">
        <header className="bonus-intro"><p>Y NO TERMINA AHÍ...</p><h2>TAMBIÉN VAS A RECIBIR</h2><span><Gift size={17}/>{content.bonuses.length} BONOS EXCLUSIVOS</span></header>
        <div className="bonus-grid">{content.bonuses.map((bonus)=><article className="bonus-card" key={bonus.title}>
          <div className="bonus-card-top"><p className="bonus-num">{bonus.number}</p><div className="bonus-art bonus-art--mock"><img src={bonus.image} alt={bonus.title} loading="lazy"/></div></div>
          <div className="bonus-card-body"><h3>{bonus.title}</h3><p>{bonus.text}</p><div className="bonus-gain"><Check size={18}/><span>{bonus.gain}</span></div><div className="bonus-price"><s>{bonus.value}</s><strong>GRATIS HOY</strong></div></div>
        </article>)}</div>
      </div></section>

      <section className="section offer" id="oferta"><div className="content content--720 section-flow">
        <p className="countdown"><Clock3 size={18}/> LA OFERTA TERMINA EN <strong>{countdown}</strong></p>
        <SectionTitle>Todo lo que se libera para ti hoy</SectionTitle>
        <div className="value-stack" aria-label="Composición del valor de la oferta">
          <p>LO QUE RECIBES HOY</p>
          <ul>{comercial.valueStack.map(([item,value])=><li key={item}><span>{item}</span><s>{value}</s></li>)}</ul>
          <div><strong>VALOR NORMAL DEL PAQUETE</strong><s>{comercial.anchorPrice}</s></div>
        </div>
        <article className="plan-card" id="checkout">
          <p className="plan-badge">GUÍA + {content.bonuses.length} BONOS</p>
          <p className="plan-kicker">KIT COMPLETO • EL MÁS ELEGIDO</p><h3>Inglés Mapeado</h3>
          <div className="plan-mockup"><ProductComposition compact /></div>
          <ul>{content.included.map(item=>{const anchoredValue=comercial.valueStack.find(([label])=>label===item||label.endsWith(item))?.[1];return <li key={item}><Check size={20}/><span>{item}</span>{anchoredValue && <s>{anchoredValue}</s>}</li>})}</ul>
          <div className="price"><small>De <s>{comercial.anchorPrice}</s> por solo</small><strong>{comercial.price}</strong>{comercial.installments && <span>{comercial.installments}</span>}</div>
          <CTA href={comercial.checkoutUrl}/><div className="payment-trust"><span><ShieldCheck size={18}/>Compra protegida</span><span><BadgeCheck size={18}/>Garantía de 7 días</span><span><Zap size={18}/>Acceso inmediato</span></div>
        </article>
        
        <p className="offer-close">{content.offer.noTrick}</p>
      </div></section>

      <section className="section purchase-safety"><div className="content content--1000 safety-layout">
        <article className="guarantee-card"><ShieldCheck size={54}/><h2>Garantía incondicional de 7 días</h2><p>{comercial.guarantee}</p></article>
        <div className="safety-cards"><article><CreditCard size={30}/><div><h3>Pago 100% seguro</h3><p>Procesado por una plataforma de pago con cifrado. Tus datos no quedan con nosotros.</p></div></article><article><FileCheck2 size={30}/><div><h3>Material con páginas reales</h3><p>Las páginas que ves aquí son las mismas que recibes en el material.</p></div></article></div>
      </div></section>

      <section className="section section--tint access-steps"><div className="content content--980 section-flow">
        <SectionTitle>Cómo funciona después del pago</SectionTitle>
        <div className="steps-grid"><article><span>1</span><CreditCard/><h3>Asegura tu acceso</h3><p>Pago único y seguro.</p></article><article><span>2</span><Mail/><h3>Recíbelo en tu correo</h3><p>{comercial.access}</p></article><article><span>3</span><MonitorSmartphone/><h3>Abre y aprende</h3><p>En el celular, en la computadora o impreso.</p></article></div>
        <CTA />
      </div></section>

      

      <section className="section faq"><div className="content content--780 section-flow"><SectionTitle>Preguntas frecuentes</SectionTitle><div className="faq-list">{content.faqs.filter(([,answer])=>!answer.startsWith('[') && !answer.includes('[E-MAIL')).map(([question,answer])=><details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div></div></section>

      <section className="closing"><div className="content content--780 closing-inner"><p>{content.closing.eyebrow}</p><h2>{content.closing.titleBefore}<em>{content.closing.titleEmphasis}</em>{content.closing.titleAfter}</h2><CTA/><small>Material digital. Pago único. Garantía de 7 días.</small></div></section>
    </main>
    <footer className="footer"><div className="footer-inner"><p className="footer-legal">Este sitio no está afiliado a Facebook ni a Meta. Los resultados dependen de la práctica de cada persona.</p><nav><a href="https://mapa.fluentecomlegenda.com/termos">Términos de uso</a></nav></div></footer>
  </>;
}
