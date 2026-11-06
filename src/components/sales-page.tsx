import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Image as ImageIcon,
  Play,
  ShieldCheck,
  Star,
  Truck,
  Rocket,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type ProductMockup = {
  label: string;
  image?: string;
  className?: string;
};

const MOCKUPS: ProductMockup[] = [
  { label: "Mockup do curso principal" },
  { label: "Mockup do módulo bônus 1" },
  { label: "Mockup do módulo bônus 2" },
];

function MockupPlaceholder({ label, image, className }: ProductMockup) {
  return (
    <div
      className={cn(
        "relative group rounded-3xl border border-border bg-background overflow-hidden shadow-sm",
        className,
      )}
      style={{ aspectRatio: "3 / 4" }}
    >
      {image ? (
        <img src={image} alt={label} className="h-full w-full object-cover" />
      ) : (
        <div className="h-full w-full bg-muted flex flex-col items-center justify-center">
          <ImageIcon className="size-16 text-muted-foreground/40 mb-2" />
          <p className="text-muted-foreground text-sm font-medium">Insira seu mockup: {label}</p>
        </div>
      )}
      <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <button className="p-2 rounded-full bg-white/90 text-sales-primary hover:bg-white">
          <ImageIcon className="size-5" />
        </button>
      </div>
    </div>
  );
}

export default function SalesPage() {
  const ctaHref = "#checkout";

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-sales-accent selection:text-sales-accent-foreground">
      {/* Navbar */}
      <nav className="fixed z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="rounded-lg bg-sales-primary p-2">
                <Rocket className="size-5 text-sales-primary-foreground" />
              </div>
              <span className="font-bold text-lg tracking-tight">SeuProduto</span>
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
              <a href="#o-produto" className="hover:text-foreground transition-colors">
                O Produto
              </a>
              <a href="#modulos" className="hover:text-foreground transition-colors">
                Módulos
              </a>
              <a href="#bonus" className="hover:text-foreground transition-colors">
                Bônus
              </a>
              <a href="#garantia" className="hover:text-foreground transition-colors">
                Garantia
              </a>
              <a href="#faq" className="hover:text-foreground transition-colors">
                Perguntas
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Button asChild size="sm" variant="outline">
                <a href="#login">Entrar</a>
              </Button>
              <Button size="sm" asChild>
                <a href={ctaHref}>Comprar Agora</a>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold border border-sales-accent/20 bg-sales-accent/5 text-sales-accent">
                  <Star className="size-4" /> Lançamento
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                  Domine o <br />
                  <span className="text-sales-primary">mapa mental fluente</span>
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                  O método completo para criar mapas mentais que fixam o conteúdo, aceleram o
                  aprendizado e transformam sua produtividade — sem sobrecarga.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto" asChild>
                    <a href={ctaHref}>
                      Sim, quero garantir minha vaga <ArrowRight className="ml-2 size-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Ver currículo completo
                  </Button>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <Check className="size-5 text-emerald-500" />
                  <span>Acesso imediato por 1 ano</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <ShieldCheck className="size-5 text-emerald-500" />
                  <span>Garantia incondicional de 7 dias</span>
                </div>
              </div>

              <div className="relative">
                <MockupPlaceholder
                  label="Mockup do curso principal"
                  image={
                    "https://images.unsplash.com/photo-1544717305-278261891660?auto=format&fit=crop&w=800&q=80"
                  }
                />
                <div className="absolute -bottom-6 -left-6 flex -space-x-3">
                  {[0, 1, 2].map((i) => (
                    <MockupPlaceholder
                      key={i}
                      label={`Bônus ${i + 1}`}
                      image={
                        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=400&q=80"
                      }
                      className="w-24 h-32 rounded-2xl"
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problema / Solução */}
        <section id="o-produto" className="py-20 bg-sales-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                Você estuda muito, mas não lembra de nada
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Ler e reler não é aprendizado. O problema não é você — é o método. Sem um mapa
                visual, a informação some nos primeiros dias.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <Card className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-destructive/10 text-destructive">
                    <X className="size-6" />
                  </div>
                  <h3 className="font-bold text-lg">Sem direção</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Você consome conteúdo, anota tudo, mas não consegue conectar as ideias na hora que
                  precisa.
                </p>
              </Card>

              <Card className="p-8 border-sales-primary/30 bg-sales-primary/5">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-sales-primary text-sales-primary-foreground">
                    <Check className="size-6" />
                  </div>
                  <h3 className="font-bold text-lg text-sales-primary">Com mapa mental</h3>
                </div>
                <p className="text-foreground leading-relaxed">
                  Você organiza visualmente, fixa o conteúdo de verdade e acessa o que aprendeu em
                  segundos.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* O que está incluído */}
        <section id="modulos" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">
                  Tudo o que você vai receber
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Conteúdo direto ao ponto, pronto para aplicar.
                </p>
              </div>
              <a
                href="#currículo"
                className="text-sm font-medium text-sales-primary hover:underline"
              >
                Ver currículo completo
              </a>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "Módulo 1",
                  subtitle: "Fundamentos do mapa mental",
                  items: [
                    "Como o cérebro armazena informação visual",
                    "Regras de ouro para mapas que funcionam",
                    "Ferramentas recomendadas (gratuitas)",
                  ],
                },
                {
                  title: "Módulo 2",
                  subtitle: "Técnicas avançadas",
                  items: [
                    "Hierarquia de informações",
                    "Cores, ícones e conexões",
                    "Mapas para estudos e negócios",
                  ],
                },
                {
                  title: "Módulo 3",
                  subtitle: "Aplicação na prática",
                  items: [
                    "Mapa para memorização de longo prazo",
                    "Planejamento de projetos e metas",
                    "Revisão espaciada com mapas",
                  ],
                },
              ].map((modulo, i) => (
                <Card key={i} className="flex flex-col h-full group">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <span className="text-sales-accent font-bold">{modulo.title}</span>
                      <ChevronRight className="size-4 text-muted-foreground/50 group-hover:text-sales-accent transition-colors" />
                    </div>
                    <CardTitle className="text-lg">{modulo.subtitle}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {modulo.items.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <Check className="size-4 shrink-0 mt-0.5 text-emerald-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Bônus */}
        <section id="bonus" className="py-20 bg-sales-bg">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">Bônus exclusivos</h2>
              <p className="mt-2 text-lg text-muted-foreground">
                Leve estes materiais para acelerar ainda mais seus resultados.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[...Array(3)].map((_, i) => (
                <Card key={i} className="flex flex-col h-full border-sales-accent/20">
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-sales-accent font-bold">Bônus {i + 1}</span>
                      <Rocket className="size-4 text-sales-accent" />
                    </div>
                    <CardTitle>Título do bônus {i + 1}</CardTitle>
                    <CardDescription>
                      Descrição curta do material bônus e como ele ajuda.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <MockupPlaceholder
                      label={`Mockup do bônus ${i + 1}`}
                      image={
                        "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
                      }
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Prova social */}
        <section className="py-20 border-y border-border">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">O que estão dizendo</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  name: "Ana S.",
                  role: "Estudante",
                  text: "Finalmente consegui organizar meus estudos e realmente lembro do conteúdo na prova.",
                },
                {
                  name: "Carlos M.",
                  role: "Empreendedor",
                  text: "Usei os mapas para planejar meu negócio e economizei semanas de trabalho.",
                },
                {
                  name: "Fernanda L.",
                  role: "Professora",
                  text: "Meus alunos entenderam conteúdos complexos muito mais rápido com os mapas mentais.",
                },
              ].map((depoimento, i) => (
                <Card key={i} className="p-8">
                  <div className="flex items-center gap-1 text-yellow-400 mb-4">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="size-5 fill-yellow-400" />
                    ))}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">"{depoimento.text}"</p>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center overflow-hidden">
                      <ImageIcon className="size-6 text-muted-foreground/40" />
                    </div>
                    <div>
                      <div className="font-semibold">{depoimento.name}</div>
                      <div className="text-xs text-muted-foreground">{depoimento.role}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Garantia */}
        <section id="garantia" className="py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sales-primary text-sales-primary-foreground text-xs font-bold uppercase tracking-wider mb-6">
                <ShieldCheck className="size-4" />
                Risco zero
              </div>
              <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
                Garantia incondicional de 7 dias
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-10">
                Experimente o conteúdo por 7 dias. Se não sentir que seu aprendizado mudou, é só
                pedir o reembolso — sem perguntas e sem letras miúdas.
              </p>
              <div className="grid md:grid-cols-2 gap-4 justify-center">
                <Card className="p-6 text-center">
                  <Truck className="size-5 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Acesso imediato</p>
                </Card>
                <Card className="p-6 text-center border-l-0">
                  <ShieldCheck className="size-5 text-emerald-500 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Reembolso simples</p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-sales-bg">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-center mb-12">
              Perguntas frequentes
            </h2>
            <Accordion type="multiple" className="space-y-3">
              {[
                {
                  q: "Para quem é este curso?",
                  a: "Para quem quer aprender mais rápido, organizar conteúdos complexos e ter um método visual que realmente funciona.",
                },
                {
                  q: "Preciso saber desenhar?",
                  a: "Não. Os mapas mentais usam estrutura, não habilidade artística. Você vai aprender do zero.",
                },
                {
                  q: "Por quanto tempo terei acesso?",
                  a: "O acesso é por 1 ano, com atualizações incluídas no período.",
                },
                {
                  q: "Posso assistir no celular?",
                  a: "Sim. A plataforma é responsiva e funciona em celular, tablet e computador.",
                },
              ].map((item, i) => (
                <AccordionItem key={i} value={`item-${i}`}>
                  <AccordionTrigger className="text-lg font-medium">{item.q}</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA final */}
        <section className="py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Card className="p-8 md:p-12 text-center bg-sales-primary text-sales-primary-foreground rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
              <div className="relative z-10 space-y-6">
                <h2 className="text-3xl lg:text-5xl font-bold">Pronto para aprender de verdade?</h2>
                <p className="text-lg text-sales-primary/90 max-w-xl mx-auto leading-relaxed">
                  Garanta sua vaga agora com desconto de lançamento e comece hoje mesmo.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto bg-sales-accent text-sales-accent-foreground hover:bg-sales-accent/90"
                    asChild
                  >
                    <a href={ctaHref}>
                      Quero garantir minha vaga <ArrowRight className="ml-2 size-5" />
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="w-full sm:w-auto">
                    Preciso de mais informações
                  </Button>
                </div>
                <div className="text-xs text-sales-primary/80">
                  Oferta por tempo limitado • Garantia de 7 dias
                </div>
              </div>
            </Card>
          </div>
        </section>
      </main>

      <footer className="border-t border-border bg-background py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="rounded-lg bg-sales-primary p-2">
              <Rocket className="size-5 text-sales-primary-foreground" />
            </div>
            <span className="font-bold text-lg tracking-tight">SeuProduto</span>
          </div>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} SeuProduto. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}
